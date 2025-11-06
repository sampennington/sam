import Link from 'next/link'
import Image from 'next/image'

export default function LocalizingVeedPost() {
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-32 py-20 max-w-5xl mx-auto text-black ">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors mb-8 group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium">Back to home</span>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
          How I Led Localisation at VEED
        </h1>
        <p className="text-lg text-gray-500">January 15, 2024</p>
        <p className="text-xl text-black mt-4">
          Leading a cross-functional localisation project across 8+ codebases and 10+ teams, resulting in 8–18% revenue uplift in international markets.
        </p>
      </div>

      <article className="prose prose-lg max-w-none text-black">
        <p>Leadership announced that we'd be localising the entire platform the following quarter.</p>
        <p>It was clearly going to be an impactful project - but it had no real plan or ownership yet.</p>
        <p>So my team stepped up to lead the effort, creating a clear point of contact, setting direction, and making sure we actually got it shipped.</p>

        <div className="my-12">
          <Image
            src="/images/veed-localized.png"
            alt="VEED localized in multiple languages"
            width={1200}
            height={800}
            className="rounded-lg shadow-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">VEED localized in multiple languages</p>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">The Challenges</h2>

        <p>This wasn't a super-technical project - at least not at first glance.</p>
        <p>We just needed to serve a different set of copy depending on language, right?</p>

        <p>The tricky parts were going to be:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Communication</strong> – The project touched 8+ codebases and 10+ teams. Everyone needed to stay in sync and keep their own roadmaps aligned.</li>
          <li><strong>Maintaining translation quality</strong> – Automated translations… were they going to be good enough? Probably not.</li>
          <li><strong>Measuring impact</strong> – We needed this to all go live simultaneously, and make sure it actually moves the needle.</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">Execution</h2>

        <p>We started from scratch: choosing tools, setting up infrastructure, and building the workflows.</p>
        <p>We landed on <strong>Lokalise</strong>, <strong>i18next</strong>, and a few <strong>custom tools</strong> we built along the way.</p>

        <p>Everything was <strong>feature-flagged</strong>, since we couldn't launch localisation half-done.</p>
        <p>Half the team went on a mission to extract and translate every bit of copy they could find (painfully manual work... if only we'd had Cursor back then 😅).</p>
        <p>The rest set up language detection, selectors, and tooling.</p>

        <hr className="my-8" />

        <h3 className="text-2xl font-bold mt-8 mb-3 text-black">Our First Issue: Untranslated Keys Slipping Through</h3>

        <p>Pretty quickly, we hit our first issue - <strong>untranslated keys</strong>.</p>
        <p>Occasionally, devs would see things like <code className="bg-gray-300 px-2 py-1 rounded text-sm">{`{{hero.button.copy}}`}</code>. Not good, and definitely not something we could ship.</p>

        <p>We realised <code className="bg-gray-300 px-2 py-1 rounded text-sm">i18next</code>'s <code className="bg-gray-300 px-2 py-1 rounded text-sm">defaultValue</code> doesn't help if you already have <em>some</em> translations (e.g. English but not German). In that case, it just shows the key.</p>
        <p>This was only going to happen more as more teams got involved, so we built our first internal tool.</p>

        <h4 className="text-xl font-bold mt-6 mb-2 text-black">🛠️ Translation Validator GitHub Action</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Runs on every PR</li>
          <li>Validates that all translation keys in the JSON files actually exist</li>
          <li>If a key is missing, the action fails and the PR can't be merged</li>
        </ul>

        <p>This immediately stopped broken strings from hitting production. No more handlebars 🎉</p>

        <hr className="my-8" />

        <h3 className="text-2xl font-bold mt-8 mb-3 text-black">Keeping Everyone Informed</h3>

        <p><strong>Constant communication</strong> was absolutely vital:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regularly liaising with teams to decide which areas we'd tackle next</li>
          <li>Checking when they were free to test - translating a feature mid-refactor never ends well</li>
          <li>Sending <strong>twice-weekly updates</strong> to leadership to keep everyone aligned</li>
        </ul>

        <p>This was a real cross-team effort, and staying proactive with communication was the only reason it went smoothly.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">Testing, Launch & Results</h2>

        <p>We decided not to launch anything until the whole product was complete - seeing half-English, half-Spanish content obviously wouldn't work.</p>
        <p>We also ran our favourite pre-launch ritual: a <strong>testing party</strong> 🎉 Everyone jumps on a call, tries to break things, and makes sure it's good to go.</p>

        <p>Then we rolled it out as an <strong>A/B test</strong>, starting small and gradually ramping up to a 50/50 split over a few days, monitoring metrics as we went.</p>
        <p>Once we hit significance, the results were huge: <strong>double-figure uplift in exports and revenue</strong> across our core language markets (Spanish, French, and a few others).</p>

        <p>We kept adding new languages over the following weeks - thanks to the way it was built, adding a new one took about 20 minutes.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">What Came Next</h2>

        <p>Of course, new problems popped up once localisation was live:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Developers were slowed down needing translations for every PR</li>
          <li>Occasionally someone forgot, leaving bits of English copy on translated pages</li>
          <li>Lokalise was pay-per-seat, and we definitely didn't want to buy 60+ accounts</li>
        </ul>

        <p>So I built our <strong>second custom tool</strong>.</p>

        <h4 className="text-xl font-bold mt-6 mb-2 text-black">🤖 Auto-Translation PR Bot</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Listened for PRs and copy changes via GitHub & Lokalise webhooks</li>
          <li>Triggered a Cloud Function to request translations from Lokalise</li>
          <li>Used the Lokalise and GitHub APIs to open PRs automatically with the translated copy</li>
        </ul>

        <p>No more manual steps - devs didn't need to log into Lokalise or request anything. It just worked.</p>

        <p>Developer experience went way up 🚀</p>
        <p>It also meant anyone could edit translations directly in Lokalise, and PRs would appear automatically in GitHub. Super simple.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">Final Thoughts</h2>

        <p>This wasn't the hardest project technically, but it was one of the most cross-functional and communication-heavy ones I've led.</p>

        <p>Success here was really about <strong>ownership, clarity, and relentless communication</strong> - and maybe a few too many testing parties.</p>

        <p>We only managed to do good-enough, automated translations. To get really good translations you really need to get a human with context of each key, we simply didn't have time for that.</p>
      </article>
    </section>
  )
}
