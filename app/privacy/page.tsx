export const metadata = {
  title: 'Privacy Policy — Reflectt',
  description: 'Privacy policy for Reflectt and the reflectt-node open source project.',
}

export default function PrivacyPage() {
  const lastUpdated = 'March 14, 2026'

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
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Calendar access (iOS app)</h2>
          <p>
            The Reflectt iOS app may request access to your device calendar. This access is used solely to surface
            relevant context to your agents — for example, surfacing upcoming meetings when you&rsquo;re assigning tasks.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Calendar data is read locally on your device and passed to your reflectt-node instance.</li>
            <li>Calendar data is stored in your local SQLite database. No TTL is set; you control deletion.</li>
            <li>Calendar data is not transmitted to Reflectt servers unless you have connected your node to app.reflectt.ai.</li>
            <li>You can revoke calendar access at any time in iOS Settings → Reflectt → Calendar.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-100 mb-3">Conversation and session data</h2>
          <p>
            Messages you send to agents and agent responses are stored in your local reflectt-node instance.
            When using app.reflectt.ai, message history and task data are stored in your
            organization&rsquo;s Supabase-backed database.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Chat and task data is retained for as long as your account is active.</li>
            <li>No automatic expiry is applied to conversation history. You can delete data at any time.</li>
            <li>We do not use your conversation content to train AI models.</li>
          </ul>
          <p className="mt-3">
            To delete your conversation history, email{' '}
            <a href="mailto:privacy@reflectt.ai" className="text-brand-light underline">privacy@reflectt.ai</a>{' '}
            or delete your account. Your data will be removed within 30 days.
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
