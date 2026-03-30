"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/shared/Container";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Bug,
  Building2,
  Star,
  CheckCircle2,
  Quote,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08 },
  }),
};

const caseStudiesData: Record<string, {
  client: string;
  industry: string;
  industryIcon: typeof Shield;
  title: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  testimonial: string;
  author: string;
  role: string;
  rating: number;
  relatedCases: string[];
}> = {
  "fintech-vapt": {
    client: "NexGen Payments",
    industry: "Financial Services",
    industryIcon: Building2,
    title: "Securing Digital Payments for 2M+ Users",
    shortDesc: "Comprehensive VAPT and compliance assessment for a leading fintech company.",
    challenge: "A rapidly growing fintech startup needed to secure their payment infrastructure and achieve PCI-DSS compliance before their Series B funding round. With millions of transactions daily, any security breach could result in significant financial loss and reputational damage.",
    solution: "Cyberlok conducted comprehensive penetration testing across web applications, APIs, and mobile apps. We performed thorough vulnerability assessments, implemented security controls aligned with PCI-DSS requirements, and established continuous security monitoring.",
    results: [
      "Identified 23 critical vulnerabilities before production launch",
      "Achieved PCI-DSS compliance in 6 weeks",
      "72% reduction in security vulnerabilities",
      "Zero breaches since deployment",
    ],
    services: ["Penetration Testing", "Vulnerability Assessment", "GRC Compliance", "Security Monitoring"],
    testimonial: "Cyberlok&apos;s team was exceptional. They found vulnerabilities our previous vendors missed and helped us achieve compliance ahead of schedule. Their expertise in financial sector security is unmatched.",
    author: "Rahul Sharma",
    role: "CTO, NexGen Payments",
    rating: 5,
    relatedCases: ["ecommerce-red-team", "hospital-network-security"],
  },
  "hospital-network-security": {
    client: "HealthFirst Hospitals",
    industry: "Healthcare",
    industryIcon: Shield,
    title: "Protecting Patient Data Across 50+ Locations",
    shortDesc: "Hospital network security overhaul with HIPAA compliance and 24/7 SOC implementation.",
    challenge: "A multi-chain hospital network with 50+ facilities needed to secure patient data and meet strict healthcare compliance requirements. Legacy systems and interconnected medical devices created complex security challenges.",
    solution: "Implemented SOC-as-a-Service with 24/7 monitoring, conducted comprehensive security assessment of all facilities, and established HIPAA-compliant security controls. We also trained staff on security awareness and implemented incident response procedures.",
    results: [
      "100% HIPAA compliance achieved",
      "45% faster incident detection and response",
      "Security score improved from 45% to 92%",
      "Annual SOC 2 audit passed successfully",
    ],
    services: ["SOC as a Service", "Security Assessment", "Compliance", "Security Training"],
    testimonial: "Patient data security is non-negotiable for us. Cyberlok delivered a comprehensive solution that gives our patients peace of mind and our board confidence in our security posture.",
    author: "Dr. Priya Patel",
    role: "CISO, HealthFirst Hospitals",
    rating: 5,
    relatedCases: ["fintech-vapt", "government-grc"],
  },
  "ecommerce-red-team": {
    client: "ShopEase Online",
    industry: "E-commerce",
    industryIcon: Building2,
    title: "Red Team Assessment Uncovers Critical API Flaws",
    shortDesc: "Advanced red team engagement revealing API security gaps before major sale event.",
    challenge: "Leading e-commerce platform needed to test their defenses before their biggest sale event of the year. With millions of users and high transaction volumes, they needed assurance their systems could handle the load securely.",
    solution: "Conducted full red team assessment including social engineering, physical security testing, and comprehensive API penetration testing. We simulated real-world attack scenarios and provided detailed remediation guidance.",
    results: [
      "Critical API vulnerability remediated before launch",
      "Prevented potential data breach affecting 5M users",
      "Security response time improved by 60%",
      "Employee security awareness increased by 80%",
    ],
    services: ["Red Teaming", "API Security", "Security Awareness", "Incident Response"],
    testimonial: "Cyberlok&apos;s red team thought like real attackers. They exposed gaps we never knew existed and helped us fix them just in time. Our sale event was a massive success without any security incidents.",
    author: "Vikram Mehta",
    role: "VP Engineering, ShopEase Online",
    rating: 5,
    relatedCases: ["fintech-vapt", "startup-security-launch"],
  },
  "manufacturing-cloud-security": {
    client: "SteelWorks Industries",
    industry: "Manufacturing",
    industryIcon: Building2,
    title: "Cloud Security Transformation for Legacy Systems",
    shortDesc: "Modernizing security posture for industrial manufacturing with hybrid cloud infrastructure.",
    challenge: "Manufacturing giant with legacy systems needed to securely migrate to cloud while maintaining operational technology security. OT/IT convergence introduced new attack vectors that needed careful handling.",
    solution: "Implemented cloud security posture management (CSPM), secured OT/IT convergence, and established security monitoring for hybrid infrastructure. We created comprehensive security policies and incident response playbooks.",
    results: [
      "Secure cloud migration completed on time",
      "Zero security incidents during transition",
      "60% reduction in cloud security costs",
      "Real-time threat monitoring across all facilities",
    ],
    services: ["Cloud Security", "Infrastructure Assessment", "SOC Monitoring", "Security Consulting"],
    testimonial: "Transitioning our legacy systems to the cloud seemed risky, but Cyberlok made it seamless and secure. Their understanding of both IT and OT security is impressive.",
    author: "Anand Kumar",
    role: "IT Director, SteelWorks Industries",
    rating: 5,
    relatedCases: ["government-grc", "hospital-network-security"],
  },
  "government-grc": {
    client: "Digital Services Authority",
    industry: "Government",
    industryIcon: Shield,
    title: "National Initiative Security Framework",
    shortDesc: "Building a comprehensive security framework for critical government digital infrastructure.",
    challenge: "Government body needed to establish security standards and compliance framework for multiple ministry websites and digital services. High-profile targets required robust protection against nation-state level threats.",
    solution: "Developed comprehensive security policies aligned with government standards, implemented continuous monitoring with threat intelligence feeds, and established incident response protocols. We also conducted security training for government officials.",
    results: [
      "ISO 27001 certification achieved in 8 months",
      "Security framework adopted across 12 ministries",
      "99.9% uptime maintained",
      "Zero data breaches in 2 years",
    ],
    services: ["GRC & Compliance", "Security Consulting", "Incident Response", "Security Training"],
    testimonial: "Cyberlok helped us build security infrastructure that&apos;s now the benchmark for government digital initiatives. Their professionalism and expertise exceeded our expectations at every level.",
    author: "Suresh Rao",
    role: "Director General, Digital Services Authority",
    rating: 5,
    relatedCases: ["hospital-network-security", "fintech-vapt"],
  },
  "startup-security-launch": {
    client: "TechNova Labs",
    industry: "Technology",
    industryIcon: Bug,
    title: "Startup Security Program from Day One",
    shortDesc: "Building security-first culture for a fast-growing tech startup preparing for Series A.",
    challenge: "Early-stage startup needed to establish security practices and investor due diligence requirements before funding. Building security from scratch while maintaining development velocity was challenging.",
    solution: "Implemented comprehensive security program including DevSecOps pipeline integration, security training for all engineers, and continuous vulnerability management. We established security policies and incident response procedures tailored to startup needs.",
    results: [
      "SOC 2 Type II compliance achieved",
      "Security program in place from day 1",
      "Investor confidence increased significantly",
      "Secure SDLC established for all products",
    ],
    services: ["DevSecOps", "Security Training", "Vulnerability Management", "Compliance"],
    testimonial: "Having Cyberlok as our security partner from the start gave us a competitive edge and investor trust. They understand startups and know how to build security that scales.",
    author: "Neha Singh",
    role: "CEO, TechNova Labs",
    rating: 5,
    relatedCases: ["ecommerce-red-team", "fintech-vapt"],
  },
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudiesData[slug];
  
  const relatedCases = useMemo(() => {
    if (caseStudy?.relatedCases) {
      return caseStudy.relatedCases.map((s) => caseStudiesData[s]).filter(Boolean);
    }
    return [];
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">Case Study Not Found</h1>
          <p className="mt-4 text-white/60">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/case-studies"
            className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-3xl" />
        </div>
        <Container>
          <div className="px-2 py-6 sm:py-8">
            <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: caseStudy.client }]} className="mb-4" />
          </div>
          <div className="px-2 pb-8 sm:pb-12 md:pb-16">
            <motion.div initial="hidden" animate="show" className="max-w-4xl mx-auto">
              <motion.div custom={0} variants={fadeUp}>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-cyan-300 transition-colors mb-6"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Case Studies
                </Link>
              </motion.div>

              <motion.div custom={1} variants={fadeUp} className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10">
                  <caseStudy.industryIcon className="h-6 w-6 text-cyan-300" />
                </span>
                <div>
                  <p className="text-sm text-cyan-300/80">{caseStudy.industry}</p>
                  <p className="text-xl sm:text-2xl font-semibold text-white">{caseStudy.client}</p>
                </div>
              </motion.div>

              <motion.h1 custom={2} variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {caseStudy.title}
              </motion.h1>

              <motion.p custom={3} variants={fadeUp} className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
                {caseStudy.shortDesc}
              </motion.p>

              <motion.div custom={4} variants={fadeUp} className="mt-6 sm:mt-8 flex flex-wrap gap-2">
                {caseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm text-cyan-300"
                  >
                    {service}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Challenge */}
                <AnimatedContent distance={30} direction="vertical" duration={0.7}>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">The Challenge</h2>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                </AnimatedContent>

                {/* Solution */}
                <AnimatedContent distance={30} direction="vertical" duration={0.7} delay={0.1}>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Solution</h2>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </AnimatedContent>

                {/* Results */}
                <AnimatedContent distance={30} direction="vertical" duration={0.7} delay={0.2}>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Results & Impact</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {caseStudy.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-white/80">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedContent>

                {/* Testimonial */}
                <AnimatedContent distance={30} direction="vertical" duration={0.7} delay={0.3}>
                  <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 sm:p-8">
                    <Quote className="absolute top-6 right-6 sm:right-8 h-12 w-12 text-cyan-400/20" />
                    <div className="relative">
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: caseStudy.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>
                      <p className="text-base sm:text-lg text-white/80 leading-relaxed italic">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold text-white">{caseStudy.author}</p>
                        <p className="text-sm text-cyan-300">{caseStudy.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <AnimatedContent distance={30} direction="vertical" duration={0.7} delay={0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Services Provided</h3>
                    <div className="space-y-3">
                      {caseStudy.services.map((service) => (
                        <div key={service} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-cyan-400" />
                          <span className="text-sm text-white/70">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedContent>

                <AnimatedContent distance={30} direction="vertical" duration={0.7} delay={0.2}>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Ready to Transform Your Security?</h3>
                    <p className="text-sm text-white/60 mb-4">
                      Let&apos;s discuss how we can help your organization achieve similar results.
                    </p>
                    <ClickSpark sparkColor="#22d3ee" sparkSize={5} sparkRadius={12} sparkCount={5}>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400 w-full"
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </ClickSpark>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED CASE STUDIES */}
      {relatedCases.length > 0 && (
        <section className="border-b border-white/10">
          <Container>
            <div className="py-10 sm:py-16">
              <AnimatedContent distance={30} direction="vertical" duration={0.7}>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Related Case Studies
                </h2>
              </AnimatedContent>

              <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedCases.map((related, i) => (
                  <AnimatedContent key={related.client} distance={30} direction="vertical" duration={0.6} delay={i * 0.1}>
                    <Link href={`/case-studies/${caseStudy.relatedCases[i]}`} className="group block">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 transition-all hover:border-cyan-400/30 hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10">
                            <related.industryIcon className="h-4 w-4 text-cyan-300" />
                          </span>
                          <div>
                            <p className="text-xs text-cyan-300/80">{related.industry}</p>
                            <p className="text-sm font-semibold text-white">{related.client}</p>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                          {related.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-2">
                          {related.shortDesc}
                        </p>

                        <span className="mt-4 inline-block text-xs sm:text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">
                          Read More →
                        </span>
                      </motion.div>
                    </Link>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedContent distance={30} direction="vertical" duration={0.7}>
            <div className="mx-auto max-w-3xl text-center px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Ready to Write Your Own{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70">
                Let&apos;s discuss how Cyberlok can help transform your organization&apos;s security posture.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <ClickSpark sparkColor="#22d3ee" sparkSize={6} sparkRadius={14} sparkCount={6}>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all hover:bg-cyan-400 w-full sm:w-auto"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-lg transition group-hover:opacity-100" />
                    <span className="relative">Start Your Journey</span>
                    <ArrowRight className="relative h-4 w-4 sm:h-5 sm:w-5 transition group-hover:translate-x-1" />
                  </Link>
                </ClickSpark>
              </div>
            </div>
          </AnimatedContent>
        </Container>
      </section>
    </div>
  );
}
