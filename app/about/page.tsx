"use client";

import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, Layers, Wrench } from "lucide-react";
import CyberlokTeam from "@/components/about/CyberlokTeam";
import WhoWeAre from "@/components/about/WhoWeAre";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

/* -------------------------------------------------------------------------- */
/*                            CYBERLOK SECTIONS                                */
/* -------------------------------------------------------------------------- */

function TeamCard({
  img,
  name,
  role,
  focus,
}: {
  img: string;
  name: string;
  role: string;
  focus: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        rounded-3xl border border-white/10 bg-white/5 p-6 text-center
        transition hover:shadow-[0_0_0_1px_rgba(34,211,238,0.30)]
      "
    >
      <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border border-white/15">
        <img src={img} alt={name} className="h-full w-full object-cover" />
      </div>

      <p className="mt-4 font-semibold">{name}</p>
      <p className="mt-1 text-sm text-cyan-300">{role}</p>
      <p className="mt-2 text-sm text-white/60 leading-6">{focus}</p>
    </motion.div>
  );
}



export default function CyberlokOverview() {
  return (
    <div>
      <div className="border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14">
            <Breadcrumbs items={[{ label: "About" }]} className="mb-6" />
          </div>
        </Container>
      </div>

      {/* ====================================================================== */}
      {/* SECTION 1: CYBERLOK TEAM                                                */}
      {/* ====================================================================== */}

      <WhoWeAre />
      <CyberlokTeam />

      {/* ====================================================================== */}
      {/* SECTION 2: WHY CYBERLOK                                                 */}
      {/* ====================================================================== */}

      <section className="border-t border-white/10">
  <Container>
    <div className="py-10 sm:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        Why organizations choose Cyberlok
      </h2>

      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Outcome-driven security",
            desc: "We focus on reducing real-world risk, not producing reports that gather dust.",
            icon: Target,
          },
          {
            title: "Technical depth with context",
            desc: "Deep hands-on expertise combined with business and regulatory understanding.",
            icon: Layers,
          },
          {
            title: "Built for scale",
            desc: "Our approach adapts from early-stage security programs to enterprise environments.",
            icon: ShieldCheck,
          },
          {
            title: "Beyond assessments",
            desc: "We support remediation, monitoring, and continuous improvement over time.",
            icon: Wrench,
          },
        ].map((item) => (
          <SpotlightCard
            key={item.title}
            spotlightColor="rgba(34, 211, 238, 0.18)"
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
          >
            <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">{item.title}</p>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
              {item.desc}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  </Container>
</section>

      {/* ====================================================================== */}
      {/* SECTION 3: HOW WE WORK                                                  */}
      {/* ====================================================================== */}

     <section className="border-t border-white/10">
  <Container>
    <div className="py-10 sm:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
        How we engage
      </h2>

      <div className="mt-8 sm:mt-16 grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            step: "01",
            title: "Understand risk & scope",
            desc:
              "We align on business context, threat models, and compliance requirements.",
          },
          {
            step: "02",
            title: "Assess & validate findings",
            desc:
              "Hands-on testing to identify and confirm real, exploitable risks.",
          },
          {
            step: "03",
            title: "Remediate & harden systems",
            desc:
              "We guide fixes and improvements alongside your teams.",
          },
          {
            step: "04",
            title: "Monitor & improve continuously",
            desc:
              "Ongoing visibility and improvement as threats evolve.",
          },
        ].map((item, index) => (
          <AnimatedContent
            key={item.step}
            distance={60}
            direction="vertical"
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={index * 0.1}
          >
            <div
              className={`
                relative h-full rounded-2xl sm:rounded-3xl
                border border-white/10
                bg-gradient-to-b from-white/[0.08] to-white/[0.02]
                p-5 sm:p-7
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-white/[0.08]
              `}
            >
              {/* Step label */}
              <span className="block text-xs sm:text-sm font-semibold text-cyan-300">
                Step {item.step}
              </span>

              {/* Title */}
              <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-white leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </Container>
</section>

      {/* ====================================================================== */}
      {/* SECTION 4: CTA                                                         */}
      {/* ====================================================================== */}

      <section className="border-t border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="rounded-2xl sm:rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Need clarity on your security posture?
                </h3>
                <p className="mt-2 text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
                  Talk to Cyberlok&apos;s security team and get a clear,
                  actionable roadmap — tailored for Indian organizations.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm sm:text-base font-semibold text-black hover:bg-cyan-400 w-full sm:w-auto"
              >
                Speak with our team <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
