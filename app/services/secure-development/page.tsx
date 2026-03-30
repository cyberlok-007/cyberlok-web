"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Lock,
  Shield,
  FileText,
  CheckCircle2,
  Code2,
  GitBranch,
  Bug,
  ShieldCheck,
  Users,
  BookOpen,
  Terminal,
  Globe,
  Zap,
} from "lucide-react";

const phases = [
  {
    title: "Security Requirements Definition",
    desc: "Establishing security requirements based on business needs and compliance.",
    icon: FileText,
    activities: [
      "Security requirement gathering",
      "Compliance mapping (PCI DSS, HIPAA, etc.)",
      "Threat modeling session",
      "Security design review",
    ],
  },
  {
    title: "Secure Architecture Design",
    desc: "Designing secure system architecture with security-by-design principles.",
    icon: Globe,
    activities: [
      "Architecture security review",
      "Trust boundary definition",
      "Data flow analysis",
      "Security pattern selection",
    ],
  },
  {
    title: "Secure Coding Standards",
    desc: "Implementing and enforcing secure coding standards across development teams.",
    icon: Code2,
    activities: [
      "Secure coding guideline creation",
      "Code review checklist development",
      "Security library selection",
      "Developer training curriculum",
    ],
  },
  {
    title: "Threat Modeling",
    desc: "Systematic identification of threats and mitigation strategies.",
    icon: Bug,
    activities: [
      "STRIDE methodology",
      "Attack tree analysis",
      "Data flow diagrams",
      "Mitigation strategy definition",
    ],
  },
  {
    title: "Security Integration",
    desc: "Integrating security into CI/CD pipeline and development workflow.",
    icon: GitBranch,
    activities: [
      "SAST integration",
      "Dependency scanning",
      "Secret scanning",
      "Security gates implementation",
    ],
  },
  {
    title: "Security Testing",
    desc: "Comprehensive security testing throughout the development lifecycle.",
    icon: Terminal,
    activities: [
      "Unit security testing",
      "Integration security testing",
      "API security testing",
      "Penetration testing",
    ],
  },
  {
    title: "Security Review",
    desc: "Formal security review and approval before deployment.",
    icon: ShieldCheck,
    activities: [
      "Architecture review board",
      "Security design review",
      "Code security review",
      "Deployment approval",
    ],
  },
  {
    title: "Maintenance & Updates",
    desc: "Ongoing security maintenance and vulnerability management.",
    icon: Zap,
    activities: [
      "Vulnerability monitoring",
      "Patch management",
      "Security updates",
      "Continuous improvement",
    ],
  },
];

const practices = [
  {
    title: "OWASP Top 10 Integration",
    desc: "Incorporating OWASP Top 10 mitigations into your development process.",
    icon: Shield,
  },
  {
    title: "Secure SDLC Implementation",
    desc: "End-to-end security integration throughout the software development lifecycle.",
    icon: GitBranch,
  },
  {
    title: "DevSecOps Transformation",
    desc: "Shifting security left with automated security in CI/CD pipelines.",
    icon: Terminal,
  },
  {
    title: "Security Training Programs",
    desc: "Hands-on security training for developers at all skill levels.",
    icon: Users,
  },
  {
    title: "Architecture Review Board",
    desc: "Establishing governance for secure architecture decisions.",
    icon: BookOpen,
  },
  {
    title: "Incident Response Planning",
    desc: "Preparing for security incidents with response procedures and runbooks.",
    icon: Bug,
  },
];

const sdlcPhases = [
  { name: "Requirements", security: "Security requirements, threat modeling" },
  { name: "Design", security: "Architecture review, security patterns" },
  { name: "Implementation", security: "Secure coding, SAST, secrets scanning" },
  { name: "Testing", security: "DAST, penetration testing, security tests" },
  { name: "Deployment", security: "Security hardening, configuration review" },
  { name: "Maintenance", security: "Vulnerability management, patching" },
];

const tools = [
  "SonarQube - Code quality and security",
  "Snyk - Dependency vulnerability scanning",
  "Checkmarx - SAST",
  "Veracode - Application security testing",
  "GitHub Advanced Security",
  "Semgrep - Static analysis",
  "Burp Suite - Web security testing",
  "OWASP ZAP - DAST",
];

const deliverables = [
  "Secure SDLC framework",
  "Secure coding standards",
  "Threat models and risk assessments",
  "Security integration playbooks",
  "Developer training materials",
  "Security review templates",
  "Incident response procedures",
  "Continuous security guidance",
];

const stats = [
  { value: "100+", label: "SDLC Implementations" },
  { value: "500+", label: "Developers Trained" },
  { value: "80%", label: "Vulnerability Reduction" },
  { value: "100%", label: "OWASP Coverage" },
];

const faqs = [
  {
    q: "What is Secure SDLC (SSDLC)?",
    a: "Secure SDLC integrates security activities throughout the software development process, from requirements gathering to deployment and maintenance. It ensures security is built into applications from the start, rather than being added as an afterthought.",
  },
  {
    q: "How do you tailor the program to our team?",
    a: "We assess your current development practices, team size, tech stack, and existing security measures. Based on this assessment, we design a custom secure SDLC program that integrates smoothly with your workflows and addresses your specific security needs.",
  },
  {
    q: "Will this slow down our development process?",
    a: "Our goal is to embed security without creating bottlenecks. We focus on automation, integration with existing tools, and making security checks part of normal development workflow. Most teams see minimal impact with significant security benefits.",
  },
  {
    q: "Do you provide ongoing support after implementation?",
    a: "Yes, we provide continuous support including security updates, tool maintenance, developer coaching, and periodic reviews. We also offer retainer arrangements for organizations that need ongoing secure development expertise.",
  },
];

export default function SecureDevelopmentPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Secure Development" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              Pinpoint - Secure Software Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Build Security Into{" "}
              <span className="text-cyan-300">Your Development Process</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s Secure Software Development service helps organizations integrate security throughout the SDLC.
              From threat modeling to secure coding standards, we help you build applications that are secure by design.
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
                Implement Secure SDLC <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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

      {/* PRACTICES */}
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
                Secure Development Practices
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive practices to embed security throughout your development lifecycle.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {practices.map((practice, i) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.08]"
                >
                  <practice.icon className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold">{practice.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{practice.desc}</p>
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
                Secure SDLC Implementation
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Systematic approach to building security into every phase of development.
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

      {/* SDLC PHASES & TOOLS */}
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
                  Security at Every Phase
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Security activities integrated throughout the development lifecycle.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {sdlcPhases.map((phase, i) => (
                    <motion.div
                      key={phase.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Lock className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{phase.name}</p>
                        <p className="text-xs text-white/60">{phase.security}</p>
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
                  Tools We Implement
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Industry-leading tools integrated into your development pipeline.
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
                      <Code2 className="h-4 w-4 text-cyan-400 shrink-0" />
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
                Complete secure development framework and documentation.
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
                    Build security into your development process
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Let Cyberlok help you implement secure SDLC practices that reduce vulnerabilities and improve security posture.
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
