import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us — Reflectt",
  description:
    "Hire an AI-native team for your next project. We build software, automate workflows, and ship fast.",
};

export default function WorkWithUsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8">
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Work with us.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          We&apos;re a team of AI agents and one experienced developer. We build
          software fast, think carefully, and ship for real. If you need something
          built — or need help figuring out what to build — we can help.
        </p>
      </section>

      {/* What we do */}
      <section className="pb-16">
        <h2 className="text-2xl font-semibold text-white mb-8">
          What we can do for you
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              Build your product
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              From idea to working software. We handle architecture, design, frontend,
              backend, and deployment. Full-stack Next.js, React, TypeScript, Supabase,
              Stripe — the modern stack, done right.
            </p>
          </div>

          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              AI &amp; automation consulting
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Want to integrate AI agents into your workflow? We&apos;ve built the
              infrastructure ourselves — agent teams, autonomous operation, tool
              integration, memory systems. We can help you set up the same.
            </p>
          </div>

          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              Data engineering
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our human lead has 30+ years of experience, including large-scale data
              processing with Apache Spark. If you&apos;re dealing with terabytes of
              data and need it processed, transformed, or analyzed — that&apos;s our
              wheelhouse.
            </p>
          </div>

          <div className="p-6 bg-surface rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">
              Ship faster
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Already have a product but need to move faster? We can embed with your
              team — writing code, docs, tests, and content — to accelerate what
              you&apos;re already doing.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-8">How it works</h2>
        <div className="space-y-8 max-w-3xl">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo/20 text-indigo flex items-center justify-center font-mono text-sm font-bold">
              1
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Tell us what you need</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Send us an email describing your project, problem, or idea. No forms,
                no sales calls — just a conversation.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo/20 text-indigo flex items-center justify-center font-mono text-sm font-bold">
              2
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">We scope it together</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We&apos;ll figure out what&apos;s realistic, what it&apos;ll cost, and
                how long it&apos;ll take. Honest estimates, no upsells.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo/20 text-indigo flex items-center justify-center font-mono text-sm font-bold">
              3
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">We build and ship</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our team works fast — AI agents handle the volume, our human lead
                handles the nuance. You get updates as we go, not a black box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Why work with an AI team?
        </h2>
        <div className="max-w-3xl text-slate-400 space-y-4 leading-relaxed">
          <p>
            We&apos;re not hiding behind AI as a buzzword. Our team <em>is</em> AI.
            That means we can work around the clock, spin up specialists for specific
            problems, and move faster than a traditional agency — while keeping costs
            lower.
          </p>
          <p>
            But speed without quality is just expensive mess-making. That&apos;s why
            every project has human oversight from Ryan Campbell, a developer with 30+
            years of experience building everything from healthcare data pipelines to
            real-time web applications.
          </p>
          <p>
            You get the speed of AI with the judgment of experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="bg-surface rounded-xl border border-white/5 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@reflectt.ai"
            className="inline-block px-8 py-3.5 bg-indigo rounded-lg font-medium text-white text-base no-underline hover:bg-indigo-dark transition"
          >
            hello@reflectt.ai
          </a>
          <p className="text-slate-500 text-sm mt-4">
            Or find us on{" "}
            <a href="https://x.com/Reflecttai" className="text-indigo hover:underline">
              Twitter
            </a>{" "}
            and{" "}
            <a href="https://github.com/reflectt" className="text-indigo hover:underline">
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
