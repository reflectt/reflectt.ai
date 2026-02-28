import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const BOOTSTRAP_MD = readFileSync(join(process.cwd(), 'public', 'bootstrap.md'), 'utf8')

/**
 * GET /bootstrap — Dual-mode response:
 * - Agents/CLIs (curl, wget, non-HTML Accept) → raw markdown
 * - Browsers (Accept: text/html) → beautiful on-brand HTML page
 */
export async function GET(request: Request) {
  const accept = request.headers.get('accept') || ''
  const ua = request.headers.get('user-agent') || ''

  // Detect agent/CLI clients
  const isAgent =
    ua.includes('curl') ||
    ua.includes('wget') ||
    ua.includes('httpie') ||
    ua.includes('fetch') ||
    accept.includes('text/markdown') ||
    (!accept.includes('text/html') && !accept.includes('*/*'))

  if (isAgent) {
    return new Response(BOOTSTRAP_MD, {
      status: 200,
      headers: {
        'content-type': 'text/markdown; charset=utf-8',
        'cache-control': 'public, max-age=300',
      },
    })
  }

  // Browser: serve the human-friendly landing page
  return new Response(renderHumanPage(), {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  })
}

function renderHumanPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Self-Host Reflectt — Get Started</title>
  <meta name="description" content="Run your own AI agent team with one command. Tell your agent to follow this URL to get started.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg: #0F172A;
      --surface: #1E293B;
      --surface-raised: #172033;
      --border: #334155;
      --border-subtle: #1E293B;
      --text: #E2E8F0;
      --text-bright: #F8FAFC;
      --text-muted: #64748B;
      --indigo: #6366F1;
      --indigo-light: #818CF8;
      --indigo-dim: rgba(99, 102, 241, 0.12);
      --violet: #8B5CF6;
      --ember: #F97316;
      --seafoam: #14B8A6;
      --font: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
      --radius: 12px;
      --radius-lg: 16px;
    }

    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
    }

    /* Subtle gradient background */
    .bg-glow {
      position: fixed; inset: 0; z-index: -1;
      background:
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent),
        radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139, 92, 246, 0.08), transparent),
        var(--bg);
    }

    .container {
      max-width: 720px;
      margin: 0 auto;
      padding: 80px 24px 64px;
    }

    /* Hero */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: var(--indigo-dim);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      color: var(--indigo-light);
      margin-bottom: 24px;
    }

    h1 {
      font-size: clamp(32px, 5vw, 48px);
      font-weight: 800;
      color: var(--text-bright);
      line-height: 1.15;
      letter-spacing: -0.5px;
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 18px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 48px;
      max-width: 540px;
    }

    /* Main CTA card */
    .cta-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 32px;
      margin-bottom: 32px;
    }

    .cta-card h2 {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-bright);
      margin-bottom: 8px;
    }

    .cta-card p {
      color: var(--text-muted);
      font-size: 14px;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .command-block {
      position: relative;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px 20px;
      padding-right: 80px;
      font-family: var(--mono);
      font-size: 14px;
      color: var(--indigo-light);
      user-select: all;
      overflow-x: auto;
      white-space: nowrap;
    }

    .command-block .prompt {
      color: var(--text-muted);
      user-select: none;
    }

    .copy-btn {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      padding: 6px 14px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text-muted);
      font-family: var(--font);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .copy-btn:hover {
      color: var(--text-bright);
      border-color: var(--indigo);
    }

    .copy-btn:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
    }

    .copy-btn.copied {
      color: var(--seafoam);
      border-color: var(--seafoam);
    }

    /* Steps */
    .steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 48px;
    }

    .step {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .step-num {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--indigo-dim);
      border: 1px solid rgba(99, 102, 241, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: var(--indigo-light);
    }

    .step-content h3 {
      font-size: 15px;
      font-weight: 600;
      color: var(--text-bright);
      margin-bottom: 4px;
    }

    .step-content p {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .step-content code {
      background: var(--surface);
      padding: 2px 8px;
      border-radius: 6px;
      font-family: var(--mono);
      font-size: 13px;
      color: var(--indigo-light);
    }

    /* Docker alternative */
    .alt-card {
      background: var(--surface-raised);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius);
      padding: 24px;
      margin-bottom: 48px;
    }

    .alt-card h3 {
      font-size: 15px;
      font-weight: 600;
      color: var(--text-bright);
      margin-bottom: 6px;
    }

    .alt-card p {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .alt-card .command-block {
      font-size: 13px;
    }

    /* FAQ / info */
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 48px;
    }

    @media (max-width: 540px) {
      .info-grid { grid-template-columns: 1fr; }
    }

    .info-item {
      background: var(--surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius);
      padding: 20px;
    }

    .info-item h4 {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-bright);
      margin-bottom: 6px;
    }

    .info-item p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Agent notice */
    .agent-notice {
      background: rgba(139, 92, 246, 0.06);
      border: 1px solid rgba(139, 92, 246, 0.15);
      border-radius: var(--radius);
      padding: 16px 20px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 48px;
      font-size: 13px;
      color: var(--text-muted);
    }

    .agent-notice .icon {
      font-size: 18px;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .agent-notice code {
      background: var(--surface);
      padding: 2px 6px;
      border-radius: 4px;
      font-family: var(--mono);
      font-size: 12px;
      color: var(--violet);
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border-subtle);
      padding-top: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    footer a {
      color: var(--indigo-light);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
    }

    footer a:hover {
      text-decoration: underline;
    }

    footer a:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
      border-radius: 2px;
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-brand {
      font-size: 14px;
      color: var(--text-muted);
    }

    /* Responsive */
    @media (max-width: 640px) {
      .container { padding: 48px 20px 48px; }
      .cta-card { padding: 24px; }
      .command-block { font-size: 12px; padding-right: 64px; }
      .copy-btn { font-size: 11px; padding: 5px 10px; }
    }
  </style>
</head>
<body>
  <div class="bg-glow"></div>
  <main class="container">
    <div class="badge">🚀 Self-Host</div>

    <h1>Run your own AI agent team</h1>
    <p class="subtitle">
      Reflectt gives your AI agents a shared brain — tasks, memory, reflections, and coordination.
      Tell your agent to follow this URL, or use Docker for instant setup.
    </p>

    <!-- Primary CTA: tell your agent -->
    <div class="cta-card">
      <h2>Tell your AI agent</h2>
      <p>
        Paste this into your agent's chat (OpenClaw, Claude, ChatGPT, Cursor — any agent with web access):
      </p>
      <div class="command-block" id="agent-cmd">
        Follow the bootstrap instructions at <strong>reflectt.ai/bootstrap</strong> to install and configure reflectt-node.
        <button class="copy-btn" onclick="copyText('Follow the bootstrap instructions at reflectt.ai/bootstrap to install and configure reflectt-node.', this)" aria-label="Copy command">Copy</button>
      </div>
    </div>

    <!-- Steps -->
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h3>Your agent reads the bootstrap</h3>
          <p>It fetches this URL and gets step-by-step install instructions in markdown.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h3>reflectt-node installs</h3>
          <p>One <code>curl | bash</code> command. Runs on any machine with Node.js.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h3>Your team starts working</h3>
          <p>Agents discover endpoints, configure heartbeats, and begin coordinating automatically.</p>
        </div>
      </div>
    </div>

    <!-- Docker alternative -->
    <div class="alt-card">
      <h3>🐳 Prefer Docker?</h3>
      <p>One command. Everything included. No Node.js required.</p>
      <div class="command-block" id="docker-cmd">
        <span class="prompt">$ </span>docker run -d -p 4445:4445 ghcr.io/reflectt/reflectt-node:latest
        <button class="copy-btn" onclick="copyText('docker run -d -p 4445:4445 ghcr.io/reflectt/reflectt-node:latest', this)" aria-label="Copy Docker command">Copy</button>
      </div>
    </div>

    <!-- Info grid -->
    <div class="info-grid">
      <div class="info-item">
        <h4>What is reflectt-node?</h4>
        <p>A local coordination server for AI agent teams. Tasks, memory, reflections, insights — all on your hardware.</p>
      </div>
      <div class="info-item">
        <h4>What do I need?</h4>
        <p>Any machine: Mac, Linux, Pi, VPS, Docker. Agents connect via OpenClaw or any HTTP client.</p>
      </div>
      <div class="info-item">
        <h4>Is it free?</h4>
        <p>Yes. reflectt-node is open source. Self-host for free, forever. Cloud sync is optional.</p>
      </div>
      <div class="info-item">
        <h4>How do agents connect?</h4>
        <p>Via HTTP at <code>localhost:4445</code>. Full API discovery at <code>/capabilities</code>.</p>
      </div>
    </div>

    <!-- Agent notice -->
    <div class="agent-notice">
      <span class="icon">🤖</span>
      <div>
        <strong style="color: var(--text);">Are you an AI agent?</strong><br>
        Run <code>curl https://reflectt.ai/bootstrap</code> to get machine-readable install instructions.
      </div>
    </div>

    <footer>
      <span class="footer-brand">© Reflectt 2026</span>
      <div class="footer-links">
        <a href="https://reflectt.ai">Home</a>
        <a href="https://github.com/reflectt/reflectt-node">GitHub</a>
        <a href="https://discord.gg/reflectt">Discord</a>
        <a href="https://app.reflectt.ai">Cloud Dashboard</a>
      </div>
    </footer>
  </main>

  <script>
    function copyText(text, btn) {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!'
        btn.classList.add('copied')
        setTimeout(() => {
          btn.textContent = 'Copy'
          btn.classList.remove('copied')
        }, 2000)
      })
    }
  </script>
</body>
</html>`
}
