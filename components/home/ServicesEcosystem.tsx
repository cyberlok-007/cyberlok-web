"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/shared/Container";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ClickSpark from "@/components/ClickSpark/ClickSpark";

type ServiceKey = "Sentinel" | "Pinpoint" | "MSP247" | "nCompass";

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function ServicesEcosystem() {
  const [active, setActive] = useState<ServiceKey>("Pinpoint");

  return (
    <section className="border-b border-white/10">
      <Container>
        <div className="py-16 sm:py-20">

          {/* ================= HEADER ================= */}
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
          >
            <div className="mb-12 sm:mb-16 max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-cyan-300">
                CYBERLOK SERVICES ECOSYSTEM
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Complete Cyber Protection Under One Umbrella
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-7 text-white/65">
                Get best-in-class security solutions with our holistic services,
                cutting-edge technologies, and seasoned cybersecurity experts —
                designed to protect, detect, and respond across your entire
                digital landscape.
              </p>
            </div>
          </AnimatedContent>

          {/* ================= MOBILE SERVICE SWITCHER (ADDED) ================= */}
          <div className="mb-10 flex lg:hidden gap-2 overflow-x-auto">
            {(["Sentinel", "Pinpoint", "MSP247", "nCompass"] as ServiceKey[]).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition
                    ${
                      active === key
                        ? "bg-cyan-400 text-black"
                        : "border border-white/15 text-white/70"
                    }`}
                >
                  {key === "MSP247" ? "MSP 24×7" : key}
                </button>
              )
            )}
          </div>

          {/* ================= CONTENT ================= */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">

            {/* LEFT ACCORDION */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.05}
            >
              <ServiceGroups active={active} setActive={setActive} />
            </AnimatedContent>

            {/* RIGHT WHEEL */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
            >
              <div className="relative hidden lg:flex justify-center">
                <ServicesWheel active={active} setActive={setActive} />
              </div>
            </AnimatedContent>

          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              LEFT ACCORDION                                */
/* -------------------------------------------------------------------------- */

function ServiceGroups({
  active,
  setActive,
}: {
  active: ServiceKey;
  setActive: (v: ServiceKey) => void;
}) {
  return (
    <div className="space-y-4">
      <ServiceBlock
        title="Sentinel"
        active={active}
        setActive={setActive}
        desc="Managed detection, response and continuous monitoring."
        services={[
          "Managed Detection & Response (MDR)",
          "SOC as a Service",
          "Digital Forensics Investigations",
          "Cybersecurity Consulting Services",
        ]}
      />

      <ServiceBlock
        title="Pinpoint"
        active={active}
        setActive={setActive}
        desc="Offensive security & real-world attack simulations."
        services={[
          "Vulnerability Assessment",
          "Penetration Testing Services",
          "Secure Code Review Services",
          "Cloud Security Assessments",
          "Phishing Simulation Services",
          "Breach & Attack Simulations",
          "Secure Software Development Services",
          "Red Teaming Services",
        ]}
      />

      <ServiceBlock
        title="MSP247"
        active={active}
        setActive={setActive}
        desc="Always-on infrastructure & security operations."
        services={[
          "Security Solutions Implementation",
          "Security Patching Services",
          "Patch Management Services",
          "Configuration Audits",
        ]}
      />

      <ServiceBlock
        title="nCompass"
        active={active}
        setActive={setActive}
        desc="People, governance & security maturity."
        services={[
          "Security Awareness Training",
          "Cybersecurity Staffing Services",
          "SBOM Management",
        ]}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SERVICE BLOCK                                 */
/* -------------------------------------------------------------------------- */

function ServiceBlock({
  title,
  desc,
  services,
  active,
  setActive,
}: {
  title: ServiceKey;
  desc: string;
  services: string[];
  active: ServiceKey;
  setActive: (v: ServiceKey) => void;
}) {
  const isOpen = active === title;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5">

      <ClickSpark sparkColor="#22d3ee" sparkSize={6} sparkRadius={18} sparkCount={6} duration={350}>
        <button
          onClick={() => setActive(title)}
          className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-white/60">{desc}</p>
          </div>
          <span className="text-2xl">{isOpen ? "–" : "+"}</span>
        </button>
      </ClickSpark>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-5 sm:px-6 pb-6"
          >
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {s}
                </li>
              ))}
            </ul>

            <ClickSpark sparkColor="#000" sparkSize={7} sparkRadius={16} sparkCount={8} duration={400}>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black"
              >
                Consult with Us →
              </Link>
            </ClickSpark>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              RIGHT WHEEL                                   */
/* -------------------------------------------------------------------------- */

function ServicesWheel({
  active,
  setActive,
}: {
  active: ServiceKey;
  setActive: (v: ServiceKey) => void;
}) {
  const color = (key: ServiceKey) =>
    active === key ? "#22d3ee" : "#0b1220";

  const labelColor = (key: ServiceKey) =>
    active === key ? "#000" : "#fff";

  return (
    <div className="relative h-[420px] w-[420px]">
      <svg viewBox="0 0 200 200" className="h-full w-full select-none">

        {/* SENTINEL */}
        <g onClick={() => setActive("Sentinel")} className="cursor-pointer transition-opacity hover:opacity-90">
          <path d="M100 100 L100 0 A100 100 0 0 1 200 100 Z" fill={color("Sentinel")} />
          <text x="140" y="45" textAnchor="middle" fontSize="7" fill={labelColor("Sentinel")} fontWeight="700">
            Sentinel
          </text>
        </g>

        {/* PINPOINT */}
        <g onClick={() => setActive("Pinpoint")} className="cursor-pointer transition-opacity hover:opacity-90">
          <path d="M100 100 L200 100 A100 100 0 0 1 100 200 Z" fill={color("Pinpoint")} />
          <text x="140" y="155" textAnchor="middle" fontSize="7" fill={labelColor("Pinpoint")} fontWeight="700">
            Pinpoint
          </text>
        </g>

        {/* MSP247 */}
        <g onClick={() => setActive("MSP247")} className="cursor-pointer transition-opacity hover:opacity-90">
          <path d="M100 100 L100 200 A100 100 0 0 1 0 100 Z" fill={color("MSP247")} />
          <text x="60" y="155" textAnchor="middle" fontSize="7" fill={labelColor("MSP247")} fontWeight="700">
            MSP 24×7
          </text>
        </g>

        {/* NCOMPASS */}
        <g onClick={() => setActive("nCompass")} className="cursor-pointer transition-opacity hover:opacity-90">
          <path d="M100 100 L0 100 A100 100 0 0 1 100 0 Z" fill={color("nCompass")} />
          <text x="55" y="45" textAnchor="middle" fontSize="7" fill={labelColor("nCompass")} fontWeight="700">
            nCompass
          </text>
        </g>

        {/* DIVIDERS */}
        <line x1="100" y1="0" x2="100" y2="200" stroke="#ffffff22" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#ffffff22" />

        {/* CENTER */}
        <circle cx="100" cy="100" r="45" fill="#ffe8e3" />
        <text x="100" y="95" textAnchor="middle" fontSize="8" fill="#000" fontWeight="700">
          CYBERLOK
        </text>
        <text x="100" y="108" textAnchor="middle" fontSize="8" fill="#000" fontWeight="700">
          SERVICES
        </text>

      </svg>
    </div>
  );
}
