"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  DollarSign,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const services = [
  { icon: ClipboardList, title: "Practice Operations Diagnostic", description: "A focused review of front office workflows, scheduling, patient intake, billing handoffs, staffing routines, and administrative friction points." },
  { icon: DollarSign, title: "Financial Performance Review", description: "Practical analysis of revenue cycle health, cash flow visibility, payer mix, collections processes, and controllable cost opportunities." },
  { icon: Users, title: "Staffing & Workflow Support", description: "Help aligning people, roles, routines, and accountability so small teams can operate with less chaos and more consistency." },
  { icon: ShieldCheck, title: "Execution Roadmap", description: "A clear, prioritized action plan built for rural practices that need practical improvements, not a binder full of theory." },
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
  { step: "01", title: "Listen & Map", description: "We start by understanding the practice, the people, the community, and the operational realities you face every day." },
  { step: "02", title: "Diagnose", description: "We identify the highest-impact operational and financial issues holding the practice back." },
  { step: "03", title: "Prioritize", description: "We separate urgent noise from meaningful opportunities and build a practical improvement roadmap." },
  { step: "04", title: "Support Execution", description: "We help turn recommendations into action through operating rhythms, follow-up, and accountability." },
];

function Button({ children, variant = "primary" }) {
  return <button className={variant === "outline" ? "button button-outline" : "button"}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a href="#" className="brand-logo" aria-label="CommunityFirst Healthcare Consulting home">
            <img
              src="/communityfirst-logo-cropped-v2.png"
              alt="CommunityFirst Healthcare Consulting logo"
              className="site-logo"
              style={{
                width: "clamp(360px, 42vw, 560px)",
                maxHeight: "94px",
                objectFit: "contain",
                objectPosition: "left center",
                display: "block",
              }}
            />
          </a>

          <nav className="nav">
            <a href="/about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#pilot">Pilot</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="header-cta"><Button>Schedule a Call</Button></a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="eyebrow"><MapPin size={16} />Built for rural medical practices</div>
              <h1>Practical operations and financial support for rural healthcare leaders.</h1>
              <p className="hero-copy">CommunityFirst helps rural clinics and medical practices reduce operational friction, improve financial visibility, and build repeatable systems that protect providers, staff, and patients.</p>
              <div className="hero-buttons">
                <a href="#contact"><Button>Start with a Diagnostic <ArrowRight size={18} /></Button></a>
                <a href="#pilot"><Button variant="outline">View Pilot Engagement</Button></a>
              </div>
              <p className="hero-note">Designed for practices that need clear priorities, disciplined execution, and advice grounded in real-world constraints.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }}>
              <Card className="feature-card">
                <div className="feature-heading">
                  <div className="large-icon"><Stethoscope size={28} /></div>
                  <div><p className="section-kicker">Core offer</p><h2>Rural Practice Diagnostic</h2></div>
                </div>
                <div className="check-list">
                  {["Operational workflow review", "Revenue cycle and cash flow assessment", "Staffing, role clarity, and accountability review", "Prioritized 30/60/90-day improvement roadmap"].map((item) => (
                    <div key={item} className="check-row"><CheckCircle size={20} /><p>{item}</p></div>
                  ))}
                </div>
                <div className="best-for">
                  <p>Best for</p>
                  <strong>Independent practices, rural clinics, and small healthcare teams that need immediate operational clarity.</strong>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="container proof-section">
          <div className="proof-grid">
            {[["01", "Operational clarity", "Know what is broken, what matters most, and what to fix first."], ["02", "Financial discipline", "Improve visibility into cash flow, revenue cycle issues, and decision-making data."], ["03", "Execution support", "Turn recommendations into practical routines your team can actually sustain."]].map(([num, title, desc]) => (
              <Card key={num}><p className="proof-num">{num}</p><h3>{title}</h3><p>{desc}</p></Card>
            ))}
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-intro">
              <p className="section-kicker green">What we do</p>
              <h2>Consulting that gets practical fast.</h2>
              <p>Rural healthcare organizations do not need generic playbooks. They need focused help that respects limited time, limited staff, and the reality of serving a community.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <Card key={service.title}><div className="small-icon"><Icon size={24} /></div><h3>{service.title}</h3><p>{service.description}</p></Card>;
              })}
            </div>
          </div>
        </section>

        <section className="container problem-section">
          <div>
            <p className="section-kicker green">The problem</p>
            <h2>Small operational issues become big practice problems.</h2>
            <p>Many rural practices are full of capable people working inside systems that have not kept up. The result is stress, missed revenue, inconsistent execution, and too much work landing on providers or a few key staff members.</p>
          </div>
          <div className="pain-list">
            {painPoints.map((point) => <div key={point} className="pain-item"><CheckCircle size={20} /><p>{point}</p></div>)}
          </div>
        </section>

        <section id="process" className="process">
          <div className="container">
            <div className="section-intro"><p className="section-kicker green">How it works</p><h2>A simple process built around action.</h2></div>
            <div className="process-grid">
              {process.map((item) => <Card key={item.step}><p className="step">{item.step}</p><h3>{item.title}</h3><p>{item.description}</p></Card>)}
            </div>
          </div>
        </section>

        <section id="pilot" className="container pilot-wrap">
          <div className="pilot">
            <div>
              <p className="section-kicker light">Pilot engagement</p>
              <h2>Start with a focused diagnostic, not a long consulting commitment.</h2>
              <p>The pilot is designed to create clarity quickly: identify operational issues, quantify financial opportunities where possible, and give leadership a practical roadmap for the next 90 days.</p>
            </div>
            <div className="deliverables">
              <p>Typical deliverables</p>
              <ul>
                <li>Leadership discovery session</li>
                <li>Workflow and financial review</li>
                <li>Findings summary</li>
                <li>Prioritized action roadmap</li>
                <li>Optional advisory follow-up</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-grid">
            <div>
              <p className="section-kicker light">Let’s talk</p>
              <h2>Ready to find the operational friction in your practice?</h2>
              <p>Schedule a short introductory call to discuss your practice, current challenges, and whether a diagnostic engagement makes sense.</p>
            </div>
            <div className="contact-card">
              <div className="contact-heading"><div className="large-icon"><PhoneCall size={24} /></div><div><h3>Book an intro call</h3><p>A practical conversation. No pressure.</p></div></div>
              <form className="form" action="https://formspree.io/f/xykvqzyb" method="POST">
                <input name="name" type="text" placeholder="Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <textarea name="message" placeholder="What would you like help with?" required />
                <input type="hidden" name="_subject" value="New CommunityFirst website inquiry" />
                <button type="submit">Send Message</button>
                <p>Your message will be sent directly to CommunityFirst Healthcare Consulting.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>CommunityFirst Healthcare Consulting</p>
          <span>Practical operations and financial support for rural healthcare leaders.</span>
        </div>
      </footer>
    </div>
  );
}
