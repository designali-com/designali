import { Section } from "./section-shell"

export function Approach() {
  return (
    <Section title="AI-assisted. Human-decided." eyebrow="Our approach">
      <div className="grid gap-px border border-dotted md:grid-cols-2">
        <div className="p-8">
          <h3 className="font-serif text-3xl md:text-5xl">
            We use AI like a calculator. We still do the math.
          </h3>
        </div>
        <div className="flex flex-col gap-3 border-t border-dotted p-8 text-sm text-muted-foreground md:border-t-0 md:border-l">
          <p>
            AI helps us move faster on research, wireframing and exploration.
          </p>
          <p>
            But every design decision is made by a person who understands your
            product, your audience and your goals, not by a prompt.
          </p>
          <p className="text-foreground">
            Built from scratch for your brand. No templates, no shortcuts.
          </p>
        </div>
      </div>
    </Section>
  )
}
