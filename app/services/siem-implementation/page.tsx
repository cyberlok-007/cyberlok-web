import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  Server,
  LayoutDashboard,
  Bell,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "SIEM Implementation",
    desc: "End-to-end SIEM deployment and configuration including log source integration, correlation rules and dashboard setup.",
    icon: Server,
  },
  {
    title: "Log Source Integration",
    desc: "Connect all your security tools, applications and infrastructure to your SIEM for centralized visibility.",
    icon: LayoutDashboard,
  },
  {
    title: "Correlation Rule Development",
    desc: "Custom detection rules tailored to your environment and threat landscape for accurate alerting.",
    icon: Bell,
  },
  {
    title: "SOAR Integration",
    desc: "Automation and orchestration capabilities integrated with your SIEM for faster incident response.",
    icon: ShieldCheck,
  },
];

const features = [
  {
    title: "Log Collection & Parsing",
    desc: "Normalize logs from diverse sources including firewalls, endpoints, applications and cloud services.",
    icon: FileText,
  },
  {
    title: "Threat Intelligence Integration",
    desc: "Feed global threat intelligence into your SIEM for context-aware detection and prioritization.",
    icon: AlertTriangle,
  },
  {
    title: "Custom Dashboards",
    desc: "Executive and operational dashboards providing real-time security visibility at a glance.",
    icon: LayoutDashboard,
  },
  {
    title: "Retention & Compliance",
    desc: "Configure log retention policies to meet regulatory requirements for PCI DSS, HIPAA and more.",
    icon: Settings,
  },
];

const platforms = [
  { name: "Splunk", desc: "Enterprise-grade SIEM with advanced analytics" },
  { name: "Microsoft Sentinel", desc: "Cloud-native SIEM with Azure integration" },
  { name: "Elastic Security", desc: "Open-source SIEM with flexible deployment" },
  { name: "IBM QRadar", desc: "Enterprise SIEM with AI-powered insights" },
  { name: "LogRhythm", desc: "NextGen SIEM with automated response" },
  { name: "Securonix", desc: "Cloud-native SIEM with UEBA capabilities" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Assess your environment, identify log sources and define security monitoring requirements.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Architect the SIEM solution with appropriate log sources, correlation rules and dashboards.",
  },
  {
    step: "03",
    title: "Deploy",
    desc: "Implement the SIEM, integrate log sources and configure detection rules.",
  },
  {
    step: "04",
    title: "Tune",
    desc: "Fine-tune rules to reduce false positives and optimize detection capabilities.",
  },
  {
    step: "05",
    title: "Operate",
    desc: "Ongoing management, monitoring and optimization with optional SOC integration.",
  },
];

const deliverables = [
  "SIEM architecture documentation",
  "Log source integration inventory",
  "Custom correlation rule library",
  "Executive and operational dashboards",
  "User training and documentation",
  "Operational runbooks",
  "Knowledge transfer sessions",
];

const faqs = [
  {
    q: "Which SIEM platform do you recommend?",
    a: "The best SIEM depends on your environment, budget and requirements. We work with all major platforms including Splunk, Microsoft Sentinel, Elastic and QRadar. We&apos;ll recommend the right fit after understanding your needs.",
  },
  {
    q: "How long does SIEM implementation take?",
    a: "Typical SIEM implementations take 6-12 weeks depending on scope. Basic deployments with limited log sources can be completed in 4-6 weeks, while enterprise implementations may take 3-6 months.",
  },
  {
    q: "Can you manage our SIEM after implementation?",
    a: "Yes, we offer ongoing SIEM management as part of our SOC-as-a-Service offering. This includes monitoring, rule tuning, alert triage and continuous optimization.",
  },
  {
    q: "How many log sources should we integrate?",
    a: "We recommend starting with critical sources: firewalls, endpoints, Active Directory and key applications. We can expand coverage over time based on your security requirements and budget.",
  },
];

export default function SIEMImplementationPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SIEM Implementation" }]} />
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <Server className="h-3 w-3 sm:h-4 sm:w-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" /> SIEM Implementation
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Centralized Security Visibility{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">With Intelligent Detection</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s SIEM implementation services help you deploy, configure and optimize security information
              and event management solutions. Turn fragmented security data into actionable intelligence.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Plan SIEM Deployment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/soc-as-a-service"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View SOC Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Implementation Services
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                From initial deployment to ongoing optimization, we support your SIEM journey.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PLATFORMS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Platforms We Support
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                We have expertise across all major SIEM platforms and can recommend the right fit for you.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-sm sm:text-base">{platform.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60">{platform.desc}</p>
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
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Key Capabilities
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  Comprehensive SIEM implementation covering all aspects of security monitoring.
                </p>
                <div className="mt-6 sm:mt-8 space-y-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                        <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" />
                      </span>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{feature.title}</p>
                        <p className="mt-0.5 text-xs sm:text-sm text-white/60">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Implementation Process
                  </h2>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/65">
                    A structured approach to SIEM deployment.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {process.map((p, i) => (
                    <div
                      key={p.step}
                      className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {i + 1}
                        </span>
                        <p className="font-semibold text-sm sm:text-base">{p.title}</p>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-white/60 ml-10 sm:ml-11">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                What You Receive
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Complete deliverables package for successful SIEM operations.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((d) => (
                <div
                  key={d}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2" />
                  <p className="text-xs sm:text-sm text-white/70">{d}</p>
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
                    Need centralized security visibility?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Let Cyberlok help you design and implement the right SIEM solution for your environment.
                    Contact us for a requirements assessment.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Request Assessment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
