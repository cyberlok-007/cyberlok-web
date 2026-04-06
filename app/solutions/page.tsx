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
  Users,
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
  BarChart3,
  ShieldCheck,
  FileCheck2,
  IndianRupee,
  TrendingUp,
  Wifi,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Challenge {
  title: string;
  desc: string;
  icon: LucideIcon;
  stat: string;
  color?: string;
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
  priceSuffix?: string;
  priceNote?: string;
  period?: string;
  highlight?: boolean;
  desc: string;
  features: string[];
  icon?: LucideIcon;
  color?: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result?: string;
  rating?: number;
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
  testimonials?: Testimonial[];
  faqs?: Faq[];
}

interface Faq {
  q: string;
  a: string;
}

interface Segment {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

const segments: Segment[] = [
  { id: "individuals", label: "Individuals", icon: User, color: "from-blue-500 to-indigo-500" },
  { id: "smes", label: "SMEs", icon: Building2, color: "from-green-500 to-emerald-500" },
  { id: "corporates", label: "Corporates", icon: Cpu, color: "from-purple-500 to-pink-500" },
  { id: "government", label: "Government", icon: Landmark, color: "from-orange-500 to-red-500" },
];

const segmentData: Record<string, SegmentData> = {
  individuals: {
    tagline: "Your Phone Knows More About You Than Your Family Does",
    subtitle: "Bank passwords. Aadhaar details. WhatsApp chats. Location history. All sitting on a device that most people have never once security-checked.",
    heroCta: "Get Your Free Device Check",
    openingStatement: "We are not selling you fear. We are telling you what we see every week in our lab in Mumbai.",
    openingDesc: "People walk in thinking their phone is fine. We find stalkerware installed by a jealous partner. Banking trojans they downloaded from a WhatsApp forward. Spyware that has been quietly recording calls for months. The threat is real. It is not complicated. And it is easier to fix than most people think.",
    stats: [
      { value: "1 in 4", label: "Indians faced cybercrime in 2025" },
      { value: "₹1.5L Cr", label: "Annual cybercrime cost estimate" },
      { value: "95%", label: "Unaware of digital security" },
      { value: "₹50K+", label: "Average losses per victim" },
    ],
    color: "gradient-blue",
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
        icon: Shield, 
        title: "Personal Identity Protection", 
        desc: "Monitor your Aadhaar, PAN, and financial accounts for unauthorized activity with real-time alerts. Includes dark web scanning and instant breach notifications.",
        price: "From ₹299/Pay Once"
      },
      { 
        icon: Wifi, 
        title: "Home Network Security", 
        desc: "Secure your home Wi-Fi, Jio/Airtel routers, smart devices, and family browsing. Router security setup with parental controls and VPN for all devices.",
        price: "From ₹499/Pay Once"
      },
      { 
        icon: CreditCard, 
        title: "UPI & Payment Protection", 
        desc: "Protect your UPI transactions, bank accounts, and credit cards from fraud and scams. UPI fraud alerts, transaction monitoring, and SIM swap detection.",
        price: "From ₹199/Pay Once"
      },
      { 
        icon: Smartphone, 
        title: "Mobile Security Suite", 
        desc: "Protect your Android/iPhone from malware, phishing apps, and online threats. Malware protection, app permission audit, and safe browsing.",
        price: "From ₹249/Pay Once"
      },
      { 
        icon: Mail, 
        title: "Phishing & Fraud Protection", 
        desc: "AI-powered protection against WhatsApp scams, fake calls, and phishing SMS. WhatsApp scam detection and SMS fraud filtering.",
        price: "From ₹249/Pay Once"
      },
      { 
        icon: Heart, 
        title: "Family Security Bundle", 
        desc: "Comprehensive protection for your entire family including parental controls and kids' digital safety. Multi-device coverage up to 5 devices.",
        price: "From ₹1199/Pay Once"
      },
      { 
        icon: Database, 
        title: "Data Recovery Service", 
        desc: "Professional recovery of lost, deleted, or corrupted files from compromised, formatted, or damaged devices.",
        price: "From ₹499/Pay Once"
      },
    ],
    packages: [
      {
        name: "Device Security",
        price: "₹499",
        period: "Pay Once",
        highlight: false,
        icon: Smartphone,
        color: "from-blue-500 to-indigo-500",
        desc: "Essential protection for your mobile device",
        features: [
          "Mobile Security Suite",
          "Malware & spyware detection",
          "App permission audit",
          "Safe browsing protection",
          "Device vulnerability scan",
          "Fix recommendations report",
        ],
      },
      {
        name: "Payment Shield",
        price: "₹299",
        period: "Pay Once",
        highlight: false,
        icon: CreditCard,
        color: "from-red-500 to-orange-500",
        desc: "Protect your bank accounts & UPI",
        features: [
          "UPI & Payment Protection",
          "Real-time fraud alerts",
          "SIM swap detection",
          "Transaction monitoring",
          "Banking trojan removal",
          "Instant breach notifications",
        ],
      },
      {
        name: "Identity Guard",
        price: "₹799",
        period: "Pay Once",
        highlight: true,
        icon: Fingerprint,
        color: "from-purple-500 to-pink-500",
        desc: "Complete identity & data protection",
        features: [
          "Personal Identity Protection",
          "Aadhaar & PAN monitoring",
          "Dark web data scanning",
          "Social media audit",
          "Account takeover detection",
          "1-hour expert consultation",
        ],
      },
      {
        name: "Family Shield",
        price: "₹1499",
        period: "Pay Once",
        highlight: false,
        icon: Heart,
        color: "from-green-500 to-emerald-500",
        desc: "Protect your entire family (up to 5 devices)",
        features: [
          "Family Security Bundle",
          "All Device Security features",
          "All Payment Shield features",
          "Parental controls setup",
          "Kids' online safety tools",
          "2-hour family consultation",
        ],
      },
      {
        name: "Data Recovery",
        price: "₹999",
        period: "Pay Once",
        highlight: false,
        icon: Database,
        color: "from-cyan-500 to-blue-500",
        desc: "Emergency data recovery service",
        features: [
          "Lost/deleted file recovery",
          "Corrupted drive restoration",
          "Formatted partition recovery",
          "Ransomware file rescue",
          "Forensic data extraction",
          "Free initial assessment",
        ],
      },
    ],
    compliance: ["No subscription", "No hidden renewal", "Pay once, get protected"],
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Working Professional, Mumbai",
        quote: "Cyberlok helped me secure my phone after I almost fell for a WhatsApp scam. Their fraud alerts saved me ₹25,000.",
        rating: 5,
      },
      {
        name: "Rajesh Kumar",
        role: "Small Business Owner, Bangalore",
        quote: "I thought cybersecurity was only for big companies. Cyberlok showed me how vulnerable my data was and helped me stay safe online.",
        rating: 5,
      },
      {
        name: "Anita Desai",
        role: "Parent, Delhi",
        quote: "The family bundle gives me peace of mind. My kids can explore the internet safely, and I get alerts for any suspicious activity.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Do I need cybersecurity if I'm just a regular person?",
        a: "Absolutely. Cybercriminals target Indians through UPI fraud, WhatsApp scams, fake job offers, and phishing. With our increasing digital payments and online presence, everyone is a potential target.",
      },
      {
        q: "How is Cyberlok different from free antivirus?",
        a: "Free antivirus only protects against known malware. Cyberlok provides comprehensive identity protection including Aadhaar monitoring, UPI fraud detection, dark web scanning, and 24/7 support in Hindi and English.",
      },
      {
        q: "Can I protect my whole family with one subscription?",
        a: "Yes! Our Family Security Bundle covers up to 5 devices per family member with shared parental controls. It supports both Android and iOS devices and includes regional fraud protection.",
      },
      {
        q: "What if my bank account is compromised?",
        a: "If we detect any suspicious activity, we immediately alert you and guide you through RBI-recommended recovery steps. Our team helps with bank escalation, complaint filing, and fraud resolution.",
      },
      {
        q: "Can Cyberlok recover my files if they are deleted or encrypted by ransomware?",
        a: "Yes! Our Data Recovery Service uses advanced forensic techniques to recover deleted files, restore data from corrupted drives, and rescue files from ransomware-attacked devices. Success rates vary based on the severity of damage, but we offer a free initial assessment.",
      },
    ],
  },
  smes: {
    tagline: "Enterprise-Grade Security for Growing Indian Businesses",
    subtitle: "Affordable, compliant, and scalable security solutions designed specifically for SMEs navigating the Indian threat landscape.",
    stats: [
      { value: "51+", label: "SMEs Protected" },
      { value: "48", label: "hrs Deployment" },
      { value: "77%", label: "Incident Reduction" },
      { value: "4.9/5", label: "Customer Rating" },
    ],
    color: "gradient-blue",
    challenges: [
      { 
        title: "Limited Security Budget", 
        desc: "Enterprise threats with startup budgets. Attackers specifically target SMEs because they know you lack defenses. A single breach can cost ₹50 lakh or more—often fatal for small businesses.",
        icon: CreditCard, 
        stat: "₹50L+ average breach cost for SMEs",
        color: "from-red-500 to-orange-500"
      },
      { 
        title: "No Dedicated Security Team", 
        desc: "Your IT team is juggling everything—servers, support tickets, backups. Security becomes an afterthought until something breaks. Meanwhile, threats don't wait.",
        icon: UserCheck, 
        stat: "67% of SMEs have no security staff",
        color: "from-purple-500 to-pink-500"
      },
      { 
        title: "Vendor & Supplier Risk", 
        desc: "Your accountant's software. The GST portal you use daily. The cloud tool your team loves. Every vendor is a potential entry point for attackers.",
        icon: Network, 
        stat: "40% of breaches start with third-party vendors",
        color: "from-blue-500 to-indigo-500"
      },
      { 
        title: "Employee Awareness Gap", 
        desc: "That phishing email looks real. The WhatsApp message from 'your bank' seems legitimate. One confused employee can open the door to attackers.",
        icon: Mail, 
        stat: "82% of breaches involve human error",
        color: "from-yellow-500 to-orange-500"
      },
    ],
    services: [
      { icon: Rocket, title: "Quick Deployment", desc: "Get security up and running in 48 hours. Our streamlined onboarding gets Indian businesses protected fast." },
      { icon: IndianRupee, title: "Affordable Excellence", desc: "Enterprise-grade security at Indian SME prices. Transparent pricing in INR that scales with your growth. Inclusive of GST." },
      { icon: Users, title: "Local Support", desc: "Your own security advisor who understands Indian business. Support in Hindi, English, and regional languages." },
      { icon: FileCheck2, title: "Compliance Made Simple", desc: "Navigate CERT-In, DPDP Act, and RBI guidelines easily. We handle the complexity while you focus on business." },
      { icon: Bug, title: "Vulnerability Assessment", desc: "Quarterly scanning of web apps, servers, and network infrastructure. Identify weaknesses before attackers do." },
      { icon: Shield, title: "Endpoint Protection", desc: "Advanced antivirus, EDR, and patch management for all devices. Protect laptops, servers, and POS systems." },
      { icon: Mail, title: "Email Security", desc: "Phishing protection, spam filtering, and BEC detection for business email accounts." },
      { icon: UserCheck, title: "Security Awareness Training", desc: "Monthly phishing simulations and training. Turn employees into your first line of defense." },
    ],
    packages: [
      {
        name: "Starter",
        price: "₹7,999",
        priceSuffix: " Pay Once",
        priceNote: "Inclusive of GST",
        desc: "Perfect for small teams starting with security",
        icon: Shield,
        color: "from-green-500 to-emerald-500",
        features: [
          "Web & Network Security Assessment (1× per year)",
          "Mobile Device Security (8–10 devices)",
          "Endpoint Security (10–15 systems)",
          "Configuration Review (firewall, router, servers)",
          "Infrastructure Security Monitoring",
          "Phishing Simulation (1 campaign / year)",
          "Email Support (48 hr response)",
        ],
      },
      {
        name: "Growth",
        price: "₹15,999",
        priceSuffix: " Pay Once",
        priceNote: "Inclusive of GST",
        highlight: true,
        desc: "For growing businesses handling sensitive operations",
        icon: Rocket,
        color: "from-blue-500 to-indigo-500",
        features: [
          "Web & Network Security Assessment (2× per year)",
          "Cloud Security Testing (1× per year)",
          "Mobile Device Security (10–15 devices)",
          "Endpoint Security (20–25 systems)",
          "Infrastructure Security Monitoring",
          "Security Awareness Training (up to 15 employees)",
          "Phishing Simulation (1 campaign / year)",
          "Cybersecurity Consulting (2 sessions / year)",
          "Priority Support (8 hr response)",
        ],
      },
      {
        name: "Advanced",
        price: "Contact",
        priceSuffix: " for Quote",
        desc: "For organizations needing enterprise-grade protection",
        icon: Award,
        color: "from-purple-500 to-pink-500",
        features: [
          "Full Web, Network & Cloud Security Testing",
          "Mobile & Endpoint Security at Scale",
          "Continuous Infrastructure Monitoring",
          "Advanced Risk Protection",
          "AI & Emerging Threat Security Assessment",
          "Custom Security Strategy & Reviews",
          "Cybersecurity Consulting (Unlimited)",
          "Dedicated Security Engineer",
          "Fast Response SLA (4 hr)",
        ],
      },
    ],
    compliance: ["DPDP Act", "CERT-In", "ISO 27001 (optional)"],
    testimonials: [
      {
        name: "Vikram Mehta",
        role: "CEO, TechStart India",
        quote: "Before Cyberlok, our security was just an antivirus. Now we have real protection, DPDP compliance confidence, and I actually understand our risks.",
        result: "Zero incidents in 18 months",
      },
      {
        name: "Sunita Reddy",
        role: "Operations Director, RetailCo India",
        quote: "Cyberlok's Growth package gave us enterprise security at SME prices. The ROI was visible within the first quarter.",
        result: "73% reduction in security incidents",
      },
      {
        name: "Arun Patel",
        role: "Founder, CloudFirst Solutions",
        quote: "As a bootstrapped startup, security seemed like a luxury. Cyberlok showed us it's a necessity—and made it affordable in rupees.",
        result: "DPDP compliant in 3 months",
      },
    ],
    faqs: [
      {
        q: "We're too small to be targeted—why do we need security?",
        a: "43% of cyberattacks target SMEs precisely because they have fewer defenses. Most Indian businesses lose ₹50+ lakh to breaches—enough to shut down permanently.",
      },
      {
        q: "What does protection cost?",
        a: "Plans start at ₹7,999 with annual billing (Pay Once). That's less than a coffee per day. We offer flexible payment options—no hidden charges, GST included.",
      },
      {
        q: "How fast can we get protected?",
        a: "Starter packages deploy within 48 hours. Growth packages take 1-2 weeks for complete setup. We prioritize quick onboarding for Indian businesses.",
      },
      {
        q: "Where is our data stored?",
        a: "All data is stored in India on secure, compliant infrastructure. We follow CERT-In and DPDP guidelines for data localization and protection.",
      },
      {
        q: "Do you offer support in local languages?",
        a: "Yes! Our support team is based in India and can assist in Hindi, English, and regional languages based on your preference.",
      },
    ],
  },
  corporates: {
    tagline: "Comprehensive Security for Established Organizations",
    subtitle: "Risk-based security programs with compliance management, threat intelligence, and executive reporting for mid-to-large Indian corporates.",
    stats: [
      { value: "200+", label: "Enterprise Clients" },
      { value: "95%", label: "Compliance Success" },
      { value: "24/7", label: "SOC Operations" },
      { value: "6hrs", label: "CERT-In Response" },
    ],
    color: "gradient-blue",
    challenges: [
      { title: "Multi-Location Operations", desc: "Offices across cities, remote workforce, and third-party managed services create complex attack surfaces.", icon: Building2, stat: "Avg 3.2 locations per corporate" },
      { title: "Regulatory Compliance", desc: "DPDP Act, RBI guidelines, SEBI cybersecurity, and industry-specific requirements demand documented controls.", icon: FileCheck, stat: "₹250 Cr max penalty for DPDP" },
      { title: "Data Protection Challenges", desc: "Customer data, employee records, financial information—all requiring different protection levels.", icon: Database, stat: "5.9 Cr avg data breach cost in India" },
      { title: "Supply Chain Risk", desc: "Third-party vendors, software supply chains, and outsourcing partners expand your threat perimeter.", icon: Network, stat: "67% breaches involve third parties" },
    ],
    services: [
      { icon: Eye, title: "SOC-as-a-Service", desc: "24/7 security operations center with Indian analysts. Real-time monitoring, threat detection, and incident response." },
      { icon: Cloud, title: "Cloud Security", desc: "Multi-cloud posture management for AWS, Azure, GCP. Secure your cloud transformation with purpose-built tools." },
      { icon: Target, title: "Offensive Security", desc: "Advanced penetration testing, red team operations, and purple team exercises for proactive defense." },
      { icon: FileCheck2, title: "Risk & Compliance", desc: "Enterprise risk assessment, DPDP Act & CERT-In compliance, RBI/SEBI cybersecurity guidelines." },
      { icon: Server, title: "Unified Security Operations", desc: "Consolidate your security tools into a single platform with single pane of glass visibility." },
      { icon: BarChart3, title: "Executive Risk Management", desc: "Board-ready dashboards and risk metrics that speak the language of business leaders." },
      { icon: ShieldCheck, title: "Regulatory Navigation", desc: "CERT-In, DPDP, RBI, SEBI—our experts turn compliance complexity into streamlined processes." },
      { icon: Zap, title: "Rapid Response Force", desc: "When incidents strike, our elite team contains threats in hours, not days. Your business stays operational." },
    ],
    packages: [
      {
        name: "Professional",
        price: "Contact",
        priceSuffix: " for Quote",
        priceNote: "Custom pricing based on needs",
        desc: "Essential corporate security program",
        icon: FileCheck,
        color: "from-green-500 to-emerald-500",
        features: [
          "Web App Pentesting (2×/year)",
          "Network Pentesting (2×/year)",
          "API Security Testing (1×/year)",
          "Vulnerability Assessment (Quarterly)",
          "SOC Monitoring (200 endpoints)",
          "Endpoint Detection & Response",
          "Email Security & Anti-Phishing",
          "Basic Incident Response",
          "DPDP Act Gap Assessment",
          "CERT-In Compliance Support",
          "Quarterly Compliance Reports",
          "Priority Support (8hr response)",
          "Monthly Security Reviews",
          "Dedicated Security Consultant",
        ],
      },
      {
        name: "Enterprise",
        price: "Contact",
        priceSuffix: " for Quote",
        priceNote: "Custom pricing based on needs",
        highlight: true,
        desc: "Complete security for growing organizations",
        icon: Building2,
        color: "from-blue-500 to-indigo-500",
        features: [
          "Full Pentesting (Quarterly)",
          "Red Team Operations (2×/year)",
          "Cloud Security Assessment",
          "Social Engineering Testing",
          "SOC-as-a-Service (500 endpoints)",
          "Advanced EDR & XDR",
          "SIEM Implementation & Tuning",
          "24/7 Incident Response Team",
          "Full DPDP Act Implementation",
          "CERT-In Reporting (6-hr SLA)",
          "RBI/SEBI Guidelines",
          "ISO 27001 Gap Assessment",
          "Cybersecurity Consulting (4 sessions)",
          "CISO Advisory (Monthly)",
          "Security Awareness Training (50 users)",
        ],
      },
      {
        name: "Corporate Elite",
        price: "Contact",
        priceSuffix: " for Quote",
        priceNote: "Custom enterprise solutions",
        desc: "Elite security for elite organizations",
        icon: Award,
        color: "from-purple-500 to-pink-500",
        features: [
          "Continuous Penetration Testing",
          "Adversary Simulation (Red Team)",
          "Cloud-Native Security (CSPM)",
          "AI-Powered Threat Detection",
          "Dedicated SOC Team",
          "Advanced SIEM/SOAR",
          "Custom Threat Intelligence",
          "24/7 Incident Response (1-hr SLA)",
          "Full DPDP Implementation",
          "CERT-In Complete Compliance",
          "SOC 2 / ISO 27001 Certification",
          "Executive Dashboard",
          "Board Security Briefings",
          "Dedicated vCISO",
        ],
      },
    ],
    compliance: ["DPDP Act", "RBI Cybersecurity Guidelines", "SEBI Cybersecurity Framework", "ISO 27001", "PCI-DSS (if applicable)"],
    testimonials: [
      {
        name: "Vikram Malhotra",
        role: "Group CISO, Apex Global India",
        quote: "Cyberlok operates as a true extension of our security team. Their enterprise capabilities and commitment to outcomes transformed our security posture fundamentally.",
        result: "80% faster incident response",
      },
      {
        name: "Sunita Rao",
        role: "VP Security, MegaCorp Industries",
        quote: "Managing security across 50,000 employees seemed impossible. Cyberlok's enterprise platform gave us visibility and control we didn't think was achievable.",
        result: "Zero major incidents in 2 years",
      },
      {
        name: "Anita Desai",
        role: "Head of IT, Metro Pharmaceuticals",
        quote: "Their SOC team detected a sophisticated phishing campaign targeting our finance team. The response was immediate and professional.",
        result: "Breach prevented, ₹3 Cr saved",
      },
    ],
  },
  government: {
    tagline: "National Critical Infrastructure Protection",
    subtitle: "Security programs aligned with NCIIPC, MeitY, and government cybersecurity frameworks for ministries, PSUs, and critical infrastructure.",
    stats: [
      { value: "24/7", label: "SOC Monitoring" },
      { value: "100%", label: "CERT-In Compliant" },
      { value: "6hrs", label: "Incident Reporting" },
      { value: "SeMT", label: "Framework Ready" },
    ],
    color: "gradient-blue",
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
        name: "State Government Basic",
        price: "Contact",
        priceSuffix: " for Quote",
        priceNote: "Custom pricing based on needs",
        desc: "Essential protection for government infrastructure",
        icon: Landmark,
        color: "from-green-500 to-emerald-500",
        features: [
          "Critical infrastructure assessment",
          "SCADA/ICS security",
          "Quarterly vulnerability scans",
          "CERT-In compliance assistance",
          "SeMT framework alignment",
          "Monthly security reports",
          "6-hour incident reporting",
          "Basic forensics",
          "Dedicated support contact",
        ],
      },
      {
        name: "Central Government",
        price: "Contact",
        priceSuffix: " for Quote",
        priceNote: "Custom pricing based on needs",
        highlight: true,
        desc: "Comprehensive security for central government",
        icon: Shield,
        color: "from-blue-500 to-indigo-500",
        features: [
          "Red team assessments",
          "Continuous threat hunting",
          "APT detection & response",
          "Full DPDP Act implementation",
          "ISMS/ISO 27001 support",
          "MeitY framework alignment",
          "24/7 government SOC",
          "Named security officer",
          "Real-time threat intelligence",
        ],
      },
      {
        name: "Critical Infrastructure",
        price: "Contact",
        priceSuffix: " for Quote",
        priceNote: "Custom government solutions",
        desc: "Maximum security for national assets",
        icon: Target,
        color: "from-red-500 to-orange-500",
        features: [
          "Clearance-capable personnel",
          "Supply chain security",
          "Nation-state threat defense",
          "OT/ICS security",
          "Air-gapped network testing",
          "Full incident response team",
          "Board-ready security briefings",
          "Custom compliance reporting",
          "24/7 dedicated team",
        ],
      },
    ],
    compliance: ["NCIIPC", "CERT-In 6-hour Reporting", "DPDP Act", "MeitY", "ISO 27001"],
  },
};

const threats = {
  individuals: [
    { 
      threat: "UPI & Payment Fraud", 
      stat: "₹1.75 Lakh Crore", 
      detail: "Lost to payment fraud in 2025",
      impact: "Scammers use fake customer care calls, screen sharing apps, and fake refund links to drain bank accounts in minutes.",
      solution: "Real-time transaction monitoring, UPI fraud alerts, and instant account protection.",
      icon: CreditCard,
      color: "from-red-500 to-orange-500"
    },
    { 
      threat: "Identity Theft", 
      stat: "35% Increase", 
      detail: "In Aadhaar misuse cases",
      impact: "Your Aadhaar, PAN, and bank details are being traded on dark web markets for ₹50-500 per record.",
      solution: "Dark web monitoring, Aadhaar leak alerts, and identity restoration support.",
      icon: Fingerprint,
      color: "from-purple-500 to-pink-500"
    },
    { 
      threat: "Social Engineering", 
      stat: "80,000+ Victims", 
      detail: "Duped by WhatsApp scams in 2025",
      impact: "Fake job offers, parcel scams, and impersonation calls target everyone—from students to senior citizens.",
      solution: "Scam detection, fraud awareness training, and suspicious call/SMS filtering.",
      icon: Smartphone,
      color: "from-blue-500 to-indigo-500"
    },
    { 
      threat: "Data Leaks", 
      stat: "₹50-500", 
      detail: "Worth of your personal data on dark web",
      impact: "Breached from apps, hospitals, shops collecting KYC. Your data fuels further fraud and identity theft.",
      solution: "Data breach detection, personal data removal, and leak source identification.",
      icon: EyeOff,
      color: "from-cyan-500 to-blue-500"
    },
  ],
  smes: [
    { 
      threat: "UPI & Payment Fraud", 
      stat: "₹1.75 Lakh Crore", 
      detail: "Lost to payment fraud (2025)",
      impact: "Small businesses lose entire account balances to fake payment confirmations and UPI collector scams.",
      solution: "Payment fraud protection, staff training, and secure transaction protocols.",
      icon: CreditCard,
      color: "from-red-500 to-orange-500"
    },
    { 
      threat: "Business Email Compromise", 
      stat: "₹120+ Crore", 
      detail: "Lost to BEC scams in India",
      impact: "Attackers impersonate vendors, CEOs, or banks to trick employees into transferring funds or sharing credentials.",
      solution: "Email security, domain monitoring, and employee awareness training.",
      icon: Mail,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      threat: "Ransomware", 
      stat: "1200+ Attacks", 
      detail: "On Indian firms in 2025",
      impact: "Your data gets encrypted and held hostage. Attackers demand ₹50,000 to ₹50 lakh for decryption keys.",
      solution: "Endpoint protection, backup solutions, incident response, and ransomware negotiations.",
      icon: ShieldAlert,
      color: "from-purple-500 to-pink-500"
    },
    { 
      threat: "Data Breaches", 
      stat: "#2 Globally", 
      detail: "India ranks second with 1.9B records exposed",
      impact: "Customer data, employee records, and business secrets get leaked—leading to legal action and reputation damage.",
      solution: "Data security assessment, leak detection, and breach response planning.",
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
  ],
  corporates: [
    { 
      threat: "Supply Chain Attacks", 
      stat: "67%", 
      detail: "Of breaches involve third-party vendors",
      impact: "Attackers compromise your vendors, software, or cloud providers to gain access to your systems and data.",
      solution: "Vendor risk assessment, third-party security reviews, and continuous monitoring.",
      icon: Network,
      color: "from-blue-500 to-indigo-500"
    },
    { 
      threat: "Phishing & BEC", 
      stat: "₹120+ Crore", 
      detail: "Lost to business email compromise in India",
      impact: "Fake invoices, vendor impersonation, and executive fraud result in massive financial losses and data exposure.",
      solution: "Email security, domain protection, fraud detection, and executive awareness training.",
      icon: Mail,
      color: "from-orange-500 to-red-500"
    },
    { 
      threat: "Insider Threats", 
      stat: "34%", 
      detail: "Of data breaches involve internal actors",
      impact: "Disgruntled employees, careless staff, or compromised accounts leak sensitive data or sabotage systems.",
      solution: "User behavior analytics, access controls, and insider threat monitoring.",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500"
    },
    { 
      threat: "Regulatory Penalties", 
      stat: "₹250 Crore", 
      detail: "Maximum DPDP Act penalty",
      impact: "Non-compliance with DPDP Act, CERT-In directives, and industry regulations can result in massive fines and legal action.",
      solution: "Compliance gap assessment, policy development, and continuous regulatory monitoring.",
      icon: FileCheck,
      color: "from-green-500 to-emerald-500"
    },
  ],
  government: [
    { 
      threat: "Nation-State Actors", 
      stat: "1000+ Attacks", 
      detail: "Critical infra faces daily",
      impact: "Advanced persistent threats target power grids, banks, and government systems with sophisticated attack techniques.",
      solution: "Threat intelligence, APT detection, critical infrastructure protection, and incident response.",
      icon: Target,
      color: "from-red-500 to-orange-500"
    },
    { 
      threat: "Hacktivism", 
      stat: "300+ DDoS", 
      detail: "Attacks on government sites monthly",
      impact: "Political hacktivists target government websites to deface content, disrupt services, and spread propaganda.",
      solution: "DDoS mitigation, web application firewall, and traffic analysis.",
      icon: ShieldAlert,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      threat: "Insider Threats", 
      stat: "40%", 
      detail: "Of government breaches involve insiders",
      impact: "Unintentional data leaks, unauthorized access, and deliberate data exfiltration by insiders pose significant risks.",
      solution: "Zero trust architecture, user monitoring, and security awareness programs.",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500"
    },
    { 
      threat: "Legacy System Exploits", 
      stat: "50+ Vulnerabilities", 
      detail: "Average unpatched in legacy systems",
      impact: "Old systems running obsolete software with known vulnerabilities are easy targets for cybercriminals.",
      solution: "Vulnerability assessment, patch management, system hardening, and modernization planning.",
      icon: Bug,
      color: "from-cyan-500 to-blue-500"
    },
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
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
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
              <Shield className="h-4 w-4 text-blue-400" />
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
              <span className="text-blue-400">Indian Organization</span>
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
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-[500px] rounded-full bg-blue-500/10 blur-3xl max-w-[90vw]" />
          </div>
          
          <Container>
            <div className="flex justify-center py-3 sm:py-4">
              <motion.div 
                className="inline-flex items-center gap-1 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-1.5 sm:p-2 backdrop-blur-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {segments.map((segment) => (
                  <motion.button
                    key={segment.id}
                    onClick={() => setActiveTab(segment.id)}
                    className={`relative z-10 flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl px-2 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
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
                        className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-500/25"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                    <motion.span 
                      className="relative z-10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <segment.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                    <span className="relative z-10 hidden lg:inline">{segment.label}</span>
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
                  <div className="py-8 sm:py-10 md:py-14">
                    {/* Banner with slide up + fade */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="mb-6 sm:mb-8 md:mb-10 rounded-xl sm:rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 sm:p-6 md:p-8"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg`}
                        >
                          <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.p 
                            className="text-base sm:text-lg md:text-xl font-semibold text-blue-100"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {data.tagline}
                          </motion.p>
                          <motion.p 
                            className="mt-1 sm:mt-2 text-sm sm:text-base text-white/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {data.subtitle}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA with scale bounce */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Link
                        href="/contact#send-message"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                        {data.heroCta || 'Get Your Free Device Check'}
                      </Link>
                    </motion.div>

                    {/* Opening Statement with gradient border */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-6 sm:mt-8 md:mt-10 rounded-xl sm:rounded-2xl border border-blue-500/20 bg-white/5 p-4 sm:p-6"
                    >
                      <p className="text-sm sm:text-base font-semibold text-blue-400">{data.openingStatement}</p>
                      <p className="mt-2 sm:mt-3 text-sm text-white/70">{data.openingDesc}</p>
                    </motion.div>

                    {/* Stats with staggered fade-in from bottom */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                      {data.stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 text-center transition-colors hover:border-blue-400/30"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          <motion.p 
                            className="relative text-xl sm:text-2xl md:text-3xl font-bold text-blue-400"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                          >
                            {stat.value}
                          </motion.p>
                          <p className="relative mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>

              {/* THE REAL PROBLEMS */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-10 md:py-14">
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-semibold"
                    >
                      <span className="text-blue-400">The Real Problems</span>
                      <span className="text-white/90"> Individuals Face</span>
                    </motion.h3>

                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {data.challenges.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.08 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 transition-all hover:border-blue-400/30"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          <div className="relative">
                            <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                              <motion.div 
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color || 'from-blue-500 to-indigo-500'} shadow-lg`}
                              >
                                <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                              </motion.div>
                              <h4 className="text-base sm:text-lg font-semibold text-white text-left leading-snug pt-1 sm:pt-2">{item.title}</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-white/60 text-justify leading-relaxed">{item.desc}</p>
                          </div>
                          {item.stat && (
                            <motion.p 
                              className="relative mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 text-xs sm:text-sm text-blue-400 text-left"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                            >
                              {item.stat}
                            </motion.p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>

              {/* WHAT WE DO */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-10 md:py-14">
                    <motion.h3
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-semibold"
                    >
                      What We <span className="text-blue-400">Actually Do</span>
                    </motion.h3>

                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                      {data.services.map((service, i) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.06 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 transition-all hover:border-blue-400/30"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          <div className="relative">
                            <motion.div 
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${
                                i % 4 === 0 ? 'from-blue-500 to-indigo-500' :
                                i % 4 === 1 ? 'from-purple-500 to-pink-500' :
                                i % 4 === 2 ? 'from-cyan-500 to-blue-500' :
                                'from-green-500 to-emerald-500'
                              } shadow-lg`}
                            >
                              <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                            </motion.div>
                            <div className="mt-3 sm:mt-4 md:mt-5">
                              <h4 className="text-base sm:text-lg font-semibold">{service.title}</h4>
                              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">{service.desc}</p>
                            </div>
                          </div>
                          {service.price && (
                            <motion.p 
                              className="relative mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-blue-400"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                            >
                              {service.price}
                            </motion.p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>
            </>
          )}

          {/* ALL SEGMENTS - SME, CORPORATES, GOVERNMENT */}
          {activeTab !== 'individuals' && (
            <>
              {/* TAGLINE & SUBTITLE WITH CTA */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-10 md:py-14">
                    {/* Banner with scale + fade */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 sm:mb-8 md:mb-10 rounded-xl sm:rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 sm:p-6 md:p-8"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg`}
                        >
                          <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.p 
                            className="text-base sm:text-lg md:text-xl font-semibold text-blue-100"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {data.tagline}
                          </motion.p>
                          <motion.p 
                            className="mt-1 sm:mt-2 text-sm sm:text-base text-white/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {data.subtitle}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA with spring bounce */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                    >
                      <Link
                        href="/contact#send-message"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        Get Started
                        <Rocket className="h-4 w-4" />
                      </Link>
                    </motion.div>

                    {/* Stats with pop-in animation */}
                    <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                      {data.stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.25 + i * 0.08, type: "spring" }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 text-center transition-colors hover:border-blue-400/30"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          <p className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</p>
                          <p className="relative mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>

              {/* CHALLENGES - Slide from sides */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-10 md:py-14">
                    <motion.h3
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-semibold"
                    >
                      <span className="text-blue-400">Challenges</span>
                      <span className="text-white/90"> We Solve</span>
                    </motion.h3>

                    <div className="grid gap-4 sm:gap-5">
                      {data.challenges.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.08 }}
                          whileHover={{ scale: 1.01, y: -4 }}
                          className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 transition-all hover:border-blue-400/30"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          <div className="relative">
                            <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                              <motion.div 
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color || 'from-blue-500 to-indigo-500'} shadow-lg`}
                              >
                                <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                              </motion.div>
                              <h4 className="text-base sm:text-lg font-semibold text-white text-left leading-snug pt-1 sm:pt-2">{item.title}</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-white/60 text-justify leading-relaxed">{item.desc}</p>
                          </div>
                          {item.stat && (
                            <motion.p 
                              className="relative mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 text-xs sm:text-sm text-blue-400 text-left"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                            >
                              {item.stat}
                            </motion.p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>

              {/* SERVICES - Staggered fade up */}
              <section className="border-b border-white/10">
                <Container>
                  <div className="py-8 sm:py-10 md:py-14">
                    <motion.h3
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-semibold"
                    >
                      Our <span className="text-blue-400">Services</span>
                    </motion.h3>

                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                      {data.services.map((service, i) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 transition-all hover:border-blue-400/30"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          <div className="relative">
                            <motion.div 
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${
                                i % 4 === 0 ? 'from-blue-500 to-indigo-500' :
                                i % 4 === 1 ? 'from-purple-500 to-pink-500' :
                                i % 4 === 2 ? 'from-cyan-500 to-blue-500' :
                                'from-green-500 to-emerald-500'
                              } shadow-lg`}
                            >
                              <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                            </motion.div>
                            <h4 className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg font-semibold">{service.title}</h4>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">{service.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>
            </>
          )}

          {/* THREATS */}
          <section className="border-b border-white/10 bg-gradient-to-b from-blue-950/20 to-transparent">
            <Container>
              <div className="py-10 sm:py-14 md:py-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 text-center"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                      <AlertTriangle className="h-7 w-7 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                    Threats Targeting <span className="text-blue-400">Your Sector</span>
                  </h3>
                  <p className="mt-3 text-base text-white/60 max-w-2xl mx-auto">
                    Understand the real threats facing your organization and how Cyberlok helps mitigate them
                  </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {currentThreats.map((threat, i) => (
                    <motion.div
                      key={threat.threat}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all hover:border-blue-400/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                      
                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.15 }}
                            transition={{ duration: 0.6 }}
                            className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${threat.color} shadow-lg`}
                          >
                            <threat.icon className="h-7 w-7 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white text-left leading-snug">
                              {threat.threat}
                            </h4>
                            <motion.div 
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                              className="mt-2 h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            />
                          </div>
                        </div>

                        <div className="mb-4 rounded-xl border border-white/10 bg-black/20 p-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                              {threat.stat}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-white/50">{threat.detail}</p>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <AlertTriangle className="h-4 w-4 text-red-400" />
                              <span className="text-xs font-semibold text-red-400">IMPACT</span>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed">{threat.impact}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Shield className="h-4 w-4 text-green-400" />
                              <span className="text-xs font-semibold text-green-400">HOW WE PROTECT</span>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed">{threat.solution}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 text-center"
                >
                  <Link
                    href="/contact#send-message"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-lg transition group-hover:opacity-100" />
                    <Shield className="h-5 w-5 relative" />
                    <span className="relative">Get Protected Today</span>
                    <ArrowRight className="h-5 w-5 relative transition group-hover:translate-x-1" />
                  </Link>
                </motion.div>
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center text-xl sm:text-2xl font-semibold"
                  >
                    Security Packages — <span className="text-blue-400">Choose Your Protection</span>
                  </motion.h3>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.packages.map((pkg, i) => {
                      const IconComponent = pkg.icon || Shield;
                      const gradientColor = pkg.color || "from-blue-500 to-indigo-500";
                      
                      return (
                        <motion.div
                          key={pkg.name}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className={`group relative overflow-hidden rounded-2xl border transition-all ${
                            pkg.highlight
                              ? "border-2 border-blue-400/50 bg-gradient-to-b from-blue-500/15 via-white/5 to-transparent shadow-lg shadow-blue-500/10"
                              : "border-white/10 bg-white/5 hover:border-blue-400/30"
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          {pkg.highlight && (
                            <>
                              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500" />
                            </>
                          )}
                          
                          <div className="relative p-6">
                            {pkg.highlight && (
                              <div className="rounded-full bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-1 text-xs font-semibold text-black w-fit mx-auto mb-4">
                                Most Popular
                              </div>
                            )}
                            
                            <div className="text-center mb-4">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientColor} shadow-lg mx-auto mb-4`}
                              >
                                <IconComponent className="h-8 w-8 text-white" />
                              </motion.div>
                              <h4 className="text-xl font-semibold text-white">{pkg.name}</h4>
                              <p className="mt-1 text-sm text-white/60">{pkg.desc}</p>
                            </div>
                            
                            <div className="text-center mb-4">
                              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                                {pkg.price}
                              </span>
                              {pkg.period && (
                                <span className="ml-1 text-sm text-white/50">/ {pkg.period}</span>
                              )}
                            </div>
                            
                            <ul className="space-y-2">
                              {pkg.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            
                            <Link 
                              href="/contact#send-message" 
                              className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                                pkg.highlight
                                  ? "bg-gradient-to-r from-blue-500 to-blue-400 text-black shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                                  : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                              }`}
                            >
                              Get Started
                            </Link>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* No Subscription Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-blue-500/5 p-6 text-center"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4"
                    >
                      <Shield className="h-6 w-6 text-white" />
                    </motion.div>
                    <p className="text-base text-white/70">
                      <span className="font-semibold text-blue-400">No subscription.</span> No hidden renewal. <span className="font-semibold text-blue-400">Pay once, get protected.</span>
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center text-xl sm:text-2xl font-semibold tracking-tight"
                  >
                    Security Packages — <span className="text-blue-400">Choose Your Protection</span>
                  </motion.h3>

                  <div className="grid gap-5 lg:grid-cols-3">
                    {data.packages.map((pkg, i) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 40, rotateY: 15 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`group relative rounded-2xl border p-5 sm:p-6 transition-all ${
                          pkg.highlight
                            ? "border-blue-400/50 bg-gradient-to-b from-blue-500/15 via-white/5 to-transparent shadow-lg shadow-blue-500/10"
                            : "border-white/10 bg-white/5 hover:border-blue-400/20"
                        }`}
                      >
                        {pkg.highlight && (
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
                            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-1 text-xs font-semibold text-black shadow-lg shadow-blue-500/30"
                          >
                            Most Popular
                          </motion.div>
                        )}

                        <div className="text-center">
                          {pkg.icon && pkg.color && (
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.color} shadow-lg mb-4`}
                            >
                              <pkg.icon className="h-7 w-7 text-white" />
                            </motion.div>
                          )}
                          <h4 className="text-xl font-semibold">{pkg.name}</h4>
                          <p className="mt-1 text-sm text-white/60">{pkg.desc}</p>
                          {activeTab === 'individuals' || activeTab === 'smes' ? (
                            <>
                              <motion.p 
                                className="mt-4 text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent"
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
                              className="mt-4 text-2xl font-bold text-blue-400"
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
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
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
                                ? "bg-gradient-to-r from-blue-500 to-blue-400 text-black hover:shadow-lg hover:shadow-blue-500/30"
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
                  <FileCheck className="h-5 w-5 text-blue-400" />
                  Compliance Frameworks
                </motion.h3>

                <div className="flex flex-wrap gap-3">
                  {data.compliance.map((comp, i) => (
                    <motion.span
                      key={comp}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-blue-400/5 px-4 py-2 text-sm text-blue-400 transition-all hover:border-blue-400/40 hover:bg-blue-500/20"
                    >
                      {comp}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* TESTIMONIALS */}
          {data.testimonials && data.testimonials.length > 0 && (
            <section className="border-b border-white/10">
              <Container>
                <div className="py-8 sm:py-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 sm:mb-8 flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight"
                  >
                    <Star className="h-5 w-5 text-blue-400" />
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
                      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-blue-400/20 hover:bg-white/[0.07]"
                    >
                      {/* Animated gradient border on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      <div className="relative">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + i * 0.1 + j * 0.03 }}
                            >
                              <Star className="h-3 w-3 fill-blue-400 text-blue-400" />
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
                        {t.result && (
                          <motion.div 
                            className="mt-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-400/5 px-3 py-2 text-xs text-blue-400 border border-blue-400/20"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            Result: {t.result}
                          </motion.div>
                        )}
                        <motion.div 
                          className="mt-4 flex items-center gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <motion.div 
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 to-blue-400/20 text-sm font-semibold text-blue-400 border border-blue-400/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {t.name.charAt(0)}
                          </motion.div>
                          <div>
                            <p className="text-sm font-semibold group-hover:text-blue-100 transition-colors">{t.name}</p>
                            <p className="text-xs text-white/50">{t.role}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
          )}

          {/* FAQ */}
          {data.faqs && data.faqs.length > 0 && (
            <section className="border-b border-white/10">
              <Container>
                <div className="py-8 sm:py-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 sm:mb-8 flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight"
                  >
                    <HelpCircle className="h-5 w-5 text-blue-400" />
                    Frequently Asked Questions
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Accordion type="single" collapsible className="w-full">
                      {data.faqs.map((faq, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                        >
                          <AccordionItem value={`item-${i}`} className="border-white/10">
                            <AccordionTrigger className="text-left text-white/90 hover:text-blue-400 transition-colors">
                              <span className="text-sm font-medium">{faq.q}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-white/60 leading-relaxed">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </motion.div>
                </div>
              </Container>
            </section>
          )}

          {/* CTA */}
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_50%)]" />
            
            {/* Animated background elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl"
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
                  className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/5 to-transparent p-6 sm:p-10 shadow-2xl shadow-blue-500/5"
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border border-blue-400/30"
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
                        <Zap className="h-10 w-10 text-blue-400" />
                      </motion.div>
                      <h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight">
                        Ready to secure your {activeTab === 'individuals' ? 'family' : activeTab === 'smes' ? 'business' : activeTab === 'corporates' ? 'organization' : 'sector'}?
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
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:from-blue-400 hover:to-blue-300"
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
