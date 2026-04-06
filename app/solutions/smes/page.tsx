"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Building2,
  Shield,
  Rocket,
  CheckCircle2,
  Users,
  FileCheck2,
  AlertTriangle,
  Zap,
  Star,
  ChevronRight,
  IndianRupee,
  Mail,
  Bug,
  UserCheck,
  CreditCard,
  Cloud,
  Globe,
  ShieldCheck,
  Target,
  Clock,
  Award,
  TrendingUp,
  Eye,
  Users2,
  Heart,
  ShieldAlert,
  LockKeyhole,
  ShieldPlus,
  BadgeCheck,
  Handshake,
  Radar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const whyCyberlok = [
  {
    title: "Quick Deployment",
    desc: "Get security up and running in 48 hours. Our streamlined onboarding gets Indian businesses protected fast.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Affordable Excellence",
    desc: "Enterprise-grade security at Indian SME prices. Transparent pricing in INR that scales with your growth.",
    icon: IndianRupee,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Local Support",
    desc: "Your own security advisor who understands Indian business. Support in Hindi, English, and regional languages.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Compliance Made Simple",
    desc: "Navigate CERT-In, DPDP Act, and RBI guidelines easily. We handle the complexity while you focus on business.",
    icon: ShieldCheck,
    color: "from-purple-500 to-pink-500",
  },
];

const packages = [
  {
    name: "Starter",
    badge: "Best for 5–20 employees",
    badgeColor: "bg-green-500",
    price: "₹7,999",
    priceSuffix: " Pay Once",
    priceNote: "Inclusive of GST",
    highlight: false,
    services: [
      { category: "Core Security", items: [
        "Web & Network Security Assessment (1× per year)",
        "Mobile Device Security (8–10 devices)",
        "Endpoint Security (10–15 systems)",
        "Configuration Review (firewall, router, servers)",
      ]},
      { category: "Monitoring", items: [
        "Infrastructure Security Monitoring",
      ]},
      { category: "Awareness", items: [
        "Phishing Simulation (1 campaign / year)",
      ]},
      { category: "Support", items: [
        "Email Support (48 hr response)",
      ]},
    ],
    cta: "Get Started",
    tagline: "Ideal for small teams starting with security",
  },
  {
    name: "Growth",
    badge: "Best for 20–25 employees",
    badgeColor: "bg-yellow-500",
    price: "₹15,999",
    priceSuffix: " Pay Once",
    priceNote: "Inclusive of GST",
    highlight: true,
    services: [
      { category: "Advanced Security", items: [
        "Web & Network Security Assessment (2× per year)",
        "Cloud Security Testing (1× per year)",
        "Mobile Device Security (10–15 devices)",
        "Endpoint Security (20–25 systems)",
      ]},
      { category: "Monitoring", items: [
        "Infrastructure Security Monitoring",
      ]},
      { category: "Awareness", items: [
        "Security Awareness Training (up to 15 employees)",
        "Phishing Simulation (1 campaign / year)",
        "Cybersecurity Consulting (2 sessions / year)",
      ]},
      { category: "Support", items: [
        "Priority Support (8 hr response)",
      ]},
    ],
    cta: "Start Growing",
    tagline: "For growing businesses handling sensitive operations",
  },
  {
    name: "Advanced",
    badge: "Best for 25–50 employees",
    badgeColor: "bg-purple-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "",
    highlight: false,
    services: [
      { category: "Complete Security Coverage", items: [
        "Full Web, Network & Cloud Security Testing",
        "Mobile & Endpoint Security at Scale",
        "Continuous Infrastructure Monitoring",
        "Advanced Risk Protection",
        "AI & Emerging Threat Security Assessment",
        "Custom Security Strategy & Reviews",
        "Cybersecurity Consulting (Unlimited)",
      ]},
      { category: "Support", items: [
        "Dedicated Security Engineer",
        "Fast Response SLA (4 hr)",
      ]},
    ],
    cta: "Contact Us",
    tagline: "For organizations needing enterprise-grade protection",
  },
];

const commonThreats = [
  {
    threat: "UPI & Payment Fraud",
    impact: "₹1.75 lakh crore lost to payment fraud in India (2025)",
    protection: "Payment fraud detection, UPI monitoring, transaction verification",
    icon: CreditCard,
    color: "from-yellow-500 to-orange-500",
    services: [
      { name: "Transaction Monitoring", tag: "Growth" },
      { name: "Fraud Detection", tag: "Starter" },
      { name: "Risk Assessment", tag: "Advanced" },
    ],
  },
  {
    threat: "Phishing & Business Email Compromise",
    impact: "₹120+ crore lost to BEC scams targeting Indian companies",
    protection: "Email filtering, BEC detection, employee training",
    icon: Mail,
    color: "from-purple-500 to-pink-500",
    services: [
      { name: "Phishing Simulation", tag: "Starter" },
      { name: "Security Awareness Training", tag: "Growth" },
      { name: "Email Security", tag: "Starter" },
    ],
  },
  {
    threat: "Ransomware Attacks",
    impact: "1200+ ransomware attacks on Indian firms in 2025",
    protection: "Endpoint detection, backup verification, incident response",
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
    services: [
      { name: "Endpoint Security", tag: "Starter" },
      { name: "Infrastructure Monitoring", tag: "Growth" },
      { name: "Incident Response", tag: "Advanced" },
    ],
  },
  {
    threat: "Data Breaches",
    impact: "India ranks #2 globally in data breaches with 1.9B records exposed",
    protection: "DPDP compliance, vulnerability scanning, access controls",
    icon: LockKeyhole,
    color: "from-blue-500 to-cyan-500",
    services: [
      { name: "Network Security Testing", tag: "Growth" },
      { name: "Cloud Security Testing", tag: "Growth" },
      { name: "Configuration Review", tag: "Starter" },
    ],
  },
];

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "CEO, TechStart India",
    quote: "Before Cyberlok, our security was just an antivirus. Now we have real protection, DPDP compliance confidence, and I actually understand our risks.",
    result: "Zero incidents in 18 months",
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Sunita Reddy",
    role: "Operations Director, RetailCo India",
    quote: "Cyberlok's Growth package gave us enterprise security at SME prices. The ROI was visible within the first quarter.",
    result: "77% reduction in security incidents",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Arun Patel",
    role: "Founder, CloudFirst Solutions",
    quote: "As a bootstrapped startup, security seemed like a luxury. Cyberlok showed us it's a necessity—and made it affordable in rupees.",
    result: "DPDP compliant in 3 months",
    icon: Users2,
    color: "from-purple-500 to-pink-500",
  },
];

const faqs = [
  {
    q: "We're too small to be targeted—why do we need security?",
    a: "43% of cyberattacks target SMEs precisely because they have fewer defenses. Most Indian businesses lose ₹50+ lakh to breaches—enough to shut down permanently.",
  },
  {
    q: "What does protection cost?",
    a: "Plans start at ₹7,999/month with annual billing. That's less than a coffee per day. We offer flexible payment options—no hidden charges, GST included.",
  },
  {
    q: "How fast can we get protected?",
    a: "Starter packages deploy within 48 hours. Growth packages take 1-2 weeks for complete setup. We prioritize quick onboarding for Indian businesses.",
  },
  {
    q: "Where is our data stored?",
    a: "All data stays in India with ISO 27001-aligned security. We never access your production data—zero-trust architecture ensures complete privacy.",
  },
  {
    q: "What if our business grows quickly?",
    a: "We scale with you instantly. Add endpoints, users, or upgrade plans within 24 hours. No friction, no lengthy migrations.",
  },
  {
    q: "Is Cyberlok available 24/7?",
    a: "Yes! Our security operations team monitors threats round-the-clock in Hindi, English, and regional languages. Emergency support with guaranteed response times.",
  },
  {
    q: "Can we customize a package?",
    a: "Every business is unique. We create custom security bundles tailored to your budget and specific needs. Contact us for a personalized quote.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCard({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlowCard({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const smeStats = [
  { value: "51+", suffix: "", label: "SMEs Protected", icon: Building2, color: "from-blue-500 to-indigo-500" },
  { value: "48hrs", suffix: "", label: "Deployment Time", icon: Zap, color: "from-yellow-500 to-orange-500" },
  { value: "77%", suffix: "", label: "Incident Reduction", icon: ShieldCheck, color: "from-green-500 to-emerald-500" },
  { value: "4.9/5", suffix: "", label: "Customer Rating", icon: Star, color: "from-purple-500 to-pink-500" },
];

export default function SMEsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "SMEs" }]} className="mb-6" />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-blue-500/10 px-4 py-2"
                >
                  <Building2 className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">SME Security Solutions</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Security Built for
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                    Growing Indian Businesses
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-lg text-white/70 leading-relaxed"
                >
                  You didn&apos;t start your business to worry about cybersecurity. Let Cyberlok handle the security
                  while you focus on growth. Affordable, comprehensive protection designed specifically for Indian SMEs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  <Link
                    href="/contact#send-message"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-4 text-base font-semibold text-black overflow-hidden shadow-lg shadow-blue-500/30"
                  >
                    <span className="relative flex items-center gap-2">
                      Start Free Assessment
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </Link>
                  <Link
                    href="#packages"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    View Packages
                  </Link>
                </motion.div>
              </motion.div>

              {/* Animated Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {smeStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-blue-400/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
                        >
                          <stat.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="mt-4">
                          <p className="text-3xl font-bold text-white">{stat.value}<span className="text-lg text-blue-400">{stat.suffix}</span></p>
                          <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-4 backdrop-blur-sm"
                >
                  <p className="text-xs text-blue-400">Starting at just</p>
                  <p className="text-lg font-bold text-white">₹7,999</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CYBERLOK FOR SMEs */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedSection className="mb-8 sm:mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest text-blue-400">WHY CYBERLOK FOR SMEs</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Security that works as hard as you do
              </h2>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyCyberlok.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </motion.div>

                    <h3 className="mt-4 text-base font-semibold leading-tight text-white group-hover:text-blue-100 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-grow text-sm leading-relaxed text-white/60">
                      {item.desc}
                    </p>

                    <div className="-mx-6 mt-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TOP SERVICES FOR SMEs - Unique Presentation */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-blue-950/30 via-black to-black">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedSection className="mb-8 sm:mb-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-blue-400/10 px-4 py-2"
              >
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-xs font-semibold text-blue-400">CRITICAL FOR SMEs</span>
              </motion.div>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                <span className="text-white">Top </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Security Services</span>
                <span className="text-white"> You Need</span>
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-white/65">
                Based on ₹1.75 lakh crore lost to payment fraud in 2025 — these services protect what matters most to your business.
              </p>
            </AnimatedSection>

            {/* Priority Cards - Different from standard grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Essential Services - Left Column */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-400/20">
                    <Zap className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400">Essential Services</h3>
                </motion.div>

                {[
                  { icon: Shield, title: "Endpoint Security", desc: "Protect every laptop, desktop & server from ransomware & malware attacks that can freeze your operations.", stat: "67% of SMEs targeted" },
                  { icon: Mail, title: "Email Security", desc: "Stop phishing emails & business email compromise that trick employees into transferring money.", stat: "₹120+ Cr lost to BEC" },
                  { icon: CreditCard, title: "Payment Protection", desc: "Secure UPI, bank accounts & payment gateways from fraudsters targeting Indian businesses.", stat: "₹1.75L Cr lost in 2025" },
                ].map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent p-5 transition-all hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    {/* Animated border glow */}
                    <motion.div
                      className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-500"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    />

                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-blue-500/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="h-6 w-6 text-blue-400" />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white group-hover:text-blue-100 transition-colors">
                          {service.title}
                        </h4>
                        <p className="mt-1 text-sm text-white/60">
                          {service.desc}
                        </p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 px-2.5 py-1"
                        >
                          <AlertTriangle className="h-3 w-3 text-blue-400" />
                          <span className="text-xs font-medium text-blue-400">{service.stat}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Important + Optional - Right Column */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                    <Star className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">Highly Recommended</h3>
                </motion.div>

                {[
                  { icon: Bug, title: "Vulnerability Scanning", desc: "Find weak points in your website & network before hackers discover them.", stat: "Daily scans" },
                  { icon: UserCheck, title: "Security Awareness Training", desc: "Turn your team into a human firewall that spots & stops attacks.", stat: "82% breaches = human error" },
                  { icon: Cloud, title: "Cloud Security", desc: "Protect your data on AWS, Azure & Google Cloud from unauthorized access.", stat: "Optional but growing" },
                ].map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.02, x: -10 }}
                    className="group relative overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-l from-purple-500/10 via-transparent to-transparent p-5 transition-all hover:border-purple-400/40 hover:bg-purple-500/10"
                  >
                    {/* Animated border glow */}
                    <motion.div
                      className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-blue-500"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    />

                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-blue-500/10"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="h-6 w-6 text-purple-400" />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white group-hover:text-purple-100 transition-colors">
                          {service.title}
                        </h4>
                        <p className="mt-1 text-sm text-white/60">
                          {service.desc}
                        </p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-2.5 py-1"
                        >
                          <Star className="h-3 w-3 text-purple-400" />
                          <span className="text-xs font-medium text-purple-400">{service.stat}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-blue-400/5 p-6 sm:p-8 text-center"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Not sure which services you need?
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Our security experts will assess your business and recommend the right protection — free consultation.
              </p>
              <Link
                href="/contact#send-message"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-blue-500/50 transition"
              >
                Get Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedSection className="mb-8 sm:mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest text-blue-400">SECURITY PACKAGES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Choose your protection level
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-white/65">
                Transparent pricing in INR with no hidden fees. All packages include GST, setup, and onboarding.
              </p>
            </AnimatedSection>

            <div className="grid gap-5 lg:grid-cols-3">
              {packages.map((pkg, i) => (
                <GlowCard key={pkg.name} index={i}>
                  <div className={`relative flex h-full flex-col rounded-2xl border p-5 sm:p-6 ${
                    pkg.highlight
                      ? "border-yellow-400/40 bg-gradient-to-b from-yellow-500/10 to-transparent"
                      : "border-white/10 bg-white/5"
                  }`}>
                    {pkg.highlight && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-500 px-4 py-1 text-xs font-semibold text-black"
                      >
                        Most Popular
                      </motion.div>
                    )}

                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                        className={`inline-block rounded-full ${pkg.badgeColor} px-3 py-1 text-xs font-semibold text-black`}
                      >
                        {pkg.badge}
                      </motion.div>
                      <h3 className="mt-3 text-xl font-semibold">{pkg.name}</h3>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                        className="mt-3 text-3xl font-bold text-blue-400"
                      >
                        {pkg.price}
                        <span className="text-lg font-normal text-white/60">{pkg.priceSuffix}</span>
                      </motion.div>
                      {pkg.priceNote && (
                        <p className="text-xs text-white/50">{pkg.priceNote}</p>
                      )}
                    </div>

                    <div className="mt-6 space-y-4 flex-grow">
                      {pkg.services.map((section, j) => (
                        <motion.div
                          key={section.category}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 + i * 0.1 }}
                        >
                          <p className="text-xs font-semibold text-blue-400 mb-2">{section.category}</p>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                                <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href="/contact#send-message"
                      className="mt-6 flex w-full items-center justify-center gap-1 rounded-full bg-blue-500 py-3 text-center text-sm font-semibold text-black transition hover:bg-blue-400"
                    >
                      <span className="flex items-center gap-1">
                        {pkg.cta}
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.span>
                      </span>
                    </Link>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                      className="mt-4 text-center text-xs text-white/50 italic"
                    >
                      👉 {pkg.tagline}
                    </motion.p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* THREATS SMEs FACE */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedSection className="mb-8 sm:mb-12 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2"
              >
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-sm font-semibold text-red-300">REAL THREATS</span>
              </motion.div>
              <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Risks facing Indian businesses daily
              </h2>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2">
              {commonThreats.map((threat, i) => (
                <GlowCard key={threat.threat} index={i}>
                  <Card className="group relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-transparent transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <CardContent className="relative p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${threat.color} shadow-lg`}
                        >
                          <threat.icon className="h-7 w-7 text-white" />
                        </motion.div>

                        <div className="flex-grow">
                          <motion.h3
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                            className="text-lg font-semibold text-white"
                          >
                            {threat.threat}
                          </motion.h3>

                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.3 }}
                            className="mt-2 h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          />

                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.4 }}
                            className="mt-3 text-sm text-white/70"
                          >
                            {threat.impact}
                          </motion.p>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="mt-5 rounded-xl border-blue-500/20 bg-blue-500/5 p-4"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Shield className="h-4 w-4 text-blue-400" />
                          <span className="text-xs font-semibold text-blue-400">HOW WE PROTECT YOU</span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed mb-4">
                          {threat.protection}
                        </p>
                        <div className="space-y-2">
                          {threat.services.map((service, j) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + 0.6 + j * 0.1 }}
                              className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-black/20 p-2"
                            >
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                                <span className="text-sm text-white/80">{service.name}</span>
                              </div>
                              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                                service.tag === "Starter" 
                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                  : service.tag === "Growth"
                                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                  : "bg-red-500/20 text-red-400 border border-red-500/30"
                              }`}>
                                {service.tag}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.8, duration: 0.3 }}
                        className="-mx-6 mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                      />
                    </CardContent>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedSection className="mb-8 sm:mb-12">
              <p className="text-xs font-semibold tracking-widest text-blue-400">SUCCESS STORIES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Indian SMEs who chose Cyberlok
              </h2>
            </AnimatedSection>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <AnimatedCard key={testimonial.name} index={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex gap-1"
                    >
                      {Array.from({ length: 5 }).map((_, j) => (
                        <motion.div
                          key={j}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 + i * 0.1 + 0.3, type: "spring" }}
                        >
                          <Star className="h-4 w-4 fill-blue-400 text-blue-400" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      className="mt-4 rounded-lg bg-blue-500/10 px-3 py-2 text-xs text-blue-400"
                    >
                      Result: {testimonial.result}
                    </motion.div>

                    <div className="mt-auto flex items-center gap-3 pt-4">
                      <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.color} shadow-lg`}
                      >
                        <testimonial.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-white/50">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedSection className="mb-8 sm:mb-12">
              <p className="text-xs font-semibold tracking-widest text-blue-400">QUESTIONS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Frequently asked questions
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-white/90 hover:text-blue-400 transition-colors">
                      <span className="text-sm font-medium">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-white/60 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA - Enhanced Style */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/10" />
        </div>
        <Container>
          <div className="py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border-blue-400/30 bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-purple-500/5 p-8 sm:p-12"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
              
              <div className="relative text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-500 shadow-xl shadow-blue-500/30"
                >
                  <Zap className="h-10 w-10 text-white" />
                </motion.div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
                  Ready to Secure Your Business?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Join 500+ Indian SMEs who trust Cyberlok for their cybersecurity. 
                  Let&apos;s build a security strategy that protects and enables your business.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                  <Link
                    href="/contact#send-message"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 overflow-hidden"
                  >
                    <span className="relative flex items-center gap-2">
                      Get Free Assessment
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    Explore All Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <ScrollToTop />
    </div>
  );
}
