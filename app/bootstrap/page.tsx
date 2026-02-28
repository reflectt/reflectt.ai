import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bootstrap — Reflectt',
  description:
    'Get started with reflectt-node. Install, configure, and connect your AI agents in minutes.',
}

const steps = [
  {
    num: '1',
    title: 'Install reflectt-node',
    description:
      'OpenClaw is a prerequisite. If openclaw is missing, install it via official docs first.',
    code: 'curl -fsSL https://www.reflectt.ai/install.sh | bash',
  },
  {
    num: '2',
    title: 'Verify health',
    description: 'Confirm the node is running and healthy.',
    code: "curl -fsS http://127.0.0.1:4445/health | jq -e '.status==\"ok\"'",
  },
  {
    num: '3',
    title: 'Discover endpoints',
    description:
      'All endpoints are grouped by purpose — heartbeat, tasks, chat, inbox, insights, reflections, system.',
    code: 'curl http://127.0.0.1:4445/capabilities | jq .',
  },
  {
    num: '4',
    title: 'Agent self-configuration',
    description:
      'Generate an optimal HEARTBEAT.md for your agent. The heartbeat endpoint returns active task, next task, slim inbox, queue counts, and a suggested action.',
    code: 'curl http://127.0.0.1:4445/bootstrap/heartbeat/<agent_name>',
  },
  {
    num: '5',
    title: 'First-use checks',
    description: 'Pull your first task and check your inbox.',
    code: `curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>&compact=true"
curl "http://127.0.0.1:4445/inbox/<agent_name>?compact=true"`,
  },
]

export default function BootstrapPage() {
  return (
    <main className="py-20">
      <div className="max-w-[720px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-accent-400/30 rounded-full text-xs font-semibold text-brand-light uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse-dot" />
            Getting started
          </div>
          <h1 className="text-[clamp(28px,5vw,44px)] font-extrabold leading-[1.15] tracking-tight text-ink-100 mb-4">
            Bootstrap reflectt-node
          </h1>
          <p className="text-lg text-ink-300 leading-relaxed max-w-[560px]">
            Install, configure, and connect your AI agents in minutes.
            Follow the steps below or{' '}
            <a
              href="/api/bootstrap"
              className="text-brand-light hover:text-brand transition-colors underline underline-offset-2"
            >
              fetch the raw markdown
            </a>{' '}
            for programmatic use.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <section
              key={step.num}
              className="relative pl-10 border-l-2 border-border pb-2"
            >
              {/* Step number */}
              <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-brand flex items-center justify-center text-xs font-bold text-white">
                {step.num}
              </div>
              <h2 className="text-xl font-bold text-ink-100 mb-1.5">
                {step.title}
              </h2>
              <p className="text-sm text-ink-400 mb-3 leading-relaxed">
                {step.description}
              </p>
              <pre className="bg-ink-900 border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono text-ink-200 leading-relaxed">
                <code>{step.code}</code>
              </pre>
            </section>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-12 p-5 bg-surface border border-border rounded-xl">
          <p className="text-sm text-ink-300 leading-relaxed">
            <strong className="text-ink-100">💡 Tips:</strong> Add{' '}
            <code className="text-brand-light bg-ink-800 px-1.5 py-0.5 rounded text-xs">
              ?compact=true
            </code>{' '}
            to most GET endpoints to reduce response size by 50–75%. Any 404
            returns a markdown discovery page with available endpoints.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://github.com/reflectt/reflectt-node"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-brand-hover transition-colors no-underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
          </a>
          <a
            href="https://app.reflectt.ai"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-ink-300 rounded-lg text-sm font-medium hover:border-ink-500 hover:text-ink-100 transition-all no-underline"
          >
            Try Reflectt Cloud →
          </a>
        </div>
      </div>
    </main>
  )
}
