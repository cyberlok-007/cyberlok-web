"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Landmark,
  Shield,
  Lock,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  Award,
  Building,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const criticalInfrastructure = [
  { name: "Power & Energy", desc: "Power grids, NTPC, state electricity boards" },
  { name: "Healthcare", desc: "Hospitals, Ayushman Bharat, medical research" },
  { name: "Banking & Finance", desc: "RBI-regulated banks, SEBI entities, insurance" },
  { name: "Transportation", desc: "IRCTC, Air India, metro rails, ports" },
  { name: "Telecommunications", desc: "BSNL, Reliance Jio, Airtel, internet backbone" },
  { name: "Government", desc: "Central ministries, state governments, ULBs" },
];

const services = [
  {
    category: "Critical Infrastructure Security",
    icon: Building,
    services: [
      "ICS/SCADA Security Assessment",
      "Operational Technology (OT) Protection",
      "Industrial Control Systems Testing",
      "Critical Asset Identification",
      "Infrastructure Resilience Planning",
    ],
  },
  {
    category: "Government Compliance",
    icon: FileCheck2,
    services: [
      "CERT-In Compliance Support",
      "DPDP Act Implementation",
      "SeMT/MeitY Framework Alignment",
      "ISMS (ISO 27001) Certification",
      "Cybersecurity Audit Support",
    ],
  },
  {
    category: "National Security Services",
    icon: Shield,
    services: [
      "Red Team Operations",
      "Advanced Threat Simulation",
      "Supply Chain Security",
      "Clearance-Capable Personnel",
      "NCSC/NCIIPC Coordination",
    ],
  },
  {
    category: "Incident Response",
    icon: AlertTriangle,
    services: [
      "24/7 Government SOC",
      "Rapid Response Teams",
      "Digital Forensic Investigation",
      "CERT-In Empanelment Support",
      "Cross-Agency Coordination",
    ],
  },
];

const stats = [
  { value: "50+", label: "Gov Agencies Protected", icon: Landmark },
  { value: "100%", label: "CERT-In Compliant", icon: Lock },
  { value: "6hrs", label: "Incident Reporting", icon: AlertTriangle },
  { value: "Gov", label: "Centre/State/ULB", icon: Building },
];

const approach = [
  {
    phase: "Discovery & Classification",
    desc: "Identify critical assets, classify data sensitivity, and map interdependencies across your infrastructure.",
    duration: "2-4 weeks",
  },
  {
    phase: "Risk Assessment",
    desc: "Comprehensive threat modeling against nation-state and criminal adversaries with compliance mapping.",
    duration: "4-6 weeks",
  },
  {
    phase: "Control Implementation",
    desc: "Deploy security controls aligned with SeMT framework, DPDP Act, and agency-specific requirements.",
    duration: "8-12 weeks",
  },
  {
    phase: "Continuous Monitoring",
    desc: "24/7 SOC operations with threat hunting, incident response, and CERT-In compliant reporting.",
    duration: "Ongoing",
  },
];

const securityControls = [
  { name: "Zero Trust Architecture", desc: "Never trust, always verify—across all access vectors" },
  { name: "Continuous Monitoring", desc: "Real-time visibility into all network activity" },
  { name: "Threat Intelligence", desc: "Nation-state and criminal TTPs mapped to MITRE ATT&CK" },
  { name: "Supply Chain Security", desc: "Vendor risk and third-party access controls" },
  { name: "Data Classification", desc: "Sensitivity-based access and handling procedures" },
  { name: "Incident Coordination", desc: "CERT-In and sector-specific reporting protocols" },
];

const testimonials = [
  {
    name: "Director of Cybersecurity",
    role: "State Department of IT",
    quote: "Cyberlok understands the unique challenges of securing critical infrastructure. Their expertise in SCADA security and government compliance saved us months of trial and error.",
    result: "Achieved SeMT compliance",
  },
  {
    name: "CISO",
    role: "Regional Healthcare Authority",
    quote: "Protecting patient data while maintaining healthcare operations is a delicate balance. Cyberlok helped us achieve DPDP Act compliance without compromising patient care.",
    result: "Zero data breaches in 3 years",
  },
  {
    name: "IT Director",
    role: "Municipal Corporation",
    quote: "We lacked the resources for an in-house security team. Cyberlok&apos;s government-focused SOC gives us enterprise-grade protection at municipal budget levels.",
    result: "60% reduction in security incidents",
  },
];

const faqs = [
  {
    q: "Does Cyberlok have personnel with security clearances?",
    a: "Yes. Our government practice includes personnel with active security clearances at various levels. We can staff projects requiring cleared individuals and maintain appropriate handling procedures.",
  },
  {
    q: "How do you handle sensitive government data?",
    a: "We follow government information handling standards including MeitY guidelines. Data is processed in approved environments with appropriate controls, and we maintain full chain of custody documentation.",
  },
  {
    q: "Can you integrate with government networks and systems?",
    a: "Our team has extensive experience with government IT environments, including legacy systems, air-gapped networks, and classified enclaves. We adapt our tools and approaches to meet government network requirements.",
  },
  {
    q: "How do you ensure CERT-In compliance?",
    a: "We actively monitor CERT-In directives and maintain compliance with the 6-hour incident reporting timeline. Our platform supports automated reporting and documentation required for government compliance.",
  },
];

export default function GovernmentPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-60 right-1/4 h-[700px] w-[700px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-saffron/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,153,0,0.10),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Government" }]} className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Landmark className="h-4 w-4 text-cyan-300" />
              Government & Critical Infrastructure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-white/90">Securing the Infrastructure</span>
              <br />
              <span className="text-cyan-300">That Keeps Bharat Running</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              From central ministries to state governments, from critical infrastructure to public sector undertakings,
              Cyberlok provides government-grade security with expertise in CERT-In, DPDP Act, and SeMT frameworks.
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
                Contact Government Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Government Services
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

      {/* CRITICAL INFRASTRUCTURE */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">CRITICAL INFRASTRUCTURE</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Protecting the sectors India depends on
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                We secure critical infrastructure sectors designated by NCIIPC, with specialized expertise
                in the unique requirements of each—from power grids to banking systems.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {criticalInfrastructure.map((sector, i) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <Building className="h-8 w-8 text-cyan-400" />
                  <h3 className="mt-3 text-base font-semibold">{sector.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{sector.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">GOVERNMENT SERVICES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Security built for government requirements
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                From CERT-In compliance to critical infrastructure protection, our government practice delivers
                security aligned with Indian regulatory frameworks and operational realities.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <service.icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.category}</h3>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* APPROACH */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">IMPLEMENTATION APPROACH</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Government-aligned methodology
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Our approach follows MeitY/SeMT frameworks and government best practices,
                with phases designed for Indian government procurement and approval cycles.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden md:block" />

              <div className="space-y-4 sm:space-y-6">
                {approach.map((phase, i) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
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
                        <span className="text-xl font-bold text-cyan-300">{i + 1}</span>
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                          <span className="text-lg font-bold text-cyan-300">{i + 1}</span>
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base sm:text-lg font-semibold">{phase.phase}</h3>
                            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                              {phase.duration}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-white/60 leading-relaxed">{phase.desc}</p>
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

      {/* SECURITY CONTROLS */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">SECURITY CONTROLS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Government-grade protection
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {securityControls.map((control, i) => (
                <motion.div
                  key={control.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <ShieldCheck className="h-6 w-6 text-cyan-400" />
                  <h3 className="mt-3 text-sm font-semibold">{control.name}</h3>
                  <p className="mt-1 text-xs text-white/50">{control.desc}</p>
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">GOVERNMENT SUCCESS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Trusted by government agencies
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
                  <Award className="h-8 w-8 text-cyan-400" />
                  <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>

                  <div className="mt-4 rounded-lg bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300">
                    Outcome: {testimonial.result}
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 sm:p-10 md:p-14"
            >
              <div className="max-w-2xl">
                <Landmark className="h-12 w-12 text-cyan-300" />
                <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Protecting the systems India depends on
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/65">
                  Whether you&apos;re a central ministry, state government, or critical infrastructure operator,
                  Cyberlok has the expertise and clearance capabilities to secure your mission-critical systems.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
                >
                  Contact Government Team <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  View All Services
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
