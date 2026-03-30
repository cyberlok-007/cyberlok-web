"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Bell,
  Eye,
  FileText,
  CheckCircle2,
  Clock,
  Users,
  Server,
  Zap,
  Activity,
  Search,
} from "lucide-react";

const phases = [
  {
    title: "Continuous Monitoring",
    desc: "24×7 surveillance of your endpoints, networks, and cloud environments for suspicious activities.",
    icon: Eye,
    activities: [
      "Real-time endpoint telemetry collection",
      "Network traffic analysis and anomaly detection",
      "Cloud infrastructure monitoring",
      "Log aggregation and correlation",
    ],
  },
  {
    title: "Threat Detection",
    desc: "Multi-layered detection using signature-based, behavioral, and AI-driven analysis.",
    icon: Bell,
    activities: [
      "Signature and IOC-based detection",
      "UEBA behavioral anomaly detection",
      "Machine learning threat patterns",
      "Threat intelligence integration",
    ],
  },
  {
    title: "Alert Triage & Analysis",
    desc: "Expert analysts investigate alerts to distinguish real threats from false positives.",
    icon: Search,
    activities: [
      "Automated alert prioritization",
      "Human-led forensic analysis",
      "Context enrichment from threat intel",
      "False positive filtering",
    ],
  },
  {
    title: "Incident Response",
    desc: "Rapid containment and remediation when genuine threats are confirmed.",
    icon: Zap,
    activities: [
      "Automated containment playbooks",
      "Manual investigation by IR specialists",
      "Malware isolation and removal",
      "Credential reset and hardening",
    ],
  },
  {
    title: "Threat Hunting",
    desc: "Proactive adversary pursuit to uncover threats that evade automated detection.",
    icon: Activity,
    activities: [
      "Hypothesis-driven threat hunting",
      "Indicators of attack identification",
      "APT and ransomware pursuit",
      "Historical data forensics",
    ],
  },
  {
    title: "Reporting & Improvement",
    desc: "Comprehensive reporting with actionable recommendations to strengthen defenses.",
    icon: FileText,
    activities: [
      "Executive summary reports",
      "Technical incident documentation",
      "Attack pattern analysis",
      "Security posture recommendations",
    ],
  },
];

const features = [
  {
    title: "24×7 SOC Coverage",
    desc: "Round-the-clock monitoring by certified security analysts across multiple time zones.",
    icon: Clock,
  },
  {
    title: "Multi-Environment Support",
    desc: "Coverage for endpoints, servers, networks, cloud (AWS, Azure, GCP), and SaaS applications.",
    icon: Server,
  },
  {
    title: "Ransomware Protection",
    desc: "Specialized detection and prevention against ransomware attacks with rapid response.",
    icon: Shield,
  },
  {
    title: "Insider Threat Detection",
    desc: "Behavioral analytics to identify malicious or negligent insider activity.",
    icon: Users,
  },
  {
    title: "Compliance Reporting",
    desc: "Ready-to-use reports for PCI DSS, HIPAA, SOC 2, ISO 27001, and other frameworks.",
    icon: FileText,
  },
  {
    title: "Average 15min Response",
    desc: "Critical alerts acknowledged within 15 minutes, ensuring rapid threat containment.",
    icon: Zap,
  },
];

const complianceCoverage = [
  { name: "PCI DSS", desc: "Continuous monitoring for cardholder data environments" },
  { name: "HIPAA", desc: "Healthcare monitoring with PHI protection controls" },
  { name: "SOC 2", desc: "Trust service criteria monitoring and reporting" },
  { name: "ISO 27001", desc: "ISMS monitoring and compliance alignment" },
  { name: "NIST CSF", desc: "Cybersecurity framework implementation" },
  { name: "DPDP Act", desc: "India data protection compliance monitoring" },
];

const tools = [
  "SIEM Platform (Splunk, QRadar, Microsoft Sentinel)",
  "EDR Solutions (CrowdStrike, SentinelOne, Microsoft Defender)",
  "NDR/Network Detection (Darktrace, Vectra)",
  "Threat Intelligence Platform",
  "SOAR Automation (Cortex XSOAR, Splunk SOAR)",
  "Cloud Security Posture Management",
];

const deliverables = [
  "Real-time security monitoring dashboard",
  "Daily threat intelligence briefings",
  "Weekly security summary reports",
  "Monthly executive risk reports",
  "Incident response runbooks",
  "Quarterly security posture reviews",
  "Compliance audit support",
  "24×7 incident hotline access",
];

const stats = [
  { value: "100%", label: "SOC Availability" },
  { value: "15min", label: "Avg Response Time" },
  { value: "500+", label: "Endpoints Monitored" },
  { value: "99.9%", label: "Alert Accuracy" },
];

const faqs = [
  {
    q: "What is the difference between MDR and traditional monitoring?",
    a: "Traditional monitoring provides alerts without human investigation. MDR includes dedicated analysts who triage alerts, conduct forensic analysis, perform threat hunting, and execute incident response—all with 24×7 coverage. You get human expertise plus technology.",
  },
  {
    q: "What environments does your MDR cover?",
    a: "We cover endpoints (Windows, Mac, Linux), servers, networks, cloud environments (AWS, Azure, GCP), containers, and SaaS applications. Our multi-vector approach ensures comprehensive protection across your entire infrastructure.",
  },
  {
    q: "How quickly can you detect and respond to threats?",
    a: "Our average alert acknowledgment time is 15 minutes for critical alerts. For high-severity incidents, our automated playbooks can contain threats within minutes. Human analysts are available 24×7 for complex investigations.",
  },
  {
    q: "Do you help with compliance requirements?",
    a: "Yes, we provide compliance-ready reporting for PCI DSS, HIPAA, SOC 2, ISO 27001, NIST CSF, and more. Our reports map findings to specific compliance controls and include evidence collection for audits.",
  },
];

export default function MDRPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[
              { label: "Services", href: "/services" },
              { label: "Managed Detection & Response" }
            ]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              Sentinel - Managed Detection & Response
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              24×7 Threat Detection &{" "}
              <span className="text-cyan-300">Response</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s MDR service provides continuous monitoring, expert threat analysis, and rapid incident
              response. Our SOC analysts protect your infrastructure around the clock with advanced detection
              technology and human expertise.
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
                Request MDR Demo <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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

      {/* FEATURES */}
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
                Key Capabilities
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive protection across your entire digital infrastructure.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.08]"
                >
                  <feature.icon className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{feature.desc}</p>
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
                How Our MDR Works
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A systematic approach to detecting, analyzing, and responding to threats.
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

      {/* COMPLIANCE & TOOLS */}
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
                  Compliance Coverage
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Built-in compliance reporting for major regulatory frameworks.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {complianceCoverage.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <ShieldCheck className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-white/60">{item.desc}</p>
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
                  Technology Stack
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Industry-leading security tools integrated into our MDR platform.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {tools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
                    >
                      <Server className="h-4 w-4 text-cyan-400 shrink-0" />
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
                Comprehensive deliverables for technical teams and leadership.
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
                    Protect your organization 24×7
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive threat detection and response from Cyberlok&apos;s expert SOC team.
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
