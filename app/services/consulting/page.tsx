"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Target,
  Users,
  Building2,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Globe,
  Eye,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const phases = [
  {
    title: "Security Assessment",
    desc: "Comprehensive evaluation of your current security posture and maturity level.",
    icon: Eye,
    activities: [
      "Security maturity assessment",
      "Gap analysis against frameworks",
      "Risk prioritization workshop",
      "Compliance mapping",
    ],
  },
  {
    title: "Strategy Development",
    desc: "Creating a tailored security roadmap aligned with business objectives.",
    icon: Target,
    activities: [
      "Security vision and goals",
      "Multi-year roadmap planning",
      "Budget optimization",
      "Resource allocation strategy",
    ],
  },
  {
    title: "Program Design",
    desc: "Building the structure, policies, and processes for your security program.",
    icon: Building2,
    activities: [
      "Security policy development",
      "Governance structure design",
      "Process documentation",
      "Role and responsibility mapping",
    ],
  },
  {
    title: "Implementation Support",
    desc: "Hands-on guidance to implement security controls and initiatives.",
    icon: Briefcase,
    activities: [
      "Vendor selection support",
      "Technology implementation guidance",
      "Process deployment assistance",
      "Team training and enablement",
    ],
  },
  {
    title: "Compliance Alignment",
    desc: "Ensuring your program meets regulatory and industry requirements.",
    icon: ShieldCheck,
    activities: [
      "Compliance gap remediation",
      "Audit preparation and support",
      "Evidence collection and documentation",
      "Continuous compliance monitoring",
    ],
  },
  {
    title: "Ongoing Optimization",
    desc: "Continuous improvement of your security program based on metrics and feedback.",
    icon: TrendingUp,
    activities: [
      "KPI and metric tracking",
      "Program effectiveness review",
      "Threat landscape updates",
      "Continuous improvement planning",
    ],
  },
];

const offerings = [
  {
    title: "CISO Advisory",
    desc: "Virtual or interim CISO services for organizations without dedicated security leadership.",
    icon: Users,
  },
  {
    title: "Security Strategy",
    desc: "Multi-year security roadmap aligned with business objectives and risk appetite.",
    icon: Target,
  },
  {
    title: "Risk Management",
    desc: "Enterprise risk assessment, prioritization, and mitigation planning.",
    icon: BarChart3,
  },
  {
    title: "Compliance Programs",
    desc: "Build or enhance compliance programs for ISO 27001, SOC 2, PCI DSS, HIPAA, and more.",
    icon: ShieldCheck,
  },
  {
    title: "Security Architecture",
    desc: "Zero Trust architecture design, network security, and cloud security architecture.",
    icon: Building2,
  },
  {
    title: "Awareness Programs",
    desc: "Security awareness campaigns, training programs, and phishing simulations.",
    icon: GraduationCap,
  },
];

const industries = [
  { name: "Financial Services", desc: "Banking, insurance, fintech security" },
  { name: "Healthcare", desc: "HIPAA compliance and patient data protection" },
  { name: "Technology", desc: "SaaS, product security, IP protection" },
  { name: "Manufacturing", desc: "OT/ICS security, supply chain protection" },
  { name: "Government", desc: "Public sector, defense contractor compliance" },
  { name: "Retail & E-commerce", desc: "PCI DSS, customer data security" },
];

const deliverables = [
  "Security maturity assessment report",
  "Risk register and prioritization",
  "Multi-year security roadmap",
  "Security policy framework",
  "Governance structure design",
  "Compliance gap analysis",
  "Board-level executive summary",
  "Quarterly strategy reviews",
];

const stats = [
  { value: "100+", label: "Advisory Engagements" },
  { value: "50+", label: "CISO Clients" },
  { value: "30+", label: "Compliance Programs" },
  { value: "95%", label: "Client Satisfaction" },
];

const faqs = [
  {
    q: "What organizations need cybersecurity consulting?",
    a: "Organizations of all sizes benefit from consulting. Startups building their first security program, mid-market companies scaling operations, enterprises needing specialized expertise, and any organization facing compliance requirements or specific security challenges.",
  },
  {
    q: "How long does a typical consulting engagement last?",
    a: "It varies by scope. Security assessments can be completed in 2-4 weeks. Strategy development typically takes 4-8 weeks. Ongoing advisory relationships often span 6-12 months or longer. We can structure engagements to meet your specific needs.",
  },
  {
    q: "Can you work with our existing security team?",
    a: "Absolutely. Many engagements augment existing teams rather than replace them. We can provide specialized expertise, leadership support, or additional capacity to help your team achieve more.",
  },
  {
    q: "Do you help with regulatory compliance?",
    a: "Yes, we have extensive experience with major frameworks including ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, DPDP Act, NIST CSF, and more. We can help you build or enhance compliance programs and prepare for audits.",
  },
];

export default function ConsultingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Cybersecurity Consulting" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              Sentinel - Cybersecurity Consulting
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Strategic Security Guidance for{" "}
              <span className="text-blue-400">Business Leaders</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s consulting services bridge the gap between technical security and business strategy. Whether
              you need a security roadmap, compliance program, or expert advisory support, we provide the guidance to
              build an effective security program.
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
                Schedule Consultation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* OFFERINGS */}
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
                Consulting Offerings
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Strategic security services to address your unique challenges.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {offerings.map((offer, i) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.08]"
                >
                  <offer.icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold">{offer.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{offer.desc}</p>
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
                Our Consulting Approach
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A structured methodology to build and mature your security program.
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

      {/* INDUSTRIES */}
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
                Industry Expertise
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Deep experience across regulated and security-sensitive industries.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, i) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <Globe className="h-6 w-6 text-blue-400 mb-3" />
                  <p className="font-semibold">{industry.name}</p>
                  <p className="mt-1 text-sm text-white/60">{industry.desc}</p>
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
                Tangible deliverables to advance your security program.
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
                    Get expert security guidance
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Schedule a consultation to discuss your security challenges and objectives.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Schedule Consultation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
