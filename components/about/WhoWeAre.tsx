"use client";
import { useEffect, useState } from "react";
import React from "react";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { type CarouselApi } from "@/components/ui/carousel";



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* -------------------------------------------------------------------------- */
/*                     ADVANCED BACKGROUND (PREMIUM)                          */
/* -------------------------------------------------------------------------- */

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient: neutral dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050A12] to-black" />

      {/* Center glow (reduced cyan) */}
      <motion.div
        className="absolute -top-52 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/7 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle orb left */}
      <motion.div
        className="absolute -top-32 -left-40 h-[560px] w-[560px] rounded-full bg-cyan-500/6 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle orb right */}
      <motion.div
        className="absolute -bottom-44 -right-44 h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -55, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid: subtle */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        animate={{ backgroundPosition: ["0px 0px", "160px 130px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
        animate={{ opacity: [0.06, 0.11, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.22%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             CAROUSEL DATA                                  */
/* -------------------------------------------------------------------------- */

const serviceSlides = [
  {
    title: "VAPT (Vulnerability Assessment & Penetration Testing)",
    desc: "Identify critical security gaps in applications, infrastructure, and networks with actionable remediation guidance.",
    tags: ["Web", "API", "Network", "Mobile"],
    image: "/images/services/VAPT.png",
  },
  {
    title: "Cloud Security",
    desc: "Secure cloud environments across AWS, Azure, and GCP with hardening, monitoring, and misconfiguration prevention.",
    tags: ["AWS", "Azure", "GCP", "IAM"],
    image: "/images/services/Cloud_Security.png",
  },
  {
    title: "Digital Forensics",
    desc: "Investigate incidents, preserve evidence, identify root cause, and support legal/disciplinary processes.",
    tags: ["Investigation", "Evidence", "Analysis"],
    image: "/images/services/Digital_Forensics.png",
  },
  {
    title: "Incident Response",
    desc: "Rapid containment, eradication, recovery, and post-incident hardening to minimize damage and downtime.",
    tags: ["Contain", "Recover", "Resilience"],
    image: "/images/services/Incident_Response.png",
  },
  {
    title: "SOC Consulting",
    desc: "Improve detection, response maturity, SIEM workflows, alert triage, and operational readiness.",
    tags: ["SIEM", "Monitoring", "Detection"],
    image: "/images/services/SOC.png",
  },
  {
    title: "Cyber Risk Advisory",
    desc: "Align security strategy with business goals through risk assessments, policy design, and governance support.",
    tags: ["Risk", "GRC", "Compliance"],
    image: "/images/services/Security_Consulting.png",
  },
];


/* -------------------------------------------------------------------------- */
/*                       RIGHT SIDE (SHADCN CAROUSEL)                          */
/* -------------------------------------------------------------------------- */

export function CyberlokServicesCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [active, setActive] = React.useState(0);

  // Track active slide index
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActive(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // ✅ Autoplay: NEVER stops, even with arrows/swipe
  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full max-w-[520px]">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="relative"
      >
        <CarouselContent className="-ml-3">
          {serviceSlides.map((s, i) => (
            <CarouselItem key={i} className="pl-3">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.04] to-black/30 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.50)]"
              >
                {/* Glow accent */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* IMAGE - full visible */}
                <div className="relative overflow-hidden rounded-t-[34px] border-b border-white/10 bg-black/30 flex items-center justify-center">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-[220px] w-full object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-200">
                      Cyberlok Services
                    </div>

                    <div className="text-xs text-white/40">
                      {(active + 1).toString().padStart(2, "0")} /{" "}
                      {serviceSlides.length.toString().padStart(2, "0")}
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-white/70 leading-8 text-base">
                    {s.desc}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {s.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Progress bar (always running) */}
                  <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      key={active}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="h-full bg-cyan-400/60"
                    />
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* arrows (manual click won't stop autoplay) */}
        <CarouselPrevious className="left-[-18px] h-11 w-11 rounded-full border border-white/10 bg-black/40 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md hover:bg-black/60 hover:border-white/20" />
        <CarouselNext className="right-[-18px] h-11 w-11 rounded-full border border-white/10 bg-black/40 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md hover:bg-black/60 hover:border-white/20" />
      </Carousel>
    </div>
  );
}
/* -------------------------------------------------------------------------- */
/*                              MAIN SECTION                                  */
/* -------------------------------------------------------------------------- */

export default function WhoWeAre() {
  return (
    <section className="relative border-t border-white/10">
      <AnimatedBackground />

      <Container>
        <div className="relative pt-6 pb-14 grid gap-10 lg:grid-cols-2 items-start">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200 backdrop-blur">
              Who We Are
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Securing Trust in a Zero-Trust World.
            </h2>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.25)]">
              <p className="text-white/70 leading-8 text-base md:text-lg">
                Cyberlok is a next-generation cybersecurity company delivering
                advanced security services, managed security solutions, and cyber risk
                advisory to organizations across India and worldwide. We help
                businesses protect critical digital assets, reduce real-world cyber
                risk, and build resilient security programs across business
                infrastructure, cloud environments, networks, and human attack
                surfaces.
              </p>

              <div className="my-6 h-px w-full bg-white/10" />

              <p className="text-sm tracking-wide text-cyan-300">Our Vision</p>
              <p className="mt-2 text-white/70 leading-8 text-base md:text-lg">
                To become a globally trusted cybersecurity partner that empowers
                organizations of every size to operate securely and confidently in an
                increasingly hostile digital world.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <CyberlokServicesCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
}
