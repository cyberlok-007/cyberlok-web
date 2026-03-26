import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  Bug,
  Globe,
  Smartphone,
  Server,
  Network,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Target,
} from "lucide-react";

const scopes = [
  {
    title: "Web Application Testing",
    desc: "Comprehensive testing of web applications including OWASP Top 10, business logic flaws, and authentication vulnerabilities.",
    icon: Globe,
  },
  {
    title: "Mobile Application Testing",
    desc: "Deep analysis of iOS and Android apps for runtime manipulation, insecure data storage and API vulnerabilities.",
    icon: Smartphone,
  },
  {
    title: "API Security Testing",
    desc: "REST/GraphQL API testing covering authentication bypass, injection attacks, rate limiting and business logic abuse.",
    icon: Server,
  },
  {
    title: "Network Infrastructure Testing",
    desc: "Internal and external network testing covering infrastructure, Active Directory, lateral movement and privilege escalation.",
    icon: Network,
  },
];

const deliverables = [
  "Executive summary with business risk assessment",
  "Technical report with detailed findings",
  "CVSS scores and severity ratings",
  "Step-by-step reproduction steps",
  "Proof of concept screenshots",
  "Remediation guidance with priority",
  "Free re-testing after remediation",
  "Compliance mapping (optional)",
];

const methodology = [
  { phase: "Reconnaissance", desc: "Passive and active information gathering", duration: "1-2 days" },
  { phase: "Scanning", desc: "Automated and manual vulnerability discovery", duration: "2-3 days" },
  { phase: "Exploitation", desc: "Controlled exploitation to validate findings", duration: "2-5 days" },
  { phase: "Reporting", desc: "Comprehensive reports with remediation guidance", duration: "2-3 days" },
];

const faqs = [
  {
    q: "What types of penetration testing do you offer?",
    a: "We offer web application, mobile application, API, network infrastructure, cloud and social engineering penetration testing. We can scope testing based on your specific requirements.",
  },
  {
    q: "How long does a penetration test take?",
    a: "Typical penetration tests range from 1-2 weeks depending on scope. Web application tests take 5-10 days, network tests take 7-14 days, and comprehensive assessments can take 3-4 weeks.",
  },
  {
    q: "Do you work on production environments?",
    a: "We prefer staging environments when available. For production testing, we schedule during low-traffic windows and use careful techniques to minimize disruption. We always discuss testing windows with clients.",
  },
  {
    q: "Are your testers certified?",
    a: "Yes, our team holds OSCP, CEH, CPT, GWAPT and GPEN certifications. We follow industry-standard methodologies including OWASP and PTES.",
  },
];

export default function PenetrationTestingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <Bug className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" /> Penetration Testing
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Deep Testing for{" "}
              <span className="text-cyan-300">Real-World Impact</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s penetration testing goes beyond automated scans. Our certified testers combine
              manual techniques with industry-leading tools to identify and exploit vulnerabilities that
              automated tools miss.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Request Penetration Test <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/offensive-security"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View All Offensive Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SCOPE OPTIONS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Testing Scopes
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Choose the scope that matches your security testing requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {scopes.map((scope) => (
                <div
                  key={scope.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <scope.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{scope.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{scope.desc}</p>
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
                Our Testing Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A structured approach following OWASP, PTES and NIST guidelines.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {methodology.map((m, i) => (
                <div
                  key={m.phase}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-bold text-cyan-300">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{m.phase}</p>
                      <p className="text-xs text-white/50">{m.duration}</p>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/60">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  What You Receive
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Comprehensive deliverables designed for both technical and executive audiences.
                </p>
                <ul className="mt-6 sm:mt-8 space-y-2.5">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                  <p className="font-semibold text-sm sm:text-base">Common Vulnerabilities Found</p>
                </div>
                <div className="grid gap-3">
                  {[
                    "SQL Injection & Command Injection",
                    "Broken Authentication & Session Management",
                    "Sensitive Data Exposure",
                    "XML External Entities (XXE)",
                    "Broken Access Control",
                    "Security Misconfigurations",
                    "Cross-Site Scripting (XSS)",
                    "Insecure Deserialization",
                  ].map((v) => (
                    <div key={v} className="flex items-center gap-3 rounded-lg bg-black/30 p-3">
                      <Target className="h-4 w-4 text-amber-400 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING INDICATOR */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Typical Turnaround</p>
                    <p className="mt-1 text-xs sm:text-sm text-white/60">
                      Reports delivered within 48 hours of testing completion
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Retesting Included</p>
                    <p className="mt-1 text-xs sm:text-sm text-white/60">
                      Free retesting after vulnerability remediation
                    </p>
                  </div>
                </div>
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
                    Ready to find your vulnerabilities?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get a detailed penetration test from Cyberlok&apos;s certified security professionals.
                    Contact us for a custom quote based on your scope.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Get a Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
