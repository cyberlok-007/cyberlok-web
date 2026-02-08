"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";

import {
  Bug,
  ChevronDown,
  Cloud,
  Menu,
  Radar,
  X,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const servicesMega = [
  {
    category: "Sentinel",
    icon: Radar,
    items: [
      { name: "Managed Detection & Response (MDR)", href: "/services/mdr" },
      { name: "SOC as a Service", href: "/services/soc-as-a-service" },
      { name: "Digital Forensics Investigations", href: "/services/digital-forensics" },
      { name: "Cybersecurity Consulting", href: "/services/consulting" },
    ],
  },
  {
    category: "Pinpoint",
    icon: Bug,
    items: [
      { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment" },
      { name: "Penetration Testing", href: "/services/penetration-testing" },
      { name: "Red Teaming", href: "/services/red-teaming" },
      { name: "Secure Code Review", href: "/services/secure-code-review" },
      { name: "Cloud Security Assessment", href: "/services/cloud-security" },
      { name: "Phishing Simulation", href: "/services/phishing-simulation" },
      { name: "Breach & Attack Simulation", href: "/services/breach-attack-simulation" },
      { name: "Secure Software Development", href: "/services/secure-development" },
    ],
  },
  {
    category: "MSP 24×7",
    icon: Cloud,
    items: [
      { name: "Security Solutions Implementation", href: "/services/security-implementation" },
      { name: "Security Patching Services", href: "/services/security-patching" },
      { name: "Patch Management Services", href: "/services/patch-management" },
    ],
  },
  {
    category: "nCompass",
    icon: Users,
    items: [
      { name: "Security Awareness Training", href: "/services/security-awareness-training" },
      { name: "Cybersecurity Staffing Services", href: "/services/cybersecurity-staffing" },
      { name: "Governance, Risk & Compliance (GRC)", href: "/services/grc-compliance" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                UTILITIES                                   */
/* -------------------------------------------------------------------------- */

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* -------------------------------------------------------------------------- */
/*                               COMPONENTS                                   */
/* -------------------------------------------------------------------------- */

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative text-sm font-semibold transition ${
        active ? "text-white" : "text-white/80 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`pointer-events-none absolute left-0 -bottom-2 h-[2px] w-full
        bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[0.6px]
        transition-all duration-300
        ${
          active
            ? "opacity-100 scale-x-100 origin-left"
            : "opacity-0 scale-x-0 origin-right group-hover:opacity-100 group-hover:scale-x-100 group-hover:origin-left"
        }`}
      />
    </Link>
  );
}

const ServiceCategory = memo(function ServiceCategory({
  cat,
}: {
  cat: (typeof servicesMega)[number];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => {
        setCardHover(false);
        setActiveIndex(null);
      }}
      className={`
        h-full rounded-2xl border border-white/10 bg-white/5 p-5
        transition-all duration-300
        ${
          cardHover
            ? "shadow-[0_0_0_1px_rgba(34,211,238,0.35)]"
            : ""
        }
      `}
    >
      {/* CATEGORY HEADER */}
      <div className="flex items-center gap-2">
        <cat.icon className="h-5 w-5 text-cyan-300" />
        <p className="text-base font-semibold text-white">
          {cat.category}
        </p>
      </div>

      {/* SERVICES LIST */}
      <div className="mt-4 space-y-1">
        {cat.items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative block px-1 py-1 text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.name}

              {/* UNDERLINE ONLY */}
              <span
                className={`
                  pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full
                  bg-cyan-400 transition-transform duration-300 ease-out
                  ${isActive ? "scale-x-100" : "scale-x-0"}
                  origin-left
                `}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
});

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/85 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          : "border-b border-white/10 bg-black/60 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-4">
  {/* LOGO — unchanged size */}
  <div className="relative h-32 w-20 overflow-hidden rounded-3xl">
    <Image
      src="/brand/Logo.png"
      alt="CyberLok Logo"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* BRAND TEXT */}
  <div className="flex flex-col leading-none">
    <div
      className="
        text-lg font-semibold tracking-tight text-white
        transition-colors duration-300
        group-hover:text-cyan-300
      "
    >
      CyberLok
    </div>

    <div
      className="
        mt-1 text-xs uppercase tracking-[0.28em]
        text-white/50
      "
    >
      Security for all
    </div>
  </div>
</Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="/" label="Home" active={isRouteActive(pathname, "/")} />

            {/* SERVICES */}
            <motion.div
              className="relative"
              onHoverStart={() => setServicesOpen(true)}
              onHoverEnd={() => setServicesOpen(false)}
            >
              <button className="group inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white">
                Services <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="
                      fixed left-1/2 top-[84px] w-[1280px] -translate-x-1/2
                      rounded-3xl border border-white/10
                      bg-black/95 backdrop-blur-2xl shadow-2xl
                    "
                  >
                    <div className="grid grid-cols-4 gap-6 p-6">
                      {servicesMega.map((cat) => (
                        <ServiceCategory key={cat.category} cat={cat} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <NavItem href="/solutions" label="Solutions" active={isRouteActive(pathname, "/solutions")} />
            <NavItem href="/about" label="About" active={isRouteActive(pathname, "/about")} />
            <NavItem href="/resources" label="Resources" active={isRouteActive(pathname, "/resources")} />
            <NavItem href="/contact" label="Contact" active={isRouteActive(pathname, "/contact")} />
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
  href="/incident-response"
  className="
    group relative inline-flex items-center gap-2
    rounded-full border border-cyan-400/30
    bg-cyan-500/10 px-6 py-2.5
    text-sm font-semibold text-cyan-200
    backdrop-blur-md
    transition hover:bg-cyan-500/20
  "
>
  {/* subtle glow */}
  <span className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/20 blur-lg opacity-0 transition group-hover:opacity-100" />

  <span className="relative">
    Cyber incident ? Get immediate support
  </span>
</Link>
          </div>

          {/* MOBILE */}
          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
