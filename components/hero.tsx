import { ArrowRight, Circle, ArrowDownToLine, Eye } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'


const testRun = [
  { name: 'checkout flow › completes purchase', status: 'pass', ms: '412ms' },
  { name: 'auth › rejects invalid credentials', status: 'pass', ms: '188ms' },
  { name: 'cart › updates totals on quantity change', status: 'pass', ms: '241ms' },
  { name: 'responsive › renders on mobile viewport', status: 'pass', ms: '95ms' },
  { name: 'api › returns 404 for missing resource', status: 'fail', ms: '63ms' },
]

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="min-w-0">
          {siteConfig.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass/10 px-3 py-1 font-mono text-xs font-medium text-pass">
              <Circle className="h-2 w-2 fill-current" aria-hidden="true" />
              Available for work
            </span>
          )}
          <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            I help web products ship <span className="text-primary">bug-free</span>.
          </h1>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {siteConfig.name} — {siteConfig.role} specializing in manual and automation testing.
            I find the bugs before your users do, so you can launch with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1MBKeXOLos4EUMAux73ZntgEyRuJh7yiQ/view?usp=sharing"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              download
            >
              View CV
              <Eye className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View case studies
            </a>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-fail/60" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-warn/70" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-pass/70" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">test-run.log</span>
          </div>
          <div className="space-y-2 p-4 font-mono text-xs leading-relaxed">
            {testRun.map((test) => (
              <div key={test.name} className="flex items-center justify-between gap-3">
                <span className="flex min-w-0 items-center gap-2">
                  {test.status === "pass" ?
                    <span className="shrink-0 font-semibold text-pass">{test.status}</span>
                    :
                    <span className="shrink-0 font-semibold text-fail">{test.status}</span>

                  }
                  <span className="truncate text-foreground/80">{test.name}</span>
                </span>
                <span className="shrink-0 text-muted-foreground">{test.ms}</span>
              </div>
            ))}
            <div className="mt-3 border-t border-border pt-3 text-pass">
              {'✓ '}
              <span className="text-muted-foreground">
                Tests: <span className="text-foreground">4 passed</span>, 5 total
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
