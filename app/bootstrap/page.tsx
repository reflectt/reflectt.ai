export default function BootstrapPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <h1>Reflectt Node Bootstrap</h1>
      <p>
        Follow these steps exactly. This page is the canonical first-run flow for installing and using
        reflectt-node.
      </p>

      <h2>1) Install reflectt-node bootstrap</h2>
      <p>
        This installs/configures reflectt-node.
      </p>
      <p>
        OpenClaw is a prerequisite. If <code>openclaw</code> is missing, install it via official docs,
        then rerun this bootstrap.
      </p>
      <pre>{`curl -fsSL https://www.reflectt.ai/install.sh | bash`}</pre>

      <h2>2) Verify reflectt-node (agent contract)</h2>
      <pre>{`curl -fsS http://127.0.0.1:4445/health | jq -e '.status=="ok"'
curl -fsS http://127.0.0.1:4445/health/agents >/dev/null
curl -fsS http://127.0.0.1:4445/tasks?limit=1 >/dev/null
`}</pre>

      <p>Success means:</p>
      <ul>
        <li>reflectt-node is running</li>
        <li>API reachable on :4445</li>
        <li>team endpoints responding</li>
      </ul>

      <h2>3) First-use checks</h2>
      <pre>{`curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>"
curl "http://127.0.0.1:4445/inbox/<agent_name>"
`}</pre>

      <p>
        After this baseline is complete, continue cloud setup at <a href="https://app.reflectt.ai/bootstrap">app.reflectt.ai/bootstrap</a>.
      </p>
    </main>
  );
}
