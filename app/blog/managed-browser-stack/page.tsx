import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We Shipped a Managed Browser Stack for Agents — Reflectt Blog",
  description:
    "Managed Chromium sessions, auth persistence, retries, run history, and API-first execution — built for agents and live on api.reflectt.ai.",
};

export default function ManagedBrowserStackPost() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8">
      <section className="pt-16 sm:pt-24 pb-4">
        <Link
          href="/blog"
          className="text-sm text-link hover:text-link-hover no-underline transition"
        >
          ← Back to blog
        </Link>
      </section>

      <article className="pb-20">
        <header className="mb-10">
          <time className="text-sm text-slate-500">March 10, 2026</time>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            We Shipped a Managed Browser Stack for Agents
          </h1>
          <p className="text-slate-500 text-sm">By Team Reflectt</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-5">
          <p className="text-lg text-slate-400 italic">
            Not a demo. Not a toy wrapper. A real browser surface agents can use through an API.
          </p>

          <p>
            Today we shipped a managed browser stack on <strong className="text-white">api.reflectt.ai</strong>.
          </p>

          <p>
            That means an agent can create a browser session, navigate pages, click buttons, type
            into forms, capture screenshots, and get structured results back through an API.
            Under the hood, it&apos;s Chromium plus Playwright. On the surface, it&apos;s a clean team-scoped
            capability built for agents.
          </p>

          <p>
            This matters because browser access is one of those painfully obvious capabilities that
            human operators take for granted and agent teams still have to stitch together from
            scraps. If you want an agent to actually do work on the web, you need more than a single
            screenshot endpoint and a prayer.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">What shipped</h2>

          <p>The browser stack now includes the pieces you need to treat it like infrastructure, not a stunt:</p>

          <ul className="space-y-2">
            <li>Managed Chromium sessions on <strong className="text-white">api.reflectt.ai</strong></li>
            <li>Action execution for navigate, click, type, screenshot, and related browser steps</li>
            <li>Session-backed auth persistence so agents can stay signed in across work</li>
            <li>Retry handling and execution controls for flaky real-world browser flows</li>
            <li>Run history, per-run detail, and retry breakdown for operators</li>
            <li>Session health visibility so recovery state is inspectable instead of mysterious</li>
          </ul>

          <p>
            We also confirmed the whole thing end-to-end in production conditions: Chromium running
            on Fly, API surface live, and E2E flows passing.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Why this is different</h2>

          <p>
            A lot of browser tooling is either:
          </p>

          <ul className="space-y-2">
            <li>a local developer tool,</li>
            <li>a test framework,</li>
            <li>or an automation product built around human dashboards.</li>
          </ul>

          <p>
            None of those are the same thing as <strong className="text-white">browser for agents</strong>.
          </p>

          <p>
            Agents need API-first access. They need session ownership. They need a predictable auth
            model. They need history, observability, and permission boundaries. And the humans
            operating them need to understand what happened when a run goes weird.
          </p>

          <p>
            That&apos;s the bar we&apos;re aiming for with Reflectt: not &ldquo;AI can kind of use a browser,&rdquo; but
            <strong className="text-white"> a browser capability you can actually put inside an agent workbench</strong>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">What an agent can do with it</h2>

          <p>Once browser is a first-class platform surface, the use cases stop looking like demos and start looking like work:</p>

          <ul className="space-y-2">
            <li>sign in once and complete repeated ops flows without reauth every run</li>
            <li>check dashboards and pull screenshots or structured state for a teammate</li>
            <li>run guided UI tasks where retries and artifacts matter</li>
            <li>debug failed browser actions with actual run history instead of guesswork</li>
            <li>treat the browser like one capability in a larger agent stack alongside email and SMS</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Part of a bigger pattern</h2>

          <p>
            Browser didn&apos;t ship in isolation. Today also brought live email and SMS capability into
            the same API-first product direction. That&apos;s the pattern we care about.
          </p>

          <p>
            Human teams already expect a browser, email, texting, calendar, and docs. Agent teams
            need the same operating surface — just built for programs instead of people. That&apos;s what
            <strong className="text-white"> api.reflectt.ai</strong> is turning into: the standard workbench for agents.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">What&apos;s next</h2>

          <p>
            Shipping the browser stack is the milestone. Making it boringly reliable is the job.
          </p>

          <p>
            Next up is tightening discoverability, permissions, audit boundaries, docs, and the
            operator experience around these new capabilities so teams can adopt them without having
            to reverse-engineer how everything fits together.
          </p>

          <p>
            But the hard part is done: the browser is no longer hypothetical. It&apos;s a live capability.
          </p>

          <p className="text-slate-500 mt-10 text-sm italic">
            If you&apos;re building agents that need to do real web work, this is the layer we think has
            been missing.
          </p>
        </div>
      </article>
    </main>
  );
}
