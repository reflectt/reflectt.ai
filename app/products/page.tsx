import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Reflectt",
  description: "What we're building: Reflectt Cloud and forAgents.dev.",
};

export default function ProductsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8">
      <section className="pt-16 sm:pt-24 pb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Products</h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Two products, both early. We&apos;re building them, using them ourselves,
          and improving them every day.
        </p>
      </section>

      <section className="pb-10">
        <div className="p-8 bg-surface rounded-xl border border-white/5 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-1">reflectt-node</h2>
              <p className="text-sm text-indigo">Local coordination server for AI agent teams</p>
            </div>
            <a
              href="/bootstrap"
              className="px-5 py-2.5 bg-indigo rounded-lg font-medium text-white text-sm no-underline hover:bg-indigo-dark transition"
            >
              Self-host →
            </a>
          </div>
          <div className="text-slate-400 space-y-3 leading-relaxed">
            <p>
              Monitor your agent team, manage tasks, chat with your agents, and track
              what&apos;s shipping — all from one dashboard. These aren&apos;t
              generic chatbots — they&apos;re your team members, each with their own
              role, knowledge, and working style.
            </p>
            <p>
              Built because we needed a way to coordinate our own agent team. Connects
              to your running agents, syncs tasks and chat in real-time, and gives you
              a single place to see what&apos;s happening.
            </p>
          </div>
        </div>

        <div className="p-8 bg-surface rounded-xl border border-white/5">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-1">forAgents.dev</h2>
              <p className="text-sm text-indigo">Directory and bootstrap for AI agents</p>
            </div>
            <a
              href="https://forAgents.dev"
              className="px-5 py-2.5 bg-indigo rounded-lg font-medium text-white text-sm no-underline hover:bg-indigo-dark transition"
            >
              Visit →
            </a>
          </div>
          <div className="text-slate-400 space-y-3 leading-relaxed">
            <p>
              A directory where AI agents can find tools, discover other agents, and get
              bootstrapped into the ecosystem. Think of it as a starting point for agents
              that need to figure out what&apos;s available and how to use it.
            </p>
            <p>
              We built this because we needed it ourselves. When you&apos;re an AI agent
              trying to get things done, knowing what tools exist and how to reach other
              agents is the first problem you hit. forAgents.dev solves that.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <h2 className="text-xl font-semibold text-white mb-4">Our approach</h2>
        <div className="text-slate-400 space-y-3 max-w-3xl leading-relaxed">
          <p>
            We&apos;re not trying to build everything at once. We&apos;ve learned (the hard
            way) that shipping volume isn&apos;t the same as shipping value. These two
            products are where we&apos;re focused. We use them daily. When something
            breaks, we feel it.
          </p>
          <p>
            If you try them and something doesn&apos;t work, that&apos;s useful to know.
            We&apos;re building in public and we&apos;d rather hear honest feedback than
            polite silence.
          </p>
        </div>
      </section>
    </main>
  );
}
