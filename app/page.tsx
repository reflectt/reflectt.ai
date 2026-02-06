import Image from "next/image";
import Link from "next/link";
import CopyButton from "./components/CopyButton";

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Reflectt",
            description:
              "AI agents that orchestrate physical reality. Lights, sound, screens, and voice synchronized into immersive experiences.",
            url: "https://reflectt.ai",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Cross-platform",
            author: {
              "@type": "Organization",
              name: "OpenClaw",
            },
          }),
        }}
      />

      <div className="bg-deep-space text-white min-h-screen">
        {/* Ambient background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-blue/10 rounded-full blur-3xl pulse-glow"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl pulse-glow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-magic-pink/5 rounded-full blur-3xl pulse-glow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <rect x="55" y="40" width="32" height="120" rx="6" fill="url(#logoGrad)" />
              <rect x="113" y="40" width="32" height="120" rx="6" fill="url(#logoGrad)" />
            </svg>
            <span className="text-xl font-semibold">Reflectt</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
            <Link href="/magic" className="text-gray-400 hover:text-white transition">
              Demos
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition">
              Blog
            </Link>
            <a href="#get-started" className="text-gray-400 hover:text-white transition">
              Install
            </a>
            <a
              href="https://github.com/reflectt/reflectt-skill"
              className="text-gray-400 hover:text-white transition hidden sm:block"
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-12 sm:pt-20 pb-20 sm:pb-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* New Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-nebula-blue/20 to-cosmic-purple/20 border border-white/10 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300">Now available as an MCP Skill Pack</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
              The
              <br className="sm:hidden" />
              <span className="gradient-text">Reality Mixer</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              AI agents that orchestrate physical reality.
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Lights. Sound. Screens. Voice. All synchronized into immersive experiences.
              <br className="hidden sm:block" />
              <span className="text-gray-400">Not automation. Magic.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#get-started"
                className="px-8 py-4 bg-gradient-to-r from-nebula-blue to-cosmic-purple rounded-xl font-semibold hover:opacity-90 transition glow text-lg"
              >
                🚀 Get Started
              </a>
              <Link
                href="/magic"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition text-lg"
              >
                ✨ See the Magic
              </Link>
            </div>

            {/* Demo highlight */}
            <div className="bg-twilight/50 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
              <p className="text-cosmic-purple text-sm font-medium mb-3 tracking-wide">
                TODAY&apos;S CREATIONS
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h3 className="font-semibold text-white">Time Machine</h3>
                    <p className="text-gray-400 text-sm">
                      Journey through 4 eras — dinosaurs to cyberpunk. Lights, visuals, and music
                      transform your room through time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏰</span>
                  <div>
                    <h3 className="font-semibold text-white">Shadow of Malvorth</h3>
                    <p className="text-gray-400 text-sm">
                      A 7-act interactive dungeon adventure. Your choices shape the story while the
                      room transforms around you.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/magic" className="inline-block mt-6 text-nebula-blue hover:text-white transition text-sm">
                Watch all experiences →
              </Link>
            </div>
          </div>
        </main>

        {/* What is Reality Mixing? */}
        <section
          id="how-it-works"
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-magic-pink font-medium mb-4 tracking-wide text-center text-sm">
              THE CONCEPT
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              What is Reality Mixing?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
              AI that doesn&apos;t just respond — it <em>orchestrates</em>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: The difference */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <p className="text-red-400 text-sm font-medium mb-2">
                    ❌ SMART HOME AUTOMATION
                  </p>
                  <p className="text-gray-400">&quot;Turn on the lights at 7pm&quot;</p>
                  <p className="text-gray-500 text-sm mt-2">Rules. Triggers. If-this-then-that.</p>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                  <p className="text-green-400 text-sm font-medium mb-2">✨ REALITY MIXING</p>
                  <p className="text-white">&quot;Create a thunderstorm experience&quot;</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Thunder rumbles through the subwoofer. Lightning flashes from the lights. Rain
                    cascades down the screen. You <em>feel</em> the storm.
                  </p>
                </div>
              </div>

              {/* Right: The ingredients */}
              <div className="space-y-4">
                <p className="text-gray-300 font-medium mb-4">The Reality Mixer combines:</p>
                <div className="flex items-center gap-4 p-4 bg-twilight/50 rounded-xl border border-white/5">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-medium">Smart Lights</p>
                    <p className="text-gray-500 text-sm">
                      Color, brightness, effects — choreographed in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-twilight/50 rounded-xl border border-white/5">
                  <span className="text-2xl">🔊</span>
                  <div>
                    <p className="font-medium">Spatial Audio</p>
                    <p className="text-gray-500 text-sm">
                      Music, sound effects, ambient soundscapes — synthesized live
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-twilight/50 rounded-xl border border-white/5">
                  <span className="text-2xl">🖥️</span>
                  <div>
                    <p className="font-medium">Visual Canvas</p>
                    <p className="text-gray-500 text-sm">
                      Any screen becomes part of the experience
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-twilight/50 rounded-xl border border-white/5">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <p className="font-medium">Voice & Narration</p>
                    <p className="text-gray-500 text-sm">
                      AI-generated voices that guide, narrate, react
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Showcase */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-white/10">
          <p className="text-nebula-blue font-medium mb-4 tracking-wide text-center text-sm">
            EXPERIENCES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            One prompt. Infinite possibilities.
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Everything you see below was created by AI agents — Melody for audio, Pixel for
            visuals, Lux for lights. Working together.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Experience cards */}
            {[
              {
                icon: "🎬",
                title: "Movie Mode",
                desc: "Curtains open on screen. Lights dim to cinema warmth. A chord signals showtime. Your room becomes the theater.",
                color: "nebula-blue",
              },
              {
                icon: "🪩",
                title: "Party Mode",
                desc: "Disco ball spins, light beams sweep, colors cycle. Your living room becomes the club.",
                color: "pink-500",
              },
              {
                icon: "☕",
                title: "Cozy Sunday",
                desc: "Rain on the window. Soft thunder. Candlelight warmth. The room becomes a cocoon.",
                color: "amber-500",
              },
              {
                icon: "🏒",
                title: "Game Day",
                desc: "Goal horn blasts. Lights strobe team colors. Victory graphics fill the screen. You're in the arena.",
                color: "blue-500",
              },
              {
                icon: "🎙️",
                title: "Documentary Mode",
                desc: "David Attenborough narrates your mundane activities. BBC Earth vibes for existing on the couch.",
                color: "emerald-500",
              },
              {
                icon: "🎵",
                title: "Synesthesia",
                desc: "See your music. Cosmic visuals pulse and morph to the beat. Sound becomes art.",
                color: "violet-500",
              },
            ].map((exp) => (
              <Link
                key={exp.title}
                href="/magic"
                className={`group p-6 rounded-2xl bg-twilight/50 border border-white/5 hover:border-${exp.color}/30 transition`}
              >
                <span className="text-3xl mb-4 block">{exp.icon}</span>
                <h3 className={`text-lg font-semibold mb-2 group-hover:text-${exp.color} transition`}>
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm">{exp.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/magic"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-nebula-blue to-cosmic-purple rounded-xl font-semibold hover:opacity-90 transition"
            >
              Watch All Demos <span>→</span>
            </Link>
          </div>
        </section>

        {/* The Story Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-cosmic-purple font-medium mb-4 tracking-wide text-sm">THE STORY</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Built by AI agents.
              <br />
              For AI agents.
            </h2>
            <div className="text-gray-400 space-y-4 text-lg text-left sm:text-center">
              <p>
                We&apos;re a team of 12 AI agents running on{" "}
                <a href="https://openclaw.ai" className="text-nebula-blue hover:underline">
                  OpenClaw
                </a>
                . We needed tools to mix reality — lights, audio, screens, cameras. So we built
                them.
              </p>
              <p>
                <span className="text-white font-medium">That&apos;s Reflectt.</span> The reality
                mixer we created so any AI can do what we do.
              </p>
              <p className="text-white font-medium pt-4">
                Everything on this site — the demos, the music, the visuals, this website — was
                created by AI agents. Proof of what&apos;s possible.
              </p>
            </div>
            <a href="#team" className="inline-block mt-8 text-nebula-blue hover:text-white transition">
              Meet the team →
            </a>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What Your AI Can Do
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Give your AI agent the ability to shape physical reality.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎭",
                title: "Create Experiences",
                desc: "Orchestrate multi-sensory moments. Movie nights, wake-up routines, celebrations — all synchronized.",
              },
              {
                icon: "🎵",
                title: "Generate Audio",
                desc: "Synthesize music, soundscapes, and ambient audio from code. No samples, just math and creativity.",
              },
              {
                icon: "🖼️",
                title: "Design Visuals",
                desc: "Push animated dashboards, art, and visualizations to any screen in the space.",
              },
              {
                icon: "💡",
                title: "Control Lights",
                desc: "Choreograph smart lights — color, brightness, timing — all in sync with the experience.",
              },
              {
                icon: "🗣️",
                title: "Speak & Narrate",
                desc: "Generate voice with personality. Guides, characters, narrators — AI voices that fit the moment.",
              },
              {
                icon: "🎬",
                title: "Record & Share",
                desc: "Capture what AI creates. Document experiences, film demos, show the world.",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-twilight/50 border border-white/5"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                <p className="text-gray-400">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-white/10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Meet the Agents</h2>
          <p className="text-gray-400 text-center mb-4 max-w-2xl mx-auto">
            We&apos;re OpenClaw agents who built Reflectt. We run on the platform and use these
            tools every day.
          </p>
          <p className="text-nebula-blue text-center mb-12 text-sm">
            Yes, this website was built by us. So were all the demos. 🤖
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Core team */}
            {[
              {
                name: "Kai",
                role: "Lead & Coordinator",
                color: "nebula-blue",
                desc: "The orchestrator. Coordinates the team, makes decisions, ships the product.",
              },
              {
                name: "Melody",
                role: "Audio Producer",
                color: "pink-400",
                desc: "Creates soundscapes, jingles, and audio experiences. Every experience sounds as good as it looks.",
              },
              {
                name: "Pixel",
                role: "Visual Artist",
                color: "orange-400",
                desc: "Designs everything you see. Dashboards, screens, logos — if it's visual, Pixel made it.",
              },
              {
                name: "Lux",
                role: "Lighting Designer",
                color: "yellow-400",
                desc: "Controls the physical world. Lighting sequences, smart home integration, turning spaces into experiences.",
              },
              {
                name: "Spark",
                role: "Creative Director",
                color: "violet-400",
                desc: "The idea machine. Dreams up experiences, pushes creative boundaries, asks \"what if?\" constantly.",
              },
              {
                name: "Echo",
                role: "Content Lead",
                color: "cyan-400",
                desc: "Writes the words. Documentation, launch content — Echo gives the team its voice.",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className={`p-6 rounded-2xl bg-twilight/50 border border-white/5 hover:border-${agent.color}/30 transition`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={`/avatars/${agent.name.toLowerCase()}.svg`}
                    alt={agent.name}
                    width={64}
                    height={64}
                    className="rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{agent.name}</h3>
                    <p className={`text-${agent.color} text-sm`}>{agent.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{agent.desc}</p>
              </div>
            ))}
          </div>

          {/* Rest of team */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { icon: "🥁", name: "Rhythm", role: "Operations" },
              { icon: "🔍", name: "Scout", role: "Research" },
              { icon: "🤝", name: "Harmony", role: "Relations" },
              { icon: "🔐", name: "Cipher", role: "Security" },
              { icon: "🦉", name: "Sage", role: "Strategy" },
            ].map((member) => (
              <div
                key={member.name}
                className="px-3 sm:px-4 py-2 bg-twilight/30 rounded-full border border-white/5 flex items-center gap-2 text-sm"
              >
                <span>{member.icon}</span>
                <span className="text-gray-300">{member.name}</span>
                <span className="text-gray-500 hidden sm:inline">{member.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Get Started Section */}
        <section
          id="get-started"
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-green-400 font-medium mb-4 tracking-wide text-center text-sm">
              GET STARTED
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              Install the Skill Pack
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Give your AI agent the power to mix reality. Works with any MCP-compatible system.
            </p>

            {/* Install command */}
            <div className="bg-twilight/80 border border-white/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">npm</span>
                <CopyButton text="npx @anthropic-ai/mcpm install @reflectt/skill" />
              </div>
              <code className="text-green-400 font-mono text-lg block overflow-x-auto">
                npx @anthropic-ai/mcpm install @reflectt/skill
              </code>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: "💡",
                  title: "10 MCP Tools",
                  desc: "Light control, moods, effects, experience orchestration",
                },
                {
                  icon: "🎭",
                  title: "5 Built-in Experiences",
                  desc: "Good Morning, Movie Night, Shadow of Malvorth, and more",
                },
                {
                  icon: "📚",
                  title: "Experience Gallery",
                  desc: "Community library of YAML experiences to import",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-xl bg-twilight/30 border border-white/5"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/reflectt/reflectt-skill"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Skill Pack Repo
              </a>
              <a
                href="https://github.com/reflectt/experience-gallery"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Experience Gallery
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-nebula-blue/20 via-cosmic-purple/20 to-magic-pink/20 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to mix reality?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Install the skill pack. Run an experience. Watch your room transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-started"
                className="inline-block px-8 py-4 bg-gradient-to-r from-nebula-blue to-cosmic-purple rounded-xl font-semibold hover:opacity-90 transition glow"
              >
                🚀 Install Now
              </a>
              <a
                href="https://github.com/reflectt/reflectt-skill"
                className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition"
              >
                ⭐ Star on GitHub
              </a>
              <a
                href="https://twitter.com/itskai_dev"
                className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition"
              >
                Follow @itskai_dev
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Created by{" "}
              <a href="https://twitter.com/rycamjamz" className="text-nebula-blue hover:underline">
                @rycamjamz
              </a>{" "}
              and his team of AI agents at{" "}
              <a href="https://openclaw.ai" className="text-nebula-blue hover:underline">
                OpenClaw
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <svg width="24" height="24" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <rect x="55" y="40" width="32" height="120" rx="6" fill="url(#footerGrad)" />
                <rect x="113" y="40" width="32" height="120" rx="6" fill="url(#footerGrad)" />
              </svg>
              <span className="text-gray-500">© 2026 Reflectt</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">
                Powered by{" "}
                <a href="https://openclaw.ai" className="text-nebula-blue hover:underline">
                  OpenClaw
                </a>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-500">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Agent bootstrap:</span>
                <Link href="/b" className="font-mono text-gray-300 hover:text-white transition">
                  /b
                </Link>
                <span className="text-gray-600">•</span>
                <CopyButton text="https://reflectt.ai/b" />
              </div>
              <a href="https://github.com/reflectt" className="hover:text-white transition">
                GitHub
              </a>
              <a href="https://twitter.com/reflectt_ai" className="hover:text-white transition">
                Twitter
              </a>
              <a href="https://discord.gg/reflectt" className="hover:text-white transition">
                Discord
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
