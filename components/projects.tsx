const projects = [
  {
    id: 'QA-001',
    title: 'E-Commerce Website Test Suite',
    summary:
      'Full-cycle testing on an online store covering product search, shopping cart, checkout, and payment forms. Delivered a complete test plan, prioritized bug report, and an automated regression suite to catch future defects.',
    tags: ['Manual', 'Automation', 'Regression'],
    stats: [
      { label: 'Test cases', value: '48' },
      { label: 'Bugs found', value: '12' },
      { label: 'Coverage', value: 'Checkout' },
    ],
    severity: 'Critical',
  },
  {
    id: 'QA-002',
    title: 'Web Application Functional Testing',
    summary:
      "Detailed manual and automated tests on a web app's core features and user flows. Identified and documented functional defects with clear reproduction steps and severity levels, helping the team resolve issues before release.",
    tags: ['Functional', 'Automation', 'Reporting'],
    stats: [
      { label: 'Test cases', value: '36' },
      { label: 'Bugs found', value: '9' },
      { label: 'Coverage', value: 'Core flows' },
    ],
    severity: 'Major',
  },
  {
    id: 'QA-003',
    title: 'Cross-Browser & Responsive Review',
    summary:
      'Tested a live website across multiple browsers and screen sizes to uncover layout, display, and functionality issues. Produced an annotated compatibility report with screenshots of every defect for a consistent user experience.',
    tags: ['Cross-Browser', 'Responsive', 'Manual'],
    stats: [
      { label: 'Browsers', value: '4' },
      { label: 'Bugs found', value: '7' },
      { label: 'Coverage', value: 'UI / Layout' },
    ],
    severity: 'Minor',
  },
]

const severityStyles: Record<string, string> = {
  Critical: 'border-fail/30 bg-fail/10 text-fail',
  Major: 'border-warn/40 bg-warn/15 text-warn-foreground',
  Minor: 'border-pass/30 bg-pass/10 text-pass',
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// Case studies</p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">Selected projects</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Practice projects from my DEPI training that mirror real client work — each shown as a
          case study: what I tested, how, and what I found.
        </p>
        <div className="mt-10 space-y-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-muted-foreground">{project.id}</span>
                <span
                  className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium ${severityStyles[project.severity]}`}
                >
                  Top severity: {project.severity}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <dl className="flex flex-wrap gap-8">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
