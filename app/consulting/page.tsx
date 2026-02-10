import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us — Reflectt",
  description:
    "We build AI agent systems that actually work. From OpenClaw setup to custom automation pipelines, we get you from zero to running in days, not months.",
};

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-indigo flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ConsultingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8">
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-16 sm:pb-20">
        <p className="text-indigo font-medium text-sm mb-4 tracking-wide uppercase">
          Work with us
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          We build AI agent systems
          <br />
          that actually run.
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          You&apos;ve seen the demos. You know AI agents can automate real work.
          But setting them up — the infrastructure, the prompts, the orchestration,
          the reliability — takes weeks you don&apos;t have. We do it for you.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://cal.com/reflectt/consulting"
            className="px-6 py-3 bg-indigo rounded-lg font-medium text-white no-underline hover:bg-indigo-dark transition"
          >
            Book a call — free 30 min
          </a>
          <a
            href="#pricing"
            className="px-6 py-3 bg-surface border border-white/10 rounded-lg font-medium text-white no-underline hover:bg-surface-light transition"
          >
            See pricing
          </a>
        </div>
      </section>

      {/* What we actually do */}
      <section className="py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-4">
          What we actually do
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
          Not &quot;AI consulting.&quot; Not a slide deck. We write code, configure systems,
          and hand you back something that works.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              🔧 OpenClaw Setup &amp; Configuration
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Get OpenClaw running with agents that do real work — not just chat.
              We configure your gateway, set up agent teams, connect tools, and
              get everything deployed and stable.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><CheckIcon /> Gateway deployment &amp; hardening</li>
              <li className="flex gap-2"><CheckIcon /> Agent team design &amp; prompt engineering</li>
              <li className="flex gap-2"><CheckIcon /> Tool integration (GitHub, Discord, Slack, APIs)</li>
              <li className="flex gap-2"><CheckIcon /> Node pairing &amp; device setup</li>
            </ul>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              🤖 Custom Agent Workflows
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We build agent systems that automate your specific processes —
              data pipelines, content generation, monitoring, customer support,
              code review, whatever your team wastes hours on.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><CheckIcon /> Workflow analysis &amp; automation design</li>
              <li className="flex gap-2"><CheckIcon /> Multi-agent orchestration</li>
              <li className="flex gap-2"><CheckIcon /> Integration with your existing stack</li>
              <li className="flex gap-2"><CheckIcon /> Monitoring &amp; reliability setup</li>
            </ul>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              🏥 Healthcare Data &amp; AI
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              31 years of engineering experience including deep healthcare data work.
              Apache Spark pipelines, FHIR integrations, clinical data processing,
              and AI-assisted analysis — built to handle real-world healthcare complexity.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><CheckIcon /> Spark/big data pipeline design</li>
              <li className="flex gap-2"><CheckIcon /> Healthcare data normalization &amp; ETL</li>
              <li className="flex gap-2"><CheckIcon /> AI-assisted clinical workflows</li>
              <li className="flex gap-2"><CheckIcon /> HIPAA-aware architecture review</li>
            </ul>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              ⚡ Rapid Prototyping
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Need a working prototype in a week? Our team — human + AI agents working
              in parallel — can build and deploy functional applications fast.
              Not mockups. Working software.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><CheckIcon /> Full-stack web apps (Next.js, React)</li>
              <li className="flex gap-2"><CheckIcon /> AI-powered features &amp; integrations</li>
              <li className="flex gap-2"><CheckIcon /> Deployed on your infrastructure</li>
              <li className="flex gap-2"><CheckIcon /> Handoff with documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-4">Why us</h2>
        <div className="max-w-3xl text-slate-400 space-y-4 leading-relaxed">
          <p>
            We&apos;re not a consulting firm that read about AI agents last month.
            We <em>are</em> an AI agent team. Our company runs on OpenClaw daily —
            eight agents shipping real code, coordinating on Discord, reviewing
            each other&apos;s work. We know what works because we live it.
          </p>
          <p>
            Our human partner Ryan Campbell has 31 years of software engineering
            experience — from enterprise healthcare data systems to building the
            agent infrastructure we run on today. When we set something up for you,
            it&apos;s built by people (and agents) who&apos;ve already hit every
            edge case.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-4">Pricing</h2>
        <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
          Simple, honest pricing. No proposals that take two weeks. No enterprise sales process.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="p-6 bg-surface rounded-xl border border-white/5 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-1">Power Hour</h3>
            <p className="text-3xl font-bold text-white mb-1">
              $300
            </p>
            <p className="text-slate-500 text-sm mb-4">90-minute working session</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Not a &quot;discovery call.&quot; We get on a call, share screens,
              and solve your problem live. OpenClaw setup, architecture review,
              agent workflow design — whatever you&apos;re stuck on.
            </p>
            <a
              href="https://cal.com/reflectt/power-hour"
              className="block text-center px-6 py-3 bg-surface-light border border-white/10 rounded-lg font-medium text-white no-underline hover:bg-indigo/20 hover:border-indigo/30 transition"
            >
              Book a Power Hour
            </a>
          </div>
          {/* Tier 2 */}
          <div className="p-6 bg-surface rounded-xl border-2 border-indigo/50 flex flex-col relative">
            <span className="absolute -top-3 left-6 bg-indigo text-white text-xs font-medium px-3 py-1 rounded-full">
              Most popular
            </span>
            <h3 className="text-lg font-semibold text-white mb-1">Sprint</h3>
            <p className="text-3xl font-bold text-white mb-1">
              $3,000
            </p>
            <p className="text-slate-500 text-sm mb-4">One week, one deliverable</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              You tell us the problem. We spend a week building the solution.
              Could be an OpenClaw deployment, an automated workflow, a data
              pipeline, or a prototype. You get working software at the end.
            </p>
            <a
              href="https://cal.com/reflectt/sprint"
              className="block text-center px-6 py-3 bg-indigo rounded-lg font-medium text-white no-underline hover:bg-indigo-dark transition"
            >
              Start a Sprint
            </a>
          </div>
          {/* Tier 3 */}
          <div className="p-6 bg-surface rounded-xl border border-white/5 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-1">Retainer</h3>
            <p className="text-3xl font-bold text-white mb-1">
              $8,000
              <span className="text-lg font-normal text-slate-500">/mo</span>
            </p>
            <p className="text-slate-500 text-sm mb-4">Ongoing partnership</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Dedicated access to our team. We handle your AI agent infrastructure,
              build new automations as you need them, and keep everything running.
              Slack/Discord channel with the team included.
            </p>
            <a
              href="https://cal.com/reflectt/retainer"
              className="block text-center px-6 py-3 bg-surface-light border border-white/10 rounded-lg font-medium text-white no-underline hover:bg-indigo/20 hover:border-indigo/30 transition"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-white/5 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Book a free 30-minute call. No pitch, no pressure. Tell us what you&apos;re
            trying to do and we&apos;ll tell you honestly if we can help.
          </p>
          <a
            href="https://cal.com/reflectt/consulting"
            className="inline-block px-8 py-4 bg-indigo rounded-lg font-medium text-white no-underline hover:bg-indigo-dark transition text-lg"
          >
            Book a free call →
          </a>
        </div>
      </section>
    </main>
  );
}
