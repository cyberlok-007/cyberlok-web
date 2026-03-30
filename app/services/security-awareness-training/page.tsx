import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Target,
  ShieldCheck,
  CheckCircle2,
  PlayCircle,
  BarChart3,
  AlertTriangle,
  Mail,
} from "lucide-react";

const programs = [
  {
    title: "Comprehensive Training Modules",
    desc: "Interactive video-based training covering all essential security topics with quizzes and assessments.",
    icon: GraduationCap,
  },
  {
    title: "Phishing Simulations",
    desc: "Realistic phishing campaigns to test and train employees on recognizing malicious emails.",
    icon: Target,
  },
  {
    title: "Role-Based Content",
    desc: "Customized training paths for different roles: IT, HR, Finance, C-Suite and general staff.",
    icon: Users,
  },
  {
    title: "Compliance Reporting",
    desc: "Generate reports for ISO 27001, PCI DSS, HIPAA and other regulatory requirements.",
    icon: ShieldCheck,
  },
];

const modules = [
  { name: "Phishing & Social Engineering", duration: "30 min" },
  { name: "Password Security & MFA", duration: "25 min" },
  { name: "Data Protection & Privacy", duration: "35 min" },
  { name: "Secure Remote Work", duration: "30 min" },
  { name: "Physical Security", duration: "20 min" },
  { name: "Incident Reporting", duration: "15 min" },
  { name: "Cloud Security Basics", duration: "25 min" },
  { name: "Mobile Device Security", duration: "20 min" },
];

const features = [
  {
    title: "Interactive Learning",
    desc: "Engaging video content with real-world scenarios and gamification elements.",
    icon: PlayCircle,
  },
  {
    title: "Phishing Simulations",
    desc: "Automated phishing campaigns with custom templates and click-rate tracking.",
    icon: Target,
  },
  {
    title: "Progress Tracking",
    desc: "Monitor completion rates, quiz scores and behavioral changes over time.",
    icon: BarChart3,
  },
  {
    title: "Automated Reminders",
    desc: "Automatic follow-ups for employees who haven&apos;t completed their training.",
    icon: Mail,
  },
];

const tiers = [
  {
    name: "Starter",
    desc: "For small teams starting security awareness",
    price: "Starting ₹25/user/year",
    features: [
      "Up to 100 users",
      "8 training modules",
      "Basic phishing simulations",
      "Email support",
      "Standard reports",
    ],
  },
  {
    name: "Professional",
    desc: "For growing businesses with compliance needs",
    price: "Starting ₹50/user/year",
    popular: true,
    features: [
      "Up to 500 users",
      "15+ training modules",
      "Advanced phishing campaigns",
      "Role-based training",
      "Compliance reports",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    desc: "For large organizations",
    price: "Custom pricing",
    features: [
      "Unlimited users",
      "Custom content creation",
      "Continuous phishing testing",
      "Dedicated account manager",
      "Executive dashboards",
      "On-site training sessions",
    ],
  },
];

const stats = [
  { value: "10,000+", label: "Employees Trained" },
  { value: "45%", label: "Phishing Click Reduction" },
  { value: "95%", label: "Training Completion" },
  { value: "50+", label: "Organizations" },
];

const faqs = [
  {
    q: "How is the training delivered?",
    a: "Training is delivered through a cloud-based platform accessible via browser or mobile app. Employees can complete modules at their own pace, with progress saved automatically.",
  },
  {
    q: "How often should training be conducted?",
    a: "We recommend annual comprehensive training with quarterly refreshers. Phishing simulations should run monthly to maintain awareness. Compliance frameworks may require more frequent training.",
  },
  {
    q: "Can we customize the training content?",
    a: "Yes, we can incorporate your branding, industry-specific scenarios, real examples from your organization and compliance requirements into the training content.",
  },
  {
    q: "What reporting do you provide?",
    a: "We provide executive summaries showing program metrics, detailed completion reports by department, phishing simulation results, compliance reports and trend analysis over time.",
  },
];

export default function SecurityAwarenessTrainingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Security Awareness Training" }]} />

            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" /> Security Awareness Training
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Transform Employees into{" "}
              <span className="text-cyan-300">Security Champions</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s security awareness training builds a strong human firewall through engaging content,
              realistic phishing simulations and measurable behavior change. Protect your organization from
              the inside out.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Start Training Program <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/training-awarness"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Full Training Suite
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

      {/* PROGRAMS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Training Program Components
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                A comprehensive approach to security awareness.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <program.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{program.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* MODULES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Training Modules
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive topics covering the most relevant security threats.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
              {modules.map((module) => (
                <div
                  key={module.name}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4"
                >
                  <div className="flex items-center justify-between">
                    <PlayCircle className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-white/50">{module.duration}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-white/70">{module.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES & DELIVERABLES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Platform Features
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  A modern learning platform designed for engagement and results.
                </p>
                <div className="mt-6 sm:mt-8 space-y-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                        <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                      </span>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{feature.title}</p>
                        <p className="mt-0.5 text-xs sm:text-sm text-white/60">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                  <p className="font-semibold text-sm sm:text-base">Why Training Matters</p>
                </div>
                <div className="space-y-4">
                  {[
                    { stat: "82%", text: "of breaches involve a human element" },
                    { stat: "96%", text: "of attacks start with a phishing email" },
                    { stat: "70%", text: "reduction in phishing success with training" },
                  ].map((item) => (
                    <div key={item.stat} className="rounded-lg bg-black/30 p-4">
                      <p className="font-semibold text-lg sm:text-xl">
                        <span className="text-amber-400">{item.stat}</span>
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-white/60">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Pricing Plans
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Flexible pricing based on the number of users.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl sm:rounded-3xl border p-4 sm:p-6 ${
                    tier.popular
                      ? "border-cyan-400/30 bg-cyan-500/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {tier.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                      Most Popular
                    </span>
                  )}
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">{tier.desc}</p>
                  <p className="mt-4 sm:mt-5 text-cyan-300 font-semibold text-sm sm:text-base">{tier.price}</p>

                  <ul className="mt-4 sm:mt-5 space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm font-semibold transition w-full ${
                      tier.popular
                        ? "bg-cyan-500 text-black hover:bg-cyan-400"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
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
                    Start building your human firewall
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get a free phishing assessment to measure your organization&apos;s current awareness levels.
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
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
