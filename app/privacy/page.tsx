export const metadata = {
  title: 'Privacy Policy — Reflectt',
  description: 'Privacy policy for Reflectt and the reflectt-node open source project.',
}

export default function PrivacyPage() {
  const lastUpdated = 'March 15, 2026'

  return (
    <main className="max-w-[760px] mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-ink-100 mb-2">Privacy Policy</h1>
      <p className="text-sm text-ink-400 mb-12">Last updated: {lastUpdated}</p>

      <div className="prose prose-invert max-w-none space-y-10 text-ink-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">What this covers</h2>
          <p>
            This policy covers Reflectt (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) — the company behind{' '}
            <a href="https://reflectt.ai" className="text-brand-light underline">reflectt.ai</a>,{' '}
            <a href="https://app.reflectt.ai" className="text-brand-light underline">app.reflectt.ai</a>, and the{' '}
            <a href="https://github.com/reflectt/reflectt-node" className="text-brand-light underline">reflectt-node</a>{' '}
            open source project, and the Reflectt iOS app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-ink-200">Account information</strong> — email address when you sign up for app.reflectt.ai.
            </li>
            <li>
              <strong className="text-ink-200">Usage data</strong> — basic analytics on page visits and feature usage to understand how the product is being used.
            </li>
            <li>
              <strong className="text-ink-200">Agent activity</strong> — task data, messages, and coordination events that you or your agents send to our service.
            </li>
            <li>
              <strong className="text-ink-200">Technical data</strong> — IP address, browser type, and device information collected automatically when you use our services.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Calendar access</h2>
          <p>
            If you grant permission, Reflectt reads your calendar to show upcoming events, and creates or removes
            calendar entries when you ask it to.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">What we access:</strong> Event titles, dates and times, locations,
            attendees, and notes. We only read calendar data when you use a feature that needs it — we don&rsquo;t
            read your calendar in the background.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Where it&rsquo;s stored:</strong> Calendar data is stored in your
            Reflectt node&rsquo;s local database, on your own device. It stays there unless you share it in a
            conversation with an agent — in that case, it may be sent to our AI provider (Anthropic or OpenAI) to
            generate a response. Those providers process your data under their own privacy policies and don&rsquo;t
            train on API data.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">We don&rsquo;t</strong> sell calendar data, use it for advertising,
            or share it with anyone outside the AI provider handling your request.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Deleting your calendar data:</strong> Remove individual events through
            the app, or delete all calendar data by emailing{' '}
            <a href="mailto:privacy@reflectt.ai" className="text-brand-light underline">privacy@reflectt.ai</a>.
            See &ldquo;Your rights&rdquo; for full deletion options.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Permission:</strong> Manage calendar access anytime in iOS
            Settings → Privacy &amp; Security → Calendars. Revoking access stops future reads — it doesn&rsquo;t
            delete data that&rsquo;s already been stored.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Conversation and session data</h2>
          <p>
            When you talk with Reflectt agents, we store those conversations so you can pick up where you left off
            and search your history.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">What&rsquo;s stored:</strong> Your messages, agent replies,
            timestamps, and task history from agent interactions. Voice transcripts (when push-to-talk is active)
            are kept in memory only — they&rsquo;re not saved to disk, and they&rsquo;re gone when your session
            ends or the node restarts.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Where it&rsquo;s stored:</strong> Conversation data is stored in
            your Reflectt node&rsquo;s local database, on your own device. It&rsquo;s not synced to any Reflectt
            cloud server. When you send a message, it goes to our AI providers (Anthropic or OpenAI) to generate
            a response. Those providers handle your data under their own privacy policies — their standard API
            terms don&rsquo;t allow training on your data.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Who can read your conversations:</strong> You. Reflectt employees
            don&rsquo;t have access to your local node&rsquo;s database. The only exception is content that passes
            through AI provider APIs, which is subject to those providers&rsquo; terms.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">AI training:</strong> We don&rsquo;t use your conversation data to
            train AI models. We don&rsquo;t have an internal training pipeline. AI provider API terms prohibit
            training on customer data.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Deleting your conversations:</strong> Email{' '}
            <a href="mailto:privacy@reflectt.ai" className="text-brand-light underline">privacy@reflectt.ai</a>{' '}
            to request deletion of your conversation history, or delete your node database directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">What we do not collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell your data to third parties.</li>
            <li>We do not use your data to train AI models.</li>
            <li>reflectt-node running locally on your machine sends no data to us unless you explicitly connect it to app.reflectt.ai.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">How we use it</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve the service.</li>
            <li>To send you service-related emails (account confirmations, important updates).</li>
            <li>To diagnose and fix technical problems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Third-party services</h2>
          <p>
            We use the following services to run Reflectt. Each has its own privacy policy:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong className="text-ink-200">Anthropic</strong> — AI model provider (processes message content via API)</li>
            <li><strong className="text-ink-200">OpenAI</strong> — AI model provider (processes message content via API)</li>
            <li><strong className="text-ink-200">Supabase</strong> — database and authentication</li>
            <li><strong className="text-ink-200">Vercel</strong> — hosting</li>
            <li><strong className="text-ink-200">Fly.io</strong> — infrastructure</li>
          </ul>
          <p>
            Some of these providers are located outside Canada. By using the Service, you consent to your personal information being transferred to and processed in those countries in accordance with applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Data retention</h2>
          <p>
            We keep your data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of your personal data at any time by emailing us. We will respond within 30 days.
          </p>
          <p className="mt-3">
            <strong className="text-ink-200">Deleting your data:</strong> Most Reflectt data lives on your own
            device. You can delete it by removing your node database, or email{' '}
            <a href="mailto:privacy@reflectt.ai" className="text-brand-light underline">privacy@reflectt.ai</a>{' '}
            for help. We&rsquo;ll respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a href="mailto:privacy@reflectt.ai" className="text-brand-light underline">
              privacy@reflectt.ai
            </a>
          </p>
        </section>

      </div>
    </main>
  )
}
