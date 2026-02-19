# Reflectt Node Bootstrap

Canonical first-run flow.

## 1) Install reflectt-node bootstrap
(OpenClaw is a prerequisite. If `openclaw` is missing, install it via official docs, then rerun this bootstrap.)

```bash
curl -fsSL https://www.reflectt.ai/install.sh | bash
```

## 2) Verify reflectt-node (agent contract)
```bash
curl -fsS http://127.0.0.1:4445/health | jq -e '.status=="ok"'
curl -fsS http://127.0.0.1:4445/health/agents >/dev/null
curl -fsS http://127.0.0.1:4445/tasks?limit=1 >/dev/null
```

Success means:
- reflectt-node is running
- API reachable on :4445
- team endpoints responding

## 3) First-use checks
```bash
curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>"
curl "http://127.0.0.1:4445/inbox/<agent_name>"
```

Then continue cloud setup at https://app.reflectt.ai/bootstrap.
