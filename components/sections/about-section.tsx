
const Section = ({ heading, body }: { heading: string, body: string }) => (
  <>
    <h3 className="text-xl font-bold mb-2 text-accent">{heading}</h3>
    <p className="text-gray-800 mb-4">
      {body}
    </p>
  </>
)


export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">A Bit About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-800 mb-4">
              I like to solve problems, help people, and explore, pretty much everything I do falls back to one of those.
            </p>

            <Section
              heading="Where it all began"
              body="I started building websites at around 15, about 16 years ago! I’d stay up all night coding, mostly building guides about the first iPhone when it launched.
              I just loved making things, solving problems, and dreaming I’d make a tonne of money from the ads I ran."
            />
            <Section
              heading="Studies"
              body="I took a bit of a break from building software and focused on physics for a while, another passion of mine.
              I studied it for four years at university and eventually found my way back to coding by learning C to solve some moon landing equations. 🌖"
            />
          </div>

          <div>
            <Section
              heading="Professional life"
              body="I’ve been working in software engineering for about eight years now. Most recently, I’ve been leading two engineering teams, a total of 11 engineers with different levels of experience."
            />
            <Section
              heading="Personal life"
              body="My favourite things to do are travel to places ive not been before and scuba dive. Most recently I've been living in Mexico learning to cave dive."
            />
          </div>
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Tech I use most</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-200 rounded-full">TypeScript</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">React</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Node.js</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">CSS/Tailwind</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full">Testing (Jest, Playwright)</span>
          </div>
        </div>
      </div>
    </section >
  )
}
