"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Shield,
  FileCheck2,
  CheckCircle2,
  Clock,
  Users,
  Target,
  Eye,
  Cloud,
  TrendingUp,
  Award,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const challenges = [
  {
    title: "Regulatory Compliance",
    desc: "Meeting CERT-In, DPDP Act, RBI, SEBI, and IRDAI requirements while maintaining operational agility.",
    icon: FileCheck2,
  },
  {
    title: "Expanding Attack Surface",
    desc: "Managing security across hybrid cloud environments, remote workforce, and third-party integrations.",
    icon: Cloud,
  },
  {
    title: "Talent Shortage",
    desc: "Finding and retaining skilled security professionals in India&apos;s competitive cybersecurity job market.",
    icon: Users,
  },
  {
    title: "Risk-Based Prioritization",
    desc: "Focusing resources on threats that matter most to your business continuity and reputation.",
    icon: Target,
  },
];

const services = [
  {
    category: "Offensive Security",
    items: [
      { name: "Web Application Penetration Testing", desc: "OWASP Top 10 + business logic flaws" },
      { name: "Network Penetration Testing", desc: "Internal + external infrastructure" },
      { name: "Red Team Operations", desc: "Real-world adversary simulation" },
      { name: "API Security Testing", desc: "REST, GraphQL, and microservices" },
    ],
  },
  {
    category: "Defensive Security",
    items: [
      { name: "SOC-as-a-Service", desc: "24/7 monitoring and alerting" },
      { name: "Managed Detection & Response", desc: "Endpoint + network coverage" },
      { name: "SIEM Implementation", desc: "Centralized logging and correlation" },
      { name: "Incident Response Planning", desc: "Tabletop exercises + runbooks" },
    ],
  },
  {
    category: "Compliance & Risk",
    items: [
      { name: "DPDP Act Compliance", desc: "Data protection and privacy compliance" },
      { name: "CERT-In Compliance", desc: "6-hour incident reporting support" },
      { name: "RBI Cybersecurity Guidelines", desc: "Banking and financial sector compliance" },
      { name: "ISO 27001 Implementation", desc: "End-to-end certification support" },
    ],
  },
  {
    category: "Cloud Security",
    items: [
      { name: "Cloud Security Assessment", desc: "AWS, Azure, GCP environments" },
      { name: "Cloud-Native Protection", desc: "Container and serverless security" },
      { name: "DevSecOps Integration", desc: "Secure CI/CD pipeline implementation" },
      { name: "Cloud Posture Management", desc: "Continuous configuration monitoring" },
    ],
  },
];

const stats = [
  { value: "200+", label: "Indian Corporate Clients", icon: Building2 },
  { value: "95%", label: "Compliance Success Rate", icon: Award },
  { value: "24/7", label: "SOC Operations", icon: Eye },
  { value: "6hrs", label: "CERT-In Response Support", icon: Clock },
];

const approach = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    desc: "Deep-dive assessment of your current security posture, infrastructure, and compliance requirements.",
    activities: ["Infrastructure audit", "Gap analysis", "Threat modeling", "Risk prioritization"],
  },
  {
    phase: "Design",
    duration: "Week 2-3",
    desc: "Custom security architecture designed to address your specific risks and Indian compliance needs.",
    activities: ["Architecture design", "Tool selection", "Integration planning", "Timeline creation"],
  },
  {
    phase: "Implementation",
    duration: "Week 4-8",
    desc: "Phased deployment of security controls with minimal disruption to operations.",
    activities: ["Control deployment", "Team training", "Process integration", "Documentation"],
  },
  {
    phase: "Operations",
    duration: "Ongoing",
    desc: "Continuous monitoring, optimization, and improvement of your security posture.",
    activities: ["24/7 monitoring", "Incident response", "Regular reviews", "Compliance reporting"],
  },
];

const testimonials = [
  {
    name: "Jennifer Fernandes",
    role: "CISO, Meridian Finance",
    quote: "Cyberlok transformed our security program from reactive to proactive. Their expertise with RBI cybersecurity guidelines and DPDP Act was invaluable.",
    result: "SOC 2 equivalent certified in 6 months",
  },
  {
    name: "Rajesh Iyer",
    role: "CTO, GlobalTrade India",
    quote: "The depth of their technical expertise combined with understanding of Indian regulatory requirements is rare. They don&apos;t just find vulnerabilities—they help us fix them strategically.",
    result: "70% reduction in critical findings",
  },
  {
    name: "Priya Krishnan",
    role: "VP Engineering, DataStream India",
    quote: "Migrating to the cloud while maintaining security seemed impossible. Cyberlok made it seamless with their cloud security expertise.",
    result: "Zero incidents during cloud migration",
  },
];

const faqs = [
  {
    q: "How does Cyberlok handle Indian corporate-scale operations?",
    a: "We&apos;ve built our corporate practice for Indian organizations with 500+ employees. Our SOC handles Indian volumes, we provide dedicated teams for larger accounts, and our SLAs reflect corporate requirements.",
  },
  {
    q: "Can you work with our existing security tools?",
    a: "Yes. We audit your current toolset and integrate with what you have. Many Indian corporates have invested in security infrastructure—we enhance rather than replace. We also recommend optimizations.",
  },
  {
    q: "How do you ensure compliance with Indian regulations?",
    a: "Our compliance team maps controls across CERT-In, DPDP Act, RBI, SEBI, and IRDAI requirements to reduce duplicate effort. One control often satisfies multiple requirements, and we track this mapping throughout.",
  },
  {
    q: "What makes Cyberlok different from other security providers in India?",
    a: "Three things: technical depth (our team includes former penetration testers and incident responders), Indian regulatory expertise (we speak CERT-In, DPDP, RBI), and accountability (we measure success by your risk reduction).",
  },
];

export default function CorporatesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-saffron/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,153,0,0.08),transparent_50%)]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Corporates" }]} className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Building2 className="h-4 w-4 text-cyan-300" />
              Corporate Security Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-white/90">Security at Corporate Scale,</span>
              <br />
              <span className="text-cyan-300">Built for Indian Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Indian corporates face complex security challenges with unique regulatory requirements. Cyberlok delivers
              enterprise-grade protection with expertise in CERT-In, DPDP Act, RBI, and SEBI compliance.
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
                Request Corporate Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Solutions
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

      {/* CHALLENGES */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">CORPORATE CHALLENGES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                We understand Indian corporate security pressures
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {challenges.map((challenge, i) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <challenge.icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <h3 className="text-base font-semibold">{challenge.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{challenge.desc}</p>
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">SOLUTION AREAS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Comprehensive corporate security services
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                From penetration testing to continuous monitoring, we cover every aspect of your corporate security needs with Indian regulatory expertise.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((category, i) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{category.category}</h3>
                  <div className="mt-4 space-y-3">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-xs text-white/50">{item.desc}</p>
                        </div>
                      </div>
                    ))}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">OUR APPROACH</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Structured implementation methodology
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {phase.duration}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{phase.phase}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{phase.desc}</p>
                    <ul className="mt-3 space-y-1.5">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-2 text-xs text-white/70">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {activity}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">CLIENT SUCCESS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Trusted by leading Indian organizations
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
                  <TrendingUp className="h-8 w-8 text-cyan-400" />
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
                <Shield className="h-12 w-12 text-cyan-300" />
                <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Elevate your corporate security posture
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/65">
                  Let&apos;s discuss how Cyberlok can address your specific security challenges and Indian compliance requirements.
                  Corporate engagements start with a comprehensive assessment.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
                >
                  Request Corporate Assessment <ArrowRight className="h-4 w-4" />
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
