export function CVSection() {
  return (
    <section id="cv" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">My Latest CV</h2>

        <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-lg">
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-bold mb-2">Sam Pennington</h3>
            <p className="text-xl text-gray-600 mb-2">Senior Growth Engineer · Engineering Manager</p>
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <p>London</p>
              <p>+447703705820</p>
              <p>samueljpennington64@gmail.com</p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">About Me</h4>
              <p className="text-gray-700 leading-relaxed">
                I'm an engineering leader who genuinely loves what I do. For the past three years I've worked in and led growth teams
                where I get to combine programming, analytics, and plenty of collaboration. I had several promotions while working in growth,
                but I've realised I'm happiest when I'm hands-on, building, solving problems, and experimenting alongside the team.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">Experience</h4>
              <div className="space-y-8">
                {/* VEED.IO - Senior Software Engineer (Growth) */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Senior Software Engineer (Growth)</h5>
                      <p className="text-gray-600">VEED.IO</p>
                    </div>
                    <p className="text-sm text-gray-500">Jul 2024 - Dec 2024</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Node</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">GCP</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Playwright</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Jest</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Tailwind</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Led the work to optimise first time user flows from landing pages, which increased new user subscriptions rates by 15%</li>
                    <li>Led the rebuild of VEED's onboarding flow, massively reduced its complexity and completion rate increased by 10%</li>
                    <li>Shipped multiple experiments most weeks, iterating on VEED's dashboard and first time user experience flows</li>
                    <li>Mentored junior - mid engineers on testing and experimentation</li>
                  </ul>
                </div>

                {/* VEED.IO - Engineering Manager (Growth) */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Engineering Manager (Growth)</h5>
                      <p className="text-gray-600">VEED.IO</p>
                    </div>
                    <p className="text-sm text-gray-500">Jan 2023 - Jul 2024</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Promoted to EM of the Activation team, after became EM of Acquisition as well, managing up to 11 engineers</li>
                    <li>Led two high-performing growth teams focused on continuous discovery, user interviews, experimentation, iterative shipping to drive growth</li>
                    <li>Led the project to internationalise VEED. Spanning 10+ engineering teams, 8 codebases with limited resources and a tight deadline. Delivered within the quarter (on time) and resulted in an increase in MRR of 8-15% in VEED's core international markets</li>
                    <li>Hired 8 amazing engineers - pushed for and designed a fairer, less bias interviewing system which was adopted across engineering</li>
                    <li>Led the team to build VeedGPT, an AI video creation tool. Accounting for up to 20% of new users at VEED at its peak</li>
                    <li>Migrated VEED's analytics/experimentation platform to Amplitude. Implemented the integration, wrote documentation, and became the go-to resource for everything experimentation at Veed</li>
                  </ul>
                </div>

                {/* VEED.IO - Engineering Lead (Growth) */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Engineering Lead (Growth)</h5>
                      <p className="text-gray-600">VEED.IO</p>
                    </div>
                    <p className="text-sm text-gray-500">Jul 2022 - Jan 2023</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Promoted to Engineering Lead after probation period</li>
                    <li>Led the implementation of a new Resize for socials feature - a tool for users to repurpose their content for different social platforms</li>
                    <li>Led many in product onboarding flow experiments - a lot of trial and error, speaking to users, and experiments here</li>
                  </ul>
                </div>

                {/* VEED.IO - Senior Engineer (Growth) */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Senior Engineer (Growth)</h5>
                      <p className="text-gray-600">VEED.IO</p>
                    </div>
                    <p className="text-sm text-gray-500">Apr 2022 - Jul 2022</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Experimenting with core product tours, helping teach new users how to use a video editor</li>
                    <li>Rebuilt the VEED dashboard with the team, optimizing for new video creation and tool adoption</li>
                  </ul>
                </div>

                {/* OVO Energy - Senior Software Engineer */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Senior Software Engineer</h5>
                      <p className="text-gray-600">OVO Energy</p>
                    </div>
                    <p className="text-sm text-gray-500">Oct 2019 - Apr 2022</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Node</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">AWS</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Cypress</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Styled Components</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Built features for OVO's Plan Zero decarbonisation project</li>
                    <li>Mentored junior engineers, teaching them technologies like React, TypeScript and general web development using HTML/CSS</li>
                    <li>Conducting pair programming interviews, system design interviews for candidates across the company</li>
                  </ul>
                </div>

                {/* What Car - Software Engineer */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Software Engineer</h5>
                      <p className="text-gray-600">What Car</p>
                    </div>
                    <p className="text-sm text-gray-500">Sep 2018 - Oct 2019</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Node</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">AWS</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">Cypress</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Built a platform for car buyers and sellers with search, real time messaging, alerts</li>
                    <li>Mentored junior engineers on testing with react testing library, and cypress</li>
                  </ul>
                </div>

                {/* Heed - Junior Software Developer */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xl font-bold">Junior Software Developer</h5>
                      <p className="text-gray-600">Heed</p>
                    </div>
                    <p className="text-sm text-gray-500">Oct 2018 - Sep 2018</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Building features for Heed, an automated messaging system</li>
                    <li>Learning how to use React and write good tests</li>
                    <li>Learning AWS, specifically lambda functions, S3, server-less framework</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">Education</h4>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xl font-bold">Physics BSc</h5>
                    <p className="text-gray-600">University of Bristol</p>
                  </div>
                  <p className="text-sm text-gray-500">Oct 2012 - Oct 2016</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">Voluntary</h4>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="text-xl font-bold">Teaching Assistant → Cohort Leader</h5>
                    <p className="text-gray-600">Code Your Future</p>
                  </div>
                  <p className="text-sm text-gray-500">Oct 2022 - Oct 2024</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-gray-200 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-200 rounded text-xs">SQL</span>
                  <span className="px-2 py-1 bg-gray-200 rounded text-xs">Express</span>
                  <span className="px-2 py-1 bg-gray-200 rounded text-xs">Node</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Lead an 8 month coding bootcamp for 40 refugees in London</li>
                  <li>Managed 20 other volunteers to deliver the course</li>
                  <li>Ran lessons in Javascript, SQL and Node to a group of up to 40 students</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 text-center">
              <a
                href="/SamPennington-CV.pdf"
                download
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                <span>📥</span>
                Download Full CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
