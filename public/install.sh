#!/usr/bin/env bash
set -euo pipefail

# reflectt.ai/install.sh
# Contract: install/bootstrap reflectt-node (NOT OpenClaw runtime implementation)
# If OpenClaw is missing, call official OpenClaw installer path.

OPENCLAW_INSTALL_URL="${OPENCLAW_INSTALL_URL:-https://openclaw.ai/install.sh}"
REFLECTT_NODE_REPO="${REFLECTT_NODE_REPO:-https://github.com/reflectt/reflectt-node.git}"
REFLECTT_NODE_DIR="${REFLECTT_NODE_DIR:-$HOME/.reflectt/reflectt-node}"
REFLECTT_NODE_BRANCH="${REFLECTT_NODE_BRANCH:-main}"
REFLECTT_NODE_PORT="${REFLECTT_NODE_PORT:-4445}"
REFLECTT_NODE_PID_FILE="${REFLECTT_NODE_PID_FILE:-$HOME/.reflectt/reflectt-node.pid}"

info() { echo "INFO: $*"; }
ok() { echo "OK: $*"; }
warn() { echo "WARN: $*"; }
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

info "Starting Reflectt node bootstrap installer."

for dep in bash curl git node npm; do
  need_cmd "$dep"
done

# OpenClaw prerequisite: do NOT reimplement install logic here
if ! command -v openclaw >/dev/null 2>&1; then
  warn "openclaw not found. Calling official OpenClaw installer: ${OPENCLAW_INSTALL_URL}"
  curl -fsSL "$OPENCLAW_INSTALL_URL" | bash || fail "Official OpenClaw install command failed"
  command -v openclaw >/dev/null 2>&1 || fail "OpenClaw still missing after official installer ran"
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

ok "reflectt-node is configured and healthy."
ok "Health: http://127.0.0.1:${REFLECTT_NODE_PORT}/health"
ok "Next: curl -s http://127.0.0.1:${REFLECTT_NODE_PORT}/health | jq"
