"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Shield,
  Rocket,
  CheckCircle2,
  DollarSign,
  Users,
  FileCheck2,
  AlertTriangle,
  Zap,
  Star,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const whyCyberlok = [
  {
    title: "Quick Deployment",
    desc: "Get security up and running in 48 hours. Our streamlined onboarding gets Indian businesses protected fast.",
    icon: Rocket,
  },
  {
    title: "Affordable Excellence",
    desc: "Enterprise-grade security at Indian SME prices. Transparent pricing in INR that scales with your growth.",
    icon: DollarSign,
  },
  {
    title: "Local Support",
    desc: "Your own security advisor who understands Indian business. Support in Hindi, English, and regional languages.",
    icon: Users,
  },
  {
    title: "Compliance Made Simple",
    desc: "Navigate CERT-In, DPDP Act, and RBI guidelines easily. We handle the complexity while you focus on business.",
    icon: FileCheck2,
  },
];

const packages = [
  {
    name: "Starter",
    desc: "Essential security for growing businesses",
    price: "₹4,999/mo",
    highlight: false,
    services: [
      "Vulnerability Assessment (quarterly)",
      "Basic endpoint protection",
      "Email security & spam filtering",
      "Security awareness training (10 users)",
      "Monthly security newsletter",
      "Email support (48hr response)",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    desc: "Complete protection for ambitious SMEs",
    price: "₹14,999/mo",
    highlight: true,
    services: [
      "Penetration Testing (bi-annual)",
      "Advanced endpoint protection",
      "24/7 SOC monitoring (50 endpoints)",
      "Security awareness training (25 users)",
      "Dark web monitoring",
      "Incident response planning",
      "Quarterly security reviews",
      "Priority support (4hr response)",
    ],
    cta: "Start Growing",
  },
  {
    name: "Scale",
    desc: "Enterprise-grade security for scaling teams",
    price: "₹29,999/mo",
    highlight: false,
    services: [
      "Full offensive security testing (annual)",
      "SOC-as-a-Service (unlimited endpoints)",
      "Cloud security assessment",
      "Security awareness training (unlimited)",
      "DPDP Act compliance support",
      "Red team exercises (annual)",
      "CISO advisory (monthly)",
      "Dedicated security engineer",
    ],
    cta: "Scale Up",
  },
];

const commonThreats = [
  {
    threat: "UPI & Payment Fraud",
    impact: "₹1.75 lakh crore lost to payment fraud in India (2024)",
    protection: "Payment fraud detection, UPI monitoring, transaction verification",
  },
  {
    threat: "Phishing & Business Email Compromise",
    impact: "₹120+ crore lost to BEC scams targeting Indian companies",
    protection: "Email filtering, BEC detection, employee training",
  },
  {
    threat: "Ransomware Attacks",
    impact: "1200+ ransomware attacks on Indian firms in 2024",
    protection: "Endpoint detection, backup verification, incident response",
  },
  {
    threat: "Data Breaches",
    impact: "India ranks #2 globally in data breaches with 1.9B records exposed",
    protection: "DPDP compliance, vulnerability scanning, access controls",
  },
];

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "CEO, TechStart India",
    quote: "Before Cyberlok, our &apos;security&apos; was just an antivirus. Now we have real protection, DPDP compliance confidence, and I actually understand our risks.",
    result: "Zero incidents in 18 months",
  },
  {
    name: "Sunita Reddy",
    role: "Operations Director, RetailCo India",
    quote: "Cyberlok&apos;s Growth package gave us enterprise security at SME prices. The ROI was visible within the first quarter.",
    result: "73% reduction in security incidents",
  },
  {
    name: "Arun Patel",
    role: "Founder, CloudFirst Solutions",
    quote: "As a bootstrapped startup, security seemed like a luxury. Cyberlok showed us it&apos;s a necessity—and made it affordable in rupees.",
    result: "DPDP compliant in 3 months",
  },
];

const faqs = [
  {
    q: "We&apos;re too small to be targeted—why do we need security?",
    a: "Actually, SMEs are prime targets because attackers know you have fewer defenses. 43% of cyberattacks target small businesses, and many Indian SMEs have lost crores to fraud. You&apos;re not too small—you&apos;re the perfect target.",
  },
  {
    q: "Can we afford enterprise-grade security?",
    a: "You can&apos;t afford NOT to have it. The average cost of a breach for Indian SMEs is ₹50+ lakh—enough to close many businesses. Our packages start at ₹4,999/month, less than a cup of chai per day.",
  },
  {
    q: "How long does implementation take?",
    a: "Our Starter package deploys within 48 hours. Growth takes 1-2 weeks for full coverage. We&apos;ve optimized onboarding specifically for Indian businesses so you&apos;re protected before your next board meeting.",
  },
  {
    q: "Do you support Indian compliance requirements?",
    a: "Absolutely! We help with CERT-In reporting, DPDP Act compliance, RBI guidelines for banks, and SEBI cybersecurity requirements. Our team understands Indian regulatory frameworks.",
  },
];

export default function SMEsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-60 right-1/4 h-[600px] w-[600px] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_50%)]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "SMEs" }]} className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Building2 className="h-4 w-4 text-cyan-300" />
              SME Security Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-white/90">Security Built for</span>
              <br />
              <span className="text-cyan-300">Growing Indian Businesses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              You didn&apos;t start your business to worry about cybersecurity. Let Cyberlok handle the security
              while you focus on growth. Affordable, comprehensive protection designed specifically for Indian SMEs.
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
                Start Free Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#packages"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Packages
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHY CYBERLOK FOR SMEs */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">WHY CYBERLOK FOR SMEs</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Security that works as hard as you do
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyCyberlok.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                    <item.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">SECURITY PACKAGES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Choose your protection level
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/65">
                Transparent pricing in INR with no hidden fees. All packages include GST, setup, and onboarding.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl border p-5 sm:p-6 ${
                    pkg.highlight
                      ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-transparent"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-black">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{pkg.desc}</p>
                    <p className="mt-4 text-3xl font-bold text-cyan-300">{pkg.price}</p>
                    <p className="text-xs text-white/50">per month, billed annually + GST</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {pkg.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                      pkg.highlight
                        ? "bg-cyan-500 text-black hover:bg-cyan-400"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* THREATS SMEs FACE */}
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
              <p className="text-xs font-semibold tracking-widest text-red-400">REAL THREATS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Risks facing Indian businesses daily
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {commonThreats.map((threat, i) => (
                <motion.div
                  key={threat.threat}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                    <h3 className="text-base font-semibold">{threat.threat}</h3>
                  </div>
                  <p className="mt-2 text-sm text-red-300/80">{threat.impact}</p>
                  <div className="mt-3 flex items-start gap-2 text-sm">
                    <Shield className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-white/60">
                      <span className="font-semibold text-white/80">Protection:</span> {threat.protection}
                    </span>
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">SUCCESS STORIES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Indian SMEs who chose Cyberlok
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
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

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
                <Zap className="h-10 w-10 text-cyan-300" />
                <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Ready to secure your business?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/65">
                  Get a free security assessment and discover what&apos;s putting your business at risk.
                  No obligations, no pressure—just honest advice in Hindi or English.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
                >
                  Get Free Assessment <ArrowRight className="h-4 w-4" />
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
