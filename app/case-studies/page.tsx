"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Bug, FileCheck2, Building2, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08 },
  }),
};

const caseStudies = [
  {
    slug: "fintech-vapt",
    client: "NexGen Payments",
    industry: "Financial Services",
    industryIcon: Building2,
    title: "Securing Digital Payments for 2M+ Users",
    shortDesc: "Comprehensive VAPT and compliance assessment for a leading fintech company.",
    challenge: "A rapidly growing fintech startup needed to secure their payment infrastructure and achieve PCI-DSS compliance before their Series B funding round.",
    solution: "Cyberlok conducted comprehensive penetration testing, vulnerability assessment, and helped implement security controls aligned with PCI-DSS requirements.",
    results: [
      "Identified 23 critical vulnerabilities before production launch",
      "Achieved PCI-DSS compliance in 6 weeks",
      "72% reduction in security vulnerabilities",
      "Zero breaches since deployment",
    ],
    services: ["Penetration Testing", "Vulnerability Assessment", "GRC Compliance"],
    testimonial: "Cyberlok&apos;s team was exceptional. They found vulnerabilities our previous vendors missed and helped us achieve compliance ahead of schedule.",
    author: "Rahul Sharma",
    role: "CTO, NexGen Payments",
    rating: 5,
    image: "/case-studies/fintech.jpg",
    featured: true,
  },
  {
    slug: "hospital-network-security",
    client: "HealthFirst Hospitals",
    industry: "Healthcare",
    industryIcon: Shield,
    title: "Protecting Patient Data Across 50+ Locations",
    shortDesc: "Hospital network security overhaul with HIPAA compliance and 24/7 SOC implementation.",
    challenge: "A multi-chain hospital network with 50+ facilities needed to secure patient data and meet strict healthcare compliance requirements.",
    solution: "Implemented SOC-as-a-Service, conducted comprehensive security assessment, and established continuous monitoring with HIPAA-compliant security controls.",
    results: [
      "100% HIPAA compliance achieved",
      "45% faster incident detection and response",
      "Security score improved from 45% to 92%",
      "Annual SOC 2 audit passed successfully",
    ],
    services: ["SOC as a Service", "Security Assessment", "Compliance"],
    testimonial: "Patient data security is non-negotiable for us. Cyberlok delivered a comprehensive solution that gives our patients peace of mind.",
    author: "Dr. Priya Patel",
    role: "CISO, HealthFirst Hospitals",
    rating: 5,
    image: "/case-studies/healthcare.jpg",
    featured: true,
  },
  {
    slug: "ecommerce-red-team",
    client: "ShopEase Online",
    industry: "E-commerce",
    industryIcon: Building2,
    title: "Red Team Assessment Uncovers Critical API Flaws",
    shortDesc: "Advanced red team engagement revealing API security gaps before major sale event.",
    challenge: "Leading e-commerce platform needed to test their defenses before their biggest sale event of the year.",
    solution: "Conducted full red team assessment including social engineering, physical security testing, and comprehensive API penetration testing.",
    results: [
      "Critical API vulnerability remediated before launch",
      "Prevented potential data breach affecting 5M users",
      "Security response time improved by 60%",
      "Employee security awareness increased by 80%",
    ],
    services: ["Red Teaming", "API Security", "Security Awareness"],
    testimonial: "Cyberlok&apos;s red team thought like real attackers. They exposed gaps we never knew existed and helped us fix them just in time.",
    author: "Vikram Mehta",
    role: "VP Engineering, ShopEase Online",
    rating: 5,
    image: "/case-studies/ecommerce.jpg",
    featured: false,
  },
  {
    slug: "manufacturing-cloud-security",
    client: "SteelWorks Industries",
    industry: "Manufacturing",
    industryIcon: Building2,
    title: "Cloud Security Transformation for Legacy Systems",
    shortDesc: "Modernizing security posture for industrial manufacturing with hybrid cloud infrastructure.",
    challenge: "Manufacturing giant with legacy systems needed to securely migrate to cloud while maintaining operational technology security.",
    solution: "Implemented cloud security posture management, secured OT/IT convergence, and established security monitoring for hybrid infrastructure.",
    results: [
      "Secure cloud migration completed on time",
      "Zero security incidents during transition",
      "60% reduction in cloud security costs",
      "Real-time threat monitoring across all facilities",
    ],
    services: ["Cloud Security", "Infrastructure Assessment", "SOC Monitoring"],
    testimonial: "Transitioning our legacy systems to the cloud seemed risky, but Cyberlok made it seamless and secure.",
    author: "Anand Kumar",
    role: "IT Director, SteelWorks Industries",
    rating: 5,
    image: "/case-studies/manufacturing.jpg",
    featured: false,
  },
  {
    slug: "government-grc",
    client: "Digital Services Authority",
    industry: "Government",
    industryIcon: Shield,
    title: "National Initiative Security Framework",
    shortDesc: "Building a comprehensive security framework for critical government digital infrastructure.",
    challenge: "Government body needed to establish security standards and compliance framework for multiple ministry websites and digital services.",
    solution: "Developed comprehensive security policies, implemented continuous monitoring, and established incident response protocols aligned with government standards.",
    results: [
      "ISO 27001 certification achieved in 8 months",
      "Security framework adopted across 12 ministries",
      "99.9% uptime maintained",
      "Zero data breaches in 2 years",
    ],
    services: ["GRC & Compliance", "Security Consulting", "Incident Response"],
    testimonial: "Cyberlok helped us build security infrastructure that&apos;s now the benchmark for government digital initiatives.",
    author: "Suresh Rao",
    role: "Director General, Digital Services Authority",
    rating: 5,
    image: "/case-studies/government.jpg",
    featured: false,
  },
  {
    slug: "startup-security-launch",
    client: "TechNova Labs",
    industry: "Technology",
    industryIcon: Bug,
    title: "Startup Security Program from Day One",
    shortDesc: "Building security-first culture for a fast-growing tech startup preparing for Series A.",
    challenge: "Early-stage startup needed to establish security practices and investor due diligence requirements before funding.",
    solution: "Implemented comprehensive security program including DevSecOps, security training, and continuous vulnerability management.",
    results: [
      "SOC 2 Type II compliance achieved",
      "Security program in place from day 1",
      "Investor confidence increased significantly",
      "Secure SDLC established for all products",
    ],
    services: ["DevSecOps", "Security Training", "Vulnerability Management"],
    testimonial: "Having Cyberlok as our security partner from the start gave us a competitive edge and investor trust.",
    author: "Neha Singh",
    role: "CEO, TechNova Labs",
    rating: 5,
    image: "/case-studies/startup.jpg",
    featured: false,
  },
];

const industries = [
  { name: "Financial Services", count: 2 },
  { name: "Healthcare", count: 1 },
  { name: "E-commerce", count: 1 },
  { name: "Manufacturing", count: 1 },
  { name: "Government", count: 1 },
  { name: "Technology", count: 1 },
];

export default function CaseStudiesPage() {
  const featuredCases = caseStudies.filter((c) => c.featured);
  const otherCases = caseStudies.filter((c) => !c.featured);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        <Container>
          <div className="px-2 py-8 sm:py-10">
            <Breadcrumbs items={[{ label: "Case Studies" }]} className="mb-6" />
          </div>
          <div className="px-2 pb-12 sm:pb-16 md:pb-20">
            <motion.div initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.div custom={0} variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  <FileCheck2 className="h-4 w-4" />
                  Success Stories
                </span>
              </motion.div>
              <motion.h1 custom={1} variants={fadeUp} className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Real Results,{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Real Impact
                </span>
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 leading-relaxed px-2">
                Discover how we&apos;ve helped organizations across industries strengthen their security
                posture, achieve compliance, and protect what matters most.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedContent distance={30} direction="vertical" duration={0.7}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Featured Success Stories
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/60">
                In-depth case studies from our most impactful engagements
              </p>
            </AnimatedContent>

            <div className="mt-6 sm:mt-10 grid gap-6 lg:grid-cols-2">
              {featuredCases.map((caseStudy, i) => (
                <AnimatedContent key={caseStudy.slug} distance={40} direction="vertical" duration={0.7} delay={i * 0.1}>
                  <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-5 sm:p-8 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                    >
                      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10">
                            <caseStudy.industryIcon className="h-5 w-5 text-cyan-300" />
                          </span>
                          <div>
                            <p className="text-xs text-cyan-300/80">{caseStudy.industry}</p>
                            <p className="font-semibold text-white">{caseStudy.client}</p>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                          {caseStudy.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed">
                          {caseStudy.shortDesc}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {caseStudy.services.slice(0, 3).map((service) => (
                            <span
                              key={service}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: caseStudy.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:gap-3 transition-all">
                            Read Case Study
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ALL CASE STUDIES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedContent distance={30} direction="vertical" duration={0.7}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                More Success Stories
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/60">
                Explore how we&apos;ve helped organizations across different sectors
              </p>
            </AnimatedContent>

            <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherCases.map((caseStudy, i) => (
                <AnimatedContent key={caseStudy.slug} distance={30} direction="vertical" duration={0.6} delay={i * 0.1}>
                  <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 transition-all hover:border-cyan-400/30 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10">
                          <caseStudy.industryIcon className="h-4 w-4 text-cyan-300" />
                        </span>
                        <div>
                          <p className="text-xs text-cyan-300/80">{caseStudy.industry}</p>
                          <p className="text-sm font-semibold text-white">{caseStudy.client}</p>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                        {caseStudy.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-2">
                        {caseStudy.shortDesc}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: caseStudy.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">
                          Read More →
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <AnimatedContent distance={30} direction="vertical" duration={0.7}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Industries We Serve
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/60">
                Specialized security solutions for your industry&apos;s unique challenges
              </p>
            </AnimatedContent>

            <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {industries.map((industry, i) => (
                <AnimatedContent key={industry.name} distance={20} direction="vertical" duration={0.5} delay={i * 0.05}>
                  <ClickSpark sparkColor="#22d3ee" sparkSize={5} sparkRadius={12} sparkCount={5}>
                    <Link
                      href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-cyan-400/30 hover:bg-white/10"
                    >
                      <span className="text-sm font-medium text-white">{industry.name}</span>
                      <span className="text-xs text-cyan-300">{industry.count} cases</span>
                    </Link>
                  </ClickSpark>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedContent distance={30} direction="vertical" duration={0.7}>
            <div className="mx-auto max-w-3xl text-center px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Ready to Become Our Next{" "}
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
                <ClickSpark sparkColor="#22d3ee" sparkSize={5} sparkRadius={12} sparkCount={5}>
                  <Link
                    href="/testimonials"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
                  >
                    View Testimonials
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
