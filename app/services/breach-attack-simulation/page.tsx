"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Gamepad2,
  Shield,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Target,
  Play,
  BarChart3,
  RefreshCw,
  Eye,
  Globe,
  ShieldCheck,
  Database,
} from "lucide-react";

const phases = [
  {
    title: "Environment Assessment",
    desc: "Understanding your current security infrastructure and controls.",
    icon: Eye,
    activities: [
      "Security control inventory",
      "Infrastructure mapping",
      "Integration point analysis",
      "Baseline configuration review",
    ],
  },
  {
    title: "Attack Library Selection",
    desc: "Selecting relevant attack scenarios from our comprehensive library.",
    icon: Database,
    activities: [
      "MITRE ATT&CK coverage",
      "Threat intelligence mapping",
      "Industry-specific scenarios",
      "Custom attack development",
    ],
  },
  {
    title: "Automated Execution",
    desc: "Running continuous automated attack simulations against your environment.",
    icon: Play,
    activities: [
      "Continuous attack simulation",
      "Multiple attack vectors",
      "Real-time payload execution",
      "Environment replication",
    ],
  },
  {
    title: "Control Validation",
    desc: "Testing the effectiveness of security controls against each attack.",
    icon: ShieldCheck,
    activities: [
      "Prevention effectiveness testing",
      "Detection capability validation",
      "Response mechanism testing",
      "Logging verification",
    ],
  },
  {
    title: "Data Collection",
    desc: "Gathering comprehensive data on attack success and control gaps.",
    icon: BarChart3,
    activities: [
      "Attack success metrics",
      "Detection rate analysis",
      "Response time measurement",
      "Impact assessment",
    ],
  },
  {
    title: "Gap Analysis",
    desc: "Identifying and prioritizing security control gaps and weaknesses.",
    icon: Target,
    activities: [
      "Control effectiveness scoring",
      "Risk prioritization",
      "Attack path identification",
      "Compliance mapping",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Detailed findings with actionable remediation guidance.",
    icon: FileText,
    activities: [
      "Executive dashboard",
      "Technical detailed reports",
      "Remediation playbooks",
      "Trend analysis reports",
    ],
  },
  {
    title: "Continuous Monitoring",
    desc: "Ongoing BAS deployment for continuous security validation.",
    icon: RefreshCw,
    activities: [
      "Continuous attack simulation",
      "Change impact assessment",
      "Control health monitoring",
      "Compliance tracking",
    ],
  },
];

const capabilities = [
  {
    title: "Continuous Validation",
    desc: "24/7 automated attack simulation to test controls without manual intervention.",
    icon: RefreshCw,
  },
  {
    title: "MITRE ATT&CK Coverage",
    desc: "Comprehensive coverage of adversary tactics and techniques from the ATT&CK framework.",
    icon: Shield,
  },
  {
    title: "Multi-Environment Support",
    desc: "Test across on-premises, cloud, hybrid, and containerized environments.",
    icon: Globe,
  },
  {
    title: "SIEM Integration",
    desc: "Validate SIEM detection rules and correlation logic against real attack patterns.",
    icon: Database,
  },
  {
    title: "Incident Response Testing",
    desc: "Test your IR team&apos;s ability to detect and respond to simulated attacks.",
    icon: AlertTriangle,
  },
  {
    title: "Compliance Automation",
    desc: "Automate compliance testing for PCI DSS, HIPAA, SOC 2, and more.",
    icon: ShieldCheck,
  },
];

const attackCategories = [
  { name: "Endpoint Attacks", desc: "Malware, ransomware, fileless attacks" },
  { name: "Network Attacks", desc: "Lateral movement, man-in-the-middle" },
  { name: "Email Attacks", desc: "Phishing, BEC, malicious attachments" },
  { name: "Web Attacks", desc: "SQLi, XSS, CSRF, OWASP Top 10" },
  { name: "Cloud Attacks", desc: "Misconfiguration, privilege escalation" },
  { name: "Identity Attacks", desc: "Credential stuffing, pass-the-hash" },
];

const deliverables = [
  "Control effectiveness scorecard",
  "Attack simulation results",
  "Detection gap analysis",
  "Remediation roadmap",
  "Executive summary dashboard",
  "Technical detailed report",
  "Trend comparison reports",
  "Continuous monitoring access",
];

const stats = [
  { value: "1000+", label: "Attack Scenarios" },
  { value: "24/7", label: "Continuous Testing" },
  { value: "95%", label: "Control Validation Rate" },
  { value: "Real-time", label: "Dashboard Access" },
];

const faqs = [
  {
    q: "What&apos;s the difference between BAS and penetration testing?",
    a: "While penetration testing is a point-in-time assessment, BAS provides continuous, automated testing of your security controls. BAS can run thousands of attack scenarios regularly to ensure controls remain effective as your environment changes.",
  },
  {
    q: "Do we need to install agents in our environment?",
    a: "We offer both agent-based and agentless BAS approaches. Agentless testing uses your existing infrastructure and network access, while agents provide deeper control testing capabilities. We recommend a hybrid approach for comprehensive coverage.",
  },
  {
    q: "Will BAS attacks affect our production systems?",
    a: "Our BAS platform is designed to be safe and non-disruptive. Attack simulations use safe payloads that validate controls without causing actual damage. We work with you to establish safe testing windows and can use isolated environments when needed.",
  },
  {
    q: "How long does initial deployment take?",
    a: "Initial deployment typically takes 1-2 weeks, including environment assessment, integration configuration, and baseline validation. After deployment, you&apos;ll have immediate access to continuous attack simulation and real-time dashboards.",
  },
];

export default function BreachAttackSimulationPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Breach & Attack Simulation" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Gamepad2 className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
              Pinpoint - Breach & Attack Simulation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Continuously Test Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Security Controls</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s Breach & Attack Simulation (BAS) platform continuously tests your security controls against
              real-world attack scenarios. Automate validation of prevention, detection, and response capabilities 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Deploy BAS <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{stat.value}</p>
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
                BAS Capabilities
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive continuous security validation across your entire environment.
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
                  <cap.icon className="h-8 w-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4" />
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
                Our BAS Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Systematic approach to continuously validate and improve your security posture.
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
                        <phase.icon className="h-6 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition hover:border-cyan-400/20">
                      <div className="flex items-start gap-4">
                        <span className="flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                          <phase.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                        </span>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                              {i + 1}
                            </span>
                            <span className="md:hidden text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">0{i + 1}</span>
                            <h3 className="text-base sm:text-lg font-semibold">{phase.title}</h3>
                          </div>
                          
                          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                            {phase.desc}
                          </p>
                          
                          <ul className="mt-3 space-y-1.5">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-0.5 shrink-0" />
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

      {/* ATTACK CATEGORIES */}
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
                Attack Categories We Simulate
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive coverage across all major attack vectors.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {attackCategories.map((category, i) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-5"
                >
                  <Gamepad2 className="h-6 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{category.name}</p>
                    <p className="text-xs text-white/60">{category.desc}</p>
                  </div>
                </motion.div>
              ))}
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
                Actionable insights to continuously improve your security controls.
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
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-0.5 shrink-0" />
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
                    Continuously validate your security controls
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Deploy Breach & Attack Simulation to automatically test your defenses 24/7 against real-world attacks.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition w-full sm:w-auto mt-4 md:mt-0"
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
