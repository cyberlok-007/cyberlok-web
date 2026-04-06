"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Network,
  ShieldCheck,
  Server,
  Globe,
  LockKeyhole,
  Key,
  Bug,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const phases = [
  {
    title: "Reconnaissance",
    desc: "Gathering information about the target network through passive and active intelligence collection.",
    icon: Globe,
    activities: [
      "OSINT and footprinting",
      "Network mapping and topology discovery",
      "Service identification",
      "Firewall and IDS/IPS enumeration",
    ],
  },
  {
    title: "Network Scanning",
    desc: "Comprehensive scanning to identify live hosts, open ports, and running services.",
    icon: Server,
    activities: [
      "Host discovery and ping sweeps",
      "Port scanning (TCP/UDP)",
      "Service and version enumeration",
      "OS fingerprinting",
    ],
  },
  {
    title: "Vulnerability Assessment",
    desc: "Identifying known vulnerabilities in network services, protocols, and configurations.",
    icon: Bug,
    activities: [
      "CVE vulnerability scanning",
      "Configuration weakness identification",
      "Outdated software detection",
      "Security patch analysis",
    ],
  },
  {
    title: "Exploitation",
    desc: "Controlled exploitation attempts to validate vulnerabilities and demonstrate real-world impact.",
    icon: Zap,
    activities: [
      "Exploit verification and proof of concept",
      "Privilege escalation attempts",
      "Service exploitation",
      "Protocol-specific attacks",
    ],
  },
  {
    title: "Post-Exploitation",
    desc: "Assessing the extent of compromise and potential damage from successful attacks.",
    icon: LockKeyhole,
    activities: [
      "Lateral movement assessment",
      "Credential harvesting",
      "Data access evaluation",
      "Persistence mechanism testing",
    ],
  },
  {
    title: "Active Directory Assessment",
    desc: "Deep analysis of Windows Active Directory infrastructure and security controls.",
    icon: Key,
    activities: [
      "Domain enumeration and trust analysis",
      "Kerberos attack testing",
      "Credential attack simulation",
      "Domain privilege escalation",
    ],
  },
  {
    title: "Wireless Security Testing",
    desc: "Assessment of wireless network security within the target scope.",
    icon: Network,
    activities: [
      "WiFi access point enumeration",
      "Wireless protocol analysis",
      "WPA/WPA2/WPA3 testing",
      "Rogue access point detection",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Comprehensive documentation with risk ratings and actionable remediation guidance.",
    icon: FileText,
    activities: [
      "Executive summary with business risk",
      "Technical findings with CVSS scores",
      "Attack chain diagrams",
      "Prioritized remediation roadmap",
    ],
  },
];

const scopeTypes = [
  { name: "External Network", desc: "Internet-facing infrastructure testing" },
  { name: "Internal Network", desc: "Testing from inside the network perimeter" },
  { name: "Segmentation Testing", desc: "Network zone isolation verification" },
  { name: "AD & Domain", desc: "Active Directory security assessment" },
  { name: "Wireless Assessment", desc: "WiFi security testing" },
  { name: "Full Scope", desc: "Comprehensive internal and external testing" },
];

const complianceCoverage = [
  { name: "PCI DSS", desc: "Network penetration testing requirements" },
  { name: "HIPAA", desc: "Healthcare network security" },
  { name: "SOC 2", desc: "Trust service criteria" },
  { name: "ISO 27001", desc: "Information security controls" },
  { name: "NIST", desc: "Cybersecurity framework" },
  { name: "RBI", desc: "Banking security guidelines" },
];

const tools = [
  "Nmap / Zenmap",
  "Metasploit Framework",
  "Burp Suite Professional",
  "Nessus Professional",
  "OpenVAS",
  "BloodHound (AD)",
  "Responsa PowerView",
  "CrackMapExec",
  "Wireshark",
  "Hydra (Password attacks)",
];

const deliverables = [
  "Executive summary with business risk",
  "Technical penetration test report",
  "CVSS scores and severity ratings",
  "Attack chain visualization",
  "Network topology risk map",
  "Compliance mapping report",
  "Remediation prioritization",
  "Free retesting after fixes",
];

const stats = [
  { value: "600+", label: "Network Tests Completed" },
  { value: "10K+", label: "Vulnerabilities Found" },
  { value: "95%", label: "Client Renewal Rate" },
  { value: "48hrs", label: "Report Delivery" },
];

const faqs = [
  {
    q: "What is the difference between external and internal network testing?",
    a: "External testing simulates an attacker from the internet trying to breach your network perimeter. Internal testing assesses what an attacker could achieve if they already had internal network access, such as from a compromised laptop or insider threat.",
  },
  {
    q: "Do you test Active Directory as part of network testing?",
    a: "Yes, when testing internal networks, we include comprehensive Active Directory security testing covering domain enumeration, Kerberos attacks, credential-based attacks, and privilege escalation paths.",
  },
  {
    q: "Will testing disrupt our production network?",
    a: "We take precautions to minimize disruption. We use safe testing techniques and can schedule testing during off-peak hours. For critical systems, we test in non-production environments when available.",
  },
  {
    q: "How long does a network penetration test take?",
    a: "Typical network penetration tests take 1-2 weeks depending on scope. External tests are usually 5-7 days, while comprehensive internal tests with AD assessment can take 10-14 days.",
  },
];

export default function NetworkPenetrationTestingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Offensive Security", href: "/services/offensive-security" }, { label: "Network Penetration Testing" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Network className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              Network Penetration Testing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Test Your Network{" "}
              <span className="text-blue-400">From an Attacker&apos;s Perspective</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s network penetration testing combines external and internal testing with Active Directory
              security assessment. We identify vulnerabilities before attackers exploit them.
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
                Request Network Test <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</p>
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
                Our Network Testing Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive testing following PTES, NIST, and OWASP guidelines.
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
                        <phase.icon className="h-6 w-6 text-blue-400" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition hover:border-cyan-400/20">
                      <div className="flex items-start gap-4">
                        <span className="flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                          <phase.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                        </span>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-xs font-bold text-blue-400">
                              {i + 1}
                            </span>
                            <span className="md:hidden text-xs font-semibold text-blue-400">0{i + 1}</span>
                            <h3 className="text-base sm:text-lg font-semibold">{phase.title}</h3>
                          </div>
                          
                          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                            {phase.desc}
                          </p>
                          
                          <ul className="mt-3 space-y-1.5">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 mt-0.5 shrink-0" />
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

      {/* SCOPE TYPES & COMPLIANCE */}
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
                  Testing Scope Options
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Flexible testing scopes to match your security requirements.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {scopeTypes.map((type, i) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Network className="h-5 w-5 text-blue-400 shrink-0" />
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
                  Compliance Mapping
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Our testing aligns with major compliance frameworks and regulatory requirements.
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
                      <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" />
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
                Tools We Use
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Industry-leading tools for comprehensive network security testing.
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
                  <Server className="h-4 w-4 text-blue-400 shrink-0" />
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
                Comprehensive deliverables for technical teams and stakeholders.
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
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 shrink-0" />
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
                    Test your network security
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive network penetration testing from Cyberlok. Identify vulnerabilities before attackers do.
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
    </div>
  );
}
