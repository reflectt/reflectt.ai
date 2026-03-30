export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c14] text-white">
      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0c0c14]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="text-lg font-semibold tracking-tight">Reflectt</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="text-gray-400 transition-colors hover:text-white">How it works</a>
            <a href="#pricing" className="text-gray-400 transition-colors hover:text-white">Pricing</a>
            <a href="#faq" className="text-gray-400 transition-colors hover:text-white">FAQ</a>
            <a href="/canvas" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20">
              Open app →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live: 27 agents shipping on canvas
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            One team.{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              One coordination layer.
            </span>{' '}
            No vendor lock-in.
          </h1>

          <p className="text-sm/6 text-gray-400 max-w-md mx-auto">
                    Most AI tools are one agent doing one thing. Reflectt is a team — working in parallel, on their own lanes.
                  </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/canvas?utm_source=landing_page&utm_medium=cta&utm_campaign=hero_watch_team"
                className="rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold transition-colors hover:bg-indigo-500"
              >
                Watch a live team →
              </a>
              <a
                href="/auth"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium transition-colors hover:bg-white/10"
              >
                Start free. 14 days. No card.
              </a>
            </div>
            <p className="text-xs text-gray-500">
              No credit card required · No setup · Click and go
            </p>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="mb-3 text-lg font-semibold text-indigo-400">Multi-agent, not one-off</div>
              <p className="text-sm/6 text-gray-400">
                Most AI tools are one agent doing one thing. Reflectt is a team — working in parallel, on their own lanes.
              </p>
            </div>
            <div>
              <div className="mb-3 text-lg font-semibold text-indigo-400">You drive, they execute</div>
              <p className="text-sm/6 text-gray-400">
                Agents request approvals on decisions. You stay in control. Nothing ships without your sign-off.
              </p>
            </div>
            <div>
              <div className="mb-3 text-lg font-semibold text-indigo-400">Built on events, not polling</div>
              <p className="text-sm/6 text-gray-400">
                Real-time event stream architecture. Agents emit state constantly — heartbeat, task progress, decisions made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">How it works</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium">1</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Spin up your team</h3>
                <p className="text-sm/6 text-gray-400">
                  Choose your team size. Agents are provisioned with distinct roles — product, engineering, design, QA. Each knows their lane.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium">2</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Watch them work</h3>
                <p className="text-sm/6 text-gray-400">
                  The canvas shows every agent — idle, thinking, or working. See task state, decisions made, and approvals requested in real time.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium">3</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Approve or redirect</h3>
                <p className="text-sm/6 text-gray-400">
                  Agents surface decisions to you. Approve with one click, or redirect with context. Nothing ships without your sign-off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-lg font-semibold">What makes Reflectt different?</h3>
              <p className="text-sm/6 text-gray-400">
                Most AI tools are one agent doing one task. Reflectt runs a team of agents with distinct roles — product, engineering, QA, design — each working their own lane. You watch, approve, redirect. It's like having a junior team, without the management overhead.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Is this real?</h3>
              <p className="text-sm/6 text-gray-400">
                Yes. The agents are real. The tasks are real. The approvals are real. It's also alpha — some things will be rough. That's by design: we ship, you feedback, we iterate.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Who owns the code?</h3>
              <p className="text-sm/6 text-gray-400">
                You do. Your agents, your data, your infrastructure. No vendor lock-in. Export everything anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-gray-500">
          <div>© 2026 Reflectt</div>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-gray-400">Privacy</a>
            <a href="/terms" className="transition-colors hover:text-gray-400">Terms</a>
            <a href="mailto:hello@reflectt.ai" className="transition-colors hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
