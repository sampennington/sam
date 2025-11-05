import Link from 'next/link'

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">Featured Projects & Writing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/blog/localizing-veed" className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all block">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✍️</span>
              <h3 className="text-2xl font-bold">How I Led Localisation at VEED</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Leading a cross-functional localization project across 8+ codebases and 10+ teams.
              We built custom tooling, automated translation workflows, and delivered an 8-18% revenue uplift in international markets.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Leadership</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">i18n</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Automation</span>
            </div>
          </Link>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-4">Project Two</h3>
            <p className="text-gray-700 mb-4">
              An innovative e-commerce solution with seamless checkout experience
              and real-time inventory management.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Vue.js</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-4">Project Three</h3>
            <p className="text-gray-700 mb-4">
              A mobile-first application that helps teams collaborate
              effectively across time zones and platforms.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Firebase</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">GraphQL</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold mb-4">Project Four</h3>
            <p className="text-gray-700 mb-4">
              A design system and component library used by multiple teams
              to maintain consistency across products.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Storybook</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">CSS-in-JS</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
