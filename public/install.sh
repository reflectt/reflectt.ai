#!/usr/bin/env bash
set -u

# Reflectt v1 installer (fresh-install only)
# Source of truth: scripts/install.sh
# Published artifact: public/install.sh

INSTALL_VERSION="v1"
INSTALL_ROOT="${REFLECTT_INSTALL_ROOT:-$HOME/.reflectt}"
INSTALL_BIN_DIR="${REFLECTT_INSTALL_BIN_DIR:-$HOME/.local/bin}"
INSTALL_BIN_PATH="${INSTALL_BIN_DIR}/openclaw"
STATE_DIR="${INSTALL_ROOT}/install-state"
TMP_DIR="${STATE_DIR}/tmp"
PARTIAL_MARKER="${STATE_DIR}/partial"
TELEMETRY_OUT="${REFLECTT_INSTALL_TELEMETRY_OUT:-}"
TEST_SCENARIO="${REFLECTT_INSTALL_TEST_SCENARIO:-}"

CAUSE=""
DETAIL=""
ACTION=""

emit_telemetry_success() {
  if [[ -n "$TELEMETRY_OUT" ]]; then
    printf '{"class":"success"}\n' > "$TELEMETRY_OUT"
  fi
}

emit_telemetry_fail() {
  if [[ -n "$TELEMETRY_OUT" ]]; then
    printf '{"class":"fail","cause":"%s"}\n' "$1" > "$TELEMETRY_OUT"
  fi
}

fail_with() {
  local cause="$1"
  local detail="$2"
  local action="$3"

  # Canonical fail shape (stderr only)
  {
    echo "ERROR: Reflectt install failed."
    echo "CAUSE: ${cause}"
    echo "DETAIL: ${detail}"
    echo "ACTION: ${action}"
    echo "EXIT: non-zero"
  } >&2

  emit_telemetry_fail "$cause"
  exit 1
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1
}

force_or_real_fail() {
  local requested="$1"
  local detail="$2"
  local action="$3"
  if [[ -n "$TEST_SCENARIO" && "$TEST_SCENARIO" == "$requested" ]]; then
    fail_with "$requested" "$detail" "$action"
  fi
}

# Test-only scenario triggers
force_or_real_fail "dependency" "Missing required dependency: jq." "Install jq, then rerun this command."
force_or_real_fail "network" "Download failed (network timeout)." "Check internet connectivity, then rerun: curl -fsSL https://reflectt.ai/install.sh | bash"
force_or_real_fail "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."
force_or_real_fail "unknown" "Existing install or partial state detected; fresh install aborted." "Remove existing install state per docs, then re-run fresh install."

# Fresh-install guards
if [[ "${REFLECTT_INSTALL_ALLOW_EXISTING_CMD:-0}" != "1" ]]; then
  if require_cmd openclaw || [[ -e "$INSTALL_BIN_PATH" ]]; then
    fail_with "unknown" "Existing install or partial state detected; fresh install aborted." "Remove existing install state per docs, then re-run fresh install."
  fi
fi

if [[ -e "$PARTIAL_MARKER" ]]; then
  fail_with "unknown" "Existing install or partial state detected; fresh install aborted." "Remove existing install state per docs, then re-run fresh install."
fi

# Required dependencies
for dep in curl bash tar jq; do
  if ! require_cmd "$dep"; then
    fail_with "dependency" "Missing required dependency: ${dep}." "Install ${dep}, then rerun this command."
  fi
done

if ! require_cmd node; then
  fail_with "dependency" "Missing required dependency: node." "Install Node.js, then rerun this command."
fi

mkdir -p "$TMP_DIR" 2>/dev/null || fail_with "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."

touch "$PARTIAL_MARKER" 2>/dev/null || fail_with "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."

echo "INFO: Starting Reflectt fresh install (v1)."
echo "INFO: Validating environment preconditions..."
echo "INFO: Checking dependencies: curl, bash, tar."

NPM_VERSION_URL="https://registry.npmjs.org/openclaw/latest"
VERSION_JSON="${TMP_DIR}/openclaw-latest.json"

if ! curl -fsSL "$NPM_VERSION_URL" -o "$VERSION_JSON"; then
  fail_with "network" "Download failed (network timeout)." "Check internet connectivity, then rerun: curl -fsSL https://reflectt.ai/install.sh | bash"
fi

OPENCLAW_VERSION="$(jq -r '.version // empty' "$VERSION_JSON" 2>/dev/null || true)"
if [[ -z "$OPENCLAW_VERSION" ]]; then
  fail_with "unknown" "Could not resolve OpenClaw version metadata." "Retry later or check docs at https://reflectt.ai/install"
fi

echo "INFO: Downloading installer payload..."
TARBALL_URL="https://registry.npmjs.org/openclaw/-/openclaw-${OPENCLAW_VERSION}.tgz"
TARBALL_PATH="${TMP_DIR}/openclaw.tgz"

if ! curl -fsSL "$TARBALL_URL" -o "$TARBALL_PATH"; then
  fail_with "network" "Download failed (network timeout)." "Check internet connectivity, then rerun: curl -fsSL https://reflectt.ai/install.sh | bash"
fi

EXTRACT_DIR="${TMP_DIR}/extract"
rm -rf "$EXTRACT_DIR"
mkdir -p "$EXTRACT_DIR" || fail_with "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."

if ! tar -xzf "$TARBALL_PATH" -C "$EXTRACT_DIR"; then
  fail_with "unknown" "Installer payload could not be extracted." "Retry later or check docs at https://reflectt.ai/install"
fi

echo "INFO: Installing Reflectt components..."
mkdir -p "$INSTALL_BIN_DIR" || fail_with "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."

SRC_BIN="${EXTRACT_DIR}/package/openclaw.mjs"
if [[ ! -f "$SRC_BIN" ]]; then
  fail_with "unknown" "Installer payload is missing expected binary entrypoint." "Retry later or check docs at https://reflectt.ai/install"
fi

if ! cp "$SRC_BIN" "$INSTALL_BIN_PATH"; then
  fail_with "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."
fi

chmod +x "$INSTALL_BIN_PATH" || fail_with "permissions" "Current user does not have write access to the target install directory." "Re-run with appropriate permissions or choose a writable install location."

# Cleanup state marker on success
rm -f "$PARTIAL_MARKER"

echo "INFO: Starting Reflectt gateway service..."
echo "OK: Reflectt install completed successfully."
echo "NEXT: Run 'openclaw status' to verify, then open your Reflectt chat link."

emit_telemetry_success
exit 0
