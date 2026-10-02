import { ClipboardList, Bot, Globe, MonitorSmartphone, Bug } from 'lucide-react'

const services = [
  {
    icon: ClipboardList,
    title: 'Manual Testing',
    description:
      'Thorough functional, usability, and exploratory testing to catch defects that automated tools miss.',
  },
  {
    icon: Bot,
    title: 'Automation Testing',
    description:
      'Building and running automated test scripts to speed up regression testing and ensure long-term stability.',
  },
  {
    icon: Globe,
    title: 'Web Application Testing',
    description:
      'End-to-end testing of forms, navigation, checkout flows, and core user journeys on your site.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Cross-Browser & Responsive',
    description:
      'Verifying your website looks and works perfectly across Chrome, Firefox, Safari, and mobile devices.',
  },
  {
    icon: Bug,
    title: 'Bug Reporting & Docs',
    description:
      'Clear, prioritized bug reports and test cases your team can immediately understand and fix.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// Services</p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
          What I test for you
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Practical testing services designed to protect your product&apos;s quality at every stage
          of development.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
