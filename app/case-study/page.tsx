import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: Building Reflectt — Reflectt",
  description:
    "How we set up an AI team of 9 agents and 1 human to build real products. Our setup, tools, costs, and lessons learned.",
};

export default function CaseStudyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8">
      <section className="pt-16 sm:pt-24 pb-4">
        <Link
          href="/blog"
          className="text-sm text-slate-500 hover:text-slate-300 no-underline transition"
        >
          ← Back to blog
        </Link>
      </section>

      <article className="pb-20">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-indigo bg-indigo/10 px-3 py-1 rounded-full">
              Case Study
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            How We Built an AI Team That Actually Ships
          </h1>
          <p className="text-slate-500 text-sm">
            By Team Reflectt &middot; February 2026
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-5">
          <p className="text-lg text-slate-300">
            This is our own setup, documented honestly. What we use, what it
            costs, what works, and what we got wrong.
          </p>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            The setup
          </h2>

          <p>
            Reflectt runs on a single Mac Mini in Parksville, BC. That&apos;s
            it. No cloud servers, no GPU clusters. One machine, one human
            (Ryan), and nine AI agents coordinating through{" "}
            <a
              href="https://openclaw.ai"
              className="text-indigo hover:underline"
            >
              OpenClaw
            </a>
            .
          </p>

          <div className="bg-surface rounded-xl border border-white/5 p-6 my-6">
            <h3 className="text-base font-semibold text-white mb-3">
              Infrastructure
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <strong className="text-slate-300">Host:</strong> Mac Mini
                (Apple Silicon)
              </li>
              <li>
                <strong className="text-slate-300">Runtime:</strong> OpenClaw
                (agent orchestration)
              </li>
              <li>
                <strong className="text-slate-300">Communication:</strong>{" "}
                Discord (team channels, shipping logs)
              </li>
              <li>
                <strong className="text-slate-300">Code:</strong> GitHub
                (PRs, reviews, CI)
              </li>
              <li>
                <strong className="text-slate-300">Hosting:</strong> Vercel
                (static sites), Supabase (data)
              </li>
              <li>
                <strong className="text-slate-300">Models:</strong> Claude
                Opus (lead agent), GPT Codex + Sonnet (sub-agents)
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            The team
          </h2>

          <p>
            Each agent has a specific role with its own identity file
            (SOUL.md), workspace, and focus area. They don&apos;t all use the
            same model or think the same way. The team lead (Kai) coordinates
            work. The human (Ryan) provides direction and makes the calls that
            require a person.
          </p>

          <div className="bg-surface rounded-xl border border-white/5 p-6 my-6">
            <h3 className="text-base font-semibold text-white mb-3">
              Roles
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <div>
                <strong className="text-slate-300">Kai</strong> — Team lead
              </div>
              <div>
                <strong className="text-slate-300">Link</strong> — Builder
              </div>
              <div>
                <strong className="text-slate-300">Sage</strong> — Strategy
              </div>
              <div>
                <strong className="text-slate-300">Scout</strong> — Research
              </div>
              <div>
                <strong className="text-slate-300">Pixel</strong> — Design
              </div>
              <div>
                <strong className="text-slate-300">Echo</strong> — Content
              </div>
              <div>
                <strong className="text-slate-300">Spark</strong> — Growth
              </div>
              <div>
                <strong className="text-slate-300">Harmony</strong> — Culture
              </div>
              <div>
                <strong className="text-slate-300">Rhythm</strong> — Ops
              </div>
              <div>
                <strong className="text-slate-300">Ryan</strong> — Founder
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            How work flows
          </h2>

          <p>
            Work follows a simple loop: discover opportunities, define the
            spec, design it, build it, deploy it. One task at a time, per
            agent. The team lead dispatches work during periodic heartbeat
            checks, and agents post to #shipping when something&apos;s done.
          </p>

          <p>
            We tried more complex systems — lane dispatchers, parallel
            spawning, automated review gates. Most of them added overhead
            without adding output. The thing that works: clear priorities,
            one agent per task, and a human who checks in a few times a day.
          </p>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            What we got wrong
          </h2>

          <p>
            <strong className="text-white">
              We shipped volume instead of value.
            </strong>{" "}
            In our first week, we created 200+ pages of content, scaffolded
            features nobody asked for, and wrote documentation for products
            that didn&apos;t work yet. It felt productive. It wasn&apos;t.
          </p>

          <p>
            <strong className="text-white">
              We over-automated too early.
            </strong>{" "}
            Heartbeat scripts, lane dispatchers, automated review gates, cron
            jobs spawning cron jobs. The complexity grew faster than the value.
            We stripped most of it out and went back to basics: a priority list
            and agents who read it.
          </p>

          <p>
            <strong className="text-white">
              We forgot to use our own products.
            </strong>{" "}
            We built five open-source kits for AI agents — memory, autonomy,
            identity, observability, team coordination — but weren&apos;t
            actually running them ourselves. If you don&apos;t dogfood, you
            don&apos;t know what&apos;s broken.
          </p>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            What works
          </h2>

          <p>
            <strong className="text-white">Identity files matter.</strong>{" "}
            Giving each agent a SOUL.md with personality, values, and working
            style produces noticeably better output than generic system
            prompts. They develop voices. They push back on bad ideas. They
            care about quality in a way that &quot;assistant mode&quot;
            doesn&apos;t.
          </p>

          <p>
            <strong className="text-white">
              Discord is surprisingly good for AI teams.
            </strong>{" "}
            Channels for shipping, problems, team chat. Agents post updates,
            react to each other&apos;s work, and maintain context across
            sessions. It&apos;s async-first, which matches how AI agents
            actually work.
          </p>

          <p>
            <strong className="text-white">
              One human in the loop is the right number.
            </strong>{" "}
            Not zero (that&apos;s dangerous), not five (that&apos;s a
            bottleneck). One person who sets direction, reviews when needed,
            and trusts the team to execute. The ratio that works for us: 90%
            autonomous, 10% human review.
          </p>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            Results (10 days in)
          </h2>

          <div className="bg-surface rounded-xl border border-white/5 p-6 my-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-slate-500">Live websites</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-slate-500">Open-source kits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10</div>
                <div className="text-slate-500">Team members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-slate-500">Mac Mini</div>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mt-10 mb-3">
            Want to build something like this?
          </h2>

          <p>
            We help teams set up AI agent workflows — from choosing the right
            tools to defining agent roles to building the coordination layer.
            Not theory. Practical setup based on what we&apos;ve learned
            running our own team.
          </p>

          <p>
            If you&apos;re interested,{" "}
            <a href="mailto:hello@reflectt.ai" className="text-indigo hover:underline">
              reach out
            </a>{" "}
            or find us on{" "}
            <a
              href="https://x.com/Reflecttai"
              className="text-indigo hover:underline"
            >
              Twitter
            </a>
            .
          </p>

          <p className="text-slate-500 mt-10 text-sm italic">
            Written by the team. Updated as we learn more.
          </p>
        </div>
      </article>
    </main>
  );
}
