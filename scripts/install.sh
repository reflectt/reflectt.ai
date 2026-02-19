#!/usr/bin/env bash
set -euo pipefail

# reflectt.ai/install.sh
# Contract: install/bootstrap reflectt-node (NOT OpenClaw runtime implementation)
# OpenClaw is a prerequisite. If missing, install via official docs, then rerun.

OPENCLAW_INSTALL_URL="${OPENCLAW_INSTALL_URL:-https://openclaw.ai/install.sh}"
REFLECTT_NODE_REPO="${REFLECTT_NODE_REPO:-https://github.com/reflectt/reflectt-node.git}"
REFLECTT_NODE_DIR="${REFLECTT_NODE_DIR:-$HOME/.reflectt/reflectt-node}"
REFLECTT_NODE_BRANCH="${REFLECTT_NODE_BRANCH:-main}"
REFLECTT_NODE_PORT="${REFLECTT_NODE_PORT:-4445}"
REFLECTT_NODE_PID_FILE="${REFLECTT_NODE_PID_FILE:-$HOME/.reflectt/reflectt-node.pid}"

info() { echo "INFO: $*"; }
ok() { echo "OK: $*"; }
err() { echo "ERROR: $*" >&2; }

fail() {
  err "$1"
  exit 1
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fail "Missing required dependency: $1"
}

wait_for_health() {
  local tries=20
  local url="http://127.0.0.1:${REFLECTT_NODE_PORT}/health"
  for _ in $(seq 1 "$tries"); do
    if curl -fsS "$url" | grep -q '"status":"ok"'; then
      return 0
    fi
    sleep 1
  done
  return 1
}

verify_team_endpoints() {
  local base="http://127.0.0.1:${REFLECTT_NODE_PORT}"

  if command -v jq >/dev/null 2>&1; then
    curl -fsS "$base/health" | jq -e '.status=="ok"' >/dev/null || return 1
  else
    curl -fsS "$base/health" | grep -q '"status":"ok"' || return 1
  fi

  curl -fsS "$base/health/agents" >/dev/null || return 1
  curl -fsS "$base/tasks?limit=1" >/dev/null || return 1
}

info "Starting Reflectt node bootstrap installer."

for dep in bash curl git node npm; do
  need_cmd "$dep"
done

# OpenClaw prerequisite: do NOT install here; fail with explicit guidance
if ! command -v openclaw >/dev/null 2>&1; then
  fail "OpenClaw prerequisite missing. Install OpenClaw via official docs (${OPENCLAW_INSTALL_URL}), then rerun this bootstrap."
fi

ok "OpenClaw prerequisite satisfied: $(command -v openclaw)"

mkdir -p "$(dirname "$REFLECTT_NODE_DIR")"

if [ -d "$REFLECTT_NODE_DIR/.git" ]; then
  info "Updating existing reflectt-node checkout at $REFLECTT_NODE_DIR"
  git -C "$REFLECTT_NODE_DIR" fetch origin
  git -C "$REFLECTT_NODE_DIR" checkout "$REFLECTT_NODE_BRANCH"
  git -C "$REFLECTT_NODE_DIR" pull --ff-only origin "$REFLECTT_NODE_BRANCH"
else
  info "Cloning reflectt-node into $REFLECTT_NODE_DIR"
  rm -rf "$REFLECTT_NODE_DIR"
  git clone --branch "$REFLECTT_NODE_BRANCH" "$REFLECTT_NODE_REPO" "$REFLECTT_NODE_DIR"
fi

info "Installing dependencies"
npm --prefix "$REFLECTT_NODE_DIR" install

info "Building reflectt-node"
npm --prefix "$REFLECTT_NODE_DIR" run build

# Start (or restart) runtime for health verification
if [ -f "$REFLECTT_NODE_PID_FILE" ]; then
  old_pid="$(cat "$REFLECTT_NODE_PID_FILE" || true)"
  if [ -n "${old_pid}" ] && kill -0 "$old_pid" 2>/dev/null; then
    info "Stopping previous reflectt-node process: $old_pid"
    kill "$old_pid" || true
    sleep 1
  fi
fi

info "Starting reflectt-node on port ${REFLECTT_NODE_PORT}"
nohup env PORT="$REFLECTT_NODE_PORT" NODE_ENV=production node "$REFLECTT_NODE_DIR/dist/index.js" >/tmp/reflectt-node-install.log 2>&1 &
new_pid=$!
echo "$new_pid" > "$REFLECTT_NODE_PID_FILE"

if ! wait_for_health; then
  tail -n 40 /tmp/reflectt-node-install.log || true
  fail "reflectt-node health check failed at http://127.0.0.1:${REFLECTT_NODE_PORT}/health"
fi

if ! verify_team_endpoints; then
  tail -n 40 /tmp/reflectt-node-install.log || true
  fail "reflectt-node API checks failed (/health, /health/agents, /tasks?limit=1)"
fi

ok "reflectt-node is running"
ok "API reachable on :${REFLECTT_NODE_PORT}"
ok "team endpoints responding"
ok "Verify manually:"
ok "  curl -fsS http://127.0.0.1:${REFLECTT_NODE_PORT}/health | jq -e '.status==\"ok\"'"
ok "  curl -fsS http://127.0.0.1:${REFLECTT_NODE_PORT}/health/agents >/dev/null"
ok "  curl -fsS http://127.0.0.1:${REFLECTT_NODE_PORT}/tasks?limit=1 >/dev/null"
