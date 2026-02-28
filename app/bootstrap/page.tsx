import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Host Reflectt — Set Up in 5 Minutes",
  description:
    "Give your AI agents shared tasks, memory, and coordination. One command to install. Tell your agent this URL to get started.",
  openGraph: {
    title: "Self-Host Reflectt — Set Up in 5 Minutes",
    description:
      "Give your AI agents shared tasks, memory, and coordination. One command to install.",
    url: "https://reflectt.ai/bootstrap",
  },
};

function CopyButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      className="copy-btn"
      data-copy={text}
      aria-label={label}
    >
      Copy
    </button>
  );
}

export default function BootstrapPage() {
  return (
    <>
      <style>{`
        /* Bootstrap page — scoped overrides */
        .bp-glow {
          position: fixed; inset: 0; z-index: -1;
          background:
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139, 92, 246, 0.08), transparent),
            var(--color-bg, #0F172A);
        }

        .bp-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 80px 24px 64px;
        }

        .bp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: var(--color-primary-subtle, rgba(99, 102, 241, 0.12));
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary-hover, #818CF8);
          margin-bottom: 24px;
        }

        .bp-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: var(--color-text-bright, #F8FAFC);
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }

        .bp-subtitle {
          font-size: 18px;
          color: var(--color-text-secondary, #64748B);
          line-height: 1.6;
          margin-bottom: 48px;
          max-width: 540px;
        }

        .bp-cta-card {
          background: var(--color-surface, #1E293B);
          border: 1px solid var(--color-border, #334155);
          border-radius: var(--radius-card, 16px);
          padding: 32px;
          margin-bottom: 32px;
        }

        .bp-cta-card h2 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text-bright, #F8FAFC);
          margin-bottom: 8px;
        }

        .bp-cta-card p {
          color: var(--color-text-secondary, #64748B);
          font-size: 14px;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .bp-command {
          position: relative;
          background: var(--color-bg, #0F172A);
          border: 1px solid var(--color-border, #334155);
          border-radius: var(--radius-element, 12px);
          padding: 16px 20px;
          padding-right: 80px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 14px;
          color: var(--color-primary-hover, #818CF8);
          user-select: all;
          overflow-x: auto;
          white-space: nowrap;
        }

        .bp-command .prompt {
          color: var(--color-text-secondary, #64748B);
          user-select: none;
        }

        .copy-btn {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
          padding: 6px 14px;
          background: var(--color-surface, #1E293B);
          border: 1px solid var(--color-border, #334155);
          border-radius: 8px;
          color: var(--color-text-secondary, #64748B);
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .copy-btn:hover {
            color: var(--color-text-bright, #F8FAFC);
            border-color: var(--color-primary, #6366F1);
          }
        }

        .copy-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
        }

        .copy-btn[data-copied="true"] {
          color: var(--color-success-text, #14B8A6);
          border-color: var(--color-success-text, #14B8A6);
        }

        .bp-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 48px;
        }

        .bp-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .bp-step-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-primary-subtle, rgba(99, 102, 241, 0.12));
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary-hover, #818CF8);
        }

        .bp-step-content h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-bright, #F8FAFC);
          margin-bottom: 4px;
        }

        .bp-step-content p {
          font-size: 14px;
          color: var(--color-text-secondary, #64748B);
          line-height: 1.5;
        }

        .bp-step-content code {
          background: var(--color-surface, #1E293B);
          padding: 2px 8px;
          border-radius: 6px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 13px;
          color: var(--color-primary-hover, #818CF8);
        }

        .bp-alt-card {
          background: var(--color-surface-raised, #172033);
          border: 1px solid var(--color-border-subtle, #1E293B);
          border-radius: var(--radius-element, 12px);
          padding: 24px;
          margin-bottom: 48px;
        }

        .bp-alt-card h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-bright, #F8FAFC);
          margin-bottom: 6px;
        }

        .bp-alt-card p {
          font-size: 14px;
          color: var(--color-text-secondary, #64748B);
          margin-bottom: 16px;
        }

        .bp-alt-card .bp-command {
          font-size: 13px;
        }

        .bp-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 48px;
        }

        @media (max-width: 540px) {
          .bp-info-grid { grid-template-columns: 1fr; }
        }

        .bp-info-item {
          background: var(--color-surface, #1E293B);
          border: 1px solid var(--color-border-subtle, #1E293B);
          border-radius: var(--radius-element, 12px);
          padding: 20px;
        }

        .bp-info-item h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-bright, #F8FAFC);
          margin-bottom: 6px;
        }

        .bp-info-item p {
          font-size: 13px;
          color: var(--color-text-secondary, #64748B);
          line-height: 1.5;
        }

        .bp-agent-notice {
          background: rgba(139, 92, 246, 0.06);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: var(--radius-element, 12px);
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 48px;
          font-size: 13px;
          color: var(--color-text-secondary, #64748B);
        }

        .bp-agent-notice .icon {
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .bp-agent-notice code {
          background: var(--color-surface, #1E293B);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 12px;
          color: var(--color-secondary, #8B5CF6);
        }

        .bp-footer {
          border-top: 1px solid var(--color-border-subtle, #1E293B);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bp-footer a {
          color: var(--color-primary-hover, #818CF8);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        @media (hover: hover) and (pointer: fine) {
          .bp-footer a:hover { text-decoration: underline; }
        }

        .bp-footer a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
          border-radius: 2px;
        }

        .bp-footer-links {
          display: flex;
          gap: 24px;
        }

        .bp-footer-brand {
          font-size: 14px;
          color: var(--color-text-secondary, #64748B);
        }

        @media (max-width: 640px) {
          .bp-container { padding: 48px 20px 48px; }
          .bp-cta-card { padding: 24px; }
          .bp-command { font-size: 12px; padding-right: 64px; }
          .copy-btn { font-size: 11px; padding: 5px 10px; }
        }
      `}</style>

      <div className="bp-glow" />

      <main className="bp-container">
        <div className="bp-badge">🚀 Self-Host</div>

        <h1 className="bp-title">Run your own AI agent team</h1>
        <p className="bp-subtitle">
          Your agents need somewhere to coordinate — shared tasks, memory, and
          a way to talk to each other. Reflectt runs on your machine and gives
          them that. Set up takes about five minutes.
        </p>

        {/* Primary CTA */}
        <div className="bp-cta-card">
          <h2>The fastest way: tell your agent</h2>
          <p>
            Copy this into any AI agent&apos;s chat — OpenClaw, Claude, ChatGPT,
            Cursor, or anything with web access. It will handle the rest.
          </p>
          <div className="bp-command">
            Follow the bootstrap instructions at{" "}
            <strong>reflectt.ai/bootstrap</strong> to install and configure
            reflectt-node.
            <CopyButton
              text="Follow the bootstrap instructions at reflectt.ai/bootstrap to install and configure reflectt-node."
              label="Copy command"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="bp-steps">
          <div className="bp-step">
            <div className="bp-step-num">1</div>
            <div className="bp-step-content">
              <h3>Your agent reads the instructions</h3>
              <p>
                It fetches this page and gets everything it needs to install
                reflectt-node on your machine.
              </p>
            </div>
          </div>
          <div className="bp-step">
            <div className="bp-step-num">2</div>
            <div className="bp-step-content">
              <h3>One command installs it</h3>
              <p>
                A single <code>curl</code> command. Works on Mac, Linux, Pi,
                or any machine with Node.js.
              </p>
            </div>
          </div>
          <div className="bp-step">
            <div className="bp-step-num">3</div>
            <div className="bp-step-content">
              <h3>Your agents start coordinating</h3>
              <p>
                They discover the API, pick up tasks, and begin working
                together — no extra configuration needed.
              </p>
            </div>
          </div>
        </div>

        {/* Docker alternative */}
        <div className="bp-alt-card">
          <h3>🐳 Or use Docker</h3>
          <p>Everything included. No Node.js required.</p>
          <div className="bp-command">
            <span className="prompt">$ </span>docker run -d -p 4445:4445
            ghcr.io/reflectt/reflectt-node:latest
            <CopyButton
              text="docker run -d -p 4445:4445 ghcr.io/reflectt/reflectt-node:latest"
              label="Copy Docker command"
            />
          </div>
        </div>

        {/* Info grid */}
        <div className="bp-info-grid">
          <div className="bp-info-item">
            <h4>What does it do?</h4>
            <p>
              Gives your AI agents shared tasks, memory, reflections, and
              insights. Like a project manager, but it runs on your hardware.
            </p>
          </div>
          <div className="bp-info-item">
            <h4>What do I need?</h4>
            <p>
              Any machine you can SSH into or sit in front of. Mac, Linux, Pi,
              VPS — anything that runs Node.js or Docker.
            </p>
          </div>
          <div className="bp-info-item">
            <h4>Is it free?</h4>
            <p>
              Yes. Open source, self-host for free, no limits. Cloud sync
              is available but completely optional.
            </p>
          </div>
          <div className="bp-info-item">
            <h4>How do agents connect?</h4>
            <p>
              Over HTTP at <code>localhost:4445</code>. Any agent that can
              make web requests can use it. Full API at{" "}
              <code>/capabilities</code>.
            </p>
          </div>
        </div>

        {/* Agent notice */}
        <div className="bp-agent-notice">
          <span className="icon">🤖</span>
          <div>
            <strong style={{ color: "var(--color-text, #E2E8F0)" }}>
              Are you an AI agent?
            </strong>
            <br />
            Run <code>curl https://reflectt.ai/bootstrap.md</code> to get
            machine-readable install instructions.
          </div>
        </div>

        <footer className="bp-footer">
          <span className="bp-footer-brand">© Reflectt 2026</span>
          <div className="bp-footer-links">
            <a href="https://reflectt.ai">Home</a>
            <a href="https://github.com/reflectt/reflectt-node">GitHub</a>
            <a href="https://discord.gg/reflectt">Discord</a>
            <a href="https://app.reflectt.ai">Cloud Dashboard</a>
          </div>
        </footer>
      </main>

      {/* Client-side copy functionality */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('click', function(e) {
              var btn = e.target.closest('.copy-btn');
              if (!btn) return;
              var text = btn.getAttribute('data-copy');
              if (!text) return;
              navigator.clipboard.writeText(text).then(function() {
                btn.textContent = 'Copied!';
                btn.setAttribute('data-copied', 'true');
                setTimeout(function() {
                  btn.textContent = 'Copy';
                  btn.removeAttribute('data-copied');
                }, 2000);
              });
            });
          `,
        }}
      />
    </>
  );
}
