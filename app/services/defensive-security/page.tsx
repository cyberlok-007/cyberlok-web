import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  Radar,
  ShieldCheck,
  Eye,
  Server,
  HardDrive,
  Bell,
  Users,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "SOC-as-a-Service (SOCaaS)",
    desc: "24x7 security monitoring, alert triage, threat hunting and incident response by certified analysts. No infrastructure investment required.",
    icon: Radar,
    features: ["24x7 monitoring coverage", "Alert triage & prioritization", "Threat hunting", "Incident escalation"],
  },
  {
    title: "Managed Detection & Response (MDR)",
    desc: "Active threat detection and rapid response with endpoint telemetry, network analysis and behavioral analytics.",
    icon: Eye,
    features: ["EDR integration", "Real-time response", "Ransomware protection", "Anomaly detection"],
  },
  {
    title: "Endpoint Detection & Response (EDR)",
    desc: "Advanced endpoint protection with continuous monitoring, forensic investigation and automated containment capabilities.",
    icon: HardDrive,
    features: ["Real-time visibility", "Behavioral analysis", "Automated response", "Forensic investigation"],
  },
  {
    title: "SIEM Implementation & Management",
    desc: "End-to-end SIEM deployment: log collection, correlation rules, dashboards, threat feeds and ongoing tuning.",
    icon: Server,
    features: ["Log source integration", "Correlation rule tuning", "Custom dashboards", "Threat intelligence"],
  },
  {
    title: "Threat Intelligence & Monitoring",
    desc: "Proactive threat monitoring using global threat feeds, dark web monitoring and industry-specific intelligence.",
    icon: Globe,
    features: ["Global threat feeds", "Dark web monitoring", "Brand protection", "Threat reports"],
  },
  {
    title: "Security Awareness & Training",
    desc: "Build your human firewall with phishing simulations, awareness training and security culture programs.",
    icon: Users,
    features: ["Phishing simulations", "Role-based training", "Metrics dashboard", "Compliance tracking"],
  },
];

const tiers = [
  {
    name: "Essential",
    desc: "For SMEs looking for basic security monitoring",
    price: "Starting ₹50,000/month",
    features: [
      "8x5 monitoring coverage",
      "SIEM log monitoring",
      "Weekly threat reports",
      "Email support",
      "Monthly vulnerability scan",
    ],
  },
  {
    name: "Professional",
    desc: "For growing businesses with compliance needs",
    price: "Starting ₹1,50,000/month",
    popular: true,
    features: [
      "24x7 monitoring coverage",
      "SOC analyst team access",
      "MDR with EDR integration",
      "Incident response (8x5)",
      "Quarterly penetration testing",
      "Compliance reporting",
    ],
  },
  {
    name: "Enterprise",
    desc: "Full security operations for enterprises",
    price: "Custom pricing",
    features: [
      "24x7 dedicated SOC team",
      "Advanced threat hunting",
      "Full MDR + EDR + SOAR",
      "24x7 incident response",
      "Continuous penetration testing",
      "CISO advisory access",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Assessment",
    desc: "We evaluate your current security posture, existing tools and monitoring requirements to design the right coverage.",
  },
  {
    step: "02",
    title: "Deployment",
    desc: "Our team deploys detection agents, configures SIEM, integrates threat feeds and establishes response workflows.",
  },
  {
    step: "03",
    title: "Operation",
    desc: "Continuous 24x7 monitoring by our security operations team with regular reporting and proactive threat hunting.",
  },
  {
    step: "04",
    title: "Improvement",
    desc: "Regular reviews, fine-tuning and recommendations to evolve your detection capabilities with emerging threats.",
  },
];

const stats = [
  { value: "100M+", label: "Events Monitored Daily" },
  { value: "15min", label: "Avg. Mean Time to Detect" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24x7", label: "Always-On Coverage" },
];

export default function DefensiveSecurityPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Defensive Security" }]} />
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <Radar className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" /> Defensive Security
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Detect, Respond &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Build Resilience</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s defensive security services provide continuous monitoring, threat detection and rapid
              response capabilities. From SOC-as-a-Service to managed EDR, we protect your organization around the clock.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Get Security Monitoring <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Security Packages
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

      {/* SERVICES GRID */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Defensive Security Services
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive protection with managed security services designed for Indian enterprises and SMEs.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  </span>

                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{service.desc}</p>

                  <ul className="mt-4 sm:mt-5 space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING TIERS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Managed Security Pricing
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Flexible pricing tiers designed for businesses of all sizes. All plans include our core monitoring
                infrastructure and expert analyst access.
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
                  <p className="mt-4 sm:mt-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold text-sm sm:text-base">{tier.price}</p>

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

      {/* PROCESS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                How We Protect You
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A systematic approach to building your security operations capability.
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

      {/* RESPONSE CAPABILITIES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Incident Response Capabilities
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  When threats are detected, our incident response team acts fast to contain, investigate and
                  recover. We offer both ad-hoc incident response and 24x7 retainer services.
                </p>

                <div className="mt-6 sm:mt-8 space-y-4">
                  {[
                    { icon: Clock, title: "Rapid Response", desc: "Mean time to respond under 15 minutes for critical alerts" },
                    { icon: ShieldCheck, title: "Containment", desc: "Isolate affected systems and prevent lateral movement" },
                    { icon: Bell, title: "Alert Triage", desc: "Priority-based alert handling by experienced analysts" },
                    { icon: AlertTriangle, title: "Threat Hunting", desc: "Proactive search for indicators of compromise" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                      </span>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{item.title}</p>
                        <p className="mt-0.5 text-xs sm:text-sm text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                  <p className="font-semibold text-sm sm:text-base">What We Monitor</p>
                </div>

                <div className="grid gap-3">
                  {[
                    "Endpoint activity and process behavior",
                    "Network traffic and communications",
                    "Authentication attempts and sessions",
                    "Email security and phishing",
                    "Cloud infrastructure and APIs",
                    "Application logs and errors",
                    "DNS queries and domain activity",
                    "User behavior anomalies",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-black/30 p-3">
                      <CheckCircle2 className="h-4 w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
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
                    Need 24x7 security monitoring?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Cyberlok&apos;s security operations center provides enterprise-grade protection without the
                    enterprise cost. Get started with a free security assessment.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Request Assessment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  <p className="text-xs sm:text-sm text-white/70">No infrastructure required</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  <p className="text-xs sm:text-sm text-white/70">Scalable to your needs</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  <p className="text-xs sm:text-sm text-white/70">99.9% uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
