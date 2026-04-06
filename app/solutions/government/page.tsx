"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Landmark,
  Shield,
  Lock,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Award,
  Building,
  ChevronRight,
  Zap,
  Globe,
  Server,
  Users,
  Clock,
  ZapIcon,
  Heart,
  Building2,
  Radio,
  LandmarkIcon,
  Cpu,
  ShieldAlert,
  Search,
  Eye,
  Network,
  FileSearch,
  LockKeyhole,
  ShieldPlus,
  BadgeCheck,
  Target,
  Handshake,
  Radar,
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
      if (!isNaN(numValue)) {
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
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const whyCyberlok = [
  {
    title: "Government Clearance",
    desc: "Our team includes personnel with active security clearances for classified projects. We understand handling protocols for sensitive government data.",
    icon: ShieldCheck,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Regulatory Mastery",
    desc: "CERT-In, DPDP Act, SeMT, MeitY, NCIIPC—our experts navigate complex government frameworks to deliver compliant security.",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Critical Infrastructure Focus",
    desc: "Specialized expertise in securing power grids, healthcare systems, banking networks, and transportation infrastructure.",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Budget-Conscious Solutions",
    desc: "Enterprise-grade protection designed for government budgets. No unnecessary overhead—just effective security.",
    icon: Award,
    color: "from-orange-500 to-orange-600",
  },
];

const criticalInfrastructure = [
  { name: "Power & Energy", desc: "Power grids, NTPC, state electricity boards", icon: ZapIcon, color: "from-yellow-500 to-orange-500" },
  { name: "Healthcare", desc: "Hospitals, Ayushman Bharat, medical research", icon: Heart, color: "from-red-500 to-pink-500" },
  { name: "Banking & Finance", desc: "RBI-regulated banks, SEBI entities, insurance", icon: Building2, color: "from-emerald-500 to-teal-500" },
  { name: "Transportation", desc: "IRCTC, Air India, metro rails, ports", icon: Radio, color: "from-blue-500 to-indigo-500" },
  { name: "Telecommunications", desc: "BSNL, Reliance Jio, Airtel, internet backbone", icon: Globe, color: "from-violet-500 to-purple-500" },
  { name: "Government", desc: "Central ministries, state governments, ULBs", icon: LandmarkIcon, color: "from-blue-500 to-cyan-500" },
];

const services = [
  {
    category: "Critical Infrastructure Security",
    icon: ShieldAlert,
    color: "from-yellow-500 to-orange-500",
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
    icon: FileCheck,
    color: "from-green-500 to-emerald-500",
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
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-500",
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
    color: "from-red-500 to-pink-500",
    services: [
      "24/7 Government SOC",
      "Rapid Response Teams",
      "Digital Forensic Investigation",
      "CERT-In Empanelment Support",
      "Cross-Agency Coordination",
    ],
  },
];



const approach = [
  {
    phase: "Discovery & Classification",
    desc: "Identify critical assets, classify data sensitivity, and map interdependencies across your infrastructure.",
    duration: "2-4 weeks",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    phase: "Risk Assessment",
    desc: "Comprehensive threat modeling against nation-state and criminal adversaries with compliance mapping.",
    duration: "4-6 weeks",
    icon: Eye,
    color: "from-yellow-500 to-orange-500",
  },
  {
    phase: "Control Implementation",
    desc: "Deploy security controls aligned with SeMT framework, DPDP Act, and agency-specific requirements.",
    duration: "8-12 weeks",
    icon: ShieldPlus,
    color: "from-green-500 to-emerald-500",
  },
  {
    phase: "Continuous Monitoring",
    desc: "24/7 SOC operations with threat hunting, incident response, and CERT-In compliant reporting.",
    duration: "Ongoing",
    icon: Radar,
    color: "from-purple-500 to-pink-500",
  },
];

const securityControls = [
  { name: "Zero Trust Architecture", desc: "Never trust, always verify—across all access vectors", icon: LockKeyhole, color: "from-blue-500 to-indigo-500" },
  { name: "Continuous Monitoring", desc: "Real-time visibility into all network activity", icon: Eye, color: "from-cyan-500 to-blue-500" },
  { name: "Threat Intelligence", desc: "Nation-state and criminal TTPs mapped to MITRE ATT&CK", icon: Target, color: "from-orange-500 to-red-500" },
  { name: "Supply Chain Security", desc: "Vendor risk and third-party access controls", icon: Handshake, color: "from-green-500 to-emerald-500" },
  { name: "Data Classification", desc: "Sensitivity-based access and handling procedures", icon: BadgeCheck, color: "from-purple-500 to-pink-500" },
  { name: "Incident Coordination", desc: "CERT-In and sector-specific reporting protocols", icon: Network, color: "from-yellow-500 to-orange-500" },
];

const governmentPackages = [
  {
    name: "State Government Basic",
    badge: "For State Govt",
    badgeColor: "bg-blue-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "Custom pricing based on needs",
    cta: "Secure Your Department",
    tagline: "Essential protection for government infrastructure",
    highlight: false,
    services: [
      { category: "Infrastructure Security", items: ["Critical infrastructure assessment", "SCADA/ICS security", "Quarterly vulnerability scans"] },
      { category: "Compliance", items: ["CERT-In compliance assistance", "SeMT framework alignment", "Monthly security reports"] },
      { category: "Incident Response", items: ["6-hour incident reporting", "Basic forensics", "Dedicated support contact"] },
    ],
  },
  {
    name: "Central Government",
    badge: "For Central Ministries",
    badgeColor: "bg-yellow-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "Custom pricing based on needs",
    cta: "Get Advanced Protection",
    tagline: "Comprehensive security for central government",
    highlight: true,
    services: [
      { category: "Advanced Security", items: ["Red team assessments", "Continuous threat hunting", "APT detection & response"] },
      { category: "Full Compliance", items: ["Full DPDP Act implementation", "ISMS/ISO 27001 support", "MeitY framework alignment"] },
      { category: "Dedicated SOC", items: ["24/7 government SOC", "Named security officer", "Real-time threat intelligence"] },
    ],
  },
  {
    name: "Critical Infrastructure",
    badge: "For Power, Healthcare, Banking",
    badgeColor: "bg-purple-500",
    price: "Contact",
    priceSuffix: " for Quote",
    priceNote: "Custom government solutions",
    cta: "Protect Critical Assets",
    tagline: "Maximum security for national assets",
    highlight: false,
    services: [
      { category: "National Security", items: ["Clearance-capable personnel", "Supply chain security", "Nation-state threat defense"] },
      { category: "Full Coverage", items: ["OT/ICS security", "Air-gapped network testing", "Full incident response team"] },
      { category: "Executive Services", items: ["Board-ready security briefings", "Custom compliance reporting", "24/7 dedicated team"] },
    ],
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
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Government" }]} className="mb-6" />

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
                  <span className="text-sm font-medium text-blue-400">Government Security</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Securing the Infrastructure
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    That Keeps Bharat Running
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-lg text-white/70 leading-relaxed"
                >
                  From central ministries to state governments, from critical infrastructure to public sector 
                  undertakings—Cyberlok delivers government-grade security with deep expertise in CERT-In, 
                  DPDP Act, and SeMT frameworks.
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
                      Contact Government Team 
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
                    { value: "100", suffix: "%", label: "Customer Satisfaction", icon: Award, color: "from-yellow-500 to-orange-500" },
                    { value: "6", suffix: "hrs", label: "Incident Reporting", icon: Clock, color: "from-blue-500 to-cyan-500" },
                    { value: "24", suffix: "/7", label: "SOC Operations", icon: Radar, color: "from-purple-500 to-pink-500" },
                    { value: "11", suffix: "+", label: "Secured Infrastructure", icon: Building, color: "from-green-500 to-emerald-500" },
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
                  <p className="text-xs text-blue-400">Secured</p>
                  <p className="text-lg font-bold text-white">Critical Infrastructure</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* CRITICAL INFRASTRUCTURE - Enhanced */}
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
              <p className="text-xs font-semibold tracking-widest text-blue-400">CRITICAL INFRASTRUCTURE</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Protecting the Sectors India Depends On
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                We secure critical infrastructure sectors designated by NCIIPC, with specialized expertise 
                in the unique requirements of each—from power grids to banking systems.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {criticalInfrastructure.map((sector, i) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${sector.color} shadow-lg`}
                    >
                      <sector.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">
                      {sector.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{sector.desc}</p>
                    
                    <motion.div
                      className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
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
              <p className="text-xs font-semibold tracking-widest text-blue-400">WHY GOVERNMENT CHOOSE US</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                The Cyberlok Government Difference
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
              <p className="text-xs font-semibold tracking-widest text-blue-400">GOVERNMENT SERVICES</p>
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
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                      >
                        <service.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">{service.category}</h3>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {service.services.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                          <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                          {item}
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
              <p className="text-xs font-semibold tracking-widest text-blue-400">IMPLEMENTATION APPROACH</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Government-aligned methodology
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Our approach follows MeitY/SeMT frameworks and government best practices,
                with phases designed for Indian government procurement and approval cycles.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />

              <div className="space-y-4 sm:space-y-6">
                {approach.map((phase, i) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute left-0 top-6 hidden md:flex items-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: "spring" }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${phase.color} shadow-lg`}
                      >
                        <phase.icon className="h-7 w-7 text-white" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          className={`flex md:hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${phase.color} shadow-lg`}
                        >
                          <phase.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">{phase.phase}</h3>
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
              <p className="text-xs font-semibold tracking-widest bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">SECURITY CONTROLS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Government-grade security measures
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {securityControls.map((control, i) => (
                <motion.div
                  key={control.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${control.color} shadow-lg`}
                    >
                      <control.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm text-white group-hover:text-blue-100 transition-colors">{control.name}</p>
                      <p className="text-xs text-white/50">{control.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* GOVERNMENT PACKAGES */}
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
                Protection plans for government
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-white/65">
                Specialized solutions for state & central government, critical infrastructure, and public sector organizations.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {governmentPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`relative flex h-full flex-col rounded-2xl border p-5 sm:p-6 transition ${
                    pkg.highlight
                      ? "border-blue-400/40 bg-gradient-to-b from-blue-500/10 to-transparent"
                      : "border-white/10 bg-white/5 hover:border-blue-400/30"
                  }`}
                >
                  {pkg.highlight && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-4 py-1 text-xs font-semibold text-black"
                    >
                      Recommended
                    </motion.div>
                  )}

                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className={`inline-block rounded-full ${pkg.badgeColor} px-3 py-1 text-xs font-semibold`}
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
                      <ArrowRight className="h-4 w-4" />
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
                Questions from Government Leaders
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
                  { q: "Does Cyberlok have personnel with security clearances?", a: "Yes. Our government practice includes personnel with active security clearances at various levels. We can staff projects requiring cleared individuals and maintain appropriate handling procedures." },
                  { q: "How do you handle sensitive government data?", a: "We follow government information handling standards including MeitY guidelines. Data is processed in approved environments with appropriate controls, and we maintain full chain of custody documentation." },
                  { q: "Can you integrate with government networks and systems?", a: "Our team has extensive experience with government IT environments, including legacy systems, air-gapped networks, and classified enclaves. We adapt our tools and approaches to meet government network requirements." },
                  { q: "How do you ensure CERT-In compliance?", a: "We actively monitor CERT-In directives and maintain compliance with the 6-hour incident reporting timeline. Our platform supports automated reporting and documentation required for government compliance." },
                  { q: "What is your approach to critical infrastructure security?", a: "We follow NCIIPC guidelines and sector-specific requirements. Our team has expertise in ICS/SCADA environments, industrial control systems, and critical asset protection." },
                  { q: "Do you offer budget-conscious solutions for government?", a: "Yes. We design security programs specifically for government budgets—delivering enterprise-grade protection without unnecessary overhead. Custom pricing based on agency requirements." },
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

      {/* CTA - Enhanced */}
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
                  Ready to Secure Government Infrastructure?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Join 50+ government agencies who trust Cyberlok for their cybersecurity. 
                  Let&apos;s build a security strategy that protects India&apos;s critical infrastructure.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                  <Link
                    href="/contact#send-message"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-4 text-base font-bold text-black shadow-lg shadow-blue-500/30 overflow-hidden"
                  >
                    <span className="relative flex items-center gap-2">
                      Contact Government Team
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronRight className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    View All Services
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
