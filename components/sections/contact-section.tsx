'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

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
                <FaEnvelope className="text-2xl text-gray-700" />
                <a href="mailto:samueljpennington64@gmail.com" className="text-lg hover:text-orange-500 transition-colors">
                  samueljpennington64@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-gray-700" />
                <a href="https://www.linkedin.com/in/sam-pennington-629227151/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-orange-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-gray-700" />
                <a href="https://github.com/sampennington" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-orange-500 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Your message..."
                  required
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-100 text-red-800 rounded-lg">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
