"use client";

import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Layers, 
  Wrench,
  Search,
  Bug,
  Eye,
  FileSearch,
  Award,
  Shield,
} from "lucide-react";
import CyberlokTeam from "@/components/about/CyberlokTeam";
import { CyberlokServicesCarousel } from "@/components/about/WhoWeAre";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

/* -------------------------------------------------------------------------- */
/*                            CYBERLOK SECTIONS                                */
/* -------------------------------------------------------------------------- */

export default function CyberlokOverview() {
  return (
    <div>
      {/* ====================================================================== */}
      {/* SECTION 0: HERO                                                          */}
      {/* ====================================================================== */}
      
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <Container>
          <div className="py-6 sm:py-10 lg:py-14">
            <Breadcrumbs items={[{ label: "About" }]} className="mb-6" />
            
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-blue-500/10 px-4 py-2"
                >
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">About Cyberlok</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Securing Trust in a
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                    Zero-Trust World
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-lg text-white/70 leading-relaxed"
                >
                  Cyberlok is a next-generation cybersecurity company delivering advanced security 
                  services, managed security solutions, and cyber risk advisory to organizations 
                  across India and worldwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-4 text-base font-semibold text-black overflow-hidden shadow-lg shadow-blue-500/30"
                  >
                    <span className="relative flex items-center gap-2">
                      Get in Touch
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </Link>
                  <Link
                    href="#team"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    Meet Our Team
                  </Link>
                </motion.div>
              </motion.div>

              {/* Services Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hidden lg:flex justify-center"
              >
                <div className="max-w-[480px]">
                  <CyberlokServicesCarousel />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 1: CYBERLOK TEAM                                                */}
      {/* ====================================================================== */}

      <CyberlokTeam />

      {/* ====================================================================== */}
      {/* SECTION 2: WHY CYBERLOK                                                 */}
      {/* ====================================================================== */}

      <section className="border-t border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-blue-400">WHY CYBERLOK</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Why organizations choose us
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-white/65">
                We deliver measurable security outcomes, not just compliance checkboxes.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Outcome-driven security",
                  desc: "We focus on reducing real-world risk, not producing reports that gather dust.",
                  icon: Target,
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  title: "Technical depth with context",
                  desc: "Deep hands-on expertise combined with business and regulatory understanding.",
                  icon: Layers,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Built for scale",
                  desc: "Our approach adapts from early-stage security programs to enterprise environments.",
                  icon: ShieldCheck,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Beyond assessments",
                  desc: "We support remediation, monitoring, and continuous improvement over time.",
                  icon: Wrench,
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-blue-400/30"
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

                    <h3 className="mt-4 text-base font-semibold leading-tight text-white group-hover:text-blue-100 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-grow text-sm leading-relaxed text-white/60">
                      {item.desc}
                    </p>

                    <div className="-mx-6 mt-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 3: HOW WE WORK                                                  */}
      {/* ====================================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-blue-950/30 via-black to-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-blue-400">OUR PROCESS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                How we engage
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm sm:text-base text-white/65">
                A proven methodology that delivers results from day one.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Understand Risk & Scope",
                  desc: "We align on business context, threat models, and compliance requirements.",
                  icon: FileSearch,
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  step: "02",
                  title: "Assess & Validate",
                  desc: "Hands-on testing to identify and confirm real, exploitable risks.",
                  icon: Bug,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "03",
                  title: "Remediate & Harden",
                  desc: "We guide fixes and improvements alongside your teams.",
                  icon: Wrench,
                  color: "from-orange-500 to-red-500",
                },
                {
                  step: "04",
                  title: "Monitor & Improve",
                  desc: "Ongoing visibility and improvement as threats evolve.",
                  icon: Eye,
                  color: "from-green-500 to-emerald-500",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-blue-400/30"
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

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                      className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    />

                    <p className="mt-3 text-xs font-semibold text-blue-400">Step {item.step}</p>
                    <h3 className="mt-2 text-base font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 4: CTA                                                         */}
      {/* ====================================================================== */}

      <section className="relative overflow-hidden border-t border-white/10">
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
                  Need clarity on your security posture?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Talk to Cyberlok&apos;s security team and get a clear, actionable roadmap — 
                  tailored for Indian organizations.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 overflow-hidden"
                  >
                    <span className="relative flex items-center gap-2">
                      Speak with our team
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

    </div>
  );
}
