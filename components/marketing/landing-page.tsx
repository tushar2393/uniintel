"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileStack,
  Inbox,
  Mail,
  Network,
  PhoneCall,
  RefreshCw,
  ScanSearch,
  Send,
  ShieldCheck,
  Stethoscope,
  TimerReset,
  UserCheck,
} from "lucide-react";

import { DiscoveryForm } from "@/components/marketing/discovery-form";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "What we do", href: "#what-we-do" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Offer", href: "#offer" },
  { label: "Contact", href: "#contact" },
] as const;

const problemCards = [
  {
    icon: FileStack,
    title: "Prior-auth packets eat hours",
    description:
      "Chart pulls, packet assembly, portal uploads, and status chase land on the same few people. Hours-per-auth climb while days-to-decision stretch.",
  },
  {
    icon: RefreshCw,
    title: "Referrals stall and leak",
    description:
      "Inbound fax, PDF, and email referrals sit incomplete. Missing-info chase and patient outreach compete with the schedule — leakage follows.",
  },
  {
    icon: Inbox,
    title: "Inbox noise crowds the day",
    description:
      "Portal messages, In Basket, and email mix routine noise with real work. Front office and RCM spend staff touches sorting instead of closing queues.",
  },
] as const;

const services = [
  {
    icon: ClipboardCheck,
    badge: "Primary",
    title: "Prior-auth packet prep + status chase",
    description:
      "Chart pull → packet assembly → portal/fax staging → follow-ups. Staff only touch exceptions; clinical submit stays behind a human checkpoint.",
    metrics: [
      "Hours per auth",
      "Days-to-decision",
      "Staff touches per auth",
    ],
    flow: [
      "Pull chart elements for the auth type",
      "Assemble the packet against payer rules",
      "Stage for portal or fax",
      "Chase status; escalate only exceptions",
      "Human sign-off before clinical submit",
    ],
  },
  {
    icon: Send,
    badge: "Co-lead",
    title: "Referral chase",
    description:
      "Inbound fax/PDF/email → missing-info chase → patient outreach → schedule → close the loop with the referring office.",
    metrics: [
      "% referrals scheduled",
      "Time-to-schedule",
      "Referral leakage",
    ],
    flow: [
      "Ingest fax, PDF, and email referrals",
      "Flag missing demographics and clinical info",
      "Chase referring office and patient",
      "Get on the schedule",
      "Close the loop with the referrer",
    ],
  },
  {
    icon: Inbox,
    badge: "Secondary · expand after win",
    title: "Inbox triage",
    description:
      "Route, draft, and prioritize portal, email, and In Basket noise so the team sees what needs a human first. Expand after a PA or referral win — not the tip of the spear.",
    metrics: [
      "Messages triaged / day",
      "Time-to-first-response",
      "Exception rate",
    ],
    flow: [
      "Classify inbound portal / email / In Basket",
      "Prioritize what needs a person today",
      "Draft routine replies for review",
      "Route the rest to the right queue",
    ],
  },
] as const;

const workflowSteps = [
  {
    number: "01",
    title: "Map the queue that burns capacity",
    description:
      "We sit with practice admins, office managers, and RCM/ops leads to map prior-auth, referral, or inbox work — hours, failure points, and handoffs across EHR, portals, fax, and email.",
  },
  {
    number: "02",
    title: "Design AI inside the stack you already run",
    description:
      "No new platform. We wire drafting, assembly, chase, and triage into existing EHR, payer portals, fax, and email — with human checkpoints where clinical or patient risk matters.",
  },
  {
    number: "03",
    title: "Ship one fixed-scope sprint",
    description:
      "A 4–6 week sprint on one queue (PA or referrals). Baseline metrics, clear acceptance criteria, and staff only touching exceptions.",
  },
  {
    number: "04",
    title: "Measure and expand",
    description:
      "Track hours per auth, days-to-decision, % referrals scheduled, leakage, and staff touches. Expand to the next queue only after the first win holds.",
  },
] as const;

const differentiators = [
  {
    icon: Network,
    title: "Capacity, not another platform",
    description:
      "Specialty clinics don’t need a rip-and-replace. Uniintel maps the workflows that burn front office and RCM, then wires AI into EHR, portals, fax, and email you already run.",
  },
  {
    icon: ShieldCheck,
    title: "Human checkpoints on clinical submit",
    description:
      "AI assembles, drafts, and chases. People sign off before clinical prior-auth submit and before anything patient-facing goes out.",
  },
  {
    icon: ScanSearch,
    title: "Metric-led, not AI theatre",
    description:
      "We optimize for hours per auth, days-to-decision, % referrals scheduled, time-to-schedule, and leakage — not demos that never reach the queue.",
  },
] as const;

const offerItems = [
  {
    icon: PhoneCall,
    title: "45-minute workflow discovery",
    description:
      "Walk one prior-auth or referral queue end-to-end. Leave with a clear picture of where capacity is leaking.",
    detail: "Free · discovery call",
  },
  {
    icon: TimerReset,
    title: "Paid pilot / throughput audit",
    description:
      "Pilot engagement — baseline hours, failure points, and a first sprint plan for one specialty-clinic queue.",
    detail: "Pilot engagement",
  },
  {
    icon: Stethoscope,
    title: "Fixed-scope 4–6 week sprint",
    description:
      "One queue — prior-auth packet prep or referral chase — wired into your existing tools with human checkpoints.",
    detail: "PA or referrals",
  },
] as const;

const goalMetrics = [
  {
    label: "Prior-auth",
    items: ["Hours per auth", "Days-to-decision", "Staff touches"],
  },
  {
    label: "Referrals",
    items: ["% scheduled", "Time-to-schedule", "Leakage"],
  },
  {
    label: "Inbox (later)",
    items: ["Triage volume", "Time-to-response", "Exception rate"],
  },
] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

const primaryCta = "#discovery-form";

export function LandingPage() {
  return (
    <main className="relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-panel/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link
              href="#top"
              className="flex min-w-0 items-center gap-3 rounded-full border border-line bg-panel px-3 py-2 transition-colors hover:border-black/20 hover:bg-panel-strong"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-black tracking-tight text-white">
                U
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-[0.18em] text-foreground">
                  Uniintel
                </span>
                <span className="block truncate text-xs text-mist">
                  Specialty clinic capacity
                </span>
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 rounded-full border border-line bg-panel p-1 lg:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:bg-black/[0.04] hover:text-foreground"
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
                className="rounded-full border border-line bg-panel px-3 py-2 text-sm text-mist transition-colors hover:border-black/20 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div id="main-content" className="relative z-10">
        <section
          id="top"
          className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20"
        >
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-2">
                <Stethoscope className="h-3.5 w-3.5" />
                For specialty &amp; multi-site ambulatory clinics
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                  Cut prior-auth and referral busywork without replacing your
                  EHR.
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-mist sm:text-xl">
                  Uniintel helps specialty clinics automate prior-auth packet
                  prep, referral chase, and inbox triage inside the tools they
                  already run — with human checkpoints.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={primaryCta}>
                    Book a discovery call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#what-we-do">See what we automate</Link>
                </Button>
              </div>

              <ul className="grid gap-3 text-sm text-mist sm:grid-cols-3">
                <BulletPoint text="Works with your EHR & portals" />
                <BulletPoint text="Human sign-off before clinical submit" />
                <BulletPoint text="Built for practice admins & RCM" />
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
            title="Front office and RCM capacity is burned by the same three queues."
            description="Specialty clinics don’t lose throughput because they lack skilled people. They lose it because prior-auth packets, incomplete referrals, and inbox noise keep staff on repetitive chase work instead of exceptions and patients."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="positioning"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <SectionHeading
              eyebrow="Positioning"
              title="You don’t need another platform. You need capacity."
              description="Uniintel maps the workflows that burn front office and RCM — prior-auth packet prep, referral chase, inbox triage — then wires AI into existing EHR, portals, fax, and email so staff only touch exceptions."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FeaturePanel
                icon={Network}
                title="Existing stack stays"
                description="EHR, payer portals, fax, and email stay in place. We add orchestration and drafting — not a rip-and-replace."
              />
              <FeaturePanel
                icon={UserCheck}
                title="Humans on the exceptions"
                description="Routine assembly, chase, and triage run with AI assist. People review and own clinical submit and patient-facing sends."
              />
              <FeaturePanel
                icon={ClipboardCheck}
                title="One queue at a time"
                description="Start with prior-auth or referrals. Prove hours and cycle-time gains, then expand — inbox triage comes after a win."
              />
              <FeaturePanel
                icon={ScanSearch}
                title="Goals you can measure"
                description="Hours per auth, days-to-decision, % referrals scheduled, time-to-schedule, leakage, staff touches."
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          aria-labelledby="goals-title"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12"
        >
          <div className="rounded-[2rem] border border-line bg-panel p-6 shadow-none sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-2">
                  Target metrics
                </p>
                <h2
                  id="goals-title"
                  className="text-balance text-3xl font-semibold tracking-tight text-foreground"
                >
                  We optimize for clinic-ops metrics — not vanity AI demos.
                </h2>
                <p className="text-base leading-8 text-mist">
                  Figures below are{" "}
                  <span className="font-semibold text-foreground">
                    goal metrics
                  </span>{" "}
                  we baseline and track in a sprint — not published live results.
                  First case studies are in progress.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {goalMetrics.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[1.5rem] border border-line bg-panel-strong p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                    {group.label}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-mist"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="what-we-do"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="What we do"
            title="Three queues. Prior-auth first. Referrals co-lead. Inbox after the win."
            description="We only take on work that burns specialty-clinic front office and RCM capacity — and that can run inside tools you already use."
          />

          <div className="mt-10 grid gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-[2rem] border border-line bg-panel shadow-none"
              >
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-5 border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-panel-strong text-foreground">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-line bg-panel-strong px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-base leading-8 text-mist">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                        Goal metrics
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full border border-line bg-panel-strong px-3 py-1.5 text-sm text-foreground"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-2">
                      Typical flow
                    </p>
                    <ol className="space-y-3">
                      {service.flow.map((step, index) => (
                        <li
                          key={step}
                          className="flex gap-3 rounded-[1.25rem] border border-line bg-panel-strong p-4"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-xs font-semibold text-foreground">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-7 text-mist">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="How it works"
            title="From one painful queue to a dependable sprint outcome."
            description="Practical path for practice admins, office managers, and RCM/ops leads: map the drag, wire AI into the existing stack, ship one sprint, measure, then expand."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-line bg-panel p-6 shadow-none"
              >
                <p className="text-sm font-semibold tracking-[0.28em] text-mist">
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
          id="offer"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <SectionHeading
            eyebrow="Offer"
            title="Discovery → pilot → one fixed-scope sprint."
            description="Start with a 45-minute workflow discovery. If the queue is real, a paid pilot / throughput audit baselines hours and failure points, then a 4–6 week sprint ships the first automation."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offerItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[1.75rem] border border-line bg-panel p-6 shadow-none"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-panel-strong text-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                  {item.detail}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-mist">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="why-uniintel"
          {...fadeInUp}
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="Why Uniintel"
              title="Built for specialty clinic ops — not generic B2B busywork."
              description="ICP is physical specialty and multi-site ambulatory clinics: practice admins, office managers, RCM and ops leads. Not telehealth brands, not hospital enterprise platforms, not another “AI for any ops team” pitch."
            />

            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-line bg-panel p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-panel-strong text-foreground">
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
          <div className="rounded-[2rem] border border-line bg-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-2">
              Proof
            </p>
            <h2
              id="proof-title"
              className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              First specialty-clinic case studies in progress.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-mist sm:text-lg">
              We are not inventing logos or testimonials. When prior-auth and
              referral sprints ship measurable baselines — hours per auth,
              days-to-decision, % scheduled, leakage — those results will live
              here. Until then: book a discovery call and we&apos;ll baseline
              your queue.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Multi-site ambulatory",
                "Specialty front office",
                "RCM / ops leads",
                "Practice admins",
                "Office managers",
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-full border border-line bg-panel-strong px-5 py-3 text-sm font-semibold tracking-[0.08em] text-foreground"
                >
                  {area}
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
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-8 shadow-none sm:p-10 lg:p-12">
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div className="max-w-3xl space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-2">
                  Book a discovery call
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Bring one prior-auth or referral queue. We&apos;ll map where
                  capacity is leaking.
                </h2>
                <p className="text-lg leading-8 text-mist">
                  45-minute workflow discovery for specialty and multi-site
                  ambulatory clinics. If it&apos;s a fit, the next step is a
                  paid pilot / throughput audit, then a fixed-scope 4–6 week
                  sprint on one queue.
                </p>

                <div className="rounded-[1.25rem] border border-line bg-panel-strong p-4 sm:p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist">
                    Typical starting point
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-mist">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                      45-minute specialty-clinic workflow discovery
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                      Pilot engagement — baseline hours and first sprint plan
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                      Fixed-scope 4–6 week sprint (PA or referrals)
                    </li>
                  </ul>
                </div>

                <div className="rounded-[1.25rem] border border-line bg-panel-strong p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                    Founder
                  </p>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    Tushar Khandelwal
                  </p>
                  <p className="mt-1 text-sm text-mist">Founder, Uniintel</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <a
                      href="mailto:tushar@uniintel.org"
                      className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-mist"
                    >
                      <Mail className="h-4 w-4" />
                      tushar@uniintel.org
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tushar-khandelwal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-mist"
                    >
                      <ExternalLink className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist">
                  Tell us about your queue
                </p>
                <DiscoveryForm />
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-mist sm:px-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-foreground">
                Uniintel
              </p>
              <p className="mt-2">
                Specialty clinic capacity — prior-auth, referrals, inbox.
              </p>
              <div className="mt-5 space-y-1">
                <p className="font-semibold text-foreground">Tushar Khandelwal</p>
                <p>Founder, Uniintel</p>
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
                href="#what-we-do"
                className="transition-colors hover:text-foreground"
              >
                What we do
              </Link>
              <Link
                href="#how-it-works"
                className="transition-colors hover:text-foreground"
              >
                How it works
              </Link>
              <Link
                href="#offer"
                className="transition-colors hover:text-foreground"
              >
                Offer
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
    <li className="flex items-start gap-3 rounded-2xl border border-line bg-panel px-4 py-3">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground" />
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
    <div className="rounded-[1.75rem] border border-line bg-panel p-6 shadow-none">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-panel-strong text-foreground">
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
    <div className="rounded-[1.75rem] border border-line bg-panel p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-panel-strong text-foreground">
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
      <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-panel p-5 shadow-none sm:p-6">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-line pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent-2">
              Prior-auth packet prep
            </p>
            <p className="mt-2 text-sm text-mist">
              Assemble · stage · human sign-off.
            </p>
          </div>
          <div className="rounded-full border border-line bg-panel-strong px-3 py-1 text-xs text-mist">
            specialty clinic
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <SignalColumn
              title="Inputs"
              color="accent"
              items={[
                "EHR chart pull",
                "Payer portal rules",
                "Fax / email inbound",
                "Referral PDFs",
              ]}
            />
            <div className="hidden items-center justify-center lg:flex">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY }}
                className="rounded-full border border-line bg-panel-strong px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground"
              >
                Uniintel
              </motion.div>
            </div>
            <SignalColumn
              title="Outcomes"
              color="accent-2"
              items={[
                "Auth packets staged",
                "Status chase running",
                "Referrals scheduled",
                "Staff on exceptions",
              ]}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <MiniMetric label="Goal · hours / auth" value="↓" tone="accent" />
            <MiniMetric
              label="Goal · days to decision"
              value="↓"
              tone="accent-2"
            />
            <MiniMetric
              label="Goal · % refs scheduled"
              value="↑"
              tone="white"
            />
          </div>
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-mist/80">
            Illustrative goal directions — not live results
          </p>
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
      ? "bg-foreground text-white"
      : "bg-panel text-mist border border-line";

  return (
    <div className="rounded-[1.75rem] border border-line bg-panel-strong p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${badgeClass}`}
        >
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
            className="rounded-2xl border border-line bg-panel px-3 py-3 text-sm text-foreground"
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
    <div className="rounded-[1.4rem] border border-line bg-panel-strong p-4">
      <p className={`text-2xl font-semibold tracking-[-0.04em] ${valueClass}`}>
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mist">
        {label}
      </p>
    </div>
  );
}
