"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  UserCheck,
  Eye,
  LockKeyhole,
  Flag,
  FileText,
  CheckCircle2,
  Skull,
  Crosshair,
  AlertTriangle,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const phases = [
  {
    title: "Reconnaissance & OSINT",
    desc: "Gathering intelligence on targets through open-source information gathering.",
    icon: Eye,
    activities: [
      "Digital footprinting",
      "Social media intelligence",
      "Leaked credential discovery",
      "Infrastructure enumeration",
    ],
  },
  {
    title: "Initial Access Simulation",
    desc: "Simulating real-world attack vectors to gain initial foothold.",
    icon: Crosshair,
    activities: [
      "Phishing and spear-phishing",
      "Credential stuffing attacks",
      "Physical security testing",
      "Social engineering campaigns",
    ],
  },
  {
    title: "Persistence & Foothold",
    desc: "Establishing persistent access while evading detection.",
    icon: Flag,
    activities: [
      "Backdoor implantation",
      "Credential harvesting",
      "Lateral movement paths",
      "Detection evasion techniques",
    ],
  },
  {
    title: "Privilege Escalation",
    desc: "Escalating privileges to gain higher-level access within the environment.",
    icon: Zap,
    activities: [
      "Local privilege escalation",
      "Active Directory privilege abuse",
      "Token manipulation",
      "Configuration abuse",
    ],
  },
  {
    title: "Lateral Movement",
    desc: "Moving through the network to access critical assets.",
    icon: UserCheck,
    activities: [
      "Pass-the-hash attacks",
      "WinRM/PSRemoting abuse",
      "RDP hijacking",
      "Network share enumeration",
    ],
  },
  {
    title: "Data & Asset Exfiltration",
    desc: "Simulating data theft and assessing exfiltration risks.",
    icon: Target,
    activities: [
      "Sensitive data discovery",
      "Exfiltration channel testing",
      "Large file transfer simulation",
      "Cloud data access",
    ],
  },
  {
    title: "Detection & Response Evaluation",
    desc: "Assessing the organization&apos;s ability to detect and respond to attacks.",
    icon: ShieldCheck,
    activities: [
      "Blue team notification testing",
      "Incident response timing",
      "SIEM correlation effectiveness",
      "Forensic artifact analysis",
    ],
  },
  {
    title: "Executive Debrief",
    desc: "Comprehensive findings briefing with strategic recommendations.",
    icon: FileText,
    activities: [
      "Attack chain recreation",
      "Root cause analysis",
      "Defensive gap assessment",
      "Remediation roadmap",
    ],
  },
];

const attackTypes = [
  { name: " spear-phishing", desc: "Targeted email attacks with crafted payloads" },
  { name: "Social Engineering", desc: "Phone, SMS, and in-person manipulation" },
  { name: "Physical Intrusion", desc: "Badge cloning, tailgating, and facility access" },
  { name: "Credential Attacks", desc: "Password spraying, credential stuffing" },
  { name: "Supply Chain", desc: "Third-party vendor and supplier testing" },
  { name: "Insider Threat", desc: "Malicious and negligent insider simulation" },
];

const complianceCoverage = [
  { name: "NIST ATT&CK", desc: "Adversary tactics and techniques mapping" },
  { name: "PTES", desc: "Penetration Testing Execution Standard" },
  { name: "OSSTMM", desc: "Open Source Security Testing Methodology" },
  { name: "TIBER-EU", desc: "Threat intelligence-based ethical hacking" },
  { name: "CBEST", desc: "Financial sector threat simulation" },
  { name: "ASVS", desc: "Application security verification" },
];

const tools = [
  "Metasploit Framework",
  "Cobalt Strike",
  "Covenant",
  "BloodHound",
  "Responsa PowerView",
  "Rubeus",
  "Mimikatz",
  "CrackMapExec",
  "SQLMap",
  "Burp Suite Professional",
];

const deliverables = [
  "Executive summary with business risk",
  "Technical attack narrative",
  "ATT&CK framework mapping",
  "Detection gap analysis",
  "Attack chain diagrams",
  "Red vs Blue comparison",
  "Prioritized remediation plan",
  "C-suite briefing deck",
];

const stats = [
  { value: "50+", label: "Red Team Ops Completed" },
  { value: "85%", label: "Avg Detection Rate Gap" },
  { value: "30d", label: "Average Operation Time" },
  { value: "100%", label: "Client Objective Achievement" },
];

const faqs = [
  {
    q: "What&apos;s the difference between red teaming and penetration testing?",
    a: "While penetration testing focuses on finding technical vulnerabilities, red teaming simulates real-world adversary attacks including social engineering, physical security, and coordinated multi-vector approaches to achieve specific objectives.",
  },
  {
    q: "Will we know when the red team is testing?",
    a: "We offer both announced (配合 testing) and unannounced (full simulation) engagements. Unannounced tests provide the most realistic assessment of your detection and response capabilities.",
  },
  {
    q: "How do you ensure testing doesn&apos;t disrupt operations?",
    a: "We establish strict rules of engagement, maintain constant communication, and have kill switches to immediately halt any potentially disruptive activities while achieving your objectives.",
  },
  {
    q: "Do you test our incident response team?",
    a: "Yes, a key component is evaluating your Blue Team&apos;s detection and response capabilities. We assess response times, escalation procedures, and forensic capabilities.",
  },
];

export default function RedTeamOperationsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Offensive Security", href: "/services/offensive-security" }, { label: "Red Team Operations" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Skull className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              Red Team Operations
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Think Like an{" "}
              <span className="text-cyan-300">Advanced Attacker</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s Red Team Operations simulate real-world adversary attacks including social engineering, physical
              security, and coordinated multi-vector approaches to test your organization&apos;s security posture.
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
                Engage Red Team <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/offensive-security"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View All Offensive Services
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
                Our Red Team Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Adversary simulation following MITRE ATT&CK framework and real-world threat actor tactics.
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

      {/* ATTACK TYPES & COMPLIANCE */}
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
                  Attack Vectors We Simulate
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Comprehensive adversary simulation across multiple attack vectors.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {attackTypes.map((type, i) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Target className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{type.name}</p>
                        <p className="text-xs text-white/60">{type.desc}</p>
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
                  Framework Alignment
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Operations mapped to industry-standard adversary frameworks.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {complianceCoverage.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
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
                Red Team Toolkit
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Industry-standard tools for realistic adversary simulation.
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
                  <Skull className="h-4 w-4 text-cyan-400 shrink-0" />
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
                Actionable intelligence for improving your security posture.
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
                    Test your defenses against real attacks
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Engage Cyberlok&apos;s Red Team to uncover security gaps that traditional testing misses.
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
    </div>
  );
}
