const highlights = [
  { label: 'Training', value: 'DEPI Trainee' },
  { label: 'Focus', value: 'Web Testing' },
  { label: 'Approach', value: 'Methodical & Documented' },
]

export function About() {
  return (
    <section id="about" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// About me</p>
        <div className="mt-6 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Quality is a process, not an afterthought.
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a dedicated Software Test Engineer specializing in delivering reliable,
                bug-free web applications. Through hands-on training as a DEPI trainee, I&apos;ve built
                strong expertise in both manual and automation testing, learning to approach every
                product with a critical, detail-oriented eye.
              </p>
              <p>
                I help businesses protect their reputation by catching issues before they reach real
                users — from broken checkout flows to cross-browser glitches. My process is
                methodical: I plan clear test strategies, document every defect with precision, and
                communicate findings in a way that&apos;s easy for teams to act on.
              </p>
              <p>
                Whether you&apos;re launching a new website or improving an existing one, I make sure
                it works exactly as intended across devices and browsers. If quality and attention to
                detail matter to your product, I&apos;m ready to help you ship with confidence.
              </p>
            </div>
          </div>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item.label} className="rounded-lg border border-border bg-card p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold text-foreground">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
