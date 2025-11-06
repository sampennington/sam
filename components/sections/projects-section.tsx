import { ProjectCard } from '@/components/project-card'

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Things I did</h2>
        <h3 className="text-xl md:text-xl font-bold mb-12 text-accent">A selection of things i'm proud of or found interesting enough to write about</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="How I Led Localisation at VEED"
            description="Leading a cross-functional localization project across 8+ codebases and 10+ teams. We built custom tooling, automated translation workflows, and delivered an 8-18% revenue uplift in international markets."
            tags={['Leadership', 'i18n', 'Automation']}
            href="/blog/localizing-veed"
            image="/images/veed-localized.png"
          />
          <ProjectCard
            title="Volunteering and Teaching at CodeYourFuture"
            description="Running a volunteer-led coding bootcamp for refugees and people from disadvantaged backgrounds. Led 40-50 students and 10-20 volunteers through an 8-month program teaching JavaScript, React, and Node."
            tags={['Leadership', 'Teaching', 'Community']}
            href="/blog/leading-cyf"
            image="/images/cyf-veed.jpeg"
          />
        </div>
      </div>
    </section>
  )
}
