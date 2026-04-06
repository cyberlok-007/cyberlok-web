import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  Radar,
  ShieldCheck,
  Eye,
  Bell,
  Server,
  Users,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    title: "24x7 Security Monitoring",
    desc: "Continuous monitoring of your infrastructure by certified security analysts around the clock.",
    icon: Radar,
  },
  {
    title: "Alert Triage & Prioritization",
    desc: "Intelligent analysis and prioritization of security alerts to focus on real threats.",
    icon: AlertTriangle,
  },
  {
    title: "Threat Hunting",
    desc: "Proactive search for indicators of compromise and advanced threats that evade automated detection.",
    icon: Eye,
  },
  {
    title: "Incident Response",
    desc: "Rapid containment and investigation of security incidents with clear communication and guidance.",
    icon: Bell,
  },
  {
    title: "SIEM Integration",
    desc: "Seamless integration with your existing SIEM or deployment of managed SIEM for complete visibility.",
    icon: Server,
  },
  {
    title: "EDR Management",
    desc: "Endpoint Detection & Response deployment, monitoring and response across your device fleet.",
    icon: ShieldCheck,
  },
];

const tiers = [
  {
    name: "Starter",
    desc: "For businesses starting their security journey",
    price: "Starting ₹75,000/month",
    endpoints: "Up to 500 endpoints",
    features: [
      "8x5 SOC coverage",
      "SIEM monitoring",
      "Alert triage",
      "Email support",
      "Monthly reports",
      "Quarterly reviews",
    ],
  },
  {
    name: "Professional",
    desc: "For growing businesses with security needs",
    price: "Starting ₹2,00,000/month",
    popular: true,
    endpoints: "Up to 2,000 endpoints",
    features: [
      "24x7 SOC coverage",
      "SIEM + EDR integration",
      "Threat hunting",
      "Incident response (24x5)",
      "Weekly reports",
      "Monthly threat intel",
    ],
  },
  {
    name: "Enterprise",
    desc: "For organizations with complex requirements",
    price: "Custom pricing",
    endpoints: "Unlimited endpoints",
    features: [
      "Dedicated SOC team",
      "Full MDR + SOAR",
      "Continuous threat hunting",
      "24x7 incident response",
      "CISO advisory access",
      "Custom integrations",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We assess your environment, existing tools and security requirements to design the right monitoring coverage.",
  },
  {
    step: "02",
    title: "Deployment",
    desc: "Our team deploys monitoring agents, configures alert rules and integrates your security tools.",
  },
  {
    step: "03",
    title: "Operation",
    desc: "Continuous monitoring, threat hunting and incident response by our security operations team.",
  },
  {
    step: "04",
    title: "Improvement",
    desc: "Regular reviews, fine-tuning and proactive recommendations to enhance your security posture.",
  },
];

const stats = [
  { value: "100M+", label: "Events Analyzed Daily" },
  { value: "15min", label: "Mean Time to Detect" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24x7", label: "Always-On Monitoring" },
];

const faqs = [
  {
    q: "What is the difference between SOC-as-a-Service and MDR?",
    a: "SOC-as-a-Service provides monitoring and alerting using your existing tools. MDR (Managed Detection & Response) adds active threat hunting, incident response and EDR management for more comprehensive coverage.",
  },
  {
    q: "Do we need to buy new security tools?",
    a: "Not necessarily. We can work with your existing SIEM, firewall and endpoint tools, or recommend and deploy new solutions based on your needs and budget.",
  },
  {
    q: "How quickly can SOCaaS be deployed?",
    a: "Typical deployment takes 2-4 weeks depending on environment complexity. We start with a discovery phase to understand your infrastructure before activating monitoring.",
  },
  {
    q: "What happens when a critical alert is detected?",
    a: "Our analysts follow documented response procedures. Critical alerts trigger immediate investigation, and you receive a call within 15 minutes with initial assessment and containment guidance.",
  },
];

export default function SOCasaServicePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SOC as a Service" }]} />

            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <Radar className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" /> SOC-as-a-Service
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Enterprise Security Operations{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Without the Overhead</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s SOC-as-a-Service provides 24x7 monitoring, threat detection and incident response
              without the cost of building and maintaining your own security operations center. Get enterprise-grade
              protection today.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Get SOC Coverage <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/defensive-security"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View All Defensive Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                What You Get
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive managed security services designed for Indian enterprises.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  </span>
                  <p className="mt-4 sm:mt-5 font-semibold text-sm sm:text-base">{feature.title}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                How It Works
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                From onboarding to continuous protection in weeks.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent/30">{p.step}</span>
                  <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">{p.title}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Pricing Plans
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Flexible pricing based on your organization&apos;s size and requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl sm:rounded-3xl border p-4 sm:p-6 ${
                    tier.popular
                      ? "border-cyan-400/30 bg-cyan-500/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {tier.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">{tier.desc}</p>
                  <p className="mt-3 text-xs bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{tier.endpoints}</p>
                  <p className="mt-2 sm:mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold text-sm sm:text-base">{tier.price}</p>

                  <ul className="mt-4 sm:mt-5 space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm font-semibold transition w-full ${
                      tier.popular
                        ? "bg-cyan-500 text-black hover:bg-cyan-400"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHY SOC */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Why Organizations Need SOC Coverage
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Cyber threats don&apos;t follow business hours. With the average breach cost exceeding ₹15 Crores
                  and detection times averaging 200+ days, organizations need continuous monitoring.
                </p>

                <div className="mt-6 sm:mt-8 space-y-4">
                  {[
                    { icon: Users, stat: "3,000+", text: "cybercrimes reported daily in India" },
                    { icon: Clock, stat: "200+", text: "days average time to detect a breach" },
                    { icon: AlertTriangle, stat: "₹15 Cr+", text: "average cost of a data breach in India" },
                  ].map((item) => (
                    <div key={item.stat} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                      </span>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">
                          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{item.stat}</span> {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  <p className="font-semibold text-sm sm:text-base">What We Monitor</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Network traffic and communications",
                    "Endpoint activity and behavior",
                    "Authentication attempts and sessions",
                    "Cloud infrastructure and services",
                    "Email security and phishing",
                    "Application logs and errors",
                    "DNS queries and domain activity",
                    "User and entity behavior (UEBA)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <p className="font-semibold text-sm sm:text-base">{faq.q}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_45%)]" />
        <Container>
          <div className="py-10 sm:py-16">
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Ready for 24x7 security coverage?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get started with Cyberlok&apos;s SOC-as-a-Service. We&apos;ll assess your environment and
                    provide custom pricing based on your requirements.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Request Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
