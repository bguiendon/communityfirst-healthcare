"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  DollarSign,
  HeartHandshake,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Practice Operations Diagnostic",
    description:
      "A focused review of front office workflows, scheduling, patient intake, billing handoffs, staffing routines, and administrative friction points.",
  },
  {
    icon: DollarSign,
    title: "Financial Performance Review",
    description:
      "Practical analysis of revenue cycle health, cash flow visibility, payer mix, collections processes, and controllable cost opportunities.",
  },
  {
    icon: Users,
    title: "Staffing & Workflow Support",
    description:
      "Help aligning people, roles, routines, and accountability so small teams can operate with less chaos and more consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Execution Roadmap",
    description:
      "A clear, prioritized action plan built for rural practices that need practical improvements, not a binder full of theory.",
  },
];

const painPoints = [
  "Billing delays and unclear revenue cycle ownership",
  "Front-office bottlenecks that frustrate staff and patients",
  "Limited financial visibility for day-to-day decisions",
  "Provider burnout caused by operational noise",
  "Too many manual processes and not enough repeatable routines",
  "Growth ideas that never turn into disciplined execution",
];

const process = [
  {
    step: "01",
    title: "Listen & Map",
    description:
      "We start by understanding the practice, the people, the community, and the operational realities you face every day.",
  },
  {
    step: "02",
    title: "Diagnose",
    description:
      "We identify the highest-impact operational and financial issues holding the practice back.",
  },
  {
    step: "03",
    title: "Prioritize",
    description:
      "We separate urgent noise from meaningful opportunities and build a practical improvement roadmap.",
  },
  {
    step: "04",
    title: "Support Execution",
    description:
      "We help turn recommendations into action through operating rhythms, follow-up, and accountability.",
  },
];

function Button({ children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
      : "bg-emerald-700 text-white hover:bg-emerald-800";
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm">
              <HeartHandshake size={22} />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">CommunityFirst</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Healthcare Consulting
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#process" className="hover:text-slate-950">Process</a>
            <a href="#pilot" className="hover:text-slate-950">Pilot</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>

          <a href="#contact">
            <Button className="px-4 py-3 text-sm">Schedule a Call</Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                <MapPin size={16} />
                Built for rural medical practices
              </div>
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Practical operations and financial support for rural healthcare leaders.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                CommunityFirst helps rural clinics and medical practices reduce operational friction,
                improve financial visibility, and build repeatable systems that protect providers,
                staff, and patients.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact">
                  <Button>
                    Start with a Diagnostic <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
                <a href="#pilot">
                  <Button variant="outline">View Pilot Engagement</Button>
                </a>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Designed for practices that need clear priorities, disciplined execution, and advice
                grounded in real-world constraints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <Card className="rounded-[2rem] bg-white/90 shadow-xl">
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-800">
                      <Stethoscope size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Core offer
                      </p>
                      <h2 className="text-2xl font-bold">Rural Practice Diagnostic</h2>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Operational workflow review",
                      "Revenue cycle and cash flow assessment",
                      "Staffing, role clarity, and accountability review",
                      "Prioritized 30/60/90-day improvement roadmap",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 text-emerald-700" size={20} />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-3xl bg-slate-100 p-5">
                    <p className="text-sm font-semibold text-slate-500">Best for</p>
                    <p className="mt-1 text-lg font-bold text-slate-950">
                      Independent practices, rural clinics, and small healthcare teams that need
                      immediate operational clarity.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Operational clarity", "Know what is broken, what matters most, and what to fix first."],
              ["02", "Financial discipline", "Improve visibility into cash flow, revenue cycle issues, and decision-making data."],
              ["03", "Execution support", "Turn recommendations into practical routines your team can actually sustain."],
            ].map(([num, title, desc]) => (
              <Card key={num}>
                <div className="p-6">
                  <p className="text-4xl font-bold text-emerald-700">{num}</p>
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-slate-600">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="bg-slate-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                What we do
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                Consulting that gets practical fast.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Rural healthcare organizations do not need generic playbooks. They need focused
                help that respects limited time, limited staff, and the reality of serving a community.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title}>
                    <div className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              The problem
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Small operational issues become big practice problems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Many rural practices are full of capable people working inside systems that have not
              kept up. The result is stress, missed revenue, inconsistent execution, and too much
              work landing on providers or a few key staff members.
            </p>
          </div>
          <div className="grid gap-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <CheckCircle className="mt-0.5 shrink-0 text-emerald-700" size={20} />
                <p className="font-medium text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                How it works
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                A simple process built around action.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {process.map((item) => (
                <Card key={item.step}>
                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                      {item.step}
                    </p>
                    <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Pilot engagement
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  Start with a focused diagnostic, not a long consulting commitment.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  The pilot is designed to create clarity quickly: identify operational issues,
                  quantify financial opportunities where possible, and give leadership a practical
                  roadmap for the next 90 days.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white">
                <p className="text-sm font-semibold text-emerald-300">Typical deliverables</p>
                <ul className="mt-4 space-y-3 text-slate-100">
                  <li>• Leadership discovery session</li>
                  <li>• Workflow and financial review</li>
                  <li>• Findings summary</li>
                  <li>• Prioritized action roadmap</li>
                  <li>• Optional advisory follow-up</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-emerald-700 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">
                Let’s talk
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Ready to find the operational friction in your practice?
              </h2>
              <p className="mt-5 text-lg leading-8 text-emerald-50">
                Schedule a short introductory call to discuss your practice, current challenges,
                and whether a diagnostic engagement makes sense.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Book an intro call</h3>
                  <p className="text-slate-600">A practical conversation. No pressure.</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <input
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-28 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="What would you like help with?"
                />
                <button className="w-full rounded-2xl bg-slate-950 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                  Send Message
                </button>
                <p className="text-xs leading-5 text-slate-500">
                  This form is visual only for now. Later, connect it to Formspree, Tally, HubSpot, or Calendly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 py-8 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="font-semibold text-white">CommunityFirst Healthcare Consulting</p>
          <p className="text-sm">
            Practical operations and financial support for rural healthcare leaders.
          </p>
        </div>
      </footer>
    </div>
  );
}
