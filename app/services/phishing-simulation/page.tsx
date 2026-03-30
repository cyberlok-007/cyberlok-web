"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  MessageSquare,
  Users,
  Target,
  TrendingUp,
  Eye,
  Send,
  BarChart3,
  Zap,
} from "lucide-react";

const phases = [
  {
    title: "Reconnaissance & Targeting",
    desc: "Gathering information on employees and organizational structure.",
    icon: Eye,
    activities: [
      "Employee directory analysis",
      "Social media OSINT",
      "Email format discovery",
      "Department mapping",
    ],
  },
  {
    title: "Phishing Campaign Design",
    desc: "Crafting realistic phishing scenarios tailored to your organization.",
    icon: Target,
    activities: [
      "Brand impersonation templates",
      "Credential harvesting pages",
      "Malicious attachment creation",
      "SMS/vishing scenarios",
    ],
  },
  {
    title: "Campaign Launch",
    desc: "Executing controlled phishing campaigns across target groups.",
    icon: Send,
    activities: [
      "Scheduled email delivery",
      "Multi-channel delivery (email, SMS, voice)",
      "Real-time monitoring",
      "Engagement tracking",
    ],
  },
  {
    title: "Real-time Tracking",
    desc: "Monitoring employee responses and interactions with phishing content.",
    icon: BarChart3,
    activities: [
      "Click rate monitoring",
      "Credential submission tracking",
      "Attachment opening rates",
      "Time-to-click analysis",
    ],
  },
  {
    title: "Immediate Education",
    desc: "Providing instant feedback to employees who fall for simulations.",
    icon: MessageSquare,
    activities: [
      "Inline warning banners",
      "Micro-learning modules",
      "Security tips display",
      "Report button testing",
    ],
  },
  {
    title: "Analytics & Reporting",
    desc: "Comprehensive analysis of phishing susceptibility across the organization.",
    icon: TrendingUp,
    activities: [
      "Department-level risk scores",
      "Trend analysis over time",
      "Phishing-prone employee identification",
      "Training ROI measurement",
    ],
  },
  {
    title: "Awareness Training",
    desc: "Targeted training programs based on campaign findings.",
    icon: Users,
    activities: [
      "Role-based training modules",
      "Gamification elements",
      "Phishing awareness workshops",
      "Executive briefings",
    ],
  },
  {
    title: "Continuous Improvement",
    desc: "Ongoing campaigns to build and maintain security awareness culture.",
    icon: Zap,
    activities: [
      "Monthly campaign rotation",
      "Difficulty escalation",
      "New attack vector testing",
      "Culture maturity assessment",
    ],
  },
];

const attackVectors = [
  { name: "Email Phishing", desc: "Credential harvesting, malicious links, and attachments" },
  { name: "SMS Phishing (Smishing)", desc: "Text message-based attacks with malicious links" },
  { name: "Voice Phishing (Vishing)", desc: "Phone-based social engineering attacks" },
  { name: "Spear Phishing", desc: "Highly targeted attacks on specific individuals" },
  { name: "Clone Phishing", desc: "Copying legitimate emails with malicious modifications" },
  { name: "HTTPS Phishing", desc: "Using legitimate SSL certificates to appear trustworthy" },
];

const templates = [
  { name: "Password Expiry", desc: "Fake password reset notifications" },
  { name: "IT Support", desc: "IT department impersonation" },
  { name: "HR/Finance", desc: "Payroll and benefits related" },
  { name: "Shipping Updates", desc: "Package delivery notifications" },
  { name: "Social Media", desc: "Account notifications and alerts" },
  { name: "Executive Impersonation", desc: "CEO/CFO urgent requests (BEC)" },
];

const deliverables = [
  "Campaign execution report",
  "Click rate and conversion analytics",
  "Department risk heatmap",
  "Phishing-prone employee list",
  "Training recommendation matrix",
  "Trend comparison with benchmarks",
  "Executive summary dashboard",
  "Remediation roadmap",
];

const stats = [
  { value: "500+", label: "Campaigns Executed" },
  { value: "50K+", label: "Emails Simulated" },
  { value: "45%", label: "Avg Initial Click Rate" },
  { value: "<5%", label: "Post-Training Target" },
];

const faqs = [
  {
    q: "How realistic are your phishing simulations?",
    a: "We create highly realistic campaigns that mirror current real-world attack techniques while remaining safe and educational. We can use your actual branding, internal terminology, and legitimate-looking domains to maximize authenticity.",
  },
  {
    q: "Will employees know they&apos;re being tested?",
    a: "We offer both announced (employees informed) and unannounced campaigns. For the most accurate assessment of your security culture, we recommend starting with announced campaigns and transitioning to unannounced over time.",
  },
  {
    q: "What happens if an employee clicks a phishing link?",
    a: "Employees who click are immediately redirected to educational content explaining what happened, why the email was suspicious, and how to identify similar attacks in the future. No punitive measures are taken.",
  },
  {
    q: "How do you measure improvement over time?",
    a: "We track key metrics like click rates, reporting rates, and response times. You&apos;ll see trending data comparing performance across campaigns, departments, and individual employees, with clear benchmarks.",
  },
];

export default function PhishingSimulationPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Phishing Simulation" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              Pinpoint - Phishing Simulation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Test Your{" "}
              <span className="text-cyan-300">Human Firewall</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s Phishing Simulation service tests your employees&apos; ability to recognize social engineering attacks.
              We run realistic campaigns, measure susceptibility, and provide training to build a security-aware culture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Start Campaign <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
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
                Our Phishing Simulation Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive approach combining realistic attack simulation with immediate education and measurable outcomes.
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
                        <phase.icon className="h-6 w-6 text-cyan-300" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition hover:border-cyan-400/20">
                      <div className="flex items-start gap-4">
                        <span className="flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                          <phase.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                        </span>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
                              {i + 1}
                            </span>
                            <span className="md:hidden text-xs font-semibold text-cyan-400">0{i + 1}</span>
                            <h3 className="text-base sm:text-lg font-semibold">{phase.title}</h3>
                          </div>
                          
                          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                            {phase.desc}
                          </p>
                          
                          <ul className="mt-3 space-y-1.5">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mt-0.5 shrink-0" />
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

      {/* ATTACK VECTORS & TEMPLATES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Attack Vectors We Simulate
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Multi-channel phishing simulation covering all common attack methods.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {attackVectors.map((vector, i) => (
                    <motion.div
                      key={vector.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{vector.name}</p>
                        <p className="text-xs text-white/60">{vector.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Campaign Templates
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Realistic templates based on current attack trends and your industry.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {templates.map((template, i) => (
                    <motion.div
                      key={template.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Target className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{template.name}</p>
                        <p className="text-xs text-white/60">{template.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                Comprehensive reporting with actionable insights for improving security awareness.
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
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 shrink-0" />
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
                    Test your employees against phishing attacks
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Start your phishing simulation campaign today and measure your organization&apos;s security awareness.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Get a Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
