import { Mail, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="rounded-xl border border-border bg-card p-8 text-center md:p-14">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Ready to launch a website your users can trust?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Let&apos;s make sure it works flawlessly before it goes live. I&apos;ll test every detail
            so you can ship with confidence — and focus on growing your business instead of chasing
            bugs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get a free consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <a
              href={siteConfig.Whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
