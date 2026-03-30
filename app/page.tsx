"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import Container from "@/components/shared/Container";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Radar,
  LockKeyhole,
  Cloud,
  Bug,
  FileCheck2,
  Rocket,
  Building2,
  Users,
  Landmark,
  Cpu,
  Sparkles,
  ChevronRight,
  Code,
  ShieldCheck,
  MailWarning,
  Target,
  ClipboardCheck,
  CheckCircle2,
  GraduationCap,
  TrendingUp,
  ShieldAlert,
  Lock,
  Mail,
  Globe,
  KeyRound,
  Eye,
  Database,
  Server,
  Fingerprint,
  Monitor,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ClickSpark from "@/components/ClickSpark/ClickSpark";

const ServicesEcosystem = dynamic(() => import("@/components/home/ServicesEcosystem"), {
  loading: () => <div className="h-96 animate-pulse bg-white/5" />,
  ssr: false,
});

const ClientInfo = dynamic(() => import("@/components/home/ClientInfo"), {
  loading: () => <div className="h-80 animate-pulse bg-white/5 rounded-3xl" />,
  ssr: false,
});


const rotatingPhrases = [
  "real risk reduction",
  "measurable outcomes",
  "reduced attack surface",
  "operational resilience",
  "business continuity",
];



function RotatingText({
  phrases,
  interval = 2600,
}: {
  phrases: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      interval
    );
    return () => clearInterval(id);
  }, [phrases.length, interval]);

  return (
    <span className="relative inline-block whitespace-nowrap text-cyan-300">
      {/* height reservation to prevent layout jump */}
      <span className="invisible block h-[1.2em]">
        {phrases[0]}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 text-cyan-300"

        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}



/** ✅ motion variants */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

/** Scale in animation */
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

/** Slide in from left */
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

/** Slide in from right */
const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/** ✅ Counter */
function AnimatedCounter({
  to,
  suffix = "",
  duration = 900,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <div ref={ref} className="text-3xl font-semibold tracking-tight">
      {value}
      {suffix}
    </div>
  );
}

const audiences = [
  {
    title: "Individuals",
    desc: "Personal security, awareness, fraud protection.",
    icon: Users,
    href: "/solutions/individuals",
    tag: "Cyber Hygiene",
  },
  {
    title: "SMEs",
    desc: "Affordable packages with rapid deployment.",
    icon: Building2,
    href: "/solutions/smes",
    tag: "Security Starter",
  },
  {
    title: "Corporates",
    desc: "Compliance + risk reduction at scale.",
    icon: Cpu,
    href: "/solutions/corporates",
    tag: "Risk-Based",
  },
  {
    title: "Enterprises",
    desc: "SOC/MDR, SIEM/SOAR & cloud posture.",
    icon: Rocket,
    href: "/solutions/enterprises",
    tag: "Enterprise Ready",
  },
  {
    title: "Government",
    desc: "Critical infra and national initiatives.",
    icon: Landmark,
    href: "/solutions/government",
    tag: "National Impact",
  },
];





const capabilities = [
  {
    title: "Attack Surface Mapping",
    shortDesc: "Identify external exposure across digital assets.",
    detail:
      "This capability continuously identifies and tracks exposed assets across web, cloud, and internet-facing infrastructure—helping organizations understand what attackers can see and prioritize remediation before exploitation occurs.",
    icon: Radar,
  },
  {
    title: "Identity Protection",
    shortDesc: "Control access and reduce identity-based attacks.",
    detail:
      "This capability strengthens identity security by improving access controls, enforcing least privilege, and reducing credential abuse—addressing one of the most common attack vectors used in modern breaches.",
    icon: LockKeyhole,
  },
  {
    title: "Cloud Posture & Hardening",
    shortDesc: "Secure cloud configurations and permissions.",
    detail:
      "This capability focuses on identifying misconfigurations, excessive permissions, and insecure defaults within cloud environments—helping teams reduce risk while maintaining agility and operational efficiency.",
    icon: Cloud,
  },
  {
    title: "Security Program & Compliance",
    shortDesc: "Build structured, audit-ready security programs.",
    detail:
      "This capability helps organizations establish and mature security programs aligned with regulatory and industry standards—ensuring governance, risk management, and security controls are implemented in a practical and sustainable way.",
    icon: FileCheck2,
  },
];


export default function HomePage() {
  const [activeCap, setActiveCap] = useState(0);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* ================= BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0">
          {/* glow orbs */}
          <motion.div
            className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl"
            animate={{ y: [0, 22, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-white/6 blur-3xl"
            animate={{ x: [0, 20, 0], opacity: [0.22, 0.38, 0.22] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.20),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_55%)]" />

          {/* grid overlay */}
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        {/* ================= CONTENT ================= */}
        <Container>
          <div className="relative px-2 pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24">

            {/* ===== TOP GRID (TEXT + RIGHT PANEL) ===== */}
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_420px] items-start">

              {/* ---------- LEFT COLUMN ---------- */}
              <motion.div initial="hidden" animate="show">
                <motion.div custom={0} variants={fadeUp} className="flex flex-col sm:flex-row gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white/70">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
                    <span className="hidden xs:inline">Cybersecurity Services & Solutions</span>
                    <span className="xs:hidden">Cyber Services</span>
                  </span>

                  <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                    <Sparkles className="h-4 w-4" />
                    Enterprise-Grade Execution
                  </span>
                </motion.div>

                <motion.h1
                  custom={1}
                  variants={fadeUp}
                  className="mt-5 sm:mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
                >
                  <span className="block">Cybersecurity built for</span>

                  <span className="block whitespace-nowrap">
                    <RotatingText phrases={rotatingPhrases} />
                  </span>

                  <span className="block text-white/80 text-[0.9em] mt-2">
                    Not just reports.
                  </span>
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={fadeUp}
                  className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
                >
                  Cyberlok secures individuals, SMEs, corporates, enterprises and government initiatives
                  through offensive security, SOC/monitoring, compliance, cloud security and security awareness.
                </motion.p>

                <motion.div
                  custom={3}
                  variants={fadeUp}
                  className="mt-6 sm:mt-10 flex flex-col gap-3 sm:flex-row"
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 sm:px-7 sm:py-3 text-sm font-semibold text-black"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-lg transition group-hover:opacity-100" />
                    <span className="relative">Request Security Assessment</span>
                    <ArrowRight className="relative h-4 w-4 sm:h-5 sm:w-5 transition group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 sm:px-7 sm:py-3 text-sm font-semibold text-white"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>

              {/* ---------- RIGHT COLUMN (PASTE YOUR PANEL HERE) ---------- */}
              <div className="hidden lg:block sticky top-28">
                <ClientInfo />
              </div>

            </div>

            {/* ===== STATS (FULL WIDTH, UNAFFECTED) ===== */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-10 sm:mt-16 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { label: "Security Assessments", to: 15, suffix: "+", icon: ClipboardCheck },
                { label: "Critical Findings Resolved", to: 116, suffix: "+", icon: CheckCircle2 },
                { label: "Professionals Trained", to: 80, suffix: "+", icon: GraduationCap },
                { label: "Average Risk Reduction", to: 72, suffix: "%", icon: TrendingUp },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 transition hover:bg-white/10 cursor-pointer"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
                  
                  {/* animated border */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-cyan-400/30" />
                  </div>

                  {/* icon */}
                  <motion.div
                    className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-400/20 mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <m.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                  </motion.div>

                  {/* NUMBER */}
                  <div className="text-2xl sm:text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 to-cyan-500">
                    <AnimatedCounter to={m.to} suffix={m.suffix} />
                  </div>

                  {/* LABEL */}
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-white/85">
                    {m.label}
                  </p>

                  {/* divider */}
                  <div className="mt-3 sm:mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </Container>
      </section>


      {/* THREAT STRIP (creative marquee) */}
      <section className="border-b border-white/10 bg-black">
        <div className="relative overflow-hidden py-5">

          <motion.div
            className="flex whitespace-nowrap gap-3 text-sm"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[
              { icon: Radar, label: "Threat Monitoring" },
              { icon: Bug, label: "Vulnerability Discovery" },
              { icon: Cloud, label: "Cloud Misconfiguration Defense" },
              { icon: LockKeyhole, label: "Identity Protection" },
              { icon: FileCheck2, label: "Compliance Readiness" },
              { icon: Radar, label: "Penetration Testing" },
              { icon: Bug, label: "Vulnerability Assessment & Discovery" },
              { icon: MailWarning, label: "Phishing Simulation" },
              { icon: ShieldCheck, label: "Defensive Security" },
              { icon: Code, label: "Secure Software Development" },
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10
                     bg-white/5 px-5 py-2 text-white/70
                     backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              >
                <item.icon className="h-4 w-4 text-cyan-300" />
                {item.label}
              </span>
            ))}

            {/* duplicate for seamless loop */}
            {[
              { icon: Radar, label: "Threat Monitoring" },
              { icon: Bug, label: "Vulnerability Discovery" },
              { icon: Cloud, label: "Cloud Misconfiguration Defense" },
              { icon: LockKeyhole, label: "Identity Protection" },
              { icon: FileCheck2, label: "Compliance Readiness" },
            ].map((item, i) => (
              <span
                key={`dup-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10
                     bg-white/5 px-5 py-2 text-white/70
                     backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              >
                <item.icon className="h-4 w-4 text-cyan-300" />
                {item.label}
              </span>
            ))}
          </motion.div>

          {/* vignette edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent" />
        </div>
      </section>


      {/* AUDIENCE */}
      <section className="relative overflow-hidden border-b border-white/10">
  {/* ================= BACKGROUND ACCENT ================= */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.12]
      [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]
      [background-size:32px_32px]"
    />
  </div>

  <Container>
    <div className="relative py-12 sm:py-16 md:py-20">

      {/* ================= HEADER ================= */}
      <AnimatedContent
        distance={80}
        direction="vertical"
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
      >
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-cyan-300">
              WHO WE SERVE
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Security for every segment
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
              Cyberlok delivers tailored security programs aligned to your
              organization&apos;s Size, Risk Exposure, and Regulatory Obligations.
            </p>
          </div>

          <div className="hidden md:block">
            <ClickSpark sparkColor="#22d3ee" sparkSize={6} sparkRadius={14} sparkCount={6}>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full
                  border border-white/15 bg-white/5
                  px-6 py-3 text-sm font-semibold text-white
                  transition hover:bg-white/10"
              >
                Explore All Solutions
                <ChevronRight className="h-4 w-4" />
              </Link>
            </ClickSpark>
          </div>
        </div>
      </AnimatedContent>

      {/* ================= AUDIENCE CARDS ================= */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        delay={0.05}
      >
        <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-5">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <ClickSpark
                sparkColor="#22d3ee"
                sparkSize={6}
                sparkRadius={16}
                sparkCount={7}
              >
                <Link
                  href={a.href}
                  className="group relative flex h-full flex-col justify-between
                    rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6
                    transition
                    hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="pointer-events-none absolute -top-24 -right-24
                    h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl
                    opacity-0 transition group-hover:opacity-100"
                  />

                  <div>
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center
                          rounded-xl sm:rounded-2xl border border-cyan-400/25 bg-cyan-500/10"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <a.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                      </motion.span>

                      <span className="rounded-full border border-white/10
                        bg-black/40 px-2 sm:px-3 py-1 text-xs text-white/70">
                        {a.tag}
                      </span>
                    </div>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">{a.title}</p>
                    <p className="mt-1 sm:mt-2 text-sm text-white/60 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>

                  <p className="mt-4 sm:mt-6 inline-flex items-center gap-1
                    text-sm font-semibold text-cyan-300">
                    View Packages
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </Link>
              </ClickSpark>
            </motion.div>
          ))}
        </div>
      </AnimatedContent>

      {/* ================= MOBILE CTA ================= */}
      <AnimatedContent
        distance={60}
        direction="vertical"
        duration={0.6}
        initialOpacity={0}
        animateOpacity
      >
        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <ClickSpark sparkColor="#22d3ee" sparkSize={6} sparkRadius={14} sparkCount={6}>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full
                border border-white/15 bg-white/5
                px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Solutions
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ClickSpark>
        </div>
      </AnimatedContent>

    </div>
  </Container>
</section>


      <ServicesEcosystem />

      {/* SECURITY SOLUTIONS */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />
        </div>
        <Container>
          <div className="py-12 sm:py-16 md:py-20">

            {/* HEADER */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
            >
              <div className="mb-8 sm:mb-12">
                <p className="text-xs font-semibold tracking-widest text-cyan-300">
                  SECURITY SOLUTIONS
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                  Enterprise-Grade Security Products
                </h2>
                <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-white/65 leading-relaxed">
                  Comprehensive security solutions powered by industry-leading technology.
                  Protect your organization with Cyberlok&apos;s enterprise security portfolio.
                </p>
              </div>
            </AnimatedContent>

            {/* SOLUTIONS GRID */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Monitor,
                  title: "Endpoint Detection & Response (EDR)",
                  desc: "Advanced endpoint protection with real-time threat detection, investigation, and automated response capabilities.",
                  features: ["Real-time monitoring", "Threat hunting", "Automated containment", "Forensic analysis"],
                },
                {
                  icon: Database,
                  title: "Data Loss Prevention (DLP)",
                  desc: "Protect sensitive data across endpoints, networks, and cloud with intelligent data classification and policy enforcement.",
                  features: ["Data classification", "Policy enforcement", "Endpoint protection", "Cloud DLP"],
                },
                {
                  icon: Mail,
                  title: "Email Security",
                  desc: "Comprehensive email protection against phishing, malware, BEC, and zero-day attacks with AI-powered detection.",
                  features: ["Anti-phishing", "BEC protection", "Malware detection", "Email archiving"],
                },
                {
                  icon: Globe,
                  title: "Web Application Firewall (WAF)",
                  desc: "Protect your web applications from OWASP Top 10 threats, DDoS attacks, and application-layer vulnerabilities.",
                  features: ["OWASP protection", "DDoS mitigation", "API security", "Bot management"],
                },
                {
                  icon: Fingerprint,
                  title: "Zero Trust Architecture",
                  desc: "Implement zero trust security model with continuous verification, least privilege access, and micro-segmentation.",
                  features: ["Identity verification", "Micro-segmentation", "Least privilege", "Continuous monitoring"],
                },
                {
                  icon: Server,
                  title: "SIEM/SOAR",
                  desc: "Unified security monitoring with intelligent correlation, automated playbook execution, and compliance reporting.",
                  features: ["Log aggregation", "Threat correlation", "Automated response", "Compliance reports"],
                },
                {
                  icon: KeyRound,
                  title: "SSO & Identity Management",
                  desc: "Enterprise single sign-on with seamless access to all applications while maintaining strong security controls.",
                  features: ["Single sign-on", "MFA integration", "Directory services", "Access governance"],
                },
                {
                  icon: Lock,
                  title: "Privileged Access Management (PAM)",
                  desc: "Secure and monitor privileged accounts with credential vaulting, session recording, and just-in-time access.",
                  features: ["Credential vaulting", "Session recording", "Just-in-time access", "Password rotation"],
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Password Manager",
                  desc: "Secure password management for teams with shared vaults, breach monitoring, and secure password sharing.",
                  features: ["Password vault", "Breach monitoring", "Team sharing", "API access"],
                },
              ].map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
                    <solution.icon className="h-7 w-7 text-cyan-300" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{solution.desc}</p>

                  <ul className="mt-4 space-y-1.5">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 sm:mt-14 text-center"
            >
              <p className="text-sm text-white/60">
                Need a custom security solution? We integrate with your existing tools.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Talk to Our Security Team <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* CAPABILITIES - interactive */}
      <section className="border-b border-white/10">
  <Container>
    <div className="py-10 sm:py-16">

      {/* ================= HEADER ================= */}
      <AnimatedContent
        distance={24}
        direction="vertical"
        duration={0.8}
        ease="power3.out"
        animateOpacity
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold tracking-widest text-cyan-300">
            CORE SECURITY CAPABILITIES
          </p>

          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            Built to reduce real-world cyber risk
          </h2>

          <p className="mt-2 sm:mt-3 max-w-3xl text-sm sm:text-base text-white/65 leading-relaxed">
            Cyberlok delivers practical security capabilities designed to improve
            visibility, strengthen control, and enable faster, more confident
            response across your environment.
          </p>
        </motion.div>
      </AnimatedContent>

      {/* ================= CONTENT ================= */}
      <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2">

        {/* ---------- LEFT LIST ---------- */}
        <AnimatedContent
          distance={32}
          direction="vertical"
          duration={0.9}
          ease="power3.out"
          animateOpacity
        >
          <div className="grid gap-3">
            {capabilities.map((cap, idx) => (
              <ClickSpark
                key={cap.title}
                sparkColor="#22d3ee"
                sparkSize={6}
                sparkRadius={18}
                sparkCount={6}
                duration={350}
              >
                <motion.button
                  onClick={() => setActiveCap(idx)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "relative w-full text-left rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 transition",
                    activeCap === idx
                      ? "bg-cyan-500/10 border-cyan-400/25 shadow-[0_0_0_1px_rgba(34,211,238,0.25)]"
                      : "hover:bg-white/10 hover:border-cyan-400/20"
                  )}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.span 
                      className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10"
                      animate={activeCap === idx ? { rotate: [0, -5, 5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <cap.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                    </motion.span>

                    <div>
                      <p className="text-base sm:text-lg font-semibold">
                        {cap.title}
                      </p>
                      <p className="mt-0.5 sm:mt-1 text-sm text-white/60">
                        {cap.shortDesc}
                      </p>
                    </div>
                  </div>
                  
                  {/* active indicator */}
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    animate={{ opacity: activeCap === idx ? 1 : 0, x: activeCap === idx ? 0 : 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-4 w-4 text-cyan-400" />
                  </motion.div>
                </motion.button>
              </ClickSpark>
            ))}
          </div>
        </AnimatedContent>

        {/* ---------- RIGHT DETAIL ---------- */}
        <AnimatedContent
          key={activeCap}
          distance={40}
          direction="vertical"
          duration={0.7}
          ease="power3.out"
          animateOpacity
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8"
          >
            {/* glow */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

            <p className="text-xs font-semibold text-cyan-300 tracking-widest">
              CYBERLOK CAPABILITY
            </p>

            <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-semibold">
              {capabilities[activeCap].title}
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
              {capabilities[activeCap].detail}
            </p>

            <div className="mt-5 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <ClickSpark
                sparkColor="#000"
                sparkSize={7}
                sparkRadius={16}
                sparkCount={8}
                duration={400}
              >
                <Link
                  href="/services"
                  className="relative inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </ClickSpark>

              <ClickSpark
                sparkColor="#22d3ee"
                sparkSize={6}
                sparkRadius={16}
                sparkCount={6}
                duration={350}
              >
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white"
                >
                  Talk to Cyberlok
                </Link>
              </ClickSpark>
            </div>
          </motion.div>
        </AnimatedContent>

      </div>
    </div>
  </Container>
</section>




      {/* WHY CYBERLOK */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* subtle background accent */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:36px_36px]" />
        </div>

        <Container>
          <div className="relative py-12 sm:py-16 md:py-20">
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">
                WHY CYBERLOK
              </p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Security designed for real-world impact
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                Cyberlok delivers outcome-focused security programs that balance
                technical depth, operational reality, and long-term resilience.
              </p>
            </motion.div>

            {/* DIFFERENTIATORS */}
            <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Outcome-Driven Security",
                  icon: Target,
                  desc: "We prioritize tangible risk reduction over checkbox compliance. Every engagement is built around clear objectives, measurable impact, and sustained improvement—not static reports.",
                },
                {
                  title: "Technical Depth with Business Context",
                  icon: Cpu,
                  desc: "Our teams combine hands-on security expertise with a deep understanding of operations, compliance, and leadership priorities—bridging the gap between security and business.",
                },
                {
                  title: "Built for Scale and Maturity",
                  icon: Rocket,
                  desc: "From establishing your first security baseline to operating at enterprise scale, our approach adapts to your organization's size, complexity, and risk profile.",
                },
                {
                  title: "Beyond One-Time Assessments",
                  icon: ShieldCheck,
                  desc: "Cyberlok stays engaged beyond discovery—supporting remediation, continuous monitoring, and long-term posture improvement as threats evolve.",
                },
              ].map((d, idx) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 transition hover:bg-white/10"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
                  
                  {/* animated border */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-cyan-400/20" />
                  </div>

                  <motion.div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <d.icon className="h-6 w-6 text-cyan-300" />
                  </motion.div>

                  <p className="text-base sm:text-lg font-semibold">
                    {d.title}
                  </p>

                  <div className="mt-2 sm:mt-3 h-px w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />

                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-white/65">
                    {d.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 sm:mt-16 rounded-2xl sm:rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 sm:p-10 relative overflow-hidden"
            >
              {/* animated glow */}
              <motion.div
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-xl"
                >
                  <p className="text-xs sm:text-sm font-semibold text-cyan-300 tracking-widest">
                    READY TO MOVE FORWARD?
                  </p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold">
                    Build a security roadmap with confidence
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm text-white/65 leading-relaxed">
                    We&apos;ll assess your exposure, prioritize what matters most, and
                    define a clear, actionable plan to strengthen your security posture.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ClickSpark sparkColor="#22d3ee" sparkSize={8} sparkRadius={20} sparkCount={10}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/contact"
                        className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 sm:px-8 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all w-full sm:w-auto mt-4 md:mt-0"
                      >
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 blur-lg transition-opacity" />
                        <span className="relative flex items-center gap-2">
                          Request Assessment
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                      </Link>
                    </motion.div>
                  </ClickSpark>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>


    </div>
  );
}
