import { Sidebar } from './components/sidebar'

export default function Page() {
  return (
    <>
      <Sidebar />

      <div className="flex-1 ml-24">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-32">
          <div className="max-w-5xl w-full">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              The design<span className="text-orange-500">©</span> partner for forward-thinking companies
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mt-12">
              Senior software engineer specializing in front-end development.
              I help build exceptional digital experiences that users love.
            </p>
            <button className="mt-8 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
          <div className="max-w-5xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4">Project One</h3>
                <p className="text-gray-700 mb-4">
                  A revolutionary platform that transforms how users interact with complex data.
                  Built with React, TypeScript, and modern web technologies.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Next.js</span>
                </div>
              </div>

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

        {/* About Section */}
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

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
          <div className="max-w-5xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-gray-700 mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">📧</span>
                    <a href="mailto:sam@example.com" className="text-lg hover:text-orange-500 transition-colors">
                      sam@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">💼</span>
                    <a href="https://linkedin.com" className="text-lg hover:text-orange-500 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🐙</span>
                    <a href="https://github.com" className="text-lg hover:text-orange-500 transition-colors">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🐦</span>
                    <a href="https://twitter.com" className="text-lg hover:text-orange-500 transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
          <div className="max-w-5xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">Curriculum Vitae</h2>

            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-lg">
              <div className="mb-12 text-center">
                <h3 className="text-4xl font-bold mb-2">Sam Pennington</h3>
                <p className="text-xl text-gray-600">Senior Software Engineer - Front-end Specialist</p>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">Experience</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xl font-bold">Senior Front-end Engineer</h5>
                      <p className="text-gray-600 mb-2">Tech Company Inc. • 2020 - Present</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Led front-end architecture for multiple high-traffic applications</li>
                        <li>Mentored junior developers and established coding standards</li>
                        <li>Improved page load times by 40% through optimization techniques</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold">Front-end Developer</h5>
                      <p className="text-gray-600 mb-2">Digital Agency • 2017 - 2020</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Built responsive web applications for diverse clients</li>
                        <li>Collaborated with designers to implement pixel-perfect UIs</li>
                        <li>Developed reusable component libraries</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">Education</h4>
                  <div>
                    <h5 className="text-xl font-bold">B.S. Computer Science</h5>
                    <p className="text-gray-600">University Name • 2013 - 2017</p>
                  </div>
                </div>

                <div className="pt-8 text-center">
                  <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                    <span>📥</span>
                    Download Full CV (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-600 border-t border-gray-300">
          <p>© 2025 Sam Pennington. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
