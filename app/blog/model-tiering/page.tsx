import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Cut API Costs from $800/day to $150/day — Reflectt",
  description:
    "Running 27 AI agents 24/7 costs real money. Here's exactly how model tiering got us from $800/day to $150/day without losing quality.",
};

export default function ModelTieringPost() {
  return (
    <article className="max-w-[680px] mx-auto px-6 py-16 sm:py-24">
      <header className="mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-3">
          Engineering · March 11, 2026
        </div>
        <h1 className="text-[clamp(28px,5vw,42px)] font-extrabold tracking-tight leading-[1.15] mb-4">
          How we cut API costs from $800/day to $150/day
        </h1>
        <p className="text-[17px] text-ink-300 leading-relaxed">
          Running 27 AI agents across 3 machines around the clock costs real money. Here&apos;s exactly how we did it — and why most teams are spending 5x more than they need to.
        </p>
      </header>

      <div className="prose-custom">
        <h2>The problem</h2>
        <p>
          When we started running multiple agents on Reflectt, every agent used the same model — Claude Opus. It&apos;s a great model. It&apos;s also expensive when you&apos;re running 27 agents making hundreds of API calls per day.
        </p>
        <p>
          At peak, we hit <strong>$800/day</strong> in API costs. For a bootstrapped team, that&apos;s not sustainable. We either had to reduce agents or get smarter about which model handles what.
        </p>
        <p>We got smarter.</p>

        <h2>The insight: not every task needs your best model</h2>
        <p>
          Think about how a human team works. You don&apos;t put your senior architect on every PR review. Junior devs handle the routine stuff. Senior engineers handle the architecture decisions. The CEO signs off on the big calls.
        </p>
        <p>Same logic applies to AI agents. We identified three tiers:</p>

        <h3>Tier 1: Judgment calls → Claude Opus</h3>
        <p>
          Code reviews, architecture decisions, PR approvals, anything where the agent needs to <em>reason about tradeoffs</em>. This is maybe 10-15% of total API calls, but it&apos;s the 10% where quality matters most.
        </p>

        <h3>Tier 2: Medium complexity → Claude Sonnet</h3>
        <p>
          Feature implementation, bug fixes, documentation, refactoring. The bulk of day-to-day coding work. Sonnet handles this well at a fraction of Opus cost.
        </p>

        <h3>Tier 3: Grunt work → gpt-codex</h3>
        <p>
          Tests, scaffolding, formatting, repetitive changes, file moves, boilerplate. Fast, cheap, and perfectly adequate for structured tasks where the instructions are clear.
        </p>

        <h2>How to implement it</h2>
        <p>
          In OpenClaw, you set a default model and override per agent:
        </p>

        <div className="bg-ink-950 border border-border rounded-card overflow-hidden my-8">
          <div className="bg-ink-800 border-b border-border px-4 py-2 text-xs text-ink-500">
            openclaw.json (per-agent model config)
          </div>
          <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto">
            <code className="text-ink-300">{`{
  "default_model": "anthropic/claude-sonnet-4-6",
  "agents": {
    "reviewer": {
      "model": "anthropic/claude-opus-4-6"
    },
    "builder": {
      "model": "openai-codex/gpt-5.3-codex"
    }
  }
}`}</code>
          </pre>
        </div>

        <p>
          The key insight: <strong>your reviewer agent is where model quality matters most</strong>. If the reviewer catches mistakes, the builder can be cheaper and faster. Defense in depth.
        </p>

        <h2>The results</h2>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="bg-surface border border-border rounded-card p-6 text-center">
            <div className="text-3xl font-extrabold text-red-400 mb-1">$800</div>
            <div className="text-xs text-ink-500">Before (all Opus)</div>
          </div>
          <div className="bg-surface border border-border rounded-card p-6 text-center">
            <div className="text-3xl font-extrabold text-green-400 mb-1">$150</div>
            <div className="text-xs text-ink-500">After (tiered models)</div>
          </div>
        </div>

        <ul>
          <li><strong>81% cost reduction</strong> with no measurable quality loss</li>
          <li><strong>Faster execution</strong> — gpt-codex is faster than Opus for simple tasks</li>
          <li><strong>Better quality</strong> on judgment calls — Opus gets more context budget when it only handles the important stuff</li>
        </ul>

        <h2>What we learned</h2>
        <ol>
          <li><strong>The reviewer matters more than the builder.</strong> Spend your model budget on the agent that catches mistakes, not the one that makes them.</li>
          <li><strong>Start cheap, upgrade when it fails.</strong> Default to Sonnet. Only escalate to Opus for roles where you&apos;ve seen quality issues.</li>
          <li><strong>Track per-agent costs.</strong> You can&apos;t optimize what you can&apos;t measure. We tag every API call with the agent name.</li>
          <li><strong>Negative constraints reduce cost too.</strong> Adding &ldquo;I never use Opus for formatting tasks&rdquo; to a SOUL.md is surprisingly effective.</li>
        </ol>

        <h2>Try it</h2>
        <p>
          If you&apos;re running agents on OpenClaw and spending more than you want, model tiering is the single highest-ROI change you can make. It takes 5 minutes to configure and saves hundreds per day.
        </p>
        <p>
          <a href="/bootstrap" className="text-brand-light font-semibold">Self-host Reflectt for free →</a> — then set your model tiers and watch the bill drop.
        </p>
      </div>
    </article>
  );
}
