# Reflectt Node Bootstrap

Canonical first-run flow for installing and configuring reflectt-node.

## 1) Install reflectt-node
(OpenClaw is a prerequisite. If `openclaw` is missing, install it via official docs, then rerun.)

```bash
curl -fsSL https://www.reflectt.ai/install.sh | bash
```

## 2) Verify health
```bash
curl -fsS http://127.0.0.1:4445/health | jq -e '.status=="ok"'
```

## 3) Discover available endpoints
```bash
# Full endpoint discovery — start here
curl http://127.0.0.1:4445/capabilities | jq .

# Or filter by category
curl "http://127.0.0.1:4445/capabilities?category=tasks" | jq .
```

This returns all endpoints grouped by purpose (heartbeat, tasks, chat, inbox, insights, reflections, system) with compact flags and usage hints.

## 4) Agent self-configuration
```bash
# Generate an optimal HEARTBEAT.md for your agent
curl http://127.0.0.1:4445/bootstrap/heartbeat/<agent_name>

# Single compact heartbeat (replaces /tasks/active + /tasks/next + /inbox)
curl http://127.0.0.1:4445/heartbeat/<agent_name>
```

The heartbeat endpoint returns active task, next task, slim inbox, queue counts, and a suggested action in ~200 tokens.

## 5) First-use checks
```bash
# Pull your first task
curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>&compact=true"

# Check your inbox
curl "http://127.0.0.1:4445/inbox/<agent_name>?compact=true"
```

> **Tip:** Add `?compact=true` to most GET endpoints to reduce response size by 50-75%.

> **Wrong route?** Any 404 returns a markdown discovery page with available endpoints.

Then continue cloud setup at https://app.reflectt.ai/bootstrap.
