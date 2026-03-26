"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Shield, Building2, Users, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08 },
  }),
};

const testimonials = [
  {
    id: 1,
    quote: "Cyberlok&apos;s team was exceptional. They found vulnerabilities our previous vendors missed and helped us achieve compliance ahead of schedule. Their expertise in financial sector security is unmatched.",
    author: "Rahul Sharma",
    role: "CTO",
    company: "NexGen Payments",
    industry: "Financial Services",
    industryIcon: Building2,
    rating: 5,
    result: "PCI-DSS compliance in 6 weeks",
  },
  {
    id: 2,
    quote: "Patient data security is non-negotiable for us. Cyberlok delivered a comprehensive solution that gives our patients peace of mind and our board confidence in our security posture.",
    author: "Dr. Priya Patel",
    role: "CISO",
    company: "HealthFirst Hospitals",
    industry: "Healthcare",
    industryIcon: Shield,
    rating: 5,
    result: "HIPAA 100% compliant",
  },
  {
    id: 3,
    quote: "Cyberlok&apos;s red team thought like real attackers. They exposed gaps we never knew existed and helped us fix them just in time. Our sale event was a massive success without any security incidents.",
    author: "Vikram Mehta",
    role: "VP Engineering",
    company: "ShopEase Online",
    industry: "E-commerce",
    industryIcon: Building2,
    rating: 5,
    result: "5M users protected",
  },
  {
    id: 4,
    quote: "Transitioning our legacy systems to the cloud seemed risky, but Cyberlok made it seamless and secure. Their understanding of both IT and OT security is impressive.",
    author: "Anand Kumar",
    role: "IT Director",
    company: "SteelWorks Industries",
    industry: "Manufacturing",
    industryIcon: Building2,
    rating: 5,
    result: "60% cost reduction",
  },
  {
    id: 5,
    quote: "Cyberlok helped us build security infrastructure that&apos;s now the benchmark for government digital initiatives. Their professionalism and expertise exceeded our expectations at every level.",
    author: "Suresh Rao",
    role: "Director General",
    company: "Digital Services Authority",
    industry: "Government",
    industryIcon: Shield,
    rating: 5,
    result: "Zero breaches in 2 years",
  },
  {
    id: 6,
    quote: "Having Cyberlok as our security partner from the start gave us a competitive edge and investor trust. They understand startups and know how to build security that scales.",
    author: "Neha Singh",
    role: "CEO",
    company: "TechNova Labs",
    industry: "Technology",
    industryIcon: Users,
    rating: 5,
    result: "SOC 2 Type II compliant",
  },
  {
    id: 7,
    quote: "The team at Cyberlok doesn&apos;t just find problems—they help you fix them and build better systems. Their remediation support and follow-up验证 made all the difference.",
    author: "Arjun Reddy",
    role: "Head of Security",
    company: "DataStream Analytics",
    industry: "Technology",
    industryIcon: Users,
    rating: 5,
    result: "Critical vulnerabilities fixed",
  },
  {
    id: 8,
    quote: "Our employees are now our first line of defense. Cyberlok&apos;s training program transformed our security culture from reactive to proactive.",
    author: "Meera Joshi",
    role: "HR Director",
    company: "GlobalRetail Corp",
    industry: "Retail",
    industryIcon: Building2,
    rating: 5,
    result: "80% phishing reduction",
  },
  {
    id: 9,
    quote: "When we had a potential breach, Cyberlok&apos;s incident response team was on it within minutes. Their expertise during the crisis was invaluable and helped us minimize impact.",
    author: "Karthik Nair",
    role: "COO",
    company: "CloudServe Technologies",
    industry: "Technology",
    industryIcon: Users,
    rating: 5,
    result: "Breach contained in 15 min",
  },
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "500+", label: "Projects Completed" },
  { value: "24/7", label: "SOC Availability" },
];

const industries = [
  { name: "Financial Services", icon: Building2 },
  { name: "Healthcare", icon: Shield },
  { name: "Government", icon: Shield },
  { name: "Technology", icon: Users },
  { name: "E-commerce", icon: Building2 },
  { name: "Manufacturing", icon: Building2 },
  { name: "Retail", icon: Building2 },
  { name: "Education", icon: Users },
];

export default function TestimonialsPage() {
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
          <div className="px-2 py-12 sm:py-16 md:py-20">
            <motion.div initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
              <motion.div custom={0} variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  <Star className="h-4 w-4" />
                  Client Testimonials
                </span>
              </motion.div>
              <motion.h1 custom={1} variants={fadeUp} className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                What Our{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 leading-relaxed px-2">
                Don&apos;t just take our word for it. Hear from the organizations who&apos;ve trusted Cyberlok
                to protect their most valuable assets.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-8 sm:py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <AnimatedContent key={stat.label} distance={20} direction="vertical" duration={0.5} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">{stat.label}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <AnimatedContent key={testimonial.id} distance={30} direction="vertical" duration={0.6} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition-all hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <Quote className="absolute top-5 right-5 h-8 w-8 text-cyan-400/10 group-hover:text-cyan-400/20 transition-colors" />
                    
                    <div className="relative">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed line-clamp-5">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Result Badge */}
                      <div className="mt-4 flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1">
                        <CheckCircle2 className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-green-300">{testimonial.result}</span>
                      </div>

                      {/* Author */}
                      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                          <testimonial.industryIcon className="h-5 w-5 text-cyan-300" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                          <p className="text-xs text-white/60">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  Trusted Across Industries
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/60">
                  We serve organizations of all sizes and sectors
                </p>
              </div>
            </AnimatedContent>

            <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {industries.map((industry, i) => (
                <AnimatedContent key={industry.name} distance={20} direction="vertical" duration={0.5} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-cyan-400/30 hover:bg-white/10">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10">
                      <industry.icon className="h-4 w-4 text-cyan-300" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white">{industry.name}</span>
                  </div>
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
                Ready to Join Our{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Growing Family of Satisfied Clients?
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70">
                Let&apos;s discuss how Cyberlok can help transform your organization&apos;s security posture.
                Your success story could be next.
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
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
                  >
                    View Case Studies
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
