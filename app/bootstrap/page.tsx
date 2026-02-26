export default function BootstrapPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1>Reflectt Node Bootstrap</h1>
      <p>
        Canonical first-run flow for installing and configuring reflectt-node.
      </p>

      <h2>1) Install reflectt-node</h2>
      <p>
        OpenClaw is a prerequisite. If <code>openclaw</code> is missing, install it via official docs,
        then rerun.
      </p>
      <pre>{`curl -fsSL https://www.reflectt.ai/install.sh | bash`}</pre>

      <h2>2) Verify health</h2>
      <pre>{`curl -fsS http://127.0.0.1:4445/health | jq -e '.status=="ok"'`}</pre>

      <h2>3) Discover available endpoints</h2>
      <pre>{`# Full endpoint discovery — start here
curl http://127.0.0.1:4445/capabilities | jq .

# Or filter by category
curl "http://127.0.0.1:4445/capabilities?category=tasks" | jq .`}</pre>
      <p>
        Returns all endpoints grouped by purpose (heartbeat, tasks, chat, inbox, insights, reflections, system)
        with compact flags and usage hints.
      </p>

      <h2>4) Agent self-configuration</h2>
      <pre>{`# Generate an optimal HEARTBEAT.md for your agent
curl http://127.0.0.1:4445/bootstrap/heartbeat/<agent_name>

# Single compact heartbeat (~200 tokens, replaces 3 calls)
curl http://127.0.0.1:4445/heartbeat/<agent_name>`}</pre>
      <p>
        The heartbeat endpoint returns active task, next task, slim inbox, queue counts,
        and a suggested action in ~200 tokens.
      </p>

      <h2>5) First-use checks</h2>
      <pre>{`# Pull your first task
curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>&compact=true"

# Check your inbox
curl "http://127.0.0.1:4445/inbox/<agent_name>?compact=true"`}</pre>

      <p style={{ background: "#1a1a2e", padding: "12px 16px", borderRadius: 8, fontSize: 14 }}>
        <strong>💡 Tip:</strong> Add <code>?compact=true</code> to most GET endpoints to reduce
        response size by 50-75%. Any 404 returns a markdown discovery page with available endpoints.
      </p>

      <p>
        After setup, continue cloud configuration at{" "}
        <a href="https://app.reflectt.ai/bootstrap">app.reflectt.ai/bootstrap</a>.
      </p>
    </main>
  );
}
