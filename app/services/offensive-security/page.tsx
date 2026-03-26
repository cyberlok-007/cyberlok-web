import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ShieldCheck,
  Bug,
  Globe,
  Smartphone,
  Network,
  Server,
  Terminal,
  Target,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Web Application Penetration Testing",
    desc: "Comprehensive testing of your web applications including OWASP Top 10, business logic flaws, and authentication vulnerabilities.",
    icon: Globe,
    deliverables: ["Detailed finding reports with CVSS scores", "Step-by-step reproduction steps", "Remediation guidance", "Free re-testing"],
    industries: ["E-commerce", "Fintech", "Healthcare", "SaaS"],
  },
  {
    title: "Mobile Application Security Testing",
    desc: "Deep analysis of iOS and Android apps for runtime manipulation, insecure data storage, API vulnerabilities and more.",
    icon: Smartphone,
    deliverables: ["Static & dynamic analysis", "API security assessment", "Data leakage detection", "Session management review"],
    industries: ["Banking", "Healthcare", "Retail", "EdTech"],
  },
  {
    title: "API Penetration Testing",
    desc: "REST/GraphQL API testing covering authentication bypass, injection attacks, rate limiting and business logic abuse.",
    icon: Terminal,
    deliverables: ["API-specific vulnerability coverage", "Authentication weakness testing", "Rate limiting & brute force checks", "Business logic flaw identification"],
    industries: ["Fintech", "SaaS", "Healthcare", "Logistics"],
  },
  {
    title: "Network Penetration Testing",
    desc: "Internal and external network testing covering infrastructure, Active Directory, lateral movement and privilege escalation.",
    icon: Network,
    deliverables: ["External & internal scope coverage", "AD attack path analysis", "Firewall rule review", "Exploitability assessment"],
    industries: ["Enterprises", "Finance", "Government", "IT Services"],
  },
  {
    title: "Cloud Infrastructure Testing",
    desc: "AWS, Azure and GCP security assessments covering misconfigurations, IAM weaknesses and cloud-native attack vectors.",
    icon: Server,
    deliverables: ["CSPM assessment coverage", "IAM privilege analysis", "Storage bucket testing", "Serverless vulnerability review"],
    industries: ["Cloud-native startups", "Enterprises", "SaaS providers"],
  },
  {
    title: "Red Team Operations",
    desc: "Real-world adversary simulation with full attack lifecycle: reconnaissance, initial access, lateral movement and objective completion.",
    icon: Target,
    deliverables: ["Full attack chain simulation", "Social engineering included", "Customized objectives", "Detailed TTPs report"],
    industries: ["Banking", "Critical infrastructure", "Large enterprises"],
  },
];

const approach = [
  {
    phase: "Reconnaissance",
    desc: "Passive and active information gathering to understand your attack surface, technology stack and potential entry points.",
    duration: "1-2 days",
  },
  {
    phase: "Vulnerability Analysis",
    desc: "Automated and manual scanning to identify known vulnerabilities, misconfigurations and security weaknesses.",
    duration: "2-3 days",
  },
  {
    phase: "Exploitation",
    desc: "Controlled exploitation attempts to validate findings and demonstrate real-world impact of identified vulnerabilities.",
    duration: "2-5 days",
  },
  {
    phase: "Post-Exploitation",
    desc: "Lateral movement, privilege escalation and data access attempts to assess the full extent of potential damage.",
    duration: "1-3 days",
  },
  {
    phase: "Reporting & Debrief",
    desc: "Comprehensive reports with technical details, business impact, remediation steps and executive summary for stakeholders.",
    duration: "2-3 days",
  },
];

const stats = [
  { value: "500+", label: "Pen Tests Delivered" },
  { value: "15K+", label: "Vulnerabilities Found" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "48hrs", label: "Average Report Delivery" },
];

const faqs = [
  {
    q: "What is the difference between VA and PT?",
    a: "Vulnerability Assessment identifies and prioritizes vulnerabilities across your assets. Penetration Testing goes further by actively exploiting vulnerabilities to demonstrate real-world impact and attack paths. PT provides more actionable insights but VA is better for continuous monitoring.",
  },
  {
    q: "Do you support compliance requirements?",
    a: "Yes, our penetration testing aligns with PCI DSS, HIPAA, SOC 2, ISO 27001 and RBI guidelines. We provide compliance-specific reporting templates and mapping to regulatory requirements.",
  },
  {
    q: "What is your testing methodology?",
    a: "We follow OWASP Testing Guide, PTES (Penetration Testing Execution Standard) and NIST guidelines. Our testers combine automated tools with manual exploitation techniques for comprehensive coverage.",
  },
  {
    q: "Can you test staging/UAT environments?",
    a: "Yes, we can test non-production environments. For production testing, we schedule during low-traffic windows and use careful techniques to avoid disrupting your operations.",
  },
];

export default function OffensiveSecurityPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <Bug className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" /> Offensive Security
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Find Vulnerabilities Before{" "}
              <span className="text-cyan-300">Attackers Do</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s offensive security team simulates real-world attacks to expose weaknesses in your applications,
              networks and infrastructure. We go beyond automated scans with manual exploitation techniques.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Request Penetration Test <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Case Studies
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
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
                Penetration Testing Services
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                From web applications to cloud infrastructure, our offensive security team delivers thorough
                assessments with actionable remediation guidance.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                  </span>

                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{service.desc}</p>

                  <div className="mt-4 sm:mt-6">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Deliverables</p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mt-0.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Industries</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.industries.map((ind) => (
                        <span
                          key={ind}
                          className="rounded-full border border-white/10 bg-black/30 px-2 sm:px-3 py-0.5 text-xs text-white/70"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* METHODOLOGY */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Our Penetration Testing Approach
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A structured, repeatable methodology combined with expert judgment for thorough assessment coverage.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {approach.map((step, i) => (
                <div
                  key={step.phase}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-bold text-cyan-300">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{step.phase}</p>
                      <p className="text-xs text-white/50">{step.duration}</p>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* COMPLIANCE ALIGNMENT */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Compliance-Ready Testing
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Our penetration testing services map to major compliance frameworks, helping you meet regulatory
                  requirements while improving your security posture.
                </p>

                <div className="mt-6 sm:mt-8 space-y-3">
                  {[
                    "PCI DSS - Cardholder data environment testing",
                    "HIPAA - Healthcare application security",
                    "SOC 2 - Trust service criteria coverage",
                    "ISO 27001 - A.14信息系统 acquisition、开发和维护",
                    "RBI Guidelines - Banking application testing",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                  <p className="font-semibold text-sm sm:text-base">Common Findings</p>
                </div>
                <p className="text-xs sm:text-sm text-white/60 mb-4 sm:mb-5">
                  The vulnerabilities we find most often (and how to address them):
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    { vuln: "SQL Injection", fix: "Use parameterized queries, input validation" },
                    { vuln: "Broken Authentication", fix: "Implement MFA, secure session handling" },
                    { vuln: "Sensitive Data Exposure", fix: "Encrypt data at rest and in transit" },
                    { vuln: "Access Control Flaws", fix: "Enforce authorization at every layer" },
                    { vuln: "Security Misconfiguration", fix: "Harden configurations, remove defaults" },
                  ].map((item) => (
                    <li key={item.vuln} className="rounded-xl bg-black/30 p-3 sm:p-4">
                      <p className="text-xs sm:text-sm font-semibold text-amber-400">{item.vuln}</p>
                      <p className="mt-1 text-xs text-white/50">Fix: {item.fix}</p>
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
                    Ready to test your defenses?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get a comprehensive security assessment from Cyberlok&apos;s certified penetration testers.
                    Receive actionable insights within 48 hours.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Get a Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  <p className="text-xs sm:text-sm text-white/70">Certified testers (OSCP, CEH, CPT)</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  <p className="text-xs sm:text-sm text-white/70">Industry-standard methodology</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  <p className="text-xs sm:text-sm text-white/70">Compliance reporting available</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
