"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Shield,
  Server,
  Cloud,
  Eye,
  FileCheck2,
  CheckCircle2,
  Activity,
  Users,
  Database,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const stats = [
  { value: "500M+", label: "Events Processed Daily", icon: Activity },
  { value: "99.99%", label: "Platform Uptime", icon: Server },
  { value: "<15min", label: "Mean Detection Time", icon: Zap },
  { value: "100+", label: "Enterprise Clients", icon: Users },
];

const capabilities = [
  {
    category: "SOC Operations",
    icon: Eye,
    services: [
      "SOC-as-a-Service (24/7/365)",
      "Managed Detection & Response",
      "Threat Intelligence Integration",
      "SIEM/SOAR Implementation",
      "Incident Response",
    ],
  },
  {
    category: "Cloud Security",
    icon: Cloud,
    services: [
      "Multi-cloud Posture Management (AWS, Azure, GCP)",
      "Cloud-Native Protection",
      "Container & Kubernetes Security",
      "Serverless Security",
      "Cloud SIEM Integration",
    ],
  },
  {
    category: "Offensive Security",
    icon: Target,
    services: [
      "Advanced Penetration Testing",
      "Red Team Operations",
      "Purple Team Exercises",
      "Tabletop Simulations",
      "Attack Surface Management",
    ],
  },
  {
    category: "Risk & Compliance",
    icon: FileCheck2,
    services: [
      "Enterprise Risk Assessment",
      "DPDP Act & CERT-In Compliance",
      "RBI/SEBI Cybersecurity Guidelines",
      "Security Architecture Review",
      "Board-level Reporting",
    ],
  },
];

const solutions = [
  {
    title: "Unified Security Operations",
    desc: "Consolidate your security tools and operations into a single, coherent platform. Our enterprise SOC integrates with your infrastructure while providing centralized visibility.",
    icon: Server,
    features: ["Single pane of glass", "Automated orchestration", "Cross-team collaboration", "Executive dashboards"],
  },
  {
    title: "Cloud-Native Protection",
    desc: "Secure your cloud transformation with purpose-built tools. From AWS to Azure to GCP, we protect your cloud-native applications and infrastructure.",
    icon: Cloud,
    features: ["Infrastructure as Code security", "Container registry scanning", "Serverless protection", "Cloud compliance automation"],
  },
  {
    title: "Advanced Threat Defense",
    desc: "Stay ahead of sophisticated adversaries with continuous red teaming, threat hunting, and behavioral analytics.",
    icon: Shield,
    features: ["Threat hunting", "Behavioral analytics", "MITRE ATT&CK mapping", "Threat intelligence feeds"],
  },
  {
    title: "Executive Risk Management",
    desc: "Translate technical security data into business risk insights. Our CISO advisory helps communicate security posture to the board.",
    icon: BarChart3,
    features: ["Board reporting", "Risk quantification", "Security metrics", "Strategic roadmap"],
  },
];

const enterpriseFeatures = [
  { name: "Unlimited Endpoints", desc: "Full coverage across all corporate devices" },
  { name: "Dedicated Team", desc: "Named security engineers who know your environment" },
  { name: "Custom SLAs", desc: "Response times tailored to your requirements" },
  { name: "Enterprise Integration", desc: "API connections to 200+ security tools" },
  { name: "Multi-tenant Architecture", desc: "Isolated environments for data privacy" },
  { name: "24/7 Support", desc: "Round-the-clock access to security experts" },
];

const testimonials = [
  {
    name: "Vikram Malhotra",
    role: "Group CISO, Apex Global India",
    quote: "Cyberlok operates as a true extension of our security team. Their enterprise capabilities and commitment to outcomes transformed our security posture fundamentally.",
    result: "80% faster incident response",
  },
  {
    name: "Sunita Rao",
    role: "VP Security, MegaCorp Industries",
    quote: "Managing security across 50,000 employees seemed impossible. Cyberlok&apos;s enterprise platform gave us visibility and control we didn&apos;t think was achievable.",
    result: "Zero major incidents in 2 years",
  },
  {
    name: "Arjun Krishnan",
    role: "CTO, InnovateTech India",
    quote: "Their platform scales with our growth without compromising on protection. It&apos;s rare to find security that can keep pace with rapid innovation.",
    result: "Supporting 200% YoY growth",
  },
];

const faqs = [
  {
    q: "How does Cyberlok scale for large Indian enterprises?",
    a: "Our platform is built for enterprise scale from day one. We process over 500 million security events daily, support unlimited endpoints, and can ingest data from hundreds of sources simultaneously.",
  },
  {
    q: "What makes your SOC different from other MSSPs in India?",
    a: "Three differentiators: 1) Our analysts are former practitioners (ex-penetration testers, incident responders), not just monitors. 2) We provide dedicated teams who learn your environment deeply. 3) We measure success by your risk reduction.",
  },
  {
    q: "Can you integrate with our existing security stack?",
    a: "Yes. We integrate with 200+ security tools via native APIs and have pre-built connectors for major platforms (Splunk, CrowdStrike, Palo Alto, Microsoft, etc.).",
  },
  {
    q: "How do you handle Indian regulatory requirements?",
    a: "We offer specialized support for CERT-In 6-hour reporting, DPDP Act compliance, RBI cybersecurity guidelines, and SEBI requirements. Our platform supports data residency in India.",
  },
];

export default function EnterprisesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-60 left-1/4 h-[700px] w-[700px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_75%_70%,rgba(168,85,247,0.08),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Enterprises" }]} className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Rocket className="h-4 w-4 text-cyan-300" />
              Enterprise Security Platform
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-white/90">Enterprise-Grade Security,</span>
              <br />
              <span className="text-cyan-300">Built for India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              For Indian organizations where security is mission-critical. Cyberlok&apos;s enterprise platform delivers
              SOC operations, advanced threat defense, and cloud security at any scale—with CERT-In and DPDP expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 sm:mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Schedule Enterprise Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#platform"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Platform
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-8 sm:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <stat.icon className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>
                  <p className="mt-3 text-2xl sm:text-3xl font-bold text-cyan-300">{stat.value}</p>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section id="platform" className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">ENTERPRISE PLATFORM</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Security without limits
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Purpose-built for Indian enterprise requirements. Every capability you need, at the scale you demand.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-2">
              {solutions.map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <solution.icon className="h-7 w-7 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{solution.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{solution.desc}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES GRID */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">SERVICE AREAS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Everything your enterprise needs
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <cap.icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-300">{cap.category}</h3>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {cap.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-white/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ENTERPRISE FEATURES */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">ENTERPRISE DIFFERENTIATORS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Built for the enterprise
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {enterpriseFeatures.map((feature, i) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{feature.name}</p>
                    <p className="text-xs text-white/50">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">ENTERPRISE SUCCESS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Trusted by industry leaders
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <Database className="h-8 w-8 text-cyan-400" />
                  <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>

                  <div className="mt-4 rounded-lg bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300">
                    Result: {testimonial.result}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">QUESTIONS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-semibold text-sm">{faq.q}</p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 sm:p-10 md:p-14"
            >
              <div className="max-w-2xl">
                <Rocket className="h-12 w-12 text-cyan-300" />
                <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Ready for enterprise-grade security?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/65">
                  Let&apos;s discuss your enterprise security requirements. Schedule a technical deep-dive
                  with our solutions team and see what Cyberlok can do at your scale.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
                >
                  Schedule Enterprise Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Explore All Services
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
