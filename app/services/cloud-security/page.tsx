"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  Database,
  FileText,
  CheckCircle2,
  Zap,
  Server,
  Globe,
  Eye,
  Key,
} from "lucide-react";

const phases = [
  {
    title: "Cloud Discovery & Inventory",
    desc: "Comprehensive discovery and inventory of all cloud assets across multi-cloud environments.",
    icon: Globe,
    activities: [
      "AWS, Azure, and GCP asset enumeration",
      "IAM role and permission mapping",
      "S3/Azure Blob/GCS bucket discovery",
      "Serverless function inventory",
    ],
  },
  {
    title: "Identity & Access Management",
    desc: "Deep analysis of IAM configurations, policies, and access patterns.",
    icon: Key,
    activities: [
      "Overpermissive IAM policies",
      "Unused permissions and roles",
      "Cross-account trust relationships",
      "Service principal abuse paths",
    ],
  },
  {
    title: "Data Security Assessment",
    desc: "Evaluating data storage security and encryption configurations.",
    icon: Database,
    activities: [
      "Unencrypted data stores",
      "Public bucket/object exposure",
      "Database access controls",
      "Backup and snapshot exposure",
    ],
  },
  {
    title: "Network Security Review",
    desc: "Analyzing VPC configurations, security groups, and network segmentation.",
    icon: Server,
    activities: [
      "Security group misconfigurations",
      "Network ACL analysis",
      "VPN and direct connect security",
      "Private link/service endpoint exposure",
    ],
  },
  {
    title: "Serverless & Container Security",
    desc: "Testing serverless functions and container workloads for vulnerabilities.",
    icon: Zap,
    activities: [
      "Function permission escalation",
      "Container image vulnerabilities",
      "Kubernetes/EKS/GKE security",
      "Secrets management review",
    ],
  },
  {
    title: "Logging & Monitoring Assessment",
    desc: "Evaluating cloud-native security monitoring and alerting capabilities.",
    icon: Eye,
    activities: [
      "CloudTrail/CloudWatch coverage",
      "GuardDuty/Defender alert review",
      "SIEM integration verification",
      "Incident response capability",
    ],
  },
  {
    title: "Compliance Mapping",
    desc: "Assessing alignment with cloud security benchmarks and compliance frameworks.",
    icon: ShieldCheck,
    activities: [
      "CIS Cloud Benchmarks",
      "AWS Well-Architected Review",
      "SOC 2 cloud controls",
      "GDPR/PDPA data handling",
    ],
  },
  {
    title: "Reporting & Remediation",
    desc: "Detailed findings with cloud-specific remediation guidance.",
    icon: FileText,
    activities: [
      "Executive risk summary",
      "Technical findings with severity",
      "Terraform/Pulumi fixes",
      "Infrastructure as Code guidance",
    ],
  },
];

const cloudPlatforms = [
  { name: "Amazon Web Services", desc: "EC2, S3, IAM, Lambda, VPC, EKS" },
  { name: "Microsoft Azure", desc: "VMs, Blob Storage, AAD, Functions, AKS" },
  { name: "Google Cloud Platform", desc: "GCE, GCS, IAM, Cloud Functions, GKE" },
  { name: "Multi-Cloud", desc: "Combined AWS, Azure, and GCP environments" },
];

const complianceCoverage = [
  { name: "CIS Benchmarks", desc: "Cloud infrastructure security benchmarks" },
  { name: "SOC 2", desc: "Trust service criteria for cloud services" },
  { name: "ISO 27001", desc: "Information security management" },
  { name: "GDPR/PDPA", desc: "Data protection compliance" },
  { name: "PCI DSS", desc: "Payment card industry security" },
  { name: "HIPAA", desc: "Healthcare cloud compliance" },
];

const tools = [
  "Prowler (AWS Security)",
  "ScoutSuite (Multi-Cloud)",
  "CloudSploit",
  "PacBot (CloudSec)",
  "Wiz",
  "Prisma Cloud",
  "AWS Config Rules",
  "CloudMapper",
  "S3Scanner",
  "Nuclei Cloud Templates",
];

const deliverables = [
  "Cloud asset inventory report",
  "IAM permission analysis",
  "Data exposure findings",
  "Network security gaps",
  "Remediation runbooks",
  "Terraform fixes",
  "Compliance gap analysis",
  "Free retesting after fixes",
];

const stats = [
  { value: "200+", label: "Cloud Assessments" },
  { value: "3K+", label: "Misconfigurations Found" },
  { value: "100%", label: "Multi-Cloud Coverage" },
  { value: "72hrs", label: "Report Delivery" },
];

const faqs = [
  {
    q: "Do you test all major cloud providers?",
    a: "Yes, we provide comprehensive testing for AWS, Azure, GCP, and multi-cloud environments. Our team holds certifications across all major platforms.",
  },
  {
    q: "What types of cloud misconfigurations do you find?",
    a: "We identify over 200+ cloud-specific misconfigurations including public data exposure, IAM privilege escalation, network exposure, and monitoring gaps.",
  },
  {
    q: "Do you provide Infrastructure as Code fixes?",
    a: "Yes, we provide remediation guidance in Terraform, CloudFormation, and Pulumi formats to help you fix issues at the infrastructure level.",
  },
  {
    q: "Can you test our CI/CD pipeline security?",
    a: "Absolutely, we assess CI/CD systems, secret management, build process security, and deployment pipeline vulnerabilities in cloud environments.",
  },
];

export default function CloudSecurityPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_50%)]" />
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Cloud Security" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70"
            >
              <Cloud className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
              Pinpoint - Cloud Security Assessment
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Secure Your{" "}
              <span className="text-cyan-300">Cloud Infrastructure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 sm:mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok&apos;s cloud security assessment covers AWS, Azure, and GCP environments. We identify misconfigurations,
              data exposure risks, and IAM weaknesses before attackers exploit them.
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
                Request Cloud Assessment <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View All Services
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
                Our Cloud Security Methodology
              </h2>
              <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Systematic assessment following CIS Benchmarks, AWS Well-Architected, and cloud-native security best practices.
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
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-0 top-6 hidden md:flex items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2, type: "spring" }}
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
                          <div className="flex items-center gap-2">
                            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
                              {i + 1}
                            </span>
                            <span className="md:hidden text-xs font-semibold text-cyan-400">0{i + 1}</span>
                            <h3 className="text-base sm:text-lg font-semibold">{phase.title}</h3>
                          </div>
                          
                          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                            {phase.desc}
                          </p>
                          
                          <ul className="mt-3 space-y-1.5">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mt-0.5 shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
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

      {/* PLATFORMS & COMPLIANCE */}
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
                  Cloud Platforms We Cover
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Expert testing across all major cloud service providers.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {cloudPlatforms.map((platform, i) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <Cloud className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{platform.name}</p>
                        <p className="text-xs text-white/60">{platform.desc}</p>
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
                  Compliance Mapping
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/65">
                  Testing aligned with major cloud security frameworks.
                </p>
                <div className="mt-6 sm:mt-8 space-y-3">
                  {complianceCoverage.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                    >
                      <ShieldCheck className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-white/60">{item.desc}</p>
                      </div>
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
                Industry-leading cloud security assessment tools.
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
                  <Cloud className="h-4 w-4 text-cyan-400 shrink-0" />
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
                Comprehensive deliverables with cloud-specific remediation.
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
                    Secure your cloud infrastructure
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
                    Get comprehensive cloud security assessment from Cyberlok. Identify misconfigurations and data exposure risks.
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
      <ScrollToTop />
    </div>
  );
}

