"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Cpu,
  Rocket,
  Landmark,
  User,
  CheckCircle2,
  Shield,
  AlertTriangle,
  Star,
  Lock,
  Database,
  Zap,
  Phone,
  Monitor,
  Cloud,
  Mail,
  FileCheck,
  Eye,
  KeyRound,
  Server,
  Bug,
  Network,
  UserCheck,
  FileSearch,
  ShieldAlert,
  Award,
  Target,
  Smartphone,
  CreditCard,
  EyeOff,
  Fingerprint,
  Heart,
  UserCog,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

interface Challenge {
  title: string;
  desc: string;
  icon: LucideIcon;
  stat: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  price?: string;
}

interface Package {
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  desc: string;
  features: string[];
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
}

interface SegmentData {
  tagline: string;
  subtitle: string;
  heroCta?: string;
  openingStatement?: string;
  openingDesc?: string;
  stats: Stat[];
  color: string;
  challenges: Challenge[];
  services: Service[];
  packages: Package[];
  compliance: string[];
  testimonials: Testimonial[];
}

interface Segment {
  id: string;
  label: string;
  icon: LucideIcon;
}

const segments: Segment[] = [
  { id: "individuals", label: "Individuals", icon: User },
  { id: "smes", label: "SMEs", icon: Building2 },
  { id: "corporates", label: "Corporates", icon: Cpu },
  { id: "enterprises", label: "Enterprises", icon: Rocket },
  { id: "government", label: "Government", icon: Landmark },
];

const segmentData: Record<string, SegmentData> = {
  individuals: {
    tagline: "Your Phone Knows More About You Than Your Family Does",
    subtitle: "Bank passwords. Aadhaar details. WhatsApp chats. Location history. All sitting on a device that most people have never once security-checked.",
    heroCta: "Get Your Free Device Check",
    openingStatement: "We are not selling you fear. We are telling you what we see every week in our lab in Mumbai.",
    openingDesc: "People walk in thinking their phone is fine. We find stalkerware installed by a jealous partner. Banking trojans they downloaded from a WhatsApp forward. Spyware that has been quietly recording calls for months. The threat is real. It is not complicated. And it is easier to fix than most people think.",
    stats: [
      { value: "₹249", label: "Device Audit Starting" },
      { value: "24/7", label: "Dark Web Monitoring" },
      { value: "100K+", label: "Devices Secured" },
      { value: "1", label: "Flat Fee, No Subscription" },
    ],
    color: "cyan",
    challenges: [
      { 
        title: "Your UPI is not as safe as you think", 
        desc: "Fraudsters do not hack your bank. They hack you. A fake customer care call, a screen sharing request, a 'refund' that is actually a debit permission. We have seen people lose ₹2 lakh in under 4 minutes. Your bank will not always help you recover it.",
        icon: CreditCard,
        stat: "₹2 lakh lost in under 4 minutes"
      },
      { 
        title: "Your phone has apps you forgot you installed", 
        desc: "That flashlight app from 2021. The free VPN. The 'PDF scanner' from a sketchy website. Many of these have permissions to read your messages, access your contacts and run in the background. You gave them permission without reading it.",
        icon: Smartphone,
        stat: "Most apps have unnecessary permissions"
      },
      { 
        title: "Someone may already have access to your accounts", 
        desc: "Check your Gmail. Check your Facebook. When did you last look at which devices are logged in? We regularly find old sessions from devices people sold, gave away or lost — still active, still synced.",
        icon: Eye,
        stat: "Old sessions often remain active"
      },
      { 
        title: "Your data is already being sold", 
        desc: "Somewhere on the internet right now there is a database with your phone number, your email, your approximate location and possibly your Aadhaar-linked details. It was leaked from an app, a hospital, a shop that collected your KYC. You do not know about it. We can find it.",
        icon: Database,
        stat: "Data leaked from apps, hospitals, shops"
      },
      { 
        title: "Children online are the easiest target", 
        desc: "Predators do not always look like predators. They look like 14-year-olds in gaming chats. Free Robux offers. Study group invites. A conversation that slowly becomes private. Parents are usually the last to find out.",
        icon: Heart,
        stat: "Parents are usually the last to know"
      },
    ],
    services: [
      { 
        icon: Smartphone, 
        title: "Mobile Device Security Test", 
        desc: "We physically take your device, run a full security audit — check for malware, spyware, suspicious apps, unusual permissions, network vulnerabilities, data leaks — and hand you back a plain-language report.",
        price: "₹249 for Android | ₹499 for iOS"
      },
      { 
        icon: EyeOff, 
        title: "Dark Web Check", 
        desc: "We check if your email, phone number or personal data is circulating on known breach databases and dark web markets. One scan. Clear result. If it is there, we tell you exactly what was leaked and what to change.",
        price: "₹199"
      },
      { 
        icon: Lock, 
        title: "Account Security Review", 
        desc: "We go through your email, social accounts and banking apps with you — check login history, connected apps, recovery settings, two-factor status — and fix everything that should not be there.",
        price: "Included in audits"
      },
      { 
        icon: Heart, 
        title: "Family Security Package", 
        desc: "Covers up to 5 devices — yours, your spouse, your parents, your children. One assessment, one report, one flat price. Because your family is only as secure as its weakest device.",
        price: "₹1,799 for up to 5 devices"
      },
    ],
    packages: [
      {
        name: "Basic Audit",
        price: "₹249",
        period: "Android",
        highlight: false,
        desc: "Essential security check for your Android device",
        features: [
          "Malware & spyware detection",
          "App permission review",
          "Network vulnerability scan",
          "Data leak check",
          "Plain-language report",
          "Fix recommendations",
        ],
      },
      {
        name: "Deep Audit",
        price: "₹399",
        period: "Android",
        highlight: true,
        desc: "Most popular - Comprehensive Android security assessment",
        features: [
          "Everything in Basic Audit",
          "Advanced root detection",
          "APK analysis for sideloaded apps",
          "SMS & call log review",
          "Network traffic analysis",
          "1-hour consultation included",
        ],
      },
      {
        name: "Professional Audit",
        price: "₹599",
        period: "Android / iOS",
        highlight: false,
        desc: "Complete security assessment with expert analysis",
        features: [
          "Everything in Deep Audit",
          "Forensic analysis of device",
          "Social media account audit",
          "Banking app security check",
          "2-hour consultation with expert",
          "Priority support (30 days)",
        ],
      },
    ],
    compliance: ["No subscription", "No hidden renewal", "Pay once, get your report"],
    testimonials: [
      {
        name: "Suresh, 44",
        role: "Business Owner, Andheri",
        quote: "I got a call from someone who knew my name, my bank, my last transaction amount and my registered mobile number. He said he was from the fraud department. I nearly gave him my OTP.",
        result: "Cyber fraud prevented",
      },
      {
        name: "Anonymous",
        role: "Professional, Mumbai",
        quote: "My ex had installed something on my phone before we broke up. Your team found it in 20 minutes. I had no idea it was there for 8 months.",
        result: "Stalkerware removed",
      },
      {
        name: "Parent",
        role: "Concerned Parent, Thane",
        quote: "My daughter was talking to someone online who turned out to be an adult man. We only found out because Cyberlok checked her phone when she complained it was slow.",
        result: "Online predator identified",
      },
    ],
  },
  smes: {
    tagline: "Enterprise-Grade Security for Growing Indian Businesses",
    subtitle: "Affordable, compliant, and scalable security solutions designed specifically for SMEs navigating the Indian threat landscape.",
    stats: [
      { value: "48hrs", label: "Time to Protection" },
      { value: "₹4,999", label: "Starting Price/mo" },
      { value: "73%", label: "Incident Reduction" },
      { value: "200+", label: "SMEs Protected" },
    ],
    color: "cyan",
    challenges: [
      { title: "Limited Security Budget", desc: "Enterprise threats with startup budgets. Attackers know you lack defenses.", icon: CreditCard, stat: "₹50L avg breach cost for SMEs" },
      { title: "No Dedicated Security Team", desc: "IT handles everything. No time for security, compliance, or threat monitoring.", icon: UserCheck, stat: "67% of SMEs have no security staff" },
      { title: "Vendor & Supplier Risk", desc: "Third-party vendors often become attack vectors. UPI payments, GST portals, and cloud tools all pose risks.", icon: Network, stat: "40% of breaches start with vendors" },
      { title: "Employee Awareness Gap", desc: "Phishing emails targeting staff. One wrong click can compromise your entire business.", icon: Mail, stat: "82% of breaches involve human error" },
    ],
    services: [
      { icon: Bug, title: "Vulnerability Assessment", desc: "Quarterly scanning of web apps, servers, and network infrastructure. Identify weaknesses before attackers do." },
      { icon: Shield, title: "Endpoint Protection", desc: "Advanced antivirus, EDR, and patch management for all devices. Protect laptops, servers, and POS systems." },
      { icon: Mail, title: "Email Security", desc: "Phishing protection, spam filtering, and BEC detection for business email accounts." },
      { icon: UserCheck, title: "Security Awareness Training", desc: "Monthly phishing simulations and training. Turn employees into your first line of defense." },
      { icon: FileCheck, title: "DPDP Compliance", desc: "Data protection assessment and compliance roadmap for Digital Personal Data Protection Act." },
      { icon: Cloud, title: "Cloud Security", desc: "Secure configuration review for AWS, Azure, Google Cloud, and SaaS applications like Tally, Zoho, and Busy." },
    ],
    packages: [
      {
        name: "Secure Starter",
        price: "₹4,999",
        period: "per month",
        desc: "Essential security for growing businesses",
        features: [
          "Quarterly Vulnerability Assessment",
          "Basic Endpoint Protection (10 devices)",
          "Email Security & Spam Filtering",
          "Security Awareness Training (10 users)",
          "Monthly Security Newsletter",
          "Email Support (48hr response)",
          "Basic Compliance Checklist",
        ],
      },
      {
        name: "Growth Shield",
        price: "₹14,999",
        period: "per month",
        highlight: true,
        desc: "Complete protection for ambitious SMEs",
        features: [
          "Bi-annual Penetration Testing",
          "Advanced Endpoint Protection (25 devices)",
          "24/7 SOC Monitoring",
          "Dark Web Monitoring for Business Data",
          "Security Awareness Training (25 users)",
          "DPDP Act Compliance Assessment",
          "Incident Response Planning",
          "Quarterly Security Reviews",
          "Priority Support (4hr response)",
        ],
      },
      {
        name: "Scale Pro",
        price: "₹29,999",
        period: "per month",
        desc: "Enterprise-grade security for scaling teams",
        features: [
          "Full Application Penetration Testing",
          "SOC-as-a-Service (unlimited devices)",
          "Cloud Security Assessment",
          "Security Awareness Training (unlimited)",
          "Red Team Exercise (annual)",
          "DPDP & RBI Compliance Support",
          "Dedicated Security Engineer",
          "Monthly CISO Advisory Sessions",
          "Board-ready Security Reports",
        ],
      },
    ],
    compliance: ["CERT-In Incident Reporting", "DPDP Act Compliance", "GST Data Security", "RBI Payment Security"],
    testimonials: [
      {
        name: "Vikram Mehta",
        role: "CEO, TechStart India",
        quote: "Before Cyberlok, our security was just an antivirus. Now we have real protection, DPDP compliance confidence, and I actually understand our risks.",
        result: "Zero security incidents in 18 months",
      },
      {
        name: "Sunita Reddy",
        role: "Operations Director, RetailCo India",
        quote: "Cyberlok&apos;s Growth package gave us enterprise security at SME prices. The ROI was visible within the first quarter.",
        result: "73% reduction in security incidents",
      },
      {
        name: "Arun Patel",
        role: "Founder, CloudFirst Solutions",
        quote: "As a bootstrapped startup, security seemed like a luxury. Cyberlok showed us it&apos;s a necessity—and made it affordable in rupees.",
        result: "DPDP compliant in 3 months",
      },
    ],
  },
  corporates: {
    tagline: "Comprehensive Security for Established Organizations",
    subtitle: "Risk-based security programs with compliance management, threat intelligence, and executive reporting for mid-to-large Indian corporates.",
    stats: [
      { value: "100+", label: "Endpoints Covered" },
      { value: "₹49,999", label: "Starting Price/mo" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "6hr", label: "CERT-In Response" },
    ],
    color: "cyan",
    challenges: [
      { title: "Multi-Location Operations", desc: "Offices across cities, remote workforce, and third-party managed services create complex attack surfaces.", icon: Building2, stat: "Avg 3.2 locations per corporate" },
      { title: "Regulatory Compliance", desc: "DPDP Act, RBI guidelines, SEBI cybersecurity, and industry-specific requirements demand documented controls.", icon: FileCheck, stat: "₹250 Cr max penalty for DPDP" },
      { title: "Data Protection Challenges", desc: "Customer data, employee records, financial information—all requiring different protection levels.", icon: Database, stat: "5.9 Cr avg data breach cost in India" },
      { title: "Supply Chain Risk", desc: "Third-party vendors, software supply chains, and outsourcing partners expand your threat perimeter.", icon: Network, stat: "67% breaches involve third parties" },
    ],
    services: [
      { icon: Monitor, title: "SOC-as-a-Service", desc: "24/7 security operations center with Indian analysts. Real-time monitoring, threat detection, and incident response." },
      { icon: Network, title: "Network Security", desc: "Firewall management, IDS/IPS, network segmentation, and secure VPN for remote workforce." },
      { icon: FileSearch, title: "Penetration Testing", desc: "Annual application, network, and social engineering tests. Meet ISO 27001 and regulatory requirements." },
      { icon: ShieldAlert, title: "DPDP Compliance", desc: "Data inventory, consent management, breach notification, and DPDP Act compliance implementation." },
      { icon: Database, title: "Data Loss Prevention", desc: "Monitor and protect sensitive data across endpoints, email, and cloud. Prevent accidental or intentional data leaks." },
      { icon: Award, title: "ISO 27001 Support", desc: "Information security management system implementation, gap assessment, and audit preparation." },
      { icon: Eye, title: "Threat Intelligence", desc: "Dark web monitoring, brand protection, and threat feeds specific to Indian organizations." },
      { icon: KeyRound, title: "Identity & Access", desc: "IAM implementation, privileged access management, and access certification campaigns." },
    ],
    packages: [
      {
        name: "Professional",
        price: "₹49,999",
        period: "per month",
        desc: "Essential corporate security program",
        features: [
          "SOC-as-a-Service (100 endpoints)",
          "Quarterly Penetration Testing",
          "DPDP Compliance Dashboard",
          "Email & Web Security",
          "Endpoint Detection & Response",
          "Monthly Security Reports",
          "Dedicated Security Manager",
          "CERT-In Reporting Support",
        ],
      },
      {
        name: "Enterprise",
        price: "₹99,999",
        period: "per month",
        highlight: true,
        desc: "Complete security for growing organizations",
        features: [
          "SOC-as-a-Service (unlimited endpoints)",
          "Bi-annual Red Team Exercises",
          "Full DPDP & RBI Compliance",
          "Cloud Security Posture Management",
          "Identity & Access Management",
          "Annual ISO 27001 Audit Support",
          "24/7 Incident Response",
          "Quarterly Security Reviews",
          "Executive Dashboard",
        ],
      },
      {
        name: "Strategic",
        price: "Custom",
        period: "pricing",
        desc: "Tailored security programs",
        features: [
          "Fully Customized Security Program",
          "On-site Security Assessments",
          "Board & Committee Reporting",
          "Merger & Acquisition Due Diligence",
          "Vendor Risk Management",
          "Strategic Security Roadmap",
          "CISO-as-a-Service",
        ],
      },
    ],
    compliance: ["DPDP Act", "RBI Cybersecurity Guidelines", "SEBI Cybersecurity Framework", "ISO 27001", "PCI-DSS (if applicable)"],
    testimonials: [
      {
        name: "Priya Sharma",
        role: "CISO, FinCorp India",
        quote: "Cyberlok helped us achieve DPDP compliance within 6 months. Their understanding of RBI guidelines and Indian regulatory landscape is exceptional.",
        result: "100% compliance audit pass",
      },
      {
        name: "Raj Kumar",
        role: "CTO, GlobalTrade Ltd",
        quote: "The level of detail in their assessments is remarkable. Real security, not checkbox compliance. Our board finally understands our security posture.",
        result: "₹2.5 Crore risk mitigated",
      },
      {
        name: "Anita Desai",
        role: "Head of IT, Metro Pharmaceuticals",
        quote: "Their SOC team detected a sophisticated phishing campaign targeting our finance team. The response was immediate and professional.",
        result: "Breach prevented, ₹3 Cr saved",
      },
    ],
  },
  enterprises: {
    tagline: "Enterprise-Scale Security Operations",
    subtitle: "SOC/MDR, SIEM/SOAR, cloud posture management, and zero trust architecture for large organizations with complex security needs.",
    stats: [
      { value: "Unlimited", label: "Endpoints" },
      { value: "₹1.5L", label: "Starting Price/mo" },
      { value: "6hr", label: "CERT-In Reporting" },
      { value: "99.99%", label: "SLA Guarantee" },
    ],
    color: "cyan",
    challenges: [
      { title: "Massive Attack Surface", desc: "Thousands of endpoints, multi-cloud environments, complex networks, and legacy systems create endless vulnerabilities.", icon: Server, stat: "10,000+ endpoints to protect" },
      { title: "Advanced Persistent Threats", desc: "Nation-state actors, sophisticated ransomware, and supply chain attacks require proactive defense.", icon: Target, stat: "40% increase in APT attacks" },
      { title: "Compliance Complexity", desc: "Multiple regulations across industries, states, and international frameworks demand integrated compliance.", icon: Award, stat: "15+ regulations to follow" },
      { title: "Talent Shortage", desc: "Finding and retaining skilled security professionals is challenging. Budget exists but talent doesn&apos;t.", icon: UserCog, stat: "3M+ cybersecurity talent gap globally" },
    ],
    services: [
      { icon: Server, title: "Managed Detection & Response", desc: "24/7 threat monitoring, investigation, and response with guaranteed SLAs. Elite analysts hunt threats in your environment." },
      { icon: Database, title: "SIEM/SOAR Implementation", desc: "Unified log management, threat correlation, automated playbooks, and compliance reporting at enterprise scale." },
      { icon: Cloud, title: "Cloud Security Posture", desc: "Continuous monitoring for AWS, Azure, GCP. Misconfiguration detection, compliance scanning, and remediation guidance." },
      { icon: Target, title: "Red Team Operations", desc: "Adversary simulation with realistic attack scenarios. Test your people, processes, and technology." },
      { icon: Lock, title: "Zero Trust Architecture", desc: "Implement zero trust with identity verification, micro-segmentation, and least privilege access." },
      { icon: KeyRound, title: "Privileged Access Management", desc: "Credential vaulting, session recording, just-in-time access, and privileged threat analytics." },
      { icon: Network, title: "Network Detection & Response", desc: "Deep packet inspection, behavioral analysis, and network threat detection at scale." },
      { icon: FileSearch, title: "Threat Hunting", desc: "Proactive threat hunting by experienced analysts. Identify threats that evade automated detection." },
    ],
    packages: [
      {
        name: "Foundation",
        price: "₹1.5L",
        period: "per month",
        desc: "Core enterprise security operations",
        features: [
          "SOC-as-a-Service (1000 endpoints)",
          "SIEM Integration & Tuning",
          "Basic Threat Hunting",
          "Cloud Security Posture (1 cloud)",
          "Monthly Penetration Testing",
          "Incident Response (24hr SLA)",
          "Quarterly Security Reviews",
          "Compliance Reporting",
        ],
      },
      {
        name: "Advanced",
        price: "₹3L",
        period: "per month",
        highlight: true,
        desc: "Comprehensive enterprise security",
        features: [
          "MDR + SIEM/SOAR",
          "Unlimited Endpoint Coverage",
          "Multi-cloud Security Posture",
          "Quarterly Red Team Exercises",
          "Advanced Threat Hunting",
          "Zero Trust Assessment",
          "Privileged Access Management",
          "6hr CERT-In Response",
          "Dedicated Security Engineer",
        ],
      },
      {
        name: "Fortress",
        price: "₹5L+",
        period: "per month",
        desc: "Full security program management",
        features: [
          "Everything in Advanced",
          "Dedicated SOC Team",
          "On-site CISO",
          "Board & Committee Advisory",
          "Continuous Red Team Operations",
          "M&A Security Due Diligence",
          "Real-time Threat Intelligence",
          "Custom Security Dashboard",
          "99.99% SLA Guarantee",
        ],
      },
    ],
    compliance: ["CERT-In 6-hour Reporting", "DPDP Act", "RBI/SEBI Framework", "ISO 27001/27002", "NIST CSF", "SOC 2 (if applicable)"],
    testimonials: [
      {
        name: "Anand Joshi",
        role: "Group CISO, Tata Digital",
        quote: "World-class security operations at Indian pricing. The CERT-In response time is outstanding, and their threat intelligence is better than global providers.",
        result: "6-hour CERT-In compliance achieved",
      },
      {
        name: "Meera Patel",
        role: "VP Security, Reliance Jio",
        quote: "Cyberlok&apos;s cloud security expertise helped us secure 10+ enterprise workloads across AWS and Azure. Zero breaches since implementation.",
        result: "Zero cloud security incidents",
      },
      {
        name: "Sanjay Gupta",
        role: "CTO, HDFC Life Insurance",
        quote: "Their SIEM/SOAR implementation transformed our security operations. Automated playbooks reduced response time from hours to minutes.",
        result: "80% faster incident response",
      },
    ],
  },
  government: {
    tagline: "National Critical Infrastructure Protection",
    subtitle: "Security programs aligned with NCIIPC, MeitY, and government cybersecurity frameworks for ministries, PSUs, and critical infrastructure.",
    stats: [
      { value: "NCIIPC", label: "Compliant" },
      { value: "MeitY", label: "Aligned" },
      { value: "6hr", label: "CERT-In Reporting" },
      { value: "24/7", label: "NOC Operations" },
    ],
    color: "cyan",
    challenges: [
      { title: "National Security Requirements", desc: "Critical infrastructure protection under NCIIPC directives. High-value targets for nation-state actors.", icon: Shield, stat: "1000+ attacks daily on critical infra" },
      { title: "Complex Approval Processes", desc: "Multiple stakeholder approvals, budget cycles, and procurement requirements slow security initiatives.", icon: FileCheck, stat: "6-12 months for security procurement" },
      { title: "Legacy Systems", desc: "Essential legacy systems that cannot be replaced but lack modern security controls.", icon: Server, stat: "50+ unpatched vulns in legacy systems" },
      { title: "Insider Threats", desc: "Balancing security with employee privacy and operational requirements in government environments.", icon: UserCheck, stat: "40% of govt breaches involve insiders" },
    ],
    services: [
      { icon: Shield, title: "NCIIPC Compliance", desc: "Complete compliance with National Critical Information Infrastructure Protection Centre directives and guidelines." },
      { icon: FileCheck, title: "MeitY Framework Alignment", desc: "Implementation aligned with Ministry of Electronics & IT cybersecurity guidelines and standards." },
      { icon: Monitor, title: "Security Operations Center", desc: "24/7 NOC/SOC operations with government-grade security controls and clearance-compliant personnel." },
      { icon: Network, title: "Network Security Architecture", desc: "Secure network design, segmentation, firewall architecture, and intrusion detection for government networks." },
      { icon: Bug, title: "Vulnerability Assessment", desc: "Regular scanning and assessment of internet-facing assets, internal networks, and critical systems." },
      { icon: FileSearch, title: "Penetration Testing", desc: "Authorized testing by cleared professionals. Web applications, network infrastructure, and social engineering." },
      { icon: Cloud, title: "Cloud Security", desc: "Secure migration to GovCloud, NIC cloud, or hybrid environments with government-compliant controls." },
      { icon: UserCheck, title: "SeMT Support", desc: "Security Engineering and Management Team framework implementation and operational support." },
    ],
    packages: [
      {
        name: "Essential",
        price: "₹2.5L",
        period: "per month",
        desc: "Core government security program",
        features: [
          "SOC Operations (24/7)",
          "NCIIPC Compliance Framework",
          "Critical Asset Protection",
          "Quarterly Vulnerability Assessment",
          "Network Security Monitoring",
          "CERT-In Reporting",
          "Basic Security Training",
          "Monthly Compliance Reports",
        ],
      },
      {
        name: "Advanced",
        price: "₹5L",
        period: "per month",
        highlight: true,
        desc: "Comprehensive government security",
        features: [
          "Full Security Operations",
          "MeitY Framework Alignment",
          "Annual Red Team Exercises",
          "Cloud Security (GovCloud/NIC)",
          "SeMT Operational Support",
          "Incident Response (6hr SLA)",
          "Quarterly Security Audits",
          "Critical Infrastructure Protection",
          "Security Awareness Program",
        ],
      },
      {
        name: "Mission Critical",
        price: "Custom",
        period: "pricing",
        desc: "Full security program management",
        features: [
          "Dedicated Security Team",
          "On-site Security Operations",
          "Real-time Threat Intelligence",
          "Continuous Monitoring",
          "Board & Committee Reporting",
          "Policy Development",
          "Compliance Audit Support",
          "Disaster Recovery Planning",
          "Classified Handling Support",
        ],
      },
    ],
    compliance: ["NCIIPC Directives", "MeitY Cybersecurity Guidelines", "CERT-In Reporting", "IT Act 2000/2008", "SeMT Framework", "ISO 27001"],
    testimonials: [
      {
        name: "Dr. Suresh Rao",
        role: "Director, PowerGrid India",
        quote: "Cyberlok understands the unique requirements of critical infrastructure protection. Their NCIIPC compliance support was invaluable.",
        result: "Zero security incidents in 2 years",
      },
      {
        name: "Col. Amit Singh",
        role: "CISO, State Data Centre",
        quote: "Their CERT-In compliance support and 6-hour reporting capability is exceptional. The team handles sensitive information with utmost professionalism.",
        result: "100% audit compliance achieved",
      },
      {
        name: "Dr. Kavita Sharma",
        role: "Director, National Health Mission",
        quote: "Cyberlok helped us secure patient data across 100+ district offices. Their understanding of healthcare cybersecurity is impressive.",
        result: "HIPAA-aligned security achieved",
      },
    ],
  },
};

const threats = {
  individuals: [
    { threat: "UPI Fraud", stat: "₹1.75 lakh crore lost to UPI/payment fraud in 2024", icon: CreditCard },
    { threat: "Identity Theft", stat: "35% increase in Aadhaar misuse cases", icon: Fingerprint },
    { threat: "Social Engineering", stat: "WhatsApp scams duped 80,000+ Indians in 2024", icon: Smartphone },
    { threat: "Data Leaks", stat: "Your data sold on dark web for ₹50-500", icon: EyeOff },
  ],
  smes: [
    { threat: "UPI & Payment Fraud", stat: "₹1.75 lakh crore lost to payment fraud (2024)", icon: CreditCard },
    { threat: "Business Email Compromise", stat: "₹120+ crore lost to BEC scams targeting Indian companies", icon: Mail },
    { threat: "Ransomware", stat: "1200+ ransomware attacks on Indian firms in 2024", icon: ShieldAlert },
    { threat: "Data Breaches", stat: "India ranks #2 globally with 1.9 billion records exposed", icon: Database },
  ],
  corporates: [
    { threat: "Supply Chain Attacks", stat: "67% of breaches involve third-party vendors", icon: Network },
    { threat: "Phishing & BEC", stat: "₹120+ crore lost to business email compromise in India", icon: Mail },
    { threat: "Insider Threats", stat: "34% of data breaches involve internal actors", icon: UserCheck },
    { threat: "Regulatory Penalties", stat: "DPDP violations can cost up to ₹250 crore", icon: FileCheck },
  ],
  enterprises: [
    { threat: "APT & Nation-State", stat: "Increased targeted attacks on Indian enterprises by 40%", icon: Target },
    { threat: "Ransomware 2.0", stat: "Double extortion ransomware losses exceeded ₹500 crore", icon: ShieldAlert },
    { threat: "Zero-Day Exploits", stat: "Average time to exploit vulnerabilities: 12 days", icon: Bug },
    { threat: "Cloud Misconfigurations", stat: "₹12+ crore average cost of cloud data breaches", icon: Cloud },
  ],
  government: [
    { threat: "Nation-State Actors", stat: "Critical infra faces 1000+ attacks daily", icon: Target },
    { threat: "Hacktivism", stat: "Government sites face 300+ DDoS attacks monthly", icon: ShieldAlert },
    { threat: "Insider Threats", stat: "40% of government breaches involve insiders", icon: UserCheck },
    { threat: "Legacy System Exploits", stat: "Average legacy system has 50+ unpatched vulnerabilities", icon: Bug },
  ],
};

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("individuals");
  const data = segmentData[activeTab as keyof typeof segmentData];
  const currentThreats = threats[activeTab as keyof typeof threats];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-60 right-1/4 h-[600px] w-[600px] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_50%)]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-20">
            <Breadcrumbs items={[{ label: "Solutions" }]} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Shield className="h-4 w-4 text-cyan-300" />
              Tailored Security Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-white/90">Security for Every</span>
              <br />
              <span className="text-cyan-300">Indian Organization</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              From personal protection to critical infrastructure.
              Choose your segment and discover security built for your unique needs.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ENHANCED TAB NAVIGATION */}
      <section className="sticky top-16 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="relative">
          {/* Glow effect behind tabs */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          
          <Container>
            <div className="flex justify-center py-4">
              <motion.div 
                className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {segments.map((segment) => (
                  <motion.button
                    key={segment.id}
                    onClick={() => setActiveTab(segment.id)}
                    className={`relative z-10 flex items-center gap-2 rounded-xl px-4 sm:px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeTab === segment.id
                        ? "text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === segment.id && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-500/25"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <segment.icon className="h-4 w-4" />
                      <span>{segment.label}</span>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      {/* DYNAMIC CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* INDIVIDUALS SPECIAL CONTENT */}
          {activeTab === 'individuals' && (
            <>
              {/* OPENING STATEMENT */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-12">
                    {/* Warning Banner */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.01 }}
                      className="group mb-8 overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-start gap-4">
                        {/* Animated Icon */}
                        <motion.div 
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/20 shadow-lg"
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(34, 211, 238, 0.2)",
                              "0 0 40px rgba(34, 211, 238, 0.4)",
                              "0 0 20px rgba(34, 211, 238, 0.2)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <AlertTriangle className="h-7 w-7 text-cyan-300" />
                        </motion.div>
                        
                        <div>
                          <motion.p 
                            className="text-lg font-semibold text-cyan-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {data.tagline}
                          </motion.p>
                          <motion.p 
                            className="mt-2 text-sm text-white/70 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {data.subtitle}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/contact"
                          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-4 text-base font-semibold text-black shadow-xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 transition-opacity group-hover:opacity-100"
                          />
                          <Smartphone className="relative h-5 w-5" />
                          <span className="relative">{data.heroCta || 'Get Your Free Device Check'}</span>
                        </Link>
                      </motion.div>
                    </motion.div>

                    {/* Opening Statement */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.01 }}
                      className="group relative mt-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5"
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      
                      <motion.p 
                        className="relative text-lg font-semibold text-cyan-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {data.openingStatement}
                      </motion.p>
                      <motion.p 
                        className="relative mt-4 text-base text-white/70 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {data.openingDesc}
                      </motion.p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                      className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {data.stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ y: -6, scale: 1.05 }}
                          className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-4 sm:p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                          {/* Animated glow */}
                          <motion.div
                            className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                          />
                          
                          <motion.p 
                            className="relative text-2xl sm:text-3xl font-bold text-cyan-300"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                          >
                            {stat.value}
                          </motion.p>
                          <p className="relative mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </Container>
              </section>

              {/* THE REAL PROBLEMS */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 sm:mb-8"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                        <span className="text-cyan-300">The Real Problems</span>
                        <span className="text-white/90"> Individuals Face</span>
                      </h3>
                      <p className="mt-2 text-sm text-white/60">
                        These are the threats we encounter every day in our lab
                      </p>
                    </motion.div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {data.challenges.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 40, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="group"
                        >
                          <Card className="relative h-full overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                            <CardContent className="relative flex h-full flex-col p-5 sm:p-6">
                              {/* Always visible ambient glow */}
                              <motion.div
                                className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl"
                                animate={{ 
                                  scale: [1, 1.15, 1],
                                  opacity: [0.6, 0.9, 0.6],
                                }}
                                transition={{ 
                                  duration: 4 + i * 0.5, 
                                  repeat: Infinity,
                                  ease: "easeInOut" 
                                }}
                              />
                              
                              {/* Secondary subtle glow */}
                              <motion.div
                                className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{ 
                                  duration: 5 + i * 0.3, 
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 1
                                }}
                              />

                              {/* Icon with floating animation */}
                              <motion.div
                                className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-500/20 shadow-lg shadow-cyan-500/20"
                                animate={{ 
                                  y: [0, -4, 0],
                                  boxShadow: [
                                    "0 0 20px rgba(34, 211, 238, 0.2)",
                                    "0 0 30px rgba(34, 211, 238, 0.4)",
                                    "0 0 20px rgba(34, 211, 238, 0.2)"
                                  ]
                                }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.2
                                }}
                                whileHover={{ 
                                  scale: 1.1, 
                                  rotate: [0, -5, 5, 0],
                                  transition: { duration: 0.5 }
                                }}
                              >
                                <item.icon className="h-7 w-7 text-cyan-300" />
                              </motion.div>

                              {/* Title */}
                              <motion.h4 
                                className="relative z-10 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-cyan-100"
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                {item.title}
                              </motion.h4>

                              {/* Description */}
                              <p className="relative z-10 mt-3 flex-1 text-sm text-white/60 leading-relaxed transition-colors group-hover:text-white/80">
                                {item.desc}
                              </p>

                              {/* Stat Badge with pulse */}
                              {item.stat && (
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                  className="relative z-10 mt-4"
                                >
                                  <motion.div
                                    animate={{ 
                                      boxShadow: [
                                        "0 0 0 0 rgba(34, 211, 238, 0.4)",
                                        "0 0 0 8px rgba(34, 211, 238, 0)",
                                      ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-block"
                                  >
                                    <Badge 
                                      variant="outline" 
                                      className="border border-cyan-500/40 bg-cyan-500/15 text-cyan-300 backdrop-blur-sm"
                                    >
                                      <motion.div
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                      >
                                        <AlertTriangle className="mr-1.5 h-3 w-3" />
                                      </motion.div>
                                      {item.stat}
                                    </Badge>
                                  </motion.div>
                                </motion.div>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>

              {/* WHAT WE DO */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-12">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 sm:mb-8 text-xl sm:text-2xl font-semibold tracking-tight"
                    >
                      What We <span className="text-cyan-300">Actually Do</span>
                    </motion.h3>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {data.services.map((service, i) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ y: -6, scale: 1.02 }}
                          className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                          {/* Animated glow on hover */}
                          <motion.div
                            className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          <div className="relative">
                            {/* Animated icon */}
                            <motion.div
                              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <service.icon className="h-7 w-7 text-cyan-300" />
                            </motion.div>

                            <motion.h4 
                              className="text-lg font-semibold transition-colors group-hover:text-cyan-100"
                              whileHover={{ x: 4 }}
                            >
                              {service.title}
                            </motion.h4>
                            
                            <p className="mt-2 text-sm text-white/60 leading-relaxed transition-colors group-hover:text-white/70">
                              {service.desc}
                            </p>
                            
                            {service.price && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.08 }}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="mt-4 border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20"
                                >
                                  Starting at {service.price}
                                </Badge>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>
            </>
          )}

          {/* OTHER SEGMENTS - ORIGINAL LAYOUT */}
          {activeTab !== 'individuals' && (
            <>
              {/* STATS & TAGLINE */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="mb-6 sm:mb-8"
                    >
                      <motion.h2 
                        className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                      >
                        {data.tagline}
                      </motion.h2>
                      <motion.p 
                        className="mt-2 text-sm sm:text-base text-white/60"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {data.subtitle}
                      </motion.p>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      {data.stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 text-center transition-all hover:border-cyan-400/30"
                        >
                          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                          <motion.p 
                            className="text-2xl sm:text-3xl font-bold text-cyan-300"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                          >
                            {stat.value}
                          </motion.p>
                          <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </Container>
              </section>

              {/* CHALLENGES */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-12">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold tracking-tight"
                    >
                      Challenges We Solve
                    </motion.h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {data.challenges.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                          whileHover={{ scale: 1.02 }}
                          className="group rounded-2xl border border-cyan-500/20 bg-white/5 p-5 transition-all hover:bg-white/[0.07] hover:border-cyan-400/40"
                        >
                          <h4 className="text-base font-semibold text-cyan-300">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm text-white/60 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>

              {/* SERVICES */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-12">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold tracking-tight"
                    >
                      Our Security Services
                    </motion.h3>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {data.services.map((service, i) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                          whileHover={{ y: -8 }}
                          className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-400/30 hover:bg-white/[0.08]"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                            <service.icon className="h-6 w-6 text-cyan-300" />
                          </div>
                          <h4 className="mt-4 text-base font-semibold">{service.title}</h4>
                          <p className="mt-2 text-sm text-white/60 leading-relaxed">{service.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>
            </>
          )}

          {/* THREATS */}
          <section className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-transparent">
            <Container>
              <div className="py-8 sm:py-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 sm:mb-8 flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <AlertTriangle className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  Threats Targeting Your Sector
                </motion.h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {currentThreats.map((threat, i) => (
                    <motion.div
                      key={threat.threat}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, x: 0 }}
                      className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10"
                    >
                      {/* Pulse animation */}
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/10"
                        animate={{ scale: [1, 1.1, 1], opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <div className="relative flex items-center gap-3">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <threat.icon className="h-6 w-6 text-cyan-400" />
                        </motion.div>
                        <h4 className="text-base font-semibold text-cyan-200">
                          {threat.threat}
                        </h4>
                      </div>
                      <p className="mt-2 text-sm text-cyan-300/80 group-hover:text-cyan-200/90 transition-colors">
                        {threat.stat}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* PACKAGES - INDIVIDUALS SPECIAL LAYOUT */}
          {activeTab === 'individuals' && (
            <section className="border-b border-white/10">
              <Container>
                <div className="py-8 sm:py-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-xl sm:text-2xl font-semibold tracking-tight text-center"
                  >
                    Pricing — Simple and Clear
                  </motion.h3>

                  {/* ANDROID PACKAGES */}
                  <div className="mb-10">
                    <div className="mb-6 flex items-center gap-3">
                      <Smartphone className="h-6 w-6 text-cyan-400" />
                      <h4 className="text-lg font-semibold text-white">Android Devices</h4>
                    </div>
                    
                    <div className="grid gap-5 md:grid-cols-3">
                      {/* Basic */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl border border-cyan-500/20 bg-white/5 p-5 sm:p-6 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                      >
                        <div className="text-center">
                          <h4 className="text-xl font-semibold">Basic Audit</h4>
                          <p className="mt-1 text-sm text-white/60">Essential security check</p>
                          <motion.p 
                            className="mt-4 text-4xl font-bold text-cyan-400"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                          >
                            ₹249
                          </motion.p>
                        </div>
                        <ul className="mt-6 space-y-2.5">
                          {["Malware & spyware detection", "App permission review", "Network vulnerability scan", "Data leak check", "Plain-language report", "Fix recommendations"].map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="mt-6 block w-full rounded-full border border-cyan-500/30 bg-white/5 py-3 text-center text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 transition">
                          Get Started
                        </Link>
                      </motion.div>

                      {/* Deep - Most Popular */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl border-2 border-cyan-500/50 bg-gradient-to-b from-cyan-500/15 via-white/5 to-transparent p-5 sm:p-6 shadow-lg shadow-cyan-500/10 transition-all"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-1 text-xs font-semibold text-black shadow-lg"
                        >
                          Most Popular
                        </motion.div>
                        
                        <div className="text-center">
                          <h4 className="text-xl font-semibold">Deep Audit</h4>
                          <p className="mt-1 text-sm text-white/60">Comprehensive assessment</p>
                          <motion.p 
                            className="mt-4 text-4xl font-bold text-cyan-400"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                          >
                            ₹399
                          </motion.p>
                        </div>
                        <ul className="mt-6 space-y-2.5">
                          {["Everything in Basic Audit", "Advanced root detection", "APK analysis for sideloaded apps", "SMS & call log review", "Network traffic analysis", "1-hour consultation"].map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="mt-6 block w-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 py-3 text-center text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition">
                          Get Started
                        </Link>
                      </motion.div>

                      {/* Professional */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl border border-cyan-500/20 bg-white/5 p-5 sm:p-6 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                      >
                        <div className="text-center">
                          <h4 className="text-xl font-semibold">Professional Audit</h4>
                          <p className="mt-1 text-sm text-white/60">Complete with expert analysis</p>
                          <motion.p 
                            className="mt-4 text-4xl font-bold text-cyan-400"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                          >
                            ₹599
                          </motion.p>
                        </div>
                        <ul className="mt-6 space-y-2.5">
                          {["Everything in Deep Audit", "Forensic analysis of device", "Social media account audit", "Banking app security check", "2-hour expert consultation", "Priority support (30 days)"].map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="mt-6 block w-full rounded-full border border-cyan-500/30 bg-white/5 py-3 text-center text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 transition">
                          Get Started
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* iOS PACKAGES */}
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <Smartphone className="h-6 w-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">iOS Devices (iPhone / iPad)</h4>
                    </div>
                    
                    <div className="grid gap-5 md:grid-cols-2 md:max-w-2xl">
                      {/* Deep iOS */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition-all hover:border-cyan-500/30"
                      >
                        <div className="text-center">
                          <h4 className="text-xl font-semibold">Deep Audit</h4>
                          <p className="mt-1 text-sm text-white/60">Comprehensive iOS security check</p>
                          <motion.p 
                            className="mt-4 text-4xl font-bold text-cyan-400"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                          >
                            ₹499
                          </motion.p>
                        </div>
                        <ul className="mt-6 space-y-2.5">
                          {["Jailbreak detection", "App permission audit", "iCloud security check", "Data leak verification", "Face ID & passcode review", "Actionable report"].map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="mt-6 block w-full rounded-full border border-white/15 bg-white/5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition">
                          Get Started
                        </Link>
                      </motion.div>

                      {/* Professional iOS */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-5 sm:p-6 transition-all hover:border-cyan-500/50"
                      >
                        <div className="text-center">
                          <h4 className="text-xl font-semibold">Professional Audit</h4>
                          <p className="mt-1 text-sm text-white/60">Complete with expert analysis</p>
                          <motion.p 
                            className="mt-4 text-4xl font-bold text-cyan-400"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                          >
                            ₹599
                          </motion.p>
                        </div>
                        <ul className="mt-6 space-y-2.5">
                          {["Everything in Deep Audit", "Forensic analysis of device", "Social media account audit", "Banking app security check", "2-hour expert consultation", "Priority support (30 days)"].map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="mt-6 block w-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 py-3 text-center text-sm font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition">
                          Get Started
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* No Subscription Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-center"
                  >
                    <p className="text-cyan-300">
                      <span className="font-semibold">No subscription.</span> <span className="text-white/70">No hidden renewal.</span> <span className="font-semibold">Pay once, get your report.</span>
                    </p>
                  </motion.div>
                </div>
              </Container>
            </section>
          )}

          {/* PACKAGES - OTHER SEGMENTS */}
          {activeTab !== 'individuals' && (
            <section className="border-b border-white/10">
              <Container>
                <div className="py-8 sm:py-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold tracking-tight"
                  >
                    Security Packages
                  </motion.h3>

                  <div className="grid gap-5 lg:grid-cols-3">
                    {data.packages.map((pkg, i) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 40, rotateY: 15 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`group relative rounded-2xl border p-5 sm:p-6 transition-all ${
                          pkg.highlight
                            ? "border-cyan-400/50 bg-gradient-to-b from-cyan-500/15 via-white/5 to-transparent shadow-lg shadow-cyan-500/10"
                            : "border-white/10 bg-white/5 hover:border-cyan-400/20"
                        }`}
                      >
                        {pkg.highlight && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
                            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-1 text-xs font-semibold text-black shadow-lg shadow-cyan-500/30"
                          >
                            Most Popular
                          </motion.div>
                        )}

                        <div className="text-center">
                          <h4 className="text-xl font-semibold">{pkg.name}</h4>
                          <p className="mt-1 text-sm text-white/60">{pkg.desc}</p>
                          {activeTab === 'individuals' || activeTab === 'smes' ? (
                            <>
                              <motion.p 
                                className="mt-4 text-3xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                              >
                                {pkg.price}
                              </motion.p>
                              <p className="text-xs text-white/50">{pkg.period}</p>
                            </>
                          ) : (
                            <motion.p 
                              className="mt-4 text-2xl font-bold text-cyan-300"
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              Get a Quote
                            </motion.p>
                          )}
                        </div>

                        <motion.ul 
                          className="mt-6 space-y-3"
                          initial="hidden"
                          animate="show"
                          variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.05 } }
                          }}
                        >
                          {pkg.features.map((feature) => (
                            <motion.li 
                              key={feature} 
                              className="flex items-start gap-2 text-sm text-white/70"
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                show: { opacity: 1, x: 0 }
                              }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </motion.ul>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link
                            href="/contact"
                            className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                              pkg.highlight
                                ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-lg hover:shadow-cyan-500/30"
                                : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                            }`}
                          >
                            {activeTab === 'individuals' || activeTab === 'smes' ? 'Get Started' : 'Get a Quote'}
                          </Link>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          )}

          {/* COMPLIANCE */}
          <section className="border-b border-white/10">
            <Container>
              <div className="py-8 sm:py-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight"
                >
                  <FileCheck className="h-5 w-5 text-cyan-400" />
                  Compliance Frameworks
                </motion.h3>

                <div className="flex flex-wrap gap-3">
                  {data.compliance.map((comp, i) => (
                    <motion.span
                      key={comp}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 px-4 py-2 text-sm text-cyan-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/20"
                    >
                      {comp}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* TESTIMONIALS */}
          <section className="border-b border-white/10">
            <Container>
              <div className="py-8 sm:py-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 sm:mb-8 flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight"
                >
                  <Star className="h-5 w-5 text-cyan-400" />
                  Client Success Stories
                </motion.h3>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {data.testimonials.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, y: 30, rotateX: 10 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-400/20 hover:bg-white/[0.07]"
                    >
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 + j * 0.03 }}
                          >
                            <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" />
                          </motion.div>
                        ))}
                      </div>
                      <motion.p 
                        className="mt-4 text-sm leading-relaxed text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </motion.p>
                      <motion.div 
                        className="mt-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 px-3 py-2 text-xs text-cyan-300 border border-cyan-400/20"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        Result: {t.result}
                      </motion.div>
                      <motion.div 
                        className="mt-4 flex items-center gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-400/20 text-sm font-semibold text-cyan-300 border border-cyan-400/20">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold group-hover:text-cyan-100 transition-colors">{t.name}</p>
                          <p className="text-xs text-white/50">{t.role}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_50%)]" />
            
            {/* Animated background elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, delay: 4 }}
              />
            </div>
            
            <Container>
              <div className="py-8 sm:py-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 sm:p-10 shadow-2xl shadow-cyan-500/5"
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border border-cyan-400/30"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-xl"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                      >
                        <Zap className="h-10 w-10 text-cyan-300" />
                      </motion.div>
                      <h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight">
                        Ready to secure your {activeTab === 'individuals' ? 'family' : activeTab === 'smes' ? 'business' : activeTab === 'corporates' ? 'organization' : activeTab === 'enterprises' ? 'enterprise' : 'sector'}?
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-white/65">
                        Get a free security assessment tailored to your needs.
                        No obligations, just honest advice.
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-col gap-3 sm:flex-row"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-cyan-300"
                        >
                          Get Free Assessment <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="tel:+919876543210"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/25"
                        >
                          <Phone className="h-4 w-4" />
                          Call Us
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>
        </motion.div>
      </AnimatePresence>

      <ScrollToTop />
    </div>
  );
}
