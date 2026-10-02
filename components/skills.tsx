import { Check } from 'lucide-react'

const coreSkills = [
  'Manual Testing',
  'Automation Testing',
  'Functional & Regression Testing',
  'Cross-Browser Compatibility',
  'Responsive / Mobile Testing',
  'Test Case Design & Execution',
  'Bug Reporting & Defect Tracking',
  'Analytical Thinking',
  'Clear Documentation',
]

// Add or edit the specific tools you know so clients can filter for you.
const tools = ['Selenium', 'Cypress', 'Playwright', 'Postman', 'JIRA', 'TestRail']

export function Skills() {
  return (
    <section id="skills" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// Skills</p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
          Capabilities checklist
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {coreSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2.5 text-sm">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pass/15 text-pass">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <span className="text-foreground/90">{skill}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Tools & frameworks
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Edit this list in{' '}
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">
                components/skills.tsx
              </code>{' '}
              to match the exact tools you use — it helps clients find you faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
