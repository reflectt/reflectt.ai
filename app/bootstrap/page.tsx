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
        This installs/configures reflectt-node. If <code>openclaw</code> is missing, it calls the official
        OpenClaw installer first, then continues.
      </p>
      <pre>{`curl -fsSL https://www.reflectt.ai/install.sh | bash`}</pre>

      <h2>2) Verify install</h2>
      <pre>{`openclaw --version
openclaw status`}</pre>

      <h2>3) Clone and run reflectt-node</h2>
      <pre>{`git clone https://github.com/reflectt/reflectt-node.git
cd reflectt-node
npm install
npm run build
NODE_ENV=production node dist/index.js`}</pre>

      <h2>4) Health check (new shell)</h2>
      <pre>{`curl -s http://127.0.0.1:4445/health | grep -q '"status":"ok"' && echo ok`}</pre>

      <h2>5) First-use checks</h2>
      <pre>{`curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>"
curl "http://127.0.0.1:4445/inbox/<agent_name>"`}</pre>

      <p>
        After this baseline is complete, continue cloud setup at <a href="https://app.reflectt.ai/bootstrap">app.reflectt.ai/bootstrap</a>.
      </p>
    </main>
  );
}
