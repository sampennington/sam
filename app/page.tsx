import { Sidebar } from '@/components/sidebar'
import { HomeSection } from '@/components/sections/home-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { CVSection } from '@/components/sections/cv-section'

export default function Page() {
  return (
    <>
      <Sidebar />

      <div className="flex-1 md:ml-24 pb-24 md:pb-0">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <CVSection />

        <footer className="py-12 text-center text-gray-600 border-t border-gray-300">
          <p>© 2025 Sam Pennington.</p>
        </footer>
      </div>
    </>
  )
}
