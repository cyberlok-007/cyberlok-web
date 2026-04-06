"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Key,
  Lock,
  Users,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Eye,
  Database,
  UserCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const phases = [
  {
    title: "Domain Enumeration",
    desc: "Comprehensive discovery of Active Directory assets, users, groups, and organizational units.",
    icon: Users,
    activities: [
      "Domain and forest enumeration",
      "Trust relationship mapping",
      "OU structure analysis",
      "Group policy review",
    ],
  },
  {
    title: "Credential Assessment",
    desc: "Evaluating password policies, credential storage, and authentication mechanisms.",
    icon: Key,
    activities: [
      "Password policy testing",
      "NTLM authentication analysis",
      "Kerberos configuration review",
      "Credential exposure checks",
    ],
  },
  {
    title: "Kerberos Attack Testing",
    desc: "Testing for Kerberos-based vulnerabilities including ASREPRoasting and Kerberoasting.",
    icon: Lock,
    activities: [
      "ASREPRoast detection",
      "Kerberoasting simulation",
      "Golden ticket attacks",
      "Silver ticket generation",
    ],
  },
  {
    title: "LDAP Security Review",
    desc: "Analyzing LDAP configurations and access controls.",
    icon: Database,
    activities: [
      "LDAP injection testing",
      "Anonymous bind assessment",
      "LDAPS configuration review",
      "Query privilege analysis",
    ],
  },
  {
    title: "NTLM Relay Attacks",
    desc: "Testing for NTLM authentication relay vulnerabilities.",
    icon: Zap,
    activities: [
      "NTLM relay configuration",
      "SMB signing requirements",
      "IPv6 attacks",
      "WPAD proxy attacks",
    ],
  },
  {
    title: "Privilege Escalation",
    desc: "Identifying paths to elevate privileges within the domain.",
    icon: UserCheck,
    activities: [
      "Domain privilege abuse paths",
      "ACL misconfiguration abuse",
      "Kerberos delegation attacks",
      "LAPS password exposure",
    ],
  },
  {
    title: "Lateral Movement & Persistence",
    desc: "Simulating attacker techniques for movement and persistence.",
    icon: Eye,
    activities: [
      "Pass-the-hash attacks",
      "Token manipulation",
      "Golden/Silver ticket persistence",
      "Shadow Credentials",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Comprehensive AD security report with prioritized remediation.",
    icon: FileText,
    activities: [
      "Attack path visualization",
      "BloodHound analysis export",
      "Privilege escalation chains",
      "Remediation roadmap",
    ],
  },
];

const attackVectors = [
  { name: "Kerberoasting", desc: "TGS ticket extraction for service accounts" },
  { name: "ASREPRoasting", desc: "No pre-auth user credential extraction" },
  { name: "Golden Ticket", desc: "KRBTGT hash for domain persistence" },
  { name: "Silver Ticket", desc: "Forged service tickets for lateral movement" },
  { name: "Pass-the-Hash", desc: "NTLM authentication relay and reuse" },
  { name: "Kerberos Delegation", desc: "Service account impersonation attacks" },
];

const complianceCoverage = [
  { name: "CIS Microsoft AD", desc: "Active Directory Benchmarks" },
  { name: "NIST SP 800-53", desc: "Identity and access controls" },
  { name: "PCI DSS", desc: "Active Directory security requirements" },
  { name: "HIPAA", desc: "Healthcare identity management" },
  { name: "SOC 2", desc: "Logical access controls" },
  { name: "ISO 27001", desc: "Access control policy" },
];

const tools = [
  "BloodHound",
  "SharpHound",
  "Responsa PowerView",
  "Rubeus",
  "Mimikatz",
  "Impacket Suite",
  "CrackMapExec",
  "enum4linux-ng",
  "ldapsearch",
  " Evil-WinRM",
];

const deliverables = [
  "AD asset inventory report",
  "Attack path visualization",
  "BloodHound data export",
  "Kerberos vulnerability findings",
  "ACL abuse opportunities",
  "Trust relationship analysis",
  "Privilege escalation chains",
  "Remediation runbook",
];

const stats = [
  { value: "400+", label: "AD Assessments" },
  { value: "2K+", label: "Priv Esc Paths Found" },
  { value: "98%", label: "Golden Ticket Success" },
  { value: "72hrs", label: "Report Delivery" },
];

const faqs = [
  {
    q: "What&apos;s included in an Active Directory security assessment?",
    a: "We cover domain enumeration, credential assessment, Kerberos attack testing (Kerberoasting, ASREPRoasting, Golden/Silver tickets), NTLM relay attacks, ACL abuse, privilege escalation paths, and lateral movement techniques.",
  },
  {
    q: "Do you use BloodHound for AD analysis?",
    a: "Yes, we use BloodHound and SharpHound to map attack paths, identify privilege escalation opportunities, and provide visual analysis of your AD security posture.",
  },
  {
    q: "Will AD testing affect our production environment?",
    a: "We use read-only techniques and controlled exploitation with safe tools. We avoid destructive testing and can schedule activities during maintenance windows if needed.",
  },
  {
    q: "Do you provide remediation guidance?",
    a: "Yes, we provide detailed remediation runbooks including specific PowerShell commands, Group Policy changes, and technical fixes to address each vulnerability found.",
  },
];

export default function ActiveDirectoryTestingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Offensive Security", href: "/services/offensive-security" }, { label: "Active Directory Testing" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              Active Directory Testing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Secure Your{" "}
              <span className="text-blue-400">Active Directory</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s Active Directory security testing identifies Kerberos attacks, privilege escalation paths,
              and ACL misconfigurations. We reveal what an attacker can achieve once inside your network.
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
                Request AD Assessment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                Our AD Security Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive AD testing following MITRE ATT&CK, CIS Benchmarks, and industry best practices.
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

      {/* ATTACK VECTORS & COMPLIANCE */}
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
                  Attack Vectors We Test
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Real-world AD attack techniques used by adversaries.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {attackVectors.map((type, i) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Key className="h-5 w-5 text-blue-400 shrink-0" />
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
                  AD security aligned with major compliance frameworks.
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
                Industry-leading AD security assessment tools.
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
                  <Shield className="h-4 w-4 text-blue-400 shrink-0" />
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
                Comprehensive AD security deliverables.
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
                    Secure your Active Directory
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive AD security testing from Cyberlok. Identify privilege escalation paths before attackers exploit them.
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
