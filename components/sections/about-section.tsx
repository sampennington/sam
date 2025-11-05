export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm a senior software engineer with over 8 years of experience building
              scalable, user-centric web applications. My passion lies in creating
              intuitive interfaces that solve real problems.
            </p>
            <p className="text-gray-700 mb-4">
              I specialize in modern JavaScript frameworks, performance optimization,
              and bridging the gap between design and development.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-700">Front-end architecture and development</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-700">UI/UX implementation and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-700">Performance tuning and accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-700">Team leadership and mentoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-700">Design system development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-200 rounded-full">JavaScript/TypeScript</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">React</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Vue.js</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Node.js</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">CSS/Tailwind</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">GraphQL</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">REST APIs</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Git</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Testing (Jest, Cypress)</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">CI/CD</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Figma</span>
          </div>
        </div>
      </div>
    </section>
  )
}
