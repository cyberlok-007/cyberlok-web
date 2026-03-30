import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";

const capabilities = [
  {
    title: "SBOM Generation",
    desc: "Generate comprehensive Software Bills of Materials for your applications, containers and products.",
    icon: FileText,
  },
  {
    title: "Vulnerability Correlation",
    desc: "Match SBOM components against vulnerability databases to identify known vulnerabilities.",
    icon: AlertTriangle,
  },
  {
    title: "License Compliance",
    desc: "Track and manage open source licenses to ensure compliance with legal requirements.",
    icon: LockKeyhole,
  },
  {
    title: "Continuous Monitoring",
    desc: "Ongoing surveillance of your software supply chain for new vulnerabilities.",
    icon: ShieldCheck,
  },
];

const useCases = [
  {
    title: "Regulatory Compliance",
    desc: "Meet requirements for PCI DSS, FDA, EU Cyber Resilience Act and government contracts that mandate SBOM disclosure.",
  },
  {
    title: "Vendor Risk Management",
    desc: "Request and validate SBOMs from third-party vendors to assess supply chain security risks.",
  },
  {
    title: "Incident Response",
    desc: "Quickly identify affected components when new vulnerabilities are disclosed, reducing response time.",
  },
  {
    title: "DevSecOps Integration",
    desc: "Embed SBOM generation into your CI/CD pipelines for continuous visibility into software components.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Identify applications, containers and third-party components that need SBOM generation.",
  },
  {
    step: "02",
    title: "Generation",
    desc: "Generate SBOMs using industry-standard formats (SPDX, CycloneDX) from source code and binaries.",
  },
  {
    step: "03",
    title: "Analysis",
    desc: "Correlate SBOM data with vulnerability databases and license information.",
  },
  {
    step: "04",
    title: "Monitoring",
    desc: "Set up continuous monitoring for new vulnerabilities affecting your software components.",
  },
];

const formats = [
  { name: "SPDX", desc: "ISO standard format for SBOM exchange" },
  { name: "CycloneDX", desc: "Lightweight XML/JSON format for component analysis" },
  { name: "SWID", desc: "ISO/IEC 19770-2 tag format for software identification" },
];

const deliverables = [
  "SBOM documentation in standard formats",
  "Vulnerability assessment report",
  "License compliance analysis",
  "Risk prioritization matrix",
  "Remediation roadmap",
  "Continuous monitoring setup",
  "Executive summary report",
];

const faqs = [
  {
    q: "What is an SBOM and why do I need one?",
    a: "An SBOM (Software Bill of Materials) is a formal record of software components and dependencies. You need it for regulatory compliance (PCI DSS, FDA, EU CRA), vendor risk management, and faster incident response when vulnerabilities are disclosed.",
  },
  {
    q: "What formats do you support?",
    a: "We generate SBOMs in industry-standard formats including SPDX, CycloneDX and SWID. We can also convert between formats and integrate with your existing tools.",
  },
  {
    q: "How often should SBOMs be updated?",
    a: "SBOMs should be regenerated whenever there&apos;s a significant change to your software. For continuous monitoring, we recommend weekly scans to detect new vulnerabilities in existing components.",
  },
  {
    q: "Can you help with third-party vendor SBOMs?",
    a: "Yes, we can request, validate and analyze SBOMs from your vendors. We can also help establish SBOM requirements in vendor contracts and assess the quality of vendor-provided SBOMs.",
  },
];

export default function SBOMManagementPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SBOM Management" }]} />

            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" /> SBOM Management
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Visibility into Your{" "}
              <span className="text-cyan-300">Software Supply Chain</span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
              Cyberlok&apos;s SBOM management services provide complete visibility into your software components,
              dependencies and associated vulnerabilities. Meet regulatory requirements and protect your
              supply chain.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Get SBOM Coverage <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/devsecops-appsec"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View DevSecOps Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                SBOM Capabilities
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive software supply chain security for modern development.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition"
                >
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
                    <cap.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* USE CASES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Why Organizations Need SBOM
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Supply chain security is critical in today&apos;s interconnected software ecosystem.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold">{useCase.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FORMATS & PROCESS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Standard Formats
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  We support industry-standard SBOM formats for compatibility and compliance.
                </p>
                <div className="mt-6 sm:mt-8 space-y-4">
                  {formats.map((format) => (
                    <div
                      key={format.name}
                      className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="font-semibold text-sm sm:text-base">{format.name}</p>
                      <p className="mt-1 text-xs sm:text-sm text-white/60">{format.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Our Process
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65 leading-relaxed">
                  A systematic approach to SBOM generation and management.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  {process.map((p, i) => (
                    <div
                      key={p.step}
                      className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-xs sm:text-sm font-bold text-cyan-300">
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
                Complete deliverables for supply chain visibility and compliance.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((d) => (
                <div
                  key={d}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mb-2" />
                  <p className="text-xs sm:text-sm text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* REGULATORY */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="rounded-2xl sm:rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                <p className="font-semibold text-sm sm:text-base">Regulatory Compliance</p>
              </div>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
                SBOM requirements are becoming mandatory across regulations and standards:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "PCI DSS 4.0 - Software supply chain security",
                  "FDA - Medical device software requirements",
                  "EU Cyber Resilience Act - Consumer product security",
                  "NIST - Software security guidelines",
                  "Executive Order on Cybersecurity - Federal software standards",
                  "State/Government contracts - SBOM disclosure requirements",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-white/70">{item}</p>
                  </div>
                ))}
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
                    Ready to gain supply chain visibility?
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get started with Cyberlok&apos;s SBOM management services. We&apos;ll help you generate,
                    analyze and monitor your software components.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Request Consultation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
