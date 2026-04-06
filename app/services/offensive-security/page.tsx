"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { useState } from "react";
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
  Zap,
  Wifi,
  Key,
  Search,
  Lock,
  ScrollText,
  ChevronDown,
} from "lucide-react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";

const services = [
  {
    title: "Web Application Penetration Testing",
    desc: "Comprehensive testing of your web applications including OWASP Top 10, business logic flaws, and authentication vulnerabilities.",
    icon: Globe,
    href: "/services/offensive-security/web-application-pentesting",
    deliverables: ["Detailed finding reports with CVSS scores", "Step-by-step reproduction steps", "Remediation guidance", "Free re-testing"],
    industries: ["E-commerce", "Fintech", "Healthcare", "SaaS"],
    highlight: true,
  },
  {
    title: "Mobile Application Security Testing",
    desc: "Deep analysis of iOS and Android apps for runtime manipulation, insecure data storage, API vulnerabilities and more.",
    icon: Smartphone,
    href: "/services/offensive-security/mobile-app-security",
    deliverables: ["Static & dynamic analysis", "API security assessment", "Data leakage detection", "Session management review"],
    industries: ["Banking", "Healthcare", "Retail", "EdTech"],
    highlight: false,
  },
  {
    title: "API Penetration Testing",
    desc: "REST/GraphQL API testing covering authentication bypass, injection attacks, rate limiting and business logic abuse.",
    icon: Terminal,
    href: "/services/offensive-security/api-penetration-testing",
    deliverables: ["API-specific vulnerability coverage", "Authentication weakness testing", "Rate limiting & brute force checks", "Business logic flaw identification"],
    industries: ["Fintech", "SaaS", "Healthcare", "Logistics"],
    highlight: false,
  },
  {
    title: "Network Penetration Testing",
    desc: "Internal and external network testing covering infrastructure, Active Directory, lateral movement and privilege escalation.",
    icon: Network,
    href: "/services/offensive-security/network-penetration-testing",
    deliverables: ["External & internal scope coverage", "AD attack path analysis", "Firewall rule review", "Exploitability assessment"],
    industries: ["Enterprises", "Finance", "Government", "IT Services"],
    highlight: false,
  },
  {
    title: "Cloud Infrastructure Testing",
    desc: "AWS, Azure and GCP security assessments covering misconfigurations, IAM weaknesses and cloud-native attack vectors.",
    icon: Server,
    href: "/services/offensive-security/cloud-security-testing",
    deliverables: ["CSPM assessment coverage", "IAM privilege analysis", "Storage bucket testing", "Serverless vulnerability review"],
    industries: ["Cloud-native startups", "Enterprises", "SaaS providers"],
    highlight: false,
  },
  {
    title: "Red Team Operations",
    desc: "Real-world adversary simulation with full attack lifecycle: reconnaissance, initial access, lateral movement and objective completion.",
    icon: Target,
    href: "/services/offensive-security/red-team-operations",
    deliverables: ["Full attack chain simulation", "Social engineering included", "Customized objectives", "Detailed TTPs report"],
    industries: ["Banking", "Critical infrastructure", "Large enterprises"],
    highlight: false,
  },
  {
    title: "Wireless Penetration Testing",
    desc: "Security assessment of WiFi networks, wireless protocols, and rogue access point detection to identify wireless vulnerabilities.",
    icon: Wifi,
    href: "/services/offensive-security/wireless-penetration-testing",
    deliverables: ["WiFi security assessment", "WPA2/WPA3 analysis", "Rogue AP detection", "Wireless encryption testing"],
    industries: ["Enterprises", "Retail", "Healthcare", "Financial institutions"],
    highlight: false,
  },
  {
    title: "Internal Active Directory Testing",
    desc: "Deep assessment of Active Directory infrastructure covering privilege escalation, credential attacks, and domain compromise scenarios.",
    icon: Key,
    href: "/services/offensive-security/active-directory-testing",
    deliverables: ["AD privilege escalation paths", "Kerberoasting & Golden Ticket testing", "LDAP enumeration", "Domain persistence techniques"],
    industries: ["Enterprises", "Finance", "Government", "Healthcare"],
    highlight: false,
  },
];

const approach = [
  {
    phase: "Reconnaissance",
    desc: "Passive and active information gathering to understand your attack surface, technology stack and potential entry points.",
    duration: "1-2 days",
    icon: Search,
  },
  {
    phase: "Vulnerability Analysis",
    desc: "Automated and manual scanning to identify known vulnerabilities, misconfigurations and security weaknesses.",
    duration: "2-3 days",
    icon: Bug,
  },
  {
    phase: "Exploitation",
    desc: "Controlled exploitation attempts to validate findings and demonstrate real-world impact of identified vulnerabilities.",
    duration: "2-5 days",
    icon: Zap,
  },
  {
    phase: "Post-Exploitation",
    desc: "Lateral movement, privilege escalation and data access attempts to assess the full extent of potential damage.",
    duration: "1-3 days",
    icon: Lock,
  },
  {
    phase: "Reporting & Debrief",
    desc: "Comprehensive reports with technical details, business impact, remediation steps and executive summary for stakeholders.",
    duration: "2-3 days",
    icon: ScrollText,
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Offensive Security" }]} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Bug className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" /> Offensive Security
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Find Vulnerabilities Before{" "}
              <span className="text-blue-400">Attackers Do</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s offensive security team simulates real-world attacks to expose weaknesses in your applications,
              networks and infrastructure. We go beyond automated scans with manual exploitation techniques.
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
                Request Penetration Test <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* STATS - Animated counters */}
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES GRID - With hover animations */}
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
                Penetration Testing Services
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                From web applications to cloud infrastructure, our offensive security team delivers thorough
                assessments with actionable remediation guidance.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  {service.href ? (
                    <Link
                      href={service.href}
                      className={`group block rounded-2xl sm:rounded-3xl border bg-white/5 p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] ${
                        service.highlight
                          ? "border-cyan-400/40 hover:border-cyan-400/60"
                          : "border-white/10 hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition">
                          <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                        </span>
                        <ArrowRight className="h-4 w-4 text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>

                      <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{service.desc}</p>

                      <div className="mt-4 sm:mt-6">
                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Deliverables</p>
                        <ul className="space-y-1.5">
                          {service.deliverables.slice(0, 2).map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 mt-0.5 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  ) : (
                    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition">
                      <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                        <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      </span>

                      <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{service.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{service.desc}</p>

                      <div className="mt-4 sm:mt-6">
                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Deliverables</p>
                        <ul className="space-y-1.5">
                          {service.deliverables.slice(0, 2).map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                              <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 mt-0.5 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* METHODOLOGY - Timeline animation */}
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
                Our Penetration Testing Approach
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A structured, repeatable methodology combined with expert judgment for thorough assessment coverage.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden md:block" />

              <div className="space-y-4 sm:space-y-6">
                {approach.map((step, i) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 hidden md:flex">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2, type: "spring" }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      >
                        <step.icon className="h-6 w-6 text-blue-400" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:border-cyan-400/20 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                      <div className="flex items-center gap-3">
                        <span className="flex md:hidden h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-bold text-blue-400">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-sm sm:text-base">{step.phase}</p>
                          <p className="text-xs text-white/50">{step.duration}</p>
                        </div>
                      </div>
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPLIANCE ALIGNMENT */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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
                    "ISO 27001 - Information security management",
                    "RBI Guidelines - Banking application testing",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 hover:border-amber-400/20 transition-all"
              >
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
                  ].map((item, i) => (
                    <motion.li
                      key={item.vuln}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="rounded-xl bg-black/30 p-3 sm:p-4 hover:bg-black/50 transition"
                    >
                      <p className="text-xs sm:text-sm font-semibold text-amber-400">{item.vuln}</p>
                      <p className="mt-1 text-xs text-white/50">Fix: {item.fix}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 sm:space-y-4 max-w-4xl">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-white/5 transition"
                    >
                      <span className="font-semibold text-sm sm:text-base pr-2">{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 sm:h-5 sm:w-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-white/60 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="absolute inset-0 border-b border-white/5" />
        <Container>
          <div className="py-12 sm:py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 via-white/5 to-transparent p-6 sm:p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-400/10 blur-[80px] rounded-full" />
              
              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-1"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="text-white">Ready to </span>
                    <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                      Test Your Defenses
                    </span>
                    <span className="text-white">?</span>
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
                    Get a comprehensive security assessment from Cyberlok&apos;s certified penetration testers.
                    Identify vulnerabilities before attackers do.
                  </p>
                  
                  <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-6">
                    {[
                      { icon: ShieldCheck, text: "OSCP, CEH, CPT Certified" },
                      { icon: Bug, text: "15K+ Vulnerabilities Found" },
                      { icon: Zap, text: "48hr Report Delivery" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                        <span className="text-xs sm:text-sm text-white/70">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-3 lg:flex-col"
                >
                  <ClickSpark sparkColor="#3b82f6" sparkSize={8} sparkRadius={20} sparkCount={10}>
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <span className="relative flex items-center gap-2">
                        Get a Free Quote
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </ClickSpark>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/50"
                  >
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400/60" />
                    <span>No commitment required</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
