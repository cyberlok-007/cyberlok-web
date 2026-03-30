"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bug,
  ChevronDown,
  Cloud,
  FileText,
  Menu,
  Radar,
  X,
  Users,
  Star,
  MessageSquareQuote,
  BookOpen,
  Newspaper,
  Download,
  Globe,
  Shield,
  Code2,
  Mail,
  Gamepad2,
  Eye,
  Settings,
  GraduationCap,
  Building2,
  FileCheck,
  Smartphone,
  Network,
  Server,
  Target,
  Lock,
  Wifi,
  Key,
  ClipboardCheck,
  Package,
  Wrench,
  Layers,
  BarChart3,
  ScrollText,
  ShieldCheck,
  Search,
  Database,
  Cpu,
  HardDrive,
} from "lucide-react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import StarBorder from "@/components/StarBorder/StarBorder";
import ShinyText from "../ShinyText";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const servicesMega = [
  {
    category: "Sentinel",
    icon: Radar,
    items: [
      { name: "Managed Detection & Response (MDR)", href: "/services/mdr", icon: Shield },
      { name: "SOC as a Service", href: "/services/soc-as-a-service", icon: Eye },
      { name: "Digital Forensics Investigations", href: "/services/digital-forensics", icon: Search },
      { name: "Cybersecurity Consulting", href: "/services/consulting", icon: BarChart3 },
    ],
  },
  {
    category: "Pinpoint",
    icon: Bug,
    items: [
      { name: "Web Application Penetration Testing", href: "/services/offensive-security/web-application-pentesting", icon: Globe },
      { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment", icon: Bug },
      { name: "Penetration Testing", href: "/services/penetration-testing", icon: Target },
      { name: "Red Teaming", href: "/services/red-teaming", icon: Shield },
      { name: "Secure Code Review", href: "/services/secure-code-review", icon: Code2 },
      { name: "Cloud Security Assessment", href: "/services/cloud-security", icon: HardDrive },
      { name: "Phishing Simulation", href: "/services/phishing-simulation", icon: Mail },
      { name: "Breach & Attack Simulation", href: "/services/breach-attack-simulation", icon: Gamepad2 },
      { name: "Secure Software Development", href: "/services/secure-development", icon: Lock },
    ],
  },
  {
    category: "MSP 24×7",
    icon: Cloud,
    items: [
      { name: "Security Solutions Implementation", href: "/services/security-implementation", icon: Wrench },
      { name: "Security Patching Services", href: "/services/security-patching", icon: Layers },
      { name: "Patch Management Services", href: "/services/patch-management", icon: ClipboardCheck },
      { name: "Configuration Audits", href: "/services/configuration-audits", icon: Settings },
    ],
  },
  {
    category: "nCompass",
    icon: Users,
    items: [
      { name: "Security Awareness Training", href: "/services/security-awareness-training", icon: GraduationCap },
      { name: "Cybersecurity Staffing Services", href: "/services/cybersecurity-staffing", icon: Building2 },
      { name: "Governance, Risk & Compliance", href: "/services/grc-compliance", icon: ShieldCheck },
      { name: "SBOM Management", href: "/services/sbom-management", icon: Package },
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
    <ClickSpark
      sparkColor="#22d3ee"
      sparkSize={4}
      sparkRadius={12}
      sparkCount={6}
      duration={280}
    >
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
    </ClickSpark>
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
        ${cardHover ? "shadow-[0_0_0_1px_rgba(34,211,238,0.35)]" : ""}
      `}
    >
      <div className="flex items-center gap-2">
        <cat.icon className="h-5 w-5 text-cyan-300" />
        <p className="text-base font-semibold text-white">{cat.category}</p>
      </div>

      <div className="mt-4 space-y-1">
        {cat.items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative flex items-center gap-2.5 px-1 py-1 text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.icon && (
                <item.icon className="h-3.5 w-3.5 text-cyan-400/70 shrink-0" />
              )}
              <span className="flex-1">{item.name}</span>
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
  const [socialProofOpen, setSocialProofOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (mobileOpen || servicesOpen || socialProofOpen || resourcesOpen) {
      setMobileOpen(false);
      setServicesOpen(false);
      setSocialProofOpen(false);
      setResourcesOpen(false);
    }
  }

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
          <Link href="/" className="group flex items-center gap-4 mr-auto">
            <div className="relative h-32 w-20 overflow-hidden rounded-3xl">
              <Image
                src="/brand/Logo.png"
                alt="CyberLok Logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <div className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                CyberLok
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.28em] text-white/50">
                Security for all
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="/" label="Home" active={isRouteActive(pathname, "/")} />

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
                    className="fixed left-1/2 top-[84px] w-[1280px] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl"
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

            <motion.div
              className="relative"
              onHoverStart={() => setSocialProofOpen(true)}
              onHoverEnd={() => setSocialProofOpen(false)}
            >
              <button className="group inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-white/80 hover:text-white">
                Social Proof <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {socialProofOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl"
                  >
                    <div className="p-3 space-y-1">
                      <Link
                        href="/testimonials"
                        className="flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <MessageSquareQuote className="h-4 w-4 mt-0.5 text-cyan-400" />
                        <div>
                          <span className="block font-medium">Testimonials</span>
                          <span className="text-xs text-white/50">What our clients say about us</span>
                        </div>
                      </Link>
                      <Link
                        href="/case-studies"
                        className="flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <BookOpen className="h-4 w-4 mt-0.5 text-cyan-400" />
                        <div>
                          <span className="block font-medium">Case Studies</span>
                          <span className="text-xs text-white/50">Detailed security success stories</span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <NavItem href="/about" label="About" active={isRouteActive(pathname, "/about")} />

            <motion.div
              className="relative"
              onHoverStart={() => setResourcesOpen(true)}
              onHoverEnd={() => setResourcesOpen(false)}
            >
              <button className="group inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white">
                Resources <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl"
                  >
                    <div className="p-3 space-y-1">
                      <Link
                        href="/blog"
                        className="flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <Newspaper className="h-4 w-4 mt-0.5 text-cyan-400" />
                        <div>
                          <span className="block font-medium">Blog</span>
                          <span className="text-xs text-white/50">Security insights and updates</span>
                        </div>
                      </Link>
                      <Link
                        href="/resources"
                        className="flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <Download className="h-4 w-4 mt-0.5 text-cyan-400" />
                        <div>
                          <span className="block font-medium">Resources</span>
                          <span className="text-xs text-white/50">Whitepapers & threat reports</span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <NavItem href="/contact" label="Contact" active={isRouteActive(pathname, "/contact")} />
          </nav>

          {/* CTA */}
          <div className="hidden md:flex ml-auto">
            <StarBorder as="div" color="cyan" speed="2.5s" thickness={3} className="rounded-full">
              <ClickSpark sparkColor="#22d3ee" sparkSize={6} sparkRadius={16} sparkCount={8} duration={380}>
                <Link href="/incident-response" className="group relative inline-flex items-center">
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/20 blur-lg opacity-0 transition group-hover:opacity-100" />
                  <ShinyText
                    text="Cyber Incident? Get Immediate Support"
                    speed={4}
                    color="#67e8f9"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    className="relative whitespace-nowrap text-sm font-semibold"
                  />
                </Link>
              </ClickSpark>
            </StarBorder>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="space-y-4">
                <NavItem href="/" label="Home" active={isRouteActive(pathname, "/")} />
                <NavItem href="/solutions" label="Solutions" active={isRouteActive(pathname, "/solutions")} />
                <NavItem href="/about" label="About" active={isRouteActive(pathname, "/about")} />
                <NavItem href="/contact" label="Contact" active={isRouteActive(pathname, "/contact")} />
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setResourcesOpen((v) => !v)}
                  className="flex w-full items-center justify-between text-sm font-semibold text-white"
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <Link
                        href="/blog"
                        className="block pl-4 text-sm text-white/70 hover:text-white"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/resources"
                        className="block pl-4 text-sm text-white/70 hover:text-white"
                      >
                        Resources
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setSocialProofOpen((v) => !v)}
                  className="flex w-full items-center justify-between text-sm font-semibold text-white"
                >
                  Social Proof
                  <ChevronDown className={`h-4 w-4 transition-transform ${socialProofOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {socialProofOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <Link
                        href="/testimonials"
                        className="block pl-4 text-sm text-white/70 hover:text-white"
                      >
                        Testimonials
                      </Link>
                      <Link
                        href="/case-studies"
                        className="block pl-4 text-sm text-white/70 hover:text-white"
                      >
                        Case Studies
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between text-sm font-semibold text-white"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 overflow-hidden"
                    >
                      {servicesMega.map((cat) => (
                        <div key={cat.category}>
                          <div className="mb-2 flex items-center gap-2">
                            <cat.icon className="h-4 w-4 text-cyan-300" />
                            <p className="text-sm font-semibold text-white">{cat.category}</p>
                          </div>

                          <div className="space-y-2 pl-6">
                            {cat.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm text-white/70 hover:text-white"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/incident-response"
                className="block rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-300 hover:bg-cyan-400/20"
              >
                Cyber Incident? Get Immediate Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
