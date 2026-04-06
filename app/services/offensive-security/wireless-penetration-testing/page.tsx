"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  ShieldCheck,
  Lock,
  Signal,
  Radio,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Eye,
  Key,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const phases = [
  {
    title: "Wireless Reconnaissance",
    desc: "Comprehensive discovery and mapping of all wireless networks in scope.",
    icon: Signal,
    activities: [
      "Access point enumeration",
      "Wireless network mapping",
      "Client isolation testing",
      "Rogue access point detection",
    ],
  },
  {
    title: "Encryption Assessment",
    desc: "Evaluating the strength and configuration of wireless encryption protocols.",
    icon: Lock,
    activities: [
      "WEP vulnerability testing",
      "WPA/WPA2 handshake capture",
      "WPA3-SAE testing",
      "Encryption protocol analysis",
    ],
  },
  {
    title: "Authentication Testing",
    desc: "Assessing wireless authentication mechanisms and credential security.",
    icon: Key,
    activities: [
      "EAP method evaluation",
      "RADIUS integration testing",
      "Certificate-based auth review",
      "Captive portal security",
    ],
  },
  {
    title: "Access Control Bypass",
    desc: "Testing network segmentation and access control effectiveness.",
    icon: ShieldCheck,
    activities: [
      "MAC address spoofing",
      "VLAN segmentation testing",
      "Client isolation verification",
      "Pre-authentication access",
    ],
  },
  {
    title: "Evil Twin Attacks",
    desc: "Simulating rogue access point attacks and client targeting.",
    icon: Eye,
    activities: [
      "Evil twin deployment",
      "KARMA attacks",
      "Deauthentication attacks",
      "Client tracking and profiling",
    ],
  },
  {
    title: "WPA3 & SAE Testing",
    desc: "Advanced testing of the latest wireless security protocols.",
    icon: Zap,
    activities: [
      "SAE dictionary attacks",
      "Transition mode weakness",
      "Downgrade attack simulation",
      "Side-channel attack testing",
    ],
  },
  {
    title: "Bluetooth Assessment",
    desc: "Evaluating Bluetooth Low Energy (BLE) and classic Bluetooth security.",
    icon: Radio,
    activities: [
      "BLE device enumeration",
      "Bluetooth Classic testing",
      "Fuzzing attacks",
      " BLE device impersonation",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Detailed findings with wireless-specific security recommendations.",
    icon: FileText,
    activities: [
      "Network risk assessment",
      "Encryption gap analysis",
      "Attack vector documentation",
      "Secure configuration guide",
    ],
  },
];

const wifiTypes = [
  { name: "WPA3-Enterprise", desc: "Certificate-based authentication with enhanced security" },
  { name: "WPA3-Personal (SAE)", desc: "Simultaneous Authentication of Equals protocol" },
  { name: "WPA2-Enterprise", desc: "EAP-based authentication with RADIUS" },
  { name: "WPA2-Personal", desc: "Pre-shared key authentication" },
  { name: "Open Networks", desc: "Unencrypted public networks" },
  { name: "Guest Networks", desc: "Isolated visitor access networks" },
];

const complianceCoverage = [
  { name: "PCI DSS", desc: "Wireless security requirements for card data environments" },
  { name: "HIPAA", desc: "Healthcare wireless network safeguards" },
  { name: "NIST SP 800-153", desc: "Wireless security configuration guide" },
  { name: "CIS Controls", desc: "Wireless access control benchmarks" },
  { name: "ISO 27001", desc: "Wireless network security controls" },
  { name: "OWASP", desc: "Wireless testing methodology" },
];

const tools = [
  "Aircrack-ng Suite",
  "Wireshark (AirPcap)",
  "Kismet Wireless",
  "Wash & Reaver",
  "Hashcat",
  "Bettercap",
  "WiFi Pineapple",
  "RTL-SDR",
  "Ubertooth One",
  "BLEah (BLE enumeration)",
];

const deliverables = [
  "Wireless network inventory",
  "Encryption security assessment",
  "Authentication gap analysis",
  "Evil twin test results",
  "Attack chain documentation",
  "Network architecture review",
  "Secure configuration guide",
  "Free retesting after fixes",
];

const stats = [
  { value: "300+", label: "Wireless Assessments" },
  { value: "1.5K+", label: "APs Tested" },
  { value: "90%", label: " WPA2 Cracked Rate" },
  { value: "24hrs", label: "Report Delivery" },
];

const faqs = [
  {
    q: "What wireless security protocols do you test?",
    a: "We test all major protocols including WEP, WPA, WPA2-Personal, WPA2-Enterprise, WPA3-Personal, and WPA3-Enterprise. We also assess captive portals, guest networks, and Bluetooth/BLE devices.",
  },
  {
    q: "Do you crack WPA/WPA2 passwords?",
    a: "Yes, we demonstrate the feasibility of password cracking against your WPA/WPA2 networks. We use dictionary attacks, GPU acceleration, and hashcat to simulate real attacker capabilities.",
  },
  {
    q: "What&apos;s the difference between wireless pentesting and wireless site surveys?",
    a: "Wireless penetration testing focuses on security vulnerabilities and attack vectors, while site surveys assess coverage, signal strength, and performance. We provide security-focused assessments.",
  },
  {
    q: "Can you test our corporate BYOD policies?",
    a: "Yes, we assess BYOD (Bring Your Own Device) policies by testing mobile device security, MDM solutions, and the effectiveness of network segmentation for personal devices.",
  },
];

export default function WirelessPenetrationTestingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Offensive Security", href: "/services/offensive-security" }, { label: "Wireless Penetration Testing" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Wifi className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              Wireless Penetration Testing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Secure Your{" "}
              <span className="text-blue-400">Wireless Networks</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s wireless penetration testing covers WiFi networks, WPA3, enterprise authentication,
              and Bluetooth security. We identify wireless vulnerabilities before attackers exploit them.
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
                Request Wireless Test <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                Our Wireless Testing Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive wireless security assessment following OWASP, NIST, and industry best practices.
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

      {/* WIFI TYPES & COMPLIANCE */}
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
                  Networks We Test
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Comprehensive testing across all wireless network types.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {wifiTypes.map((type, i) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Wifi className="h-5 w-5 text-blue-400 shrink-0" />
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
                  Testing aligned with major security frameworks.
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
                Industry-leading wireless security assessment tools.
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
                  <Wifi className="h-4 w-4 text-blue-400 shrink-0" />
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
                Comprehensive deliverables with wireless-specific remediation.
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
                    Secure your wireless infrastructure
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive wireless penetration testing from Cyberlok. Identify vulnerabilities before attackers exploit them.
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
