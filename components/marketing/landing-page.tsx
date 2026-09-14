"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  FileStack,
  Gauge,
  Headphones,
  Layers3,
  ExternalLink,
  Mail,
  MessageSquareQuote,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
} from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Process", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Why UnitIntel", href: "#why-unitintel" },
  { label: "Contact", href: "#contact" },
] as const;

const problemCards = [
  {
    icon: TimerReset,
    title: "Hours disappear into repeat work",
    description:
      "Leaders and operators still spend valuable time triaging inboxes, chasing updates, rebuilding reports, and moving data between tools.",
  },
  {
    icon: Layers3,
    title: "Context switching slows everyone down",
    description:
      "When people are stuck copy-pasting between systems, the team loses focus, judgment, and momentum on the work that actually compounds.",
  },
  {
    icon: Gauge,
    title: "Growth gets capped by busywork",
    description:
      "As volume rises, headcount becomes the default answer. Margins tighten, service slips, and strategic work keeps getting pushed out.",
  },
] as const;

const outcomeStats = [
  { value: "5x", label: "Throughput on repetitive operational workflows" },
  { value: "-72%", label: "Manual touches across common process handoffs" },
  { value: "<24h", label: "Time to first automation prototype in a focused sprint" },
  { value: "+14h", label: "Weekly leadership capacity reclaimed per team lead" },
] as const;

const workflowSteps = [
  {
    number: "01",
    title: "Map the drag",
    description:
      "We pinpoint where repetitive work, delays, and context switching are stealing capacity across your current tools and teams.",
  },
  {
    number: "02",
    title: "Design the workflow layer",
    description:
      "UnitIntel defines the AI-assisted orchestration: what should be automated, what stays human, and how data moves cleanly end to end.",
  },
  {
    number: "03",
    title: "Integrate into the stack you already run",
    description:
      "We connect AI into your CRM, help desk, internal docs, spreadsheets, email, and ops tooling instead of forcing a platform rip-and-replace.",
  },
  {
    number: "04",
    title: "Tune for reliability and scale",
    description:
      "We monitor quality, tighten prompts and rules, add guardrails, and keep the system useful as your workflows evolve.",
  },
] as const;

const useCases = [
  {
    icon: BriefcaseBusiness,
    title: "Operations",
    description:
      "Automate approvals, handoffs, order updates, SOP lookups, and recurring coordination work across systems.",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Draft replies, summarize tickets, route issues, surface knowledge, and reduce handle time without losing judgment.",
  },
  {
    icon: Building2,
    title: "Sales and admin",
    description:
      "Clean CRM data, prep account briefs, generate follow-ups, and remove the admin drag around pipeline movement.",
  },
  {
    icon: BarChart3,
    title: "Finance and reporting",
    description:
      "Compile recurring reports, flag anomalies, reconcile narratives, and cut the manual work behind executive visibility.",
  },
  {
    icon: FileStack,
    title: "Product and research",
    description:
      "Cluster feedback, summarize calls, extract themes, and turn signal into sharper roadmap decisions faster.",
  },
  {
    icon: Users,
    title: "Leadership workflows",
    description:
      "Prepare meeting briefs, surface blockers, roll up KPIs, and keep decision-makers focused on the next leverage point.",
  },
] as const;

const differentiators = [
  {
    icon: Network,
    title: "Embedded in workflows, not bolted on top",
    description:
      "The value comes from fitting AI into the way your business already runs. Adoption gets easier because the work stays familiar.",
  },
  {
    icon: ShieldCheck,
    title: "Human control where it matters",
    description:
      "We automate the repetitive parts and keep review, escalation, and final judgment with the people who own outcomes.",
  },
  {
    icon: ScanSearch,
    title: "Operational clarity over demo theatre",
    description:
      "UnitIntel focuses on measurable throughput, response time, and capacity gains instead of flashy prototypes with no production path.",
  },
] as const;

const logos = ["Northstar", "Aster", "Meridian", "Forge", "Summit", "Cinder"] as const;

const quotes = [
  {
    quote:
      "UnitIntel removed the reporting and follow-up busywork that used to eat half our week. The team now spends that time on customers and expansion.",
    name: "Placeholder client example",
    role: "COO, vertical SaaS company",
  },
  {
    quote:
      "Instead of hiring around broken workflows, we used AI to tighten them. Throughput jumped, response times dropped, and leaders got time back.",
    name: "Placeholder client example",
    role: "Founder, B2B services business",
  },
] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

const primaryCta =
  "mailto:tushar@uniintel.org?subject=Discovery%20call%20for%20AI%20throughput%20audit";

export function LandingPage() {
  return (
    <main className="relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/[0.78] backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link
              href="#top"
              className="flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(140,255,214,0.95),rgba(247,198,120,0.95))] text-sm font-black tracking-tight text-slate-950">
                U
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-[0.18em] text-foreground">
                  UNITINTEL
                </span>
                <span className="block truncate text-xs text-mist">
                  5x throughput. Zero busywork.
                </span>
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 lg:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:bg-white/[0.05] hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button asChild size="sm">
              <a href={primaryCta}>Book a discovery call</a>
            </Button>
          </div>

          <nav
            aria-label="Section links"
            className="flex gap-2 overflow-x-auto pb-4 lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-mist transition-colors hover:border-white/[0.16] hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] z-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(123,247,210,0.16),transparent_42%),radial-gradient(circle_at_18%_26%,rgba(247,198,120,0.18),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(93,134,255,0.16),transparent_24%)]" />

      <div id="main-content" className="relative z-10">
        <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                AI integration consultancy for growth-stage B2B teams
              </div>

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-2">
                  5x throughput. Zero busywork.
                </p>
                <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                  Turn repetitive work into invisible systems.
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-mist sm:text-xl">
                  UnitIntel integrates AI into the workflows your team already runs
                  so ops, support, reporting, follow-up, and internal execution
                  move dramatically faster. The result is higher throughput, less
                  manual drag, and more time spent on strategy, customers, and
                  growth.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={primaryCta}>
                    Get a throughput audit
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#how-it-works">See how UnitIntel works</Link>
                </Button>
              </div>

              <ul className="grid gap-3 text-sm text-mist sm:grid-cols-3">
                <BulletPoint text="Integrates into your current stack" />
                <BulletPoint text="Automates repetitive work with guardrails" />
                <BulletPoint text="Keeps people focused on high-leverage decisions" />
              </ul>
            </motion.div>

            <HeroVisual />
          </div>
        </section>

        <motion.section
          id="problem"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="The problem"
            title="Busywork quietly becomes the operating system."
            description="Most teams do not lose momentum because they lack talent. They lose it because skilled people are buried under repetitive tasks, fragmented tools, and constant coordination overhead."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="solution"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <SectionHeading
              eyebrow="The solution"
              title="AI woven directly into the way your business already operates."
              description="UnitIntel maps real workflows, connects the systems involved, automates the repetitive steps, and leaves critical judgment where it belongs: with your team. The goal is not AI for its own sake. It is operational capacity without more chaos."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FeaturePanel
                icon={Network}
                title="Existing tools stay in play"
                description="CRM, help desk, docs, spreadsheets, email, and internal systems become part of one cleaner execution layer."
              />
              <FeaturePanel
                icon={Bot}
                title="Automation where work repeats"
                description="Drafting, triage, synthesis, updates, routing, enrichment, and reporting are handled automatically where appropriate."
              />
              <FeaturePanel
                icon={Users}
                title="Human review where trust matters"
                description="Approvals, exceptions, sensitive interactions, and high-stakes decisions stay visible and easy to control."
              />
              <FeaturePanel
                icon={Compass}
                title="Capacity redirected to leverage"
                description="Teams spend less time on process maintenance and more time on customers, strategy, product, and growth."
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          aria-labelledby="outcomes-title"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(3,7,18,0.45)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Outcomes
                </p>
                <h2
                  id="outcomes-title"
                  className="text-balance text-3xl font-semibold tracking-tight text-foreground"
                >
                  The win is not a clever demo. It is measurable operating
                  leverage.
                </h2>
                <p className="text-base leading-8 text-mist">
                  Illustrative benchmark numbers below show the kind of gains
                  strong workflow integration can unlock when repetitive work is
                  removed at the source.
                </p>
              </div>

              <p className="max-w-sm text-sm leading-7 text-mist/[0.9]">
                Placeholder metrics for planning and layout. Replace with live
                client results as UnitIntel builds case studies.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {outcomeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-5"
                >
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="How it works"
            title="A practical path from workflow friction to reliable throughput."
            description="UnitIntel keeps the process simple: understand the work, automate the repetitive parts, keep humans in the loop, and refine until the system becomes a dependable part of operations."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(5,9,20,0.35)]"
              >
                <p className="text-sm font-semibold tracking-[0.28em] text-accent-2">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-mist">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="use-cases"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="Use cases"
            title="The work that compounds when repetitive tasks disappear."
            description="UnitIntel is most valuable where people spend too much time coordinating, summarizing, reformatting, or pushing information from one place to another."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="why-unitintel"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="Why UnitIntel"
              title="A consultancy built for real operations, not AI theatre."
              description="The fastest way to lose trust in AI is to promise magic and deliver more complexity. UnitIntel is designed around operational reality: existing tools, real constraints, measurable gains, and teams that still need control."
            />

            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-mist">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          aria-labelledby="proof-title"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="Social proof"
            title="A proof-ready section designed to accept real client evidence later."
            description="The structure below gives UnitIntel a polished trust layer now while staying honest about what is illustrative versus what should be replaced with live customer results."
          />

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-full border border-white/10 bg-slate-950/40 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-slate-200"
                >
                  {logo}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-mist">
              Placeholder marks shown for layout only. Swap in real client logos
              once available.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {quotes.map((item) => (
                <div
                  key={item.quote}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6"
                >
                  <MessageSquareQuote className="h-6 w-6 text-accent" />
                  <p className="mt-5 text-lg leading-8 text-slate-100">
                    “{item.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-mist">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(140,255,214,0.16),rgba(247,198,120,0.08),rgba(255,255,255,0.02))] p-8 shadow-[0_24px_80px_rgba(3,7,18,0.5)] sm:p-10 lg:p-12">
            <div className="absolute right-[-6rem] top-[-6rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(140,255,214,0.22),transparent_65%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Final call to action
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  If busywork is setting the speed limit, UnitIntel can remove it.
                </h2>
                <p className="text-lg leading-8 text-slate-100/[0.88]">
                  Bring the workflows that eat your team&apos;s time. We&apos;ll
                  map the friction, show where AI fits, and outline the fastest
                  path to measurable throughput gains.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href={primaryCta}>
                      Book a discovery call
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <a href="mailto:tushar@uniintel.org">tushar@uniintel.org</a>
                  </Button>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/[0.4] p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                    Contact
                  </p>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    Tushar Khandelwal
                  </p>
                  <p className="mt-1 text-sm text-mist">Founder, UnitIntel</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <a
                      href="mailto:tushar@uniintel.org"
                      className="inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground"
                    >
                      <Mail className="h-4 w-4" />
                      tushar@uniintel.org
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tushar-khandelwal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/[0.55] p-5 lg:min-w-[21rem]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">
                  Typical starting point
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-mist">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                    45-minute workflow discovery call
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                    Prioritized throughput audit with low-effort wins
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                    Recommended first automation sprint
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="border-t border-white/[0.08]">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-mist sm:px-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-foreground">
                UnitIntel
              </p>
              <p className="mt-2">5x throughput. Zero busywork.</p>
              <div className="mt-5 space-y-1">
                <p className="font-semibold text-foreground">Tushar Khandelwal</p>
                <p>Founder, UnitIntel</p>
                <a
                  href="mailto:tushar@uniintel.org"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  tushar@uniintel.org
                </a>
                <a
                  href="https://www.linkedin.com/in/tushar-khandelwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <Link href="#problem" className="transition-colors hover:text-foreground">
                Problem
              </Link>
              <Link
                href="#how-it-works"
                className="transition-colors hover:text-foreground"
              >
                How it works
              </Link>
              <Link
                href="#why-unitintel"
                className="transition-colors hover:text-foreground"
              >
                Why UnitIntel
              </Link>
              <a
                href="mailto:tushar@uniintel.org"
                className="transition-colors hover:text-foreground"
              >
                tushar@uniintel.org
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-khandelwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
      <span>{text}</span>
    </li>
  );
}

function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(5,9,20,0.3)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-mist">{description}</p>
    </div>
  );
}

function FeaturePanel({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent-2">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-mist">{description}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_10%_10%,rgba(140,255,214,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(247,198,120,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(84,126,255,0.14),transparent_28%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,40,0.95),rgba(7,13,21,0.92))] p-5 shadow-[0_30px_100px_rgba(3,7,18,0.55)] sm:p-6">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
              UnitIntel flow layer
            </p>
            <p className="mt-2 text-sm text-mist">
              Busywork in, structured progress out.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-mist">
            live orchestration
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <SignalColumn
              title="Inputs"
              color="accent"
              items={["Support queue", "CRM notes", "Weekly metrics", "Ops inbox"]}
            />
            <div className="hidden items-center justify-center lg:flex">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground"
              >
                UnitIntel
              </motion.div>
            </div>
            <SignalColumn
              title="Outcomes"
              color="accent-2"
              items={[
                "Drafted replies",
                "Clean updates",
                "Escalation routing",
                "Leadership brief",
              ]}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <MiniMetric
              label="Manual steps removed"
              value="18"
              tone="accent"
            />
            <MiniMetric
              label="Average response acceleration"
              value="3.4x"
              tone="accent-2"
            />
            <MiniMetric
              label="Human approval checkpoints"
              value="2"
              tone="white"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SignalColumn({
  title,
  items,
  color,
}: {
  title: string;
  items: readonly string[];
  color: "accent" | "accent-2";
}) {
  const badgeClass =
    color === "accent"
      ? "bg-accent/[0.14] text-accent"
      : "bg-accent-2/[0.14] text-accent-2";

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${badgeClass}`}>
          active
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: color === "accent" ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="rounded-2xl border border-white/[0.08] bg-slate-950/[0.35] px-3 py-3 text-sm text-slate-100"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "accent" | "accent-2" | "white";
}) {
  const valueClass =
    tone === "accent"
      ? "text-accent"
      : tone === "accent-2"
        ? "text-accent-2"
        : "text-foreground";

  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/[0.35] p-4">
      <p className={`text-2xl font-semibold tracking-[-0.04em] ${valueClass}`}>
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mist">
        {label}
      </p>
    </div>
  );
}
