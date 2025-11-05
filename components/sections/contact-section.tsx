export function ContactSection() {
  return (
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
  )
}
