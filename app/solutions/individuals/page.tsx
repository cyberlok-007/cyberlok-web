"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Mail,
  Wifi,
  CheckCircle2,
  Star,
  Heart,
  ChevronRight,
  CreditCard,
  Users,
  ArrowRight,
  Shield,
  Database,
  Fingerprint,
  AlertTriangle,
  Award,
  ShieldCheck,
  Eye,
  Lock,
  SmartphoneIcon,
  ShieldAlert,
  Users2,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const whyMatters = [
  {
    stat: "1 in 4",
    desc: "Indians faced cybercrime in 2025, with average losses of ₹50,000+",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-500",
  },
  {
    stat: "₹1.5L Cr",
    desc: "estimated annual cost of cybercrime to Indian businesses and individuals",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
  },
  {
    stat: "95%",
    desc: "of Indians are unaware of basic digital security practices",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
  },
];

const services = [
  {
    title: "Personal Identity Protection",
    desc: "Monitor your Aadhaar, PAN, and financial accounts for unauthorized activity with real-time alerts.",
    icon: Fingerprint,
    color: "from-blue-500 to-cyan-500",
    features: ["Aadhaar & PAN monitoring", "Bank account alerts", "Dark web scanning", "Instant breach notifications"],
    price: "From ₹299/Pay Once",
  },
  {
    title: "Home Network Security",
    desc: "Secure your home Wi-Fi, Jio/Airtel routers, smart devices, and family browsing.",
    icon: Wifi,
    color: "from-green-500 to-emerald-500",
    features: ["Router security setup", "Smart home protection", "Parental controls", "VPN for all devices"],
    price: "From ₹499/Pay Once",
  },
  {
    title: "UPI & Payment Protection",
    desc: "Protect your UPI transactions, bank accounts, and credit cards from fraud and scams.",
    icon: CreditCard,
    color: "from-yellow-500 to-orange-500",
    features: ["UPI fraud alerts", "Transaction monitoring", "SIM swap detection", "EMV chip security"],
    price: "From ₹199/Pay Once",
  },
  {
    title: "Mobile Security Suite",
    desc: "Protect your Android/iPhone from malware, phishing apps, and online threats.",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
    features: ["Malware protection", "App permission audit", "Safe browsing", "Anti-theft features"],
    price: "From ₹249/Pay Once",
  },
  {
    title: "Phishing & Fraud Protection",
    desc: "AI-powered protection against WhatsApp scams, fake calls, and phishing SMS.",
    icon: Mail,
    color: "from-purple-500 to-pink-500",
    features: ["WhatsApp scam detection", "SMS fraud filtering", "Fake call blocking", "Fraud awareness tips"],
    price: "From ₹249/Pay Once",
  },
  {
    title: "Family Security Bundle",
    desc: "Comprehensive protection for your entire family including parental controls and kids' digital safety.",
    icon: Heart,
    color: "from-red-500 to-rose-500",
    features: ["Multi-device coverage (up to 5)", "Screen time management", "Location sharing", "Emergency SOS"],
    price: "From ₹1199/Pay Once",
  },
  {
    title: "Data Recovery Service",
    desc: "Professional recovery of lost, deleted, or corrupted files from compromised, formatted, or damaged devices.",
    icon: Database,
    color: "from-teal-500 to-cyan-500",
    features: ["Recover from corrupted devices", "Deleted file restoration", "Formatted drive recovery", "Ransomware file rescue"],
    price: "From ₹499/Pay Once",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Working Professional, Mumbai",
    quote: "Cyberlok helped me secure my phone after I almost fell for a WhatsApp scam. Their fraud alerts saved me ₹25,000.",
    rating: 5,
    icon: Heart,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Rajesh Kumar",
    role: "Small Business Owner, Bangalore",
    quote: "I thought cybersecurity was only for big companies. Cyberlok showed me how vulnerable my data was and helped me stay safe online.",
    rating: 5,
    icon: Shield,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Anita Desai",
    role: "Parent, Delhi",
    quote: "The family bundle gives me peace of mind. My kids can explore the internet safely, and I get alerts for any suspicious activity.",
    rating: 5,
    icon: Users2,
    color: "from-green-500 to-emerald-500",
  },
];

const faqs = [
  {
    q: "Do I need cybersecurity if I'm just a regular person?",
    a: "Absolutely. Cybercriminals target Indians through UPI fraud, WhatsApp scams, fake job offers, and phishing. With our increasing digital payments and online presence, everyone is a potential target.",
  },
  {
    q: "How is Cyberlok different from free antivirus?",
    a: "Free antivirus only protects against known malware. Cyberlok provides comprehensive identity protection including Aadhaar monitoring, UPI fraud detection, dark web scanning, and 24/7 support in Hindi and English.",
  },
  {
    q: "Can I protect my whole family with one subscription?",
    a: "Yes! Our Family Security Bundle covers up to 5 devices per family member with shared parental controls. It supports both Android and iOS devices and includes regional fraud protection.",
  },
  {
    q: "What if my bank account is compromised?",
    a: "If we detect any suspicious activity, we immediately alert you and guide you through RBI-recommended recovery steps. Our team helps with bank escalation, complaint filing, and fraud resolution.",
  },
  {
    q: "Can Cyberlok recover my files if they are deleted or encrypted by ransomware?",
    a: "Yes! Our Data Recovery Service uses advanced forensic techniques to recover deleted files, restore data from corrupted drives, and rescue files from ransomware-attacked devices. Success rates vary based on the severity of damage, but we offer a free initial assessment.",
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

const individualStats = [
  { value: "1 in 4", suffix: "", label: "Indians Affected", icon: AlertTriangle, color: "from-red-500 to-orange-500" },
  { value: "₹50K+", suffix: "", label: "Avg. Loss Per Incident", icon: CreditCard, color: "from-yellow-500 to-orange-500" },
  { value: "95%", suffix: "", label: "Unaware of Risks", icon: Eye, color: "from-blue-500 to-cyan-500" },
  { value: "24/7", suffix: "", label: "Protection Active", icon: ShieldCheck, color: "from-green-500 to-emerald-500" },
];

export default function IndividualsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Individuals" }]} className="mb-6" />

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
                  <Heart className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Personal Security Solutions</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Protect What Matters
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                    You, Family & Your Digital Life
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-lg text-white/70 leading-relaxed"
                >
                  Cyberlok brings enterprise-grade security to Indians. From Aadhaar protection to UPI fraud detection,
                  we help you stay safe in India&apos;s digital ecosystem—without the complexity.
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
                      Start Your Protection
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    View Protection Plans
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
                  {individualStats.map((stat, i) => (
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
                          <p className="text-3xl font-bold text-white">{stat.value}</p>
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
                  <p className="text-xs text-blue-400">Plans starting at</p>
                  <p className="text-lg font-bold text-white">₹249/month</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-14">
            <AnimatedSection className="mb-8 sm:mb-10">
              <p className="text-xs font-semibold tracking-widest text-blue-400">WHY IT MATTERS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Cyber threats targeting Indians
              </h2>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-3">
              {whyMatters.map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6 transition-all duration-300 hover:border-blue-400/30"
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
                    <p className="mt-4 text-2xl sm:text-3xl font-bold text-white">{item.stat}</p>
                    <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                  </div>
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
            <AnimatedSection className="mb-8 sm:mb-12">
              <p className="text-xs font-semibold tracking-widest text-blue-400">PROTECTION PACKAGES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Security solutions for every need
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Choose the protection level that fits your lifestyle. All plans include 24/7 monitoring, Hindi support, and satisfaction guarantee.
              </p>
            </AnimatedSection>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                      >
                        <service.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <span className="text-sm font-semibold text-blue-400">{service.price}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">{service.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed flex-grow">{service.desc}</p>

                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, j) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 + i * 0.08 }}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <Link
                      href="/contact#send-message"
                      className="group/more mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Get Started
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
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
            <AnimatedSection className="mb-8 sm:mb-12">
              <p className="text-xs font-semibold tracking-widest text-blue-400">REAL STORIES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Indians trust Cyberlok to protect their digital lives
              </h2>
            </AnimatedSection>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6 transition-all duration-300 hover:border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex gap-1"
                    >
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
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

                    <div className="mt-auto flex items-center gap-3 pt-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} shadow-lg`}
                      >
                        <testimonial.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                        <p className="text-xs text-white/50">{testimonial.role}</p>
                      </div>
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
                  <Shield className="h-10 w-10 text-white" />
                </motion.div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
                  Ready to Protect Your Family?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Join 10,000+ Indian families who trust Cyberlok for their cybersecurity. 
                  Let&apos;s build a security strategy that protects your loved ones.
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
