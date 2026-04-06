"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ChevronRight,
  Shield,
  Server,
  Cloud,
  Eye,
  FileCheck2,
  CheckCircle2,
  BarChart3,
  Target,
  Building2,
  Award,
  Headphones,
  Clock,
  TrendingUp,
  ShieldCheck,
  Globe,
  AlertTriangle,
  Star,
  Zap,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

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

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numValue = parseInt(value.replace(/[^0-9]/g, ""));
      const duration = 2000;
      const steps = 60;
      const increment = numValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setCount(numValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const capabilities = [
  {
    category: "SOC Operations",
    icon: Eye,
    color: "from-blue-500 to-indigo-500",
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
    color: "from-cyan-500 to-blue-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-blue-500 to-indigo-500",
    features: ["Single pane of glass", "Automated orchestration", "Cross-team collaboration", "Executive dashboards"],
  },
  {
    title: "Cloud-Native Protection",
    desc: "Secure your cloud transformation with purpose-built tools. From AWS to Azure to GCP, we protect your cloud-native applications and infrastructure.",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    features: ["Infrastructure as Code security", "Container registry scanning", "Serverless protection", "Cloud compliance automation"],
  },
  {
    title: "Advanced Threat Defense",
    desc: "Stay ahead of sophisticated adversaries with continuous red teaming, threat hunting, and behavioral analytics.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    features: ["Threat hunting", "Behavioral analytics", "MITRE ATT&CK mapping", "Threat intelligence feeds"],
  },
  {
    title: "Executive Risk Management",
    desc: "Translate technical security data into business risk insights. Our CISO advisory helps communicate security posture to the board.",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    features: ["Board reporting", "Risk quantification", "Security metrics", "Strategic roadmap"],
  },
];

const whyCyberlok = [
  {
    title: "Strategic Security Partner",
    desc: "We align cybersecurity with business objectives. Your security strategy becomes a competitive advantage.",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Regulatory Navigation",
    desc: "CERT-In, DPDP, RBI, SEBI—our experts turn compliance complexity into streamlined processes.",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Executive Intelligence",
    desc: "Board-ready dashboards and risk metrics that speak the language of business leaders.",
    icon: ShieldCheck,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Rapid Response Force",
    desc: "When incidents strike, our elite team contains threats in hours, not days. Your business stays operational.",
    icon: Zap,
    color: "from-orange-500 to-orange-600",
  },
];

const threats = [
  {
    threat: "Regulatory Storm",
    stat: "₹250 Cr",
    statLabel: "Maximum DPDP penalty",
    desc: "Non-compliance with India&apos;s data protection laws exposes enterprises to unprecedented financial and reputational risk.",
    solution: "Automated compliance monitoring with continuous regulatory updates",
    services: ["DPDP Implementation", "CERT-In Compliance", "Regulatory Reporting"],
    icon: Globe,
    color: "from-blue-500 to-indigo-500",
  },
  {
    threat: "Sophisticated Attacks",
    stat: "₹85 L",
    statLabel: "Average breach cost",
    desc: "State-sponsored and criminal actors are deploying AI-powered attack tools against Indian enterprises.",
    solution: "AI-driven threat detection with 24/7 threat hunting",
    services: ["Red Team Operations", "SOC Monitoring", "Threat Intelligence"],
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    threat: "Cloud Complexity",
    stat: "73%",
    statLabel: "Cloud misconfigurations",
    desc: "Multi-cloud environments create security gaps that attackers actively exploit.",
    solution: "Unified cloud security posture management across all providers",
    services: ["Cloud Security Assessment", "CSPM Implementation", "DevSecOps"],
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
  },
  {
    threat: "Talent Gap",
    stat: "50K+",
    statLabel: "Cybersecurity jobs vacant",
    desc: "India faces a severe shortage of skilled security professionals.",
    solution: "Access to elite security team without hiring overhead",
    services: ["vCISO Services", "Dedicated Security Engineer", "SOC Team"],
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
];

const enterprisePackages = [
  {
    name: "Professional",
    badge: "50-75 Employees",
    badgeColor: "bg-blue-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "Custom pricing based on needs",
    highlight: false,
    services: [
      { category: "Offensive Security", items: ["Web App Pentesting (2×/year)", "Network Pentesting (2×/year)", "API Security Testing (1×/year)", "Vulnerability Assessment (Quarterly)"] },
      { category: "Defensive Security", items: ["SOC Monitoring (50+ endpoints)", "Endpoint Detection & Response", "Email Security & Anti-Phishing", "Basic Incident Response"] },
      { category: "Compliance", items: ["DPDP Act Gap Assessment", "CERT-In Compliance Support", "Quarterly Compliance Reports"] },
      { category: "Support", items: ["Priority Support (8hr response)", "Monthly Security Reviews", "Dedicated Security Consultant"] },
    ],
    cta: "Get Started",
    tagline: "Build your security foundation",
  },
  {
    name: "Enterprise",
    badge: "75-120 Employees",
    badgeColor: "bg-yellow-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "Custom pricing based on needs",
    highlight: true,
    services: [
      { category: "Offensive Security", items: ["Full Pentesting (Quarterly)", "Red Team Operations (2×/year)", "Cloud Security Assessment", "Social Engineering Testing"] },
      { category: "Defensive Security", items: ["SOC-as-a-Service (75+ endpoints)", "Advanced EDR & XDR", "SIEM Implementation & Tuning", "24/7 Incident Response Team"] },
      { category: "Compliance & Risk", items: ["Full DPDP Act Implementation", "CERT-In Reporting (6-hr SLA)", "RBI/SEBI Guidelines", "ISO 27001 Gap Assessment"] },
      { category: "Support & Consulting", items: ["Cybersecurity Consulting (4 sessions)", "CISO Advisory (Monthly)", "Security Awareness Training (50 users)"] },
    ],
    cta: "Start Growing",
    tagline: "Mature your security posture",
  },
  {
    name: "Corporate Elite",
    badge: "200+ Employees",
    badgeColor: "bg-purple-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "Custom enterprise solutions",
    highlight: false,
    services: [
      { category: "Complete Coverage", items: ["Continuous Penetration Testing", "Adversary Simulation (Red Team)", "Cloud-Native Security (CSPM)", "AI-Powered Threat Detection"] },
      { category: "Advanced Operations", items: ["Dedicated SOC Team", "Advanced SIEM/SOAR", "Custom Threat Intelligence", "24/7 Incident Response (1-hr SLA)"] },
      { category: "Enterprise Compliance", items: ["Full DPDP Implementation", "CERT-In Complete Compliance", "SOC 2 / ISO 27001 Certification"] },
      { category: "Executive Partnership", items: ["Virtual CISO (vCISO)", "Board Security Briefings", "Quarterly Executive Reviews", "Unlimited Security Training"] },
    ],
    cta: "Contact Us",
    tagline: "Elite security for elite organizations",
  },
];

export default function EnterprisesPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div>
      {/* HERO - Merged Layout with Animated Stats */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Corporates" }]} className="mb-6" />

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
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Enterprise Security</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Securing India&apos;s
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Most Ambitious Enterprises
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-lg text-white/70 leading-relaxed"
                >
                  From unicorns to PSU giants, we protect the organizations that power India&apos;s economy. 
                  Enterprise-grade cybersecurity with Indian regulatory expertise.
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
                      Request Assessment 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="h-5 w-5" />
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
                  {[
                    { value: "40", suffix: "+", label: "Enterprise Clients", icon: Building2, color: "from-blue-500 to-indigo-500" },
                    { value: "95", suffix: "%", label: "Compliance Success", icon: Award, color: "from-green-500 to-emerald-500" },
                    { value: "24", suffix: "/7", label: "SOC Operations", icon: Headphones, color: "from-purple-500 to-pink-500" },
                    { value: "6", suffix: "hrs", label: "Response Time", icon: Clock, color: "from-orange-500 to-red-500" },
                  ].map((stat, i) => (
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
                          <p className="text-3xl font-bold text-white">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </p>
                          <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -right-6 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-4 backdrop-blur-sm"
                >
                  <p className="text-xs text-blue-400">Trusted by</p>
                  <p className="text-lg font-bold text-white">Top 50 Indian Companies</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section id="platform" className="border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs font-semibold tracking-widest bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">ENTERPRISE PLATFORM</p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                <span className="text-white">Security </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Without Limits</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/65">
                Purpose-built for Indian enterprise requirements. Every capability you need, at the scale you demand.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {solutions.map((solution, i) => (
                <GlowCard key={solution.title} index={i}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-blue-400/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.color} shadow-lg`}
                      >
                        <solution.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{solution.title}</h3>
                        <p className="mt-2 text-sm text-white/60 leading-relaxed">{solution.desc}</p>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {solution.features.map((feature, j) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 }}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
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
              <p className="text-xs font-semibold tracking-widest text-blue-400">SERVICE AREAS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Everything your enterprise needs
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.category}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cap.color} shadow-lg`}
                      >
                        <cap.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">{cap.category}</h3>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {cap.services.map((service) => (
                        <li key={service} className="flex items-center gap-2 text-sm text-white/70">
                          <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CYBERLOK - Interactive Tabs */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-blue-400">WHY ENTERPRISES CHOOSE US</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                The Cyberlok Difference
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Feature Navigation */}
              <div className="space-y-3">
                {whyCyberlok.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveFeature(i)}
                    className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                      activeFeature === i
                        ? "border-blue-400/50 bg-gradient-to-r from-blue-500/20 to-transparent"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className={`font-semibold ${activeFeature === i ? "text-blue-400" : "text-white"}`}>
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Feature Display */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl border-blue-400/30 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-purple-500/10 p-8"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${whyCyberlok[activeFeature].color} shadow-xl`}
                  >
                    {(() => {
                      const Icon = whyCyberlok[activeFeature].icon;
                      return <Icon className="h-10 w-10 text-white" />;
                    })()}
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {whyCyberlok[activeFeature].title}
                  </h3>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {whyCyberlok[activeFeature].desc}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-400 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ENTERPRISE PACKAGES */}
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
              <p className="text-xs font-semibold tracking-widest bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">SECURITY PACKAGES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Enterprise protection plans
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-white/65">
                Scalable solutions designed for Indian enterprises. Custom SLAs and dedicated teams for every organization.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {enterprisePackages.map((pkg, i) => (
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
                      className="mt-6 flex w-full items-center justify-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 py-3 text-center text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <span className="flex items-center gap-1">
                        {pkg.cta}
                        <ChevronRight className="h-4 w-4" />
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

      {/* THREATS - With Stats */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-red-400">ENTERPRISE RISKS</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Threats That Keep CISOs Awake
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {threats.map((threat, i) => (
                <motion.div
                  key={threat.threat}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${threat.color} shadow-lg`}
                      >
                        <threat.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-blue-400">{threat.threat}</p>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                            {threat.stat}
                          </span>
                          <span className="text-sm text-white/50">{threat.statLabel}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-white/70 leading-relaxed">
                      {threat.desc}
                    </p>

                    <div className="mt-4 rounded-xl border-blue-500/20 bg-blue-500/5 p-3">
                      <p className="text-xs font-semibold text-blue-400">Our Solution</p>
                      <p className="mt-1 text-sm text-white/70">{threat.solution}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {threat.services.map((service) => (
                        <span key={service} className="rounded-full border-blue-400/30 bg-blue-400/10 px-2 py-1 text-xs text-blue-400">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS - Enhanced with Stars */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-blue-400">CLIENT SUCCESS STORIES</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Trusted by Industry Leaders
              </h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { name: "Vikram Malhotra", role: "Group CTO, Bharat Industries", quote: "Cyberlok became our strategic security partner. Their understanding of CERT-In requirements and ability to integrate with our existing infrastructure saved us months of effort.", result: "100% CERT-In compliance in 90 days", icon: ShieldCheck, color: "from-blue-500 to-indigo-500" },
                { name: "Ananya Sharma", role: "Head of Information Security, Axis Bank", quote: "The DPDP Act implementation support was exceptional. Cyberlok didn&apos;t just give us compliance—they helped us build a culture of security.", result: "Zero data breaches in 2 years", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
                { name: "Deepak Rao", role: "CISO, Tata Digital", quote: "Their cloud security expertise during our multi-cloud migration was outstanding. Real threat detection, not just alerts.", result: "₹15 crore saved in prevented incidents", icon: Cloud, color: "from-purple-500 to-pink-500" },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + i * 0.1, type: "spring" }}
                      >
                        <Star className="h-4 w-4 fill-blue-400 text-blue-400" />
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="mt-4 text-sm text-white/80 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.color} shadow-lg`}
                    >
                      <testimonial.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-blue-500/10 px-4 py-2">
                    <p className="text-xs text-blue-400">
                      <CheckCircle2 className="mr-1 inline h-3 w-3" />
                      Result: {testimonial.result}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ - Accordion Style */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-blue-400">FREQUENTLY ASKED</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Questions from Security Leaders
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "How do you handle board-level security reporting?", a: "Every quarter, we deliver executive summaries with risk metrics, compliance status, and actionable recommendations. Your board will understand security ROI in business terms." },
                  { q: "What does corporate protection cost?", a: "Plans start at ₹2,99,999 for organizations with 50-200 employees. Pricing scales based on endpoints, compliance requirements, and service tier. All plans include GST." },
                  { q: "What's included in incident response?", a: "From initial containment to forensic analysis and regulatory reporting. We handle the entire incident lifecycle, including CERT-In's 6-hour notification window." },
                  { q: "How do you protect our cloud infrastructure?", a: "Multi-cloud security assessment, CSPM implementation, and continuous posture monitoring for AWS, Azure, GCP, and hybrid environments." },
                  { q: "What SLA guarantees do you provide?", a: "Response SLAs from 1-8 hours depending on severity. Professional: 8hr, Enterprise: 4hr, Corporate Elite: 1hr. Uptime guarantees for monitoring services." },
                  { q: "Can you support our digital transformation safely?", a: "Absolutely. We embed security into your transformation—cloud migration, API integrations, IoT deployments—all while maintaining compliance." },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-white/90 hover:text-blue-400">
                      <span className="font-medium">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
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
                  <Shield className="h-10 w-10 text-white" />
                </motion.div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
                  Ready to Secure Your Enterprise?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Join 50+ Indian enterprises who trust Cyberlok for their cybersecurity. 
                  Let&apos;s build a security strategy that protects and enables your business.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                  <Link
                    href="/contact#send-message"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 overflow-hidden"
                  >
                    <span className="relative flex items-center gap-2">
                      Start Your Assessment
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronRight className="h-5 w-5" />
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
