import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Target,
  ShieldCheck,
  PlayCircle,
  FileText,
  BarChart3,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Award,
} from "lucide-react";

const programs = [
  {
    title: "Security Awareness Training",
    desc: "Comprehensive training modules covering phishing, social engineering, password hygiene, data protection and secure remote work practices.",
    icon: GraduationCap,
    duration: "Annual program with quarterly refreshers",
    modules: [
      "Phishing & social engineering",
      "Password security & MFA",
      "Data protection & privacy",
      "Secure remote work",
      "Physical security",
      "Incident reporting",
    ],
  },
  {
    title: "Phishing Simulation Campaigns",
    desc: "Realistic phishing simulations to test employee susceptibility and measure improvement over time with actionable metrics.",
    icon: Target,
    duration: "Monthly or quarterly campaigns",
    modules: [
      "Custom phishing templates",
      "Industry-specific scenarios",
      "Spear phishing simulations",
      "SMS & voice phishing tests",
      "Click-rate & response metrics",
      "Follow-up training triggers",
    ],
  },
  {
    title: "Executive Security Workshops",
    desc: "Tailored workshops for leadership covering cyber risk management, breach response and board-level communication.",
    icon: Users,
    duration: "Quarterly sessions",
    modules: [
      "Boardroom cybersecurity",
      "Cyber risk quantification",
      "Breach response planning",
      "Vendor risk management",
      "Security governance",
      "Regulatory compliance",
    ],
  },
  {
    title: "Secure Coding Training",
    desc: "Developer-focused training on secure coding practices, common vulnerabilities and secure SDLC implementation.",
    icon: FileText,
    duration: "Per development team",
    modules: [
      "OWASP Top 10",
      "Secure authentication",
      "Input validation",
      "Cryptography basics",
      "API security",
      "DevSecOps practices",
    ],
  },
];

const features = [
  {
    title: "Role-Based Content",
    desc: "Training content customized for different roles: IT, HR, Finance, C-Suite, and general employees.",
    icon: Users,
  },
  {
    title: "Interactive Modules",
    desc: "Engaging video-based training with quizzes, scenarios and gamification elements.",
    icon: PlayCircle,
  },
  {
    title: "Comprehensive Metrics",
    desc: "Track completion rates, quiz scores, phishing click rates and behavioral changes over time.",
    icon: BarChart3,
  },
  {
    title: "Compliance Ready",
    desc: "Generate reports for ISO 27001, PCI DSS, HIPAA, SEBI and other regulatory requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Automated Campaigns",
    desc: "Schedule training and phishing campaigns in advance with automatic follow-ups and reminders.",
    icon: Mail,
  },
  {
    title: "Microlearning",
    desc: "Short 5-10 minute modules that fit into busy schedules with mobile-friendly access.",
    icon: Award,
  },
];

const stats = [
  { value: "10,000+", label: "Employees Trained" },
  { value: "45%", label: "Phishing Click Reduction" },
  { value: "95%", label: "Training Completion Rate" },
  { value: "50+", label: "Organizations Protected" },
];

const process = [
  {
    step: "1",
    title: "Assess",
    desc: "Baseline assessment of current security awareness levels through phishing simulations and knowledge tests.",
  },
  {
    step: "2",
    title: "Plan",
    desc: "Design a tailored program with role-specific content, scheduling and success metrics.",
  },
  {
    step: "3",
    title: "Execute",
    desc: "Launch training modules, phishing campaigns and interactive workshops with automated reminders.",
  },
  {
    step: "4",
    title: "Measure",
    desc: "Track progress, identify gaps and generate reports showing improvement over time.",
  },
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most organizations see measurable improvement within 3-6 months. Phishing click rates typically drop by 30-50% after the first year of consistent training and simulations.",
  },
  {
    q: "What is the recommended training frequency?",
    a: "We recommend annual comprehensive training with quarterly refreshers. Phishing simulations should run monthly to maintain awareness and measure behavioral changes.",
  },
  {
    q: "Can we customize the training content?",
    a: "Yes, we can incorporate your brand guidelines, industry-specific scenarios, real examples from your organization and compliance requirements into the training content.",
  },
  {
    q: "Do you support multiple languages?",
    a: "Yes, we offer training content in English, Hindi and regional Indian languages. Custom translations are available on request.",
  },
];

export default function TrainingAwarenessPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Training & Awareness" }]} />
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" /> Training & Awareness
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Build Your{" "}
              <span className="text-cyan-300">Human Firewall</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              The human element is the weakest link in security. Cyberlok&apos;s training and awareness programs
              transform employees into your first line of defense against cyber threats.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Start Training Program <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TRAINING PROGRAMS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Training Programs
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive training programs designed for different audiences and security objectives.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                      <program.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold">{program.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{program.desc}</p>
                      <p className="mt-2 text-xs text-cyan-400">{program.duration}</p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Modules Covered</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {program.modules.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-white/10 bg-black/30 px-2 sm:px-3 py-0.5 text-xs text-white/70"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Program Features
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Everything you need to build and maintain a security-aware workforce.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                  </span>
                  <p className="mt-4 sm:mt-5 font-semibold text-sm sm:text-base">{feature.title}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                How It Works
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A structured approach to building security awareness across your organization.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-bold text-cyan-300">
                    {p.step}
                  </span>
                  <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">{p.title}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Why Security Awareness Matters
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Your employees are targeted daily through phishing emails, social engineering calls and
                  social media manipulation. Without proper training, they can inadvertently become the
                  entry point for cyber attacks.
                </p>

                <div className="mt-6 sm:mt-8 space-y-4">
                  {[
                    { icon: AlertTriangle, stat: "82%", text: "of breaches involve a human element ( Verizon DBIR)" },
                    { icon: Target, stat: "96%", text: "of attacks start with a phishing email" },
                    { icon: CheckCircle2, stat: "70%", text: "reduction in successful phishing attacks with training" },
                  ].map((item) => (
                    <div key={item.stat} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                      </span>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">
                          <span className="text-cyan-300">{item.stat}</span> {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                  <p className="font-semibold text-sm sm:text-base">Key Program Outcomes</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Reduced phishing susceptibility rates",
                    "Improved incident reporting culture",
                    "Better password hygiene practices",
                    "Enhanced data protection awareness",
                    "Compliance with regulatory training requirements",
                    "Measurable improvement in security behaviors",
                    "Stronger security culture across teams",
                    "Reduced risk of human-initiated breaches",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/70">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <p className="font-semibold text-sm sm:text-base">{faq.q}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
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
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Ready to strengthen your human firewall?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Start with a free phishing assessment to measure your organization&apos;s current awareness levels.
                    We&apos;ll provide actionable recommendations to improve.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Request Free Assessment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  <p className="text-xs sm:text-sm text-white/70">Customized for your industry</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  <p className="text-xs sm:text-sm text-white/70">Multi-language support</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                  <p className="text-xs sm:text-sm text-white/70">Detailed compliance reports</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
