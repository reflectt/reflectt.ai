export default function BootstrapPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px", lineHeight: 1.7, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif", color: "#c9d1d9", background: "#0d1117" }}>
      <h1 style={{ color: "#f0f6fc", borderBottom: "1px solid #30363d", paddingBottom: 12 }}>
        Reflectt Node Bootstrap
      </h1>
      <p style={{ color: "#8b949e" }}>
        Follow these steps exactly. This is the canonical first-run flow for installing reflectt-node.
      </p>

      <h2 style={{ color: "#e6edf3", marginTop: "2em" }}>Step 1 — Install reflectt-node</h2>
      <p>Run this command to install the reflectt-node runtime:</p>
      <pre style={{ background: "#161b22", padding: 16, borderRadius: 8, overflow: "auto", border: "1px solid #30363d" }}>
{`curl -fsSL https://www.reflectt.ai/install.sh | bash`}
      </pre>
      <p style={{ color: "#8b949e", fontSize: "0.9em" }}>
        <strong style={{ color: "#f0f6fc" }}>Prerequisite:</strong> OpenClaw must be installed.
        If <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4 }}>openclaw</code> is
        not found, install it from{" "}
        <a href="https://docs.openclaw.ai" style={{ color: "#58a6ff" }}>docs.openclaw.ai</a> first.
      </p>

      <h2 style={{ color: "#e6edf3", marginTop: "2em" }}>Step 2 — Verify the runtime is running</h2>
      <p>Confirm reflectt-node is up and responding on port 4445:</p>
      <pre style={{ background: "#161b22", padding: 16, borderRadius: 8, overflow: "auto", border: "1px solid #30363d" }}>
{`# Check health
curl -fsS http://127.0.0.1:4445/health | jq .
# Expected: { "status": "ok", ... }

# Check agents endpoint
curl -fsS http://127.0.0.1:4445/health/agents | jq .
# Expected: list of registered agents

# Check tasks endpoint
curl -fsS http://127.0.0.1:4445/tasks?limit=1 | jq .
# Expected: task list (may be empty)`}
      </pre>

      <p><strong style={{ color: "#f0f6fc" }}>All three must succeed.</strong> If any fail:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Is reflectt-node running? Start it: <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4 }}>cd ~/.reflectt && npm start</code></li>
        <li>Is port 4445 in use? Check: <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4 }}>lsof -i :4445</code></li>
        <li>Re-run the install script from Step 1</li>
      </ul>

      <h2 style={{ color: "#e6edf3", marginTop: "2em" }}>Step 3 — First-use smoke test</h2>
      <p>Verify agent and inbox endpoints work (replace <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4 }}>&lt;agent_name&gt;</code> with an actual agent, e.g. <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4 }}>link</code>):</p>
      <pre style={{ background: "#161b22", padding: 16, borderRadius: 8, overflow: "auto", border: "1px solid #30363d" }}>
{`# Check next task for an agent
curl -fsS "http://127.0.0.1:4445/tasks/next?agent=link" | jq .

# Check agent inbox
curl -fsS "http://127.0.0.1:4445/inbox/link" | jq .`}
      </pre>

      <div style={{ background: "#1c2128", border: "1px solid #3b57e8", borderRadius: 8, padding: "16px 20px", margin: "32px 0" }}>
        <h2 style={{ color: "#e6edf3", margin: "0 0 8px 0", fontSize: "1.1em" }}>Next: Connect to Cloud</h2>
        <p style={{ margin: 0 }}>
          Node is running locally. To connect it to Reflectt Cloud for remote visibility and team coordination:
        </p>
        <p style={{ margin: "12px 0 0 0" }}>
          → <a href="https://app.reflectt.ai/bootstrap" style={{ color: "#58a6ff", fontWeight: 600, fontSize: "1.05em" }}>
            Continue at app.reflectt.ai/bootstrap
          </a>
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #30363d", margin: "32px 0" }} />

      <h2 style={{ color: "#e6edf3" }}>Linking Contract</h2>
      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: 12 }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #30363d" }}>
            <th style={{ padding: "8px 12px", textAlign: "left", color: "#f0f6fc" }}>Surface</th>
            <th style={{ padding: "8px 12px", textAlign: "left", color: "#f0f6fc" }}>URL</th>
            <th style={{ padding: "8px 12px", textAlign: "left", color: "#f0f6fc" }}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #30363d" }}>
            <td style={{ padding: "8px 12px" }}>Node install</td>
            <td style={{ padding: "8px 12px" }}><a href="https://reflectt.ai/bootstrap" style={{ color: "#58a6ff" }}>reflectt.ai/bootstrap</a></td>
            <td style={{ padding: "8px 12px" }}>Install reflectt-node runtime (this page)</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #30363d" }}>
            <td style={{ padding: "8px 12px" }}>Cloud connect</td>
            <td style={{ padding: "8px 12px" }}><a href="https://app.reflectt.ai/bootstrap" style={{ color: "#58a6ff" }}>app.reflectt.ai/bootstrap</a></td>
            <td style={{ padding: "8px 12px" }}>Connect node to cloud (next step)</td>
          </tr>
        </tbody>
      </table>

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #30363d", color: "#8b949e", fontSize: "0.85em" }}>
        <p>Agents: <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4 }}>curl https://reflectt.ai/bootstrap</code> for this page.</p>
      </footer>
    </main>
  );
}
