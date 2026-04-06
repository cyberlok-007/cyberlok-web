"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Search,
  FileText,
  CheckCircle2,
  Clock,
  Database,
  Bug,
  AlertTriangle,
  Microscope,
  ShieldAlert,
  Lock,
  Users,
} from "lucide-react";

const phases = [
  {
    title: "Evidence Identification",
    desc: "Locate and preserve digital evidence while maintaining chain of custody.",
    icon: Search,
    activities: [
      "Live system forensics",
      "Memory acquisition",
      "Drive imaging and cloning",
      "Chain of custody documentation",
    ],
  },
  {
    title: "Evidence Preservation",
    desc: "Secure handling and storage of digital evidence to ensure integrity.",
    icon: Database,
    activities: [
      "Write-blocker usage",
      "Hash verification",
      "Secure evidence storage",
      "Access control implementation",
    ],
  },
  {
    title: "Forensic Analysis",
    desc: "Deep dive analysis to understand the attack and identify perpetrators.",
    icon: Microscope,
    activities: [
      "Malware analysis",
      "Timeline reconstruction",
      "Log analysis and correlation",
      "Network artifact examination",
    ],
  },
  {
    title: "Malware Investigation",
    desc: "Reverse engineering and analysis of malicious software.",
    icon: Bug,
    activities: [
      "Static malware analysis",
      "Dynamic behavior analysis",
      "Sandbox detonation",
      "Indicator extraction",
    ],
  },
  {
    title: "Incident Reconstruction",
    desc: "Recreate the attack timeline and understand the full breach scope.",
    icon: Clock,
    activities: [
      "Attack chain mapping",
      "Lateral movement tracking",
      "Data exfiltration assessment",
      "Impact quantification",
    ],
  },
  {
    title: "Reporting & Testimony",
    desc: "Comprehensive documentation and expert witness support if needed.",
    icon: FileText,
    activities: [
      "Technical incident report",
      "Executive summary",
      "Legal documentation support",
      "Expert witness preparation",
    ],
  },
];

const capabilities = [
  {
    title: "Ransomware Investigation",
    desc: "Identify ransomware variants, attack vectors, and assess encryption scope. Help recover files and prevent future attacks.",
    icon: Lock,
  },
  {
    title: "Data Breach Investigation",
    desc: "Determine breach cause, scope, and data exposure. Support notification requirements and regulatory compliance.",
    icon: ShieldAlert,
  },
  {
    title: "Insider Threat Investigation",
    desc: "Investigate employee misconduct, data theft, and policy violations with sensitivity and legal compliance.",
    icon: Users,
  },
  {
    title: "Cyber Crime Investigation",
    desc: "Support law enforcement with technical investigation, evidence collection, and expert testimony.",
    icon: AlertTriangle,
  },
  {
    title: "Malware Forensics",
    desc: "Reverse engineer malware to understand capabilities, attribution, and develop detection signatures.",
    icon: Bug,
  },
  {
    title: "Cloud Forensics",
    desc: "Investigate incidents in AWS, Azure, and GCP environments including log analysis and artifact recovery.",
    icon: Database,
  },
];

const tools = [
  "FTK Imager - Disk imaging and acquisition",
  "Volatility - Memory forensics",
  "Autopsy - File system analysis",
  "Wireshark - Network traffic analysis",
  "CAPE Sandbox - Malware analysis",
  "IDA Pro - Reverse engineering",
  "Splunk/ELK - Log forensics",
  "Registry Viewer - Windows forensics",
  "AXIOM - Mobile forensics",
  "Cellebrite - Mobile device extraction",
];

const deliverables = [
  "Incident timeline reconstruction",
  "Evidence preservation report",
  "Technical investigation report",
  "Executive summary with impact analysis",
  "IOC (Indicators of Compromise) list",
  "Malware analysis report",
  "Recommendations for hardening",
  "Legal support documentation",
];

const stats = [
  { value: "200+", label: "Investigations Completed" },
  { value: "24hrs", label: "Rapid Response Time" },
  { value: "100+", label: "Malware Analyzed" },
  { value: "95%", label: "Evidence Recovery" },
];

const faqs = [
  {
    q: "What types of incidents do you investigate?",
    a: "We investigate all types of cyber incidents including ransomware attacks, data breaches, insider threats, phishing campaigns, account compromises, malware infections, and cyber espionage. Our team has experience across financial, healthcare, technology, and government sectors.",
  },
  {
    q: "How quickly can you respond to an incident?",
    a: "Our digital forensics team can be on-site or remotely engaged within 24 hours of your call. For critical incidents, we offer 4-hour emergency response. We also provide pre-incident preparation services to ensure you have the right tools and processes in place.",
  },
  {
    q: "How do you maintain evidence integrity?",
    a: "We follow NIST and ISO 27037 standards for digital evidence handling. All evidence is acquired using write-blockers, hash verification is performed, and chain of custody is meticulously documented. Our evidence handling procedures are court-defensible.",
  },
  {
    q: "Can you provide testimony if a case goes to court?",
    a: "Yes, our forensic analysts have provided expert witness testimony in civil and criminal proceedings. We can support law enforcement investigations, assist with legal discovery, and provide admissible evidence reports.",
  },
];

export default function DigitalForensicsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Digital Forensics" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Microscope className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
              Sentinel - Digital Forensics Investigations
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Digital Forensics &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Incident Investigation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              When a breach occurs, you need answers fast. Cyberlok&apos;s digital forensics team provides rapid response,
              thorough investigation, and court-defensible evidence handling. We uncover what happened, how it happened,
              and help you prevent it from happening again.
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
                Request Investigation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                Investigation Capabilities
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Expert investigation across all major incident types and platforms.
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
                Our Investigation Process
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Systematic approach to digital forensics following industry best practices.
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

      {/* TOOLS */}
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
                Tools & Technologies
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Industry-standard forensic tools for comprehensive investigation.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
                >
                  <Microscope className="h-4 w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent shrink-0" />
                  <span className="text-sm text-white/70">{tool}</span>
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
                Comprehensive investigation reports and support documentation.
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
                    When incident strikes, we find answers
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Our forensic experts are ready to investigate your incident with speed and precision.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Request Investigation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
