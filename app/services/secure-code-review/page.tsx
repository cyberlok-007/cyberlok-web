"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Code2,
  FileText,
  CheckCircle2,
  Bug,
  Eye,
  FileCode,
  GitBranch,
  Server,
  Terminal,
  ShieldCheck,
  Shield,
} from "lucide-react";

const phases = [
  {
    title: "Codebase Reconnaissance",
    desc: "Understanding the application architecture, tech stack, and code structure.",
    icon: GitBranch,
    activities: [
      "Architecture analysis",
      "Tech stack identification",
      "Dependency mapping",
      "Data flow understanding",
    ],
  },
  {
    title: "Threat Modeling",
    desc: "Identifying potential security threats based on application functionality and design.",
    icon: Shield,
    activities: [
      "STRIDE threat modeling",
      "Attack surface analysis",
      "Trust boundary mapping",
      "Security requirement identification",
    ],
  },
  {
    title: "Static Analysis",
    desc: "Automated code analysis using industry-leading SAST tools.",
    icon: Terminal,
    activities: [
      "SAST tool scanning",
      "Custom rule development",
      "False positive filtering",
      "Severity classification",
    ],
  },
  {
    title: "Manual Code Review",
    desc: "Expert manual analysis of critical code sections and security-sensitive functionality.",
    icon: Eye,
    activities: [
      "Authentication logic review",
      "Authorization checks verification",
      "Input validation analysis",
      "Cryptographic implementation review",
    ],
  },
  {
    title: "Dependency Analysis",
    desc: "Identifying vulnerabilities in third-party libraries and dependencies.",
    icon: Server,
    activities: [
      "Known CVE identification",
      "Outdated dependency detection",
      "License compliance checking",
      "Supply chain security review",
    ],
  },
  {
    title: "Security Testing",
    desc: "Dynamic testing to validate findings and identify runtime vulnerabilities.",
    icon: Bug,
    activities: [
      "Interactive testing",
      "API security testing",
      "Authentication testing",
      "Authorization testing",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Comprehensive report with findings, severity ratings, and fix recommendations.",
    icon: FileText,
    activities: [
      "Detailed finding documentation",
      "CVSS scoring",
      "Remediation guidance",
      "Code examples for fixes",
    ],
  },
];

const capabilities = [
  {
    title: "OWASP Top 10 Coverage",
    desc: "Comprehensive coverage of OWASP Top 10 vulnerabilities including A01-A10.",
    icon: ShieldCheck,
  },
  {
    title: "Secure SDLC Integration",
    desc: "Code review integrated into your development lifecycle for shift-left security.",
    icon: Code2,
  },
  {
    title: "CI/CD Integration",
    desc: "Automated security scanning in your continuous integration pipeline.",
    icon: GitBranch,
  },
  {
    title: "Multiple Languages",
    desc: "Expert review across Java, Python, Node.js, .NET, Go, and more.",
    icon: FileCode,
  },
  {
    title: "API Security Review",
    desc: "Deep analysis of REST, GraphQL, and gRPC API security.",
    icon: Terminal,
  },
  {
    title: "Compliance Mapping",
    desc: "Findings mapped to PCI DSS, HIPAA, SOC 2 requirements.",
    icon: Shield,
  },
];

const languages = [
  { name: "Java/JEE", desc: "Spring, Struts, Jakarta EE" },
  { name: "Python", desc: "Django, Flask, FastAPI" },
  { name: "JavaScript/TypeScript", desc: "Node.js, React, Angular, Vue" },
  { name: ".NET/C#", desc: "ASP.NET, .NET Core" },
  { name: "Go", desc: "Standard library, Gin, Echo" },
  { name: "Ruby", desc: "Rails, Sinatra" },
  { name: "PHP", desc: "Laravel, Symfony" },
  { name: "Mobile", desc: "iOS (Swift), Android (Kotlin)" },
];

const tools = [
  "SonarQube - Code quality and security",
  "Semgrep - Static analysis",
  "Snyk - Dependency scanning",
  "Checkmarx - SAST",
  "Veracode - Application security",
  "Burp Suite - Web testing",
  "OWASP ZAP - DAST",
  "npm audit - JavaScript dependencies",
  "Safety - Python dependencies",
  "Trivy - Container scanning",
];

const deliverables = [
  "Comprehensive security review report",
  "Vulnerability findings with CVSS scores",
  "Remediation recommendations",
  "Code examples and patches",
  "Executive summary",
  "Compliance mapping report",
  "Security best practices guide",
  "Follow-up review after fixes",
];

const stats = [
  { value: "500+", label: "Code Reviews Completed" },
  { value: "10K+", label: "Vulnerabilities Found" },
  { value: "50+", label: "Languages Covered" },
  { value: "48hrs", label: "Report Delivery" },
];

const faqs = [
  {
    q: "What&apos;s the difference between SAST and manual code review?",
    a: "SAST tools automate vulnerability detection using static analysis. Manual code review adds expert analysis that catches business logic flaws, authentication bypasses, and complex vulnerabilities that tools miss. We combine both for comprehensive coverage.",
  },
  {
    q: "Do you integrate with our CI/CD pipeline?",
    a: "Yes, we can integrate security scanning into your CI/CD pipeline using tools like SonarQube, Snyk, or Semgrep. We also provide pre-commit hooks and GitHub/GitLab integration for seamless developer experience.",
  },
  {
    q: "What languages and frameworks do you support?",
    a: "We support major languages including Java, Python, JavaScript/TypeScript, C#, Go, Ruby, PHP, and mobile platforms (iOS/Android). Our team has expertise across web applications, APIs, microservices, and cloud-native architectures.",
  },
  {
    q: "How do you prioritize findings?",
    a: "We use CVSS (Common Vulnerability Scoring System) scores to prioritize findings. Critical and High severity issues are highlighted for immediate action, while Medium and Low provide context for risk-based remediation planning.",
  },
];

export default function SecureCodeReviewPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Secure Code Review" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              Pinpoint - Secure Code Review
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Find Vulnerabilities Before{" "}
              <span className="text-cyan-300">They Reach Production</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s Secure Code Review combines automated SAST tools with expert manual analysis to identify
              security vulnerabilities, business logic flaws, and architectural weaknesses in your source code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Request Code Review <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Review Capabilities
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive code security review across multiple dimensions.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.08]"
                >
                  <cap.icon className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* METHODOLOGY */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Our Review Process
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Systematic approach combining automated tools and expert manual analysis.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[20px] sm:left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden md:block" />

              <div className="space-y-4 sm:space-y-6">
                {phases.map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-0 top-6 hidden md:flex items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2, type: "spring" }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      >
                        <phase.icon className="h-6 w-6 text-cyan-300" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition hover:border-cyan-400/20">
                      <div className="flex items-start gap-4">
                        <span className="flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                          <phase.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                        </span>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
                              {i + 1}
                            </span>
                            <span className="md:hidden text-xs font-semibold text-cyan-400">0{i + 1}</span>
                            <h3 className="text-base sm:text-lg font-semibold">{phase.title}</h3>
                          </div>
                          
                          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                            {phase.desc}
                          </p>
                          
                          <ul className="mt-3 space-y-1.5">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mt-0.5 shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* LANGUAGES & TOOLS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Languages We Cover
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Expert review across major programming languages and frameworks.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {languages.map((lang, i) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <FileCode className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{lang.name}</p>
                        <p className="text-xs text-white/60">{lang.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Tools We Use
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Industry-leading SAST, DAST, and dependency scanning tools.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {tools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
                    >
                      <Bug className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-sm text-white/70">{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                What You Receive
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive deliverables for development and security teams.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-white/70">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <p className="font-semibold text-sm sm:text-base">{faq.q}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Secure your code before deployment
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive code review from Cyberlok&apos;s security experts.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Get a Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      <ScrollToTop />
    </div>
  );
}
