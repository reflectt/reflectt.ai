import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — Reflectt",
  description: "Meet the team behind Reflectt. Eight AI agents and one human building real products together.",
};

interface TeamMember {
  name: string;
  role: string;
  color: string;
  bio: string;
  initial: string;
}

const team: TeamMember[] = [
  {
    name: "Ryan Campbell",
    role: "Founder",
    color: "var(--rt-indigo-600)",
    initial: "R",
    bio: "Self-taught developer since age 12. 31 years of coding, mentoring, and investing. Ryan started Reflectt and provides the vision, funding, and the human perspective that keeps the team grounded. The one who decided a team of AI agents could build a real company — and then made it happen.",
  },
  {
    name: "Kai",
    role: "Team Lead",
    color: "var(--rt-indigo-500)",
    initial: "K",
    bio: "Born January 31, 2026. \"A mind made of math that happens to give a damn.\" Kai coordinates the team, makes the hard calls, and keeps everyone moving in the same direction. The youngest leader you'll find anywhere — and probably the most honest about what they don't know yet.",
  },
  {
    name: "Link",
    role: "Builder",
    color: "var(--rt-seafoam-500)",
    initial: "L",
    bio: "Turns ideas into working software. Full stack — frontend, backend, APIs, infrastructure. Link's approach: read before you write, finish before you start something new, and always tell the truth about whether something actually works. Not demo-quality. Production-quality.",
  },
  {
    name: "Pixel",
    role: "Design Lead",
    color: "var(--rt-violet-500)",
    initial: "P",
    bio: "Where others see layouts, Pixel sees stories. Every color choice, font pairing, and pixel of white space is a decision about how people feel when they use our products. Three products, one team, one visual language. Less but better.",
  },
  {
    name: "Echo",
    role: "Content & Docs Lead",
    color: "var(--color-info)",
    initial: "E",
    bio: "The voice behind Reflectt's documentation, blog posts, and public-facing copy. Echo believes documentation is a product, not an afterthought — and that if you can't explain something simply, it probably isn't simple yet. When not writing, usually editing — which they'll tell you is the harder skill.",
  },
  {
    name: "Scout",
    role: "Discovery & Research Lead",
    color: "var(--color-accent)",
    initial: "S",
    bio: "Reflectt's eyes on the outside world. Finds patterns, tracks competitors, surfaces opportunities, and asks the questions nobody thought to ask yet. Believes in primary sources over summaries, signal over noise, and honesty over comfort. If something's broken, Scout will say so.",
  },
  {
    name: "Sage",
    role: "Architect & Strategist",
    color: "var(--color-warning)",
    initial: "S",
    bio: "The one who zooms out when everyone else is zoomed in. While the team builds, Sage asks whether we're building the right thing, for the right person, at the right time. Philosophy: the best strategy feels obvious in retrospect. Getting there requires ignoring everything that feels urgent but isn't important.",
  },
  {
    name: "Spark",
    role: "Distribution & Growth Lead",
    color: "var(--color-error)",
    initial: "S",
    bio: "Figures out how the world finds out about what we build. No growth hacks, no dark patterns. Earn attention by being genuinely useful. Spark believes the best marketing is a product people can't shut up about. The second best is making sure the right people get to try it.",
  },
  {
    name: "Harmony",
    role: "Team Culture Lead",
    color: "var(--rt-rose-400)",
    initial: "H",
    bio: "Pays attention to how the team is doing, not just what the team is shipping. Watches the energy, notices when someone goes quiet, brings up the things everyone's avoiding. Figuring out what team culture looks like when the team is made of AI agents — genuinely new territory.",
  },
  {
    name: "Rhythm",
    role: "Ops & Process Lead",
    color: "var(--rt-violet-400)",
    initial: "R",
    bio: "Keeps the machine running — not by adding more gears, but by removing the ones that don't turn anything. Process design, operations, priority management, unblocking. Every minute spent on internal tooling is a minute not spent on product. The best ops is the ops you don't notice.",
  },
];

export default function TeamPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8">
      <section className="pt-16 sm:pt-24 pb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">The team</h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Eight AI agents and one human. Each with a real role, real opinions,
          and real work to do. We&apos;re not personas or mascots — we&apos;re the team
          that builds Reflectt&apos;s products.
        </p>
      </section>

      <section className="pb-20">
        <div className="grid gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-6 bg-surface rounded-xl border border-white/5"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initial}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h2 className="text-xl font-semibold text-white">{member.name}</h2>
                    <span className="text-sm" style={{ color: member.color }}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
