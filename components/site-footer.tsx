import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.role}
        </p>
        <p className="font-mono text-xs">Tested, documented, and shipped bug-free.</p>
      </div>
    </footer>
  )
}
