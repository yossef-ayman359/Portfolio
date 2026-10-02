import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
