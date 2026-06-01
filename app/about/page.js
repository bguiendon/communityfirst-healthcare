import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ClipboardList,
  ExternalLink,
  HeartHandshake,
  Linkedin,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const principles = [
  {
    icon: ClipboardList,
    title: "Practical before theoretical",
    description:
      "We focus on clear operating routines, better visibility, and actions a real practice team can actually sustain.",
  },
  {
    icon: Users,
    title: "Built around people",
    description:
      "Operational improvement only works when it respects providers, staff, patients, and the community being served.",
  },
  {
    icon: ShieldCheck,
    title: "Financially disciplined",
    description:
      "We help leaders understand the operational and financial levers that affect cash flow, revenue cycle health, and practice stability.",
  },
];

const fit = [
  "Independent medical practices",
  "Rural clinics and small healthcare teams",
  "Practice administrators and office managers",
  "Providers carrying too much operational burden",
  "Organizations that need clarity before committing to large projects",
];

export const metadata = {
  title: "About | CommunityFirst Healthcare Consulting",
  description:
    "Learn more about CommunityFirst Healthcare Consulting and co-founder Bobby Guiendon.",
};

export default function AboutPage() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="brand-logo" aria-label="CommunityFirst Healthcare Consulting home">
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
          </Link>

          <nav className="nav">
            <Link href="/about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#pilot">Pilot</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <Link href="/#contact" className="header-cta">
            <button className="button">Schedule a Call</button>
          </Link>
        </div>
      </header>

      <main>
        <section className="about-hero">
          <div className="about-bg" />
          <div className="container about-hero-grid">
            <div>
              <Link href="/" className="back-link">
                <ArrowLeft size={18} />
                Back to home
              </Link>

              <div className="eyebrow">
                <MapPin size={16} />
                About CommunityFirst
              </div>

              <h1>Grounded operational support for rural healthcare practices.</h1>

              <p className="hero-copy">
                CommunityFirst Healthcare Consulting helps rural healthcare practices reduce operational
                friction, improve financial visibility, and build more sustainable workflows.
              </p>
            </div>

            <div className="about-callout">
              <div className="large-icon">
                <HeartHandshake size={30} />
              </div>
              <h2>Why CommunityFirst exists</h2>
              <p>
                Rural healthcare leaders are often asked to do more with less: less time, fewer resources,
                tighter margins, and smaller teams. CommunityFirst helps bring structure, clarity, and
                follow-through to the operational work that keeps a practice healthy.
              </p>
            </div>
          </div>
        </section>

        <section className="container founder-section">
          <div className="founder-photo-wrap">
            <img
              src="/bobby-guiendon.jpg"
              alt="Bobby Guiendon, co-founder of CommunityFirst Healthcare Consulting"
              className="founder-photo"
            />
          </div>

          <div className="founder-copy">
            <p className="section-kicker green">Co-founder</p>
            <h2>Bobby Guiendon</h2>

            <p>
              Bobby Guiendon is the co-founder of CommunityFirst Healthcare Consulting, a firm focused
              on helping rural healthcare practices reduce operational friction, improve financial visibility,
              and build more sustainable workflows.
            </p>

            <p>
              Bobby’s background spans customer success, retail operations, inventory planning, and golf
              club leadership, giving him a practical, cross-functional view of how teams, processes, and
              financial discipline come together. He holds an MBA from the University of Georgia and brings
              an operator’s mindset shaped by years of leading teams, solving complex problems, and
              improving how organizations work.
            </p>

            <p>
              Having grown up in Warner Robins, Georgia, Bobby understands the importance of strong local
              institutions and the role healthcare providers play in serving their communities. He co-founded
              CommunityFirst to give rural healthcare leaders access to grounded operational support without
              the jargon or complexity of traditional consulting.
            </p>

            <a
              href="https://www.linkedin.com/in/bobby-guiendon/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <Linkedin size={20} />
              Connect with Bobby on LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        <section className="container cofounder-section">
          <div className="cofounder-card">
            <p className="section-kicker green">Co-founder</p>
            <h2>Nicole Walker</h2>

            <p>
              Nicole Walker is the co-founder of CommunityFirst Healthcare Consulting and a seasoned
              healthcare operations executive with more than 20 years of experience helping medical
              practices improve performance, modernize systems, and operate with greater financial discipline.
            </p>

            <p>
              Nicole’s background spans practice operations, revenue cycle management, EMR implementation,
              vendor negotiations, regulatory navigation, and organizational change. She brings a practical,
              patient-centered view of how strong operations, clear workflows, and fiscal stewardship support
              both providers and the communities they serve.
            </p>

            <p>
              Originally from a small town in the Midwest, Nicole understands the pressure smaller provider
              groups face in today’s reimbursement environment. She holds an MBA from Mercer University and
              co-founded CommunityFirst to help rural and community-based practices access experienced,
              grounded operational support.
            </p>
          </div>
        </section>

        <section className="principles">
          <div className="container">
            <div className="section-intro">
              <p className="section-kicker green">How we work</p>
              <h2>Simple, grounded, and execution-focused.</h2>
              <p>
                We bring a practical operator’s mindset to rural healthcare challenges: understand the current
                state, identify the few things that matter most, and help the team move forward with confidence.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="card" key={item.title}>
                    <div className="small-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container fit-section">
          <div>
            <p className="section-kicker green">Who we help</p>
            <h2>Designed for small and rural healthcare organizations.</h2>
            <p>
              CommunityFirst is a fit for teams that know something needs to improve but need help creating
              clarity, prioritizing the work, and building a realistic plan.
            </p>
          </div>

          <div className="fit-list">
            {fit.map((item) => (
              <div className="fit-item" key={item}>
                <CheckCircle size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div className="container about-cta-inner">
            <div>
              <p className="section-kicker light">Start the conversation</p>
              <h2>Need a clearer picture of what is holding your practice back?</h2>
              <p>
                Start with a short conversation. We will talk through your current challenges and whether a
                focused diagnostic makes sense.
              </p>
            </div>

            <Link href="/#contact">
              <button className="button button-light">Contact CommunityFirst</button>
            </Link>
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
