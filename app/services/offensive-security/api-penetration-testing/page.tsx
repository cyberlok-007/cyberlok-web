"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  LockKeyhole,
  Globe,
  Key,
  Database,
  Bug,
  FileText,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const phases = [
  {
    title: "API Discovery & Mapping",
    desc: "Comprehensive identification and documentation of all API endpoints, parameters, and data flows.",
    icon: Globe,
    activities: [
      "Endpoint enumeration and documentation",
      "HTTP methods analysis (GET, POST, PUT, DELETE)",
      "Parameter identification",
      "API schema analysis (OpenAPI/Swagger)",
    ],
  },
  {
    title: "Authentication Testing",
    desc: "Evaluating the strength and security of API authentication mechanisms.",
    icon: LockKeyhole,
    activities: [
      "JWT token security analysis",
      "OAuth 2.0 vulnerability testing",
      "API key authentication flaws",
      "Session management issues",
    ],
  },
  {
    title: "Authorization Testing",
    desc: "Identifying flaws in access control that could lead to unauthorized data access.",
    icon: Key,
    activities: [
      "Horizontal privilege escalation",
      "Vertical privilege escalation",
      "Broken Object Level Authorization (BOLA)",
      "Function Level Authorization bypass",
    ],
  },
  {
    title: "Injection Attacks",
    desc: "Testing for various injection vulnerabilities that could compromise API security.",
    icon: Bug,
    activities: [
      "SQL injection testing",
      "NoSQL injection testing",
      "Command injection",
      "XSS via API responses",
    ],
  },
  {
    title: "Data Exposure Testing",
    desc: "Identifying excessive or sensitive data exposure through API responses.",
    icon: Database,
    activities: [
      "Sensitive data enumeration",
      "PII leakage detection",
      "Stack trace exposure",
      "Debug mode identification",
    ],
  },
  {
    title: "Rate Limiting & Business Logic",
    desc: "Testing API limits and business logic flaws that could be exploited.",
    icon: Terminal,
    activities: [
      "Rate limiting bypass techniques",
      "Mass assignment vulnerabilities",
      "Workflow manipulation",
      "Numeric manipulation attacks",
    ],
  },
  {
    title: "API-Specific Vulnerabilities",
    desc: "Testing for modern API-specific security issues including GraphQL and REST.",
    icon: AlertTriangle,
    activities: [
      "GraphQL introspection attacks",
      "REST API security misconfigurations",
      "API versioning vulnerabilities",
      "CORS policy testing",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Detailed documentation of findings with specific remediation guidance.",
    icon: FileText,
    activities: [
      "Detailed vulnerability reports",
      "CVSS scoring and risk rating",
      "Remediation roadmap",
      "Free retest after fixes",
    ],
  },
];

const apiTypes = [
  { name: "REST APIs", desc: "Testing for RESTful API security vulnerabilities" },
  { name: "GraphQL APIs", desc: "GraphQL-specific security testing including introspection" },
  { name: "SOAP APIs", desc: "XML-based web service security assessment" },
  { name: "gRPC APIs", desc: "High-performance API security testing" },
  { name: "Webhooks", desc: "Callback URL security assessment" },
  { name: "Microservices", desc: "Inter-service communication security" },
];

const owaspCoverage = [
  { code: "API1", title: "Broken Object Level Authorization", status: "Covered" },
  { code: "API2", title: "Broken Authentication", status: "Covered" },
  { code: "API3", title: "Broken Object Property Level Authorization", status: "Covered" },
  { code: "API4", title: "Unrestricted Resource Consumption", status: "Covered" },
  { code: "API5", title: "Broken Function Level Authorization", status: "Covered" },
  { code: "API6", title: "Unrestricted Access to Sensitive Business Flows", status: "Covered" },
  { code: "API7", title: "Server Side Request Forgery", status: "Covered" },
  { code: "API8", title: "Security Misconfiguration", status: "Covered" },
  { code: "API9", title: "Improper Inventory Management", status: "Covered" },
  { code: "API10", title: "Insufficient Logging & Monitoring", status: "Covered" },
];

const tools = [
  "Burp Suite Professional",
  "Postman (Security Testing)",
  "OWASP ZAP",
  "SQLMap",
  "Nuclei",
  "GraphQL Voyager",
  "Insomnia Security Plugins",
  "JWT_Tool",
  "Gobuster (API fuzzing)",
  "Amass (API discovery)",
];

const deliverables = [
  "API security assessment report",
  "Endpoint vulnerability inventory",
  "CVSS scoring and risk rating",
  "Attack scenario documentation",
  "OWASP API Security Top 10 mapping",
  "Remediation recommendations",
  "API security best practices guide",
  "Free retesting after fixes",
];

const stats = [
  { value: "400+", label: "APIs Tested" },
  { value: "3K+", label: "Vulnerabilities Found" },
  { value: "15min", label: "Avg. Response Time" },
  { value: "99%", label: "Client Satisfaction" },
];

const faqs = [
  {
    q: "What's the difference between API testing and web application testing?",
    a: "API testing focuses specifically on the backend interface that powers applications. While web app testing looks at the frontend UI, API testing examines authentication, authorization, data handling, and business logic at the API layer.",
  },
  {
    q: "Do you test GraphQL and REST APIs?",
    a: "Yes, we test both GraphQL and REST APIs, as well as other API types like SOAP, gRPC, and microservices. Each API type has its own set of potential vulnerabilities we evaluate.",
  },
  {
    q: "Do you provide API documentation review?",
    a: "Yes, we review your API documentation (OpenAPI/Swagger specs) as part of our testing to understand the intended behavior and identify discrepancies between documentation and implementation.",
  },
  {
    q: "Can you test authenticated APIs?",
    a: "Yes, we can work with your team to obtain test credentials or API keys. We can test both authenticated and unauthenticated endpoints depending on your requirements.",
  },
];

export default function APIPenetrationTestingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="px-2 py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Offensive Security", href: "/services/offensive-security" }, { label: "API Penetration Testing" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Terminal className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              API Penetration Testing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Secure Your APIs{" "}
              <span className="text-cyan-300">Against Modern Threats</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s API penetration testing covers REST, GraphQL, and SOAP APIs against the OWASP API Security
              Top 10. We identify authentication flaws, authorization bypasses, and data exposure risks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Request API Security Test <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services/offensive-security"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View All Offensive Services
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* METHODOLOGY */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Our API Security Testing Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive testing following OWASP API Security Top 10 and industry best practices.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[20px] sm:left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent hidden md:block" />

              <div className="space-y-4 sm:space-y-6">
                {phases.map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="relative"
                  >
                    <div className="absolute left-0 top-6 hidden md:flex items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.12 + 0.2, type: "spring" }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      >
                        <phase.icon className="h-6 w-6 text-cyan-300" />
                      </motion.div>
                    </div>

                    <div className="md:ml-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/[0.08] transition hover:border-cyan-400/20">
                      <div className="flex items-start gap-4">
                        <span className="flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                          <phase.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                        </span>
                        
                        <div className="flex-1">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.12 + 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
                              {i + 1}
                            </span>
                            <span className="md:hidden text-xs font-semibold text-cyan-400">0{i + 1}</span>
                            <h3 className="text-base sm:text-lg font-semibold">{phase.title}</h3>
                          </motion.div>
                          
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
                            className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed"
                          >
                            {phase.desc}
                          </motion.p>
                          
                          <motion.ul
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.12 + 0.3 }}
                            className="mt-3 space-y-1.5"
                          >
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mt-0.5 shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* API TYPES & OWASP */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  API Types We Test
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Security testing across all major API architectures and protocols.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {apiTypes.map((type, i) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Terminal className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{type.name}</p>
                        <p className="text-xs text-white/60">{type.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  OWASP API Security Top 10
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Full coverage of the OWASP API Security Top 10 vulnerabilities.
                </p>
                <div className="mt-6 sm:mt-8 space-y-2.5">
                  {owaspCoverage.map((item, i) => (
                    <motion.div
                      key={item.code}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center justify-between rounded-xl bg-white/5 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-cyan-400">{item.code}</span>
                        <span className="text-sm text-white/70">{item.title}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-0.5 text-xs text-cyan-300">
                        <CheckCircle2 className="h-3 w-3" />
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* TOOLS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Tools We Use
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Industry-leading tools for comprehensive API security testing.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
                >
                  <Terminal className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="text-sm text-white/70">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                What You Receive
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Comprehensive deliverables for developers and stakeholders.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-white/70">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
                >
                  <p className="font-semibold text-sm sm:text-base">{faq.q}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Secure your APIs today
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive API security testing from Cyberlok. Identify vulnerabilities before attackers do.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 sm:px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition w-full sm:w-auto mt-4 md:mt-0"
                >
                  Get a Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
