import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ShieldCheck,
  Radar,
  Cloud,
  LockKeyhole,
  Bug,
  FileCheck2,
  GraduationCap,
  ServerCog,
  ScrollText,
} from "lucide-react";

const categories = [
  {
    title: "Offensive Security",
    desc: "Find vulnerabilities before attackers do (VAPT, red teaming, web/mobile/API testing).",
    href: "/services/offensive-security",
    icon: Bug,
    highlights: ["VAPT", "Red Teaming", "Web/API Security"],
  },
  {
    title: "Defensive Security",
    desc: "Detect, respond and build resilience with SOC, MDR, EDR and hardening.",
    href: "/services/defensive-security",
    icon: Radar,
    highlights: ["SOC-as-a-Service", "MDR", "Threat Monitoring"],
  },
  {
    title: "GRC & Compliance",
    desc: "Compliance-ready security programs aligned with ISO, SOC2, NIST, DPDP and more.",
    href: "/services/grc-compliance",
    icon: FileCheck2,
    highlights: ["ISO 27001", "SOC 2", "Risk Assessments"],
  },
  {
    title: "Cloud Security",
    desc: "Secure cloud infrastructure across AWS, Azure and GCP with posture management and controls.",
    href: "/services/cloud-security",
    icon: Cloud,
    highlights: ["CSPM", "Cloud Hardening", "IAM Review"],
  },
  {
    title: "DevSecOps & AppSec",
    desc: "Shift-left security with CI/CD integration, SAST/DAST, secrets scanning and secure SDLC.",
    href: "/services/devsecops-appsec",
    icon: ServerCog,
    highlights: ["Secure SDLC", "SAST/DAST", "CI/CD Security"],
  },
  {
    title: "Incident Response",
    desc: "Ransomware readiness, triage, containment, forensics and post-incident recovery support.",
    href: "/services/incident-response",
    icon: ShieldCheck,
    highlights: ["IR Retainer", "Forensics", "Ransomware Response"],
  },
  {
    title: "IAM / PAM Security",
    desc: "Identity-focused security to prevent account takeover and privilege abuse.",
    href: "/services/iam-pam",
    icon: LockKeyhole,
    highlights: ["IAM Review", "PAM", "Zero Trust Controls"],
  },
  {
    title: "Training & Awareness",
    desc: "Human firewall programs: awareness training, phishing simulations and executive workshops.",
    href: "/services/training-awareness",
    icon: GraduationCap,
    highlights: ["Awareness", "Phishing Drills", "Secure Coding"],
  },
];

const topServices = [
  {
    title: "Penetration Testing",
    desc: "Deep testing of web apps, APIs, mobile, networks and cloud with actionable remediation.",
    href: "/services/penetration-testing",
    tag: "Top Service",
  },
  {
    title: "Vulnerability Assessment",
    desc: "Continuous vulnerability discovery with prioritization based on exploitability and impact.",
    href: "/services/vulnerability-assessment",
    tag: "Most Requested",
  },
  {
    title: "SOC-as-a-Service",
    desc: "24×7 monitoring, alert triage, threat hunting and response support without full SOC build-out.",
    href: "/services/soc-as-a-service",
    tag: "Managed Security",
  },
  {
    title: "SIEM Implementation",
    desc: "Deploy SIEM with log onboarding, correlation rules, dashboards, SOAR-ready automation.",
    href: "/services/siem-implementation",
    tag: "Enterprise",
  },
  {
    title: "Security Awareness Training",
    desc: "Company-wide training modules, phishing drills, metrics and executive reporting.",
    href: "/services/security-awareness-training",
    tag: "Training",
  },
  {
    title: "SBOM Management",
    desc: "Supply chain security: generate, validate and monitor SBOMs for vulnerabilities and compliance.",
    href: "/services/sbom-management",
    tag: "Modern Security",
  },
];

const steps = [
  {
    title: "Assess",
    desc: "We evaluate risk, architecture, assets and attack surface using industry best practices.",
    icon: ScrollText,
  },
  {
    title: "Secure",
    desc: "Implement controls, remediation actions and improvements aligned to your business goals.",
    icon: ShieldCheck,
  },
  {
    title: "Monitor",
    desc: "Continuous visibility through monitoring, detection, audits and recurring security reviews.",
    icon: Radar,
  },
  {
    title: "Enable",
    desc: "Training and governance to improve security culture and reduce human-related incidents.",
    icon: GraduationCap,
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              Cybersecurity Services
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Full-Spectrum Security Services to{" "}
              <span className="text-cyan-300">Protect, Detect & Respond</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok provides cybersecurity services, solutions, awareness programs and training
              for Individuals, SMEs, Corporates, Enterprises and Government initiatives.
              Choose a category below or request a custom assessment.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Request Security Assessment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Solutions (Packages)
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CATEGORY GRID */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Service Categories
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/65">
                  Explore Cyberlok&apos;s cybersecurity capabilities by domain.
                </p>
              </div>
              <Link
                href="/contact"
                className="hidden md:inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Talk to an Expert
              </Link>
            </div>

            <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/8 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                      <cat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white/40 group-hover:text-white/80 transition" />
                  </div>

                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{cat.title}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{cat.desc}</p>

                  <div className="mt-3 sm:mt-5 flex flex-wrap gap-2">
                    {cat.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 bg-black/30 px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-white/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TOP SERVICES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
              Featured Services (Top Demand)
            </h2>
            <p className="mt-2 sm:mt-3 max-w-3xl text-sm sm:text-base text-white/65">
              These services are the most requested by SMEs, corporates and enterprise clients.
              Each service page includes deliverables, process and expected timelines.
            </p>

            <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {topServices.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/8 transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold tracking-wide text-cyan-300">
                      {s.tag}
                    </p>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white/40 group-hover:text-white/80 transition" />
                  </div>
                  <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{s.desc}</p>
                </Link>
              ))}
            </div>

            <div className="mt-6 sm:mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Request Quote
              </Link>
              <Link
                href="/solutions/smes"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore SME Security Packages
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  How Cyberlok Works
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Cyberlok follows a risk-based, outcome-driven security approach.
                  We prioritize clarity, measurable improvements and actionable deliverables.
                </p>

                <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
                  <p className="font-semibold text-sm sm:text-base">What you receive</p>
                  <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-white/70">
                    <li>• Executive-ready reports and security roadmap</li>
                    <li>• Findings with severity, CVSS, exploitability and impact</li>
                    <li>• Remediation guidance + validation support</li>
                    <li>• Optional retainer for continuous security posture improvement</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4">
                {steps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                        <step.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                      </span>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{step.title}</p>
                        <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/60">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.12),transparent_45%)]" />
        <Container>
          <div className="py-10 sm:py-16">
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Not sure which service you need?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Share your environment and security goals — we&apos;ll recommend the most effective
                    service package and roadmap.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Speak to Cyberlok <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>

              <div className="mt-6 sm:mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  { icon: ShieldCheck, title: "Secure by Design", desc: "Reduce risk before incidents happen." },
                  { icon: LockKeyhole, title: "Zero Trust Ready", desc: "Identity-first security enforcement." },
                  { icon: Radar, title: "Threat Visibility", desc: "Detection that scales with you." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/30 p-4 sm:p-6"
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                    <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">{item.title}</p>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
