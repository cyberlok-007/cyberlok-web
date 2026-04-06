"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  Send,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Landmark,
  ChevronDown,
} from "lucide-react";
import Container from "@/components/shared/Container";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import StarBorder from "@/components/StarBorder/StarBorder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08 },
  }),
};

const contactChannels = [
  {
    icon: Phone,
    title: "Call Us on",
    value: "+91 8261918705",
    description: "Mon-Sat 9AM-8PM IST",
    href: "tel:+91 8261918705",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "cyberlok127.0.0.1@gmail.com",
    description: "Response within 24 hours",
    href: "mailto:cyberlok127.0.0.1@gmail.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+91 8261918705",
    description: "Quick responses on WhatsApp",
    href: "https://wa.me/8261918705",
    color: "from-green-500 to-emerald-500",
  },
];

const organizationTypes = [
  { value: "individual", label: "Individual", icon: Users },
  { value: "sme", label: "Small/Medium Enterprise", icon: Building2 },
  { value: "corporate", label: "Corporate", icon: Briefcase },
  { value: "enterprise", label: "Enterprise", icon: Building2 },
  { value: "government", label: "Government", icon: Landmark },
  { value: "other", label: "Other", icon: GraduationCap },
];

const serviceInterests = [
  "Security Solutions",
  "VAPT Services",
  "Digital Forensics",
  "Security Awareness Training",
  "Cloud Security",
  "Compliance & GRC",
  "Incident Response",
  "Security Simulations",
  "CyberSecurity Consulting",
  "Mobile Device Security",
  "Other",
];

const faqs = [
  {
    question: "How quickly can Cyberlok respond to a security incident?",
    answer: "For active incidents, our 24/7 SOC team provides immediate response. Initial triage begins within 15 minutes of reported incidents, and we can have a dedicated incident response team on-site or remote within 4 hours for critical situations.",
  },
  {
    question: "What industries does Cyberlok specialize in?",
    answer: "We serve clients across healthcare, financial services, government, manufacturing, retail, and technology sectors. Our team includes specialists with deep expertise in regulatory compliance including HIPAA, PCI-DSS, SOC 2, ISO 27001, and NIST frameworks.",
  },
  {
    question: "Do you offer custom security programs?",
    answer: "Absolutely. Every organization has unique security needs. We conduct comprehensive assessments to understand your risk profile, then design tailored security programs that align with your business objectives, budget, and regulatory requirements.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible engagement models including project-based pricing, monthly retainers, and annual contracts. Pricing depends on organization size, scope of services, and complexity. Contact us for a customized quote based on your specific requirements.",
  },
  {
    question: "Can you help with compliance requirements?",
    answer: "Yes, our GRC team specializes in regulatory compliance. We help organizations achieve and maintain compliance with frameworks like SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, and NIST. We also conduct compliance audits and gap assessments.",
  },
];

function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isDismissed) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden border-b border-red-500/30 bg-gradient-to-r from-red-950/80 via-red-900/50 to-red-950/80"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.15),transparent_50%)]" />
      <Container>
        <div className="relative flex flex-col items-center gap-4 py-4 sm:py-6 md:flex-row md:justify-between">
          <div className="flex w-full items-start gap-3 sm:items-center sm:gap-4">
            <div className="relative shrink-0">
              <motion.div
                className="absolute inset-0 rounded-full bg-red-500/40 blur-xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="relative flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-red-500/50 bg-red-500/20">
                <AlertTriangle className="h-5 w-5 sm:h-7 sm:w-7 text-red-400" />
              </div>
            </div>
            <div className="flex-1">
              <Badge variant="destructive" className="mb-1 sm:mb-2 text-xs sm:text-sm">
                24/7 Emergency Response - India
              </Badge>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Experiencing a Cyber Incident?
              </h3>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/70 whitespace-nowrap overflow-x-auto">
                Cyberlok India: 1800-891-1100
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end md:gap-4">
            <ClickSpark sparkColor="#ef4444" sparkSize={6} sparkRadius={14} sparkCount={6}>
              <StarBorder as="div" color="red" speed="2.5s" thickness={2} className="rounded-full">
                <Link
                  href="/incident-response"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-red-400"
                >
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">Get Immediate Help</span>
                  <span className="xs:hidden">Help</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition group-hover:translate-x-1" />
                </Link>
              </StarBorder>
            </ClickSpark>
            <button
              onClick={() => setIsDismissed(true)}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300"
              aria-label="Dismiss emergency banner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contactChannels.map((channel, i) => (
        <AnimatedContent key={channel.title} distance={20} direction="vertical" duration={0.6} delay={i * 0.1}>
          <ClickSpark sparkColor="#3b82f6" sparkSize={5} sparkRadius={12} sparkCount={5}>
            <Card className="group relative overflow-hidden border-white/10 bg-white/5 transition-all hover:border-blue-400/30 hover:bg-white/10">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${channel.color} shadow-lg`}
                >
                  <channel.icon className="h-6 w-6 text-white" />
                </motion.div>
                <CardTitle className="mt-4 text-base sm:text-lg text-white">{channel.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-white/60">{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={channel.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  {channel.value}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </ClickSpark>
        </AnimatedContent>
      ))}
    </div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    orgType: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg"
        >
          <CheckCircle2 className="h-10 w-10 text-white" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white">Message Sent Successfully</h3>
        <p className="mt-3 max-w-md text-white/70">
          Thank you for reaching out. A member of our team will contact you within 24 hours to discuss your security needs.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6 border-blue-400/30 text-blue-400 hover:bg-blue-500/10"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Full Name *</label>
          <Input
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Sam Dsouza"
            required
            className="border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:bg-white/10 h-11 sm:h-9"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Work Email *</label>
          <Input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Sam@company.com"
            required
            className="border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:bg-white/10 h-11 sm:h-9"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Phone Number</label>
          <Input
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:bg-white/10 h-11 sm:h-9"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Organization Name</label>
          <Input
            name="organization"
            value={formState.organization}
            onChange={handleChange}
            placeholder="Acme Corporation"
            className="border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:bg-white/10 h-11 sm:h-9"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Organization Type *</label>
          <select
            name="orgType"
            value={formState.orgType}
            onChange={handleChange}
            required
            className="flex h-11 sm:h-9 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400/50 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" className="bg-black">
              Select type
            </option>
            {organizationTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-black">
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Service Interest *</label>
          <select
            name="service"
            value={formState.service}
            onChange={handleChange}
            required
            className="flex h-11 sm:h-9 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400/50 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" className="bg-black">
              Select service
            </option>
            {serviceInterests.map((service) => (
              <option key={service} value={service} className="bg-black">
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/80">Message *</label>
        <Textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about your security needs, current challenges, or questions..."
          required
          rows={4}
          className="border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:bg-white/10"
        />
      </div>

      <ClickSpark sparkColor="#000" sparkSize={6} sparkRadius={14} sparkCount={6}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full gap-2 rounded-full bg-cyan-500 py-6 text-base font-semibold text-black transition-all hover:bg-cyan-400 disabled:opacity-70"
        >
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-lg transition group-hover:opacity-100" />
          {isSubmitting ? (
            <>
              <motion.div
                className="h-5 w-5 rounded-full border-2 border-black/30 border-t-black"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative">Sending...</span>
            </>
          ) : (
            <>
              <span className="relative">Send Message</span>
              <Send className="relative h-5 w-5 transition group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </ClickSpark>

      <p className="text-center text-xs text-white/50">
        By submitting this form, you agree to our privacy policy. We never share your information.
      </p>
    </form>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <AnimatedContent key={i} distance={15} direction="vertical" duration={0.5} delay={i * 0.1}>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/[0.07]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <span className="pr-4 font-medium text-white">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === i ? "auto" : 0,
                opacity: openIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm text-white/70">
                {faq.answer}
              </div>
            </motion.div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
}

function OfficeLocations() {
  const offices = [
    {
      city: "Mumbai",
      phone: "+91 22 6780 1100",
      email: "mumbai@cyberlok.in",
      type: "remote",
      note: "Our Mumbai team operates remotely, serving clients across the metropolitan region.",
      color: "from-purple-500 to-pink-500",
    },
    {
      city: "Virar",
      address: "Cyberlok Innovation Hub, Golden Park",
      region: "Virar West, Palghar 401303",
      phone: "+91 22 6780 1200",
      email: "virar@cyberlok.in",
      type: "hq",
      note: "Our headquarters and core operations center.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      city: "Pune",
      phone: "+91 20 6780 1300",
      email: "pune@cyberlok.in",
      type: "remote",
      note: "Remote team supporting clients across the Pune & Maharashtra region.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {offices.map((office, i) => (
        <AnimatedContent key={office.city} distance={20} direction="vertical" duration={0.6} delay={i * 0.1}>
          <Card
            className={`group relative overflow-hidden transition-all ${
              office.type === "hq"
                ? "border-blue-400/40 bg-black/40"
                : "border-white/10 bg-black/40"
            }`}
          >
            <div
              className={`absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-opacity ${
                office.type === "hq" ? "bg-blue-400/20" : "bg-blue-400/10"
              } opacity-0 transition-opacity group-hover:opacity-100`}
            />
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${office.color} shadow-lg`}
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg text-white">{office.city}</CardTitle>
                </div>
                {office.type === "hq" ? (
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30 text-xs">
                    Headquarters
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-white/20 text-white/50 text-xs">
                    Remote Team
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {office.address && <p className="text-sm text-white/70">{office.address}</p>}
              {office.region && <p className="text-sm text-white/50">{office.region}</p>}
              {office.type !== "hq" && <p className="text-sm text-white/60 italic">{office.note}</p>}
              <div className="pt-2">
                <p className="text-xs text-white/40">{office.phone}</p>
                <p className={`text-xs ${office.type === "hq" ? "text-blue-400/80" : "text-blue-400/60"}`}>
                  {office.email}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedContent>
      ))}
    </div>
  );
}

function ResponseTime() {
  const metrics = [
    { label: "Initial Response", value: "< 1 hour", description: "For all inquiries", icon: Clock, color: "from-blue-500 to-indigo-500" },
    { label: "Security Assessment", value: "24-48 hrs", description: "Quote delivery", icon: Shield, color: "from-purple-500 to-pink-500" },
    { label: "Incident Response", value: "15 min", description: "SOC triage time", icon: AlertTriangle, color: "from-orange-500 to-red-500" },
    { label: "Emergency Support", value: "24/7", description: "Always available", icon: Phone, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-400/30"
        >
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}
          >
            <metric.icon className="h-6 w-6 text-white" />
          </motion.div>
          <div className="flex-1 text-left">
            <p className={`font-bold text-blue-400 ${metric.value === "24/7" ? "text-xl" : "text-2xl"}`}>
              {metric.value}
            </p>
            <p className="text-sm font-medium text-white">{metric.label}</p>
            <p className="text-xs text-white/50">{metric.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />

      <section className="relative overflow-hidden border-b border-white/10 py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <Container>
          <div className="relative">
            <Breadcrumbs items={[{ label: "Contact" }]} className="mb-6" />
            
            <motion.div initial="hidden" animate="show" className="mx-auto max-w-3xl text-center px-2">
              <motion.div custom={0} variants={fadeUp}>
                <Badge variant="outline" className="border-cyan-400/30 text-blue-400">
                  <Shield className="mr-1 h-3 w-3" />
                  Get in Touch
                </Badge>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Let&apos;s Discuss Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Security Needs
                </span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 px-2">
                Whether you&apos;re facing an immediate security concern or planning your long-term security
                strategy, our team is ready to help. Reach out and let&apos;s build a security roadmap
                together.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-12 sm:py-16">
        <Container>
          <AnimatedContent distance={30} direction="vertical" duration={0.7}>
            <h2 className="mb-2 text-xs font-semibold tracking-widest text-blue-400">CONTACT CHANNELS</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Multiple Ways to Reach Us</h3>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/60">
              Choose the contact method that works best for you. Our team is available during business
              hours and our emergency response line is always open.
            </p>
          </AnimatedContent>
          <div className="mt-6 sm:mt-8">
            <ContactChannels />
          </div>
        </Container>
      </section>

      <section id="send-message" className="border-b border-white/10 py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <AnimatedContent distance={30} direction="vertical" duration={0.7}>
                <h2 className="mb-2 text-xs font-semibold tracking-widest text-blue-400">SEND A MESSAGE</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Tell Us About Your Needs</h3>
                <p className="mt-3 text-sm sm:text-base text-white/60">
                  Fill out the form and our security consultants will get back to you within 24 hours
                  with insights tailored to your organization.
                </p>
              </AnimatedContent>
              <div className="mt-6 sm:mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <AnimatedContent distance={30} direction="vertical" duration={0.7}>
                <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-transparent transition-all hover:border-blue-400/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-white">Why Choose Cyberlok?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "Industry Experts", desc: "Team members with decades of experience in offensive and defensive security", color: "from-blue-500 to-indigo-500" },
                        { title: "Tailored Solutions", desc: "Security programs designed around your specific risks and requirements", color: "from-purple-500 to-pink-500" },
                        { title: "Proven Results", desc: "We've helped organizations reduce risk by an average of 72%", color: "from-green-500 to-emerald-500" },
                        { title: "Continuous Support", desc: "We're with you from assessment through implementation and beyond", color: "from-orange-500 to-red-500" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <motion.div 
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                          >
                            <CheckCircle2 className="h-5 w-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <p className="text-base font-medium text-white">{item.title}</p>
                            <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedContent>

              <AnimatedContent distance={30} direction="vertical" duration={0.7} delay={0.1}>
                <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-transparent transition-all hover:border-blue-400/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg"
                      >
                        <Clock className="h-5 w-5 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg sm:text-xl font-semibold text-white">Response Times</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ResponseTime />
                  </CardContent>
                </Card>
              </AnimatedContent>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-12 sm:py-16">
        <Container>
          <AnimatedContent distance={30} direction="vertical" duration={0.7}>
            <h2 className="mb-2 text-xs font-semibold tracking-widest text-blue-400">INDIA PRESENCE</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Our Offices</h3>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/60">
              With offices across Mumbai, Virar, and Pune, we provide comprehensive cybersecurity
              coverage across India with rapid response capabilities.
            </p>
          </AnimatedContent>
          <div className="mt-6 sm:mt-8">
            <OfficeLocations />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl px-2">
            <AnimatedContent distance={30} direction="vertical" duration={0.7}>
              <h2 className="mb-2 text-center text-xs font-semibold tracking-widest text-blue-400">
                COMMON QUESTIONS
              </h2>
              <h3 className="text-center text-xl sm:text-2xl font-semibold text-white">Frequently Asked Questions</h3>
              <p className="mt-3 text-center text-sm sm:text-base text-white/60">
                Quick answers to common questions about working with Cyberlok.
              </p>
            </AnimatedContent>
            <div className="mt-6 sm:mt-8">
              <FAQAccordion />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <Container>
          <AnimatedContent distance={30} direction="vertical" duration={0.7}>
            <div className="mx-auto max-w-3xl text-center px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Ready to Strengthen Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  Security Posture?
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70">
                Don&apos;t wait for a breach to happen. Take proactive steps to protect your organization
                today.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <ClickSpark sparkColor="#3b82f6" sparkSize={6} sparkRadius={14} sparkCount={6}>
                  <Link
                    href="/contact#"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto justify-center"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-lg transition group-hover:opacity-100" />
                    <span className="relative">Request Security Assessment</span>
                    <ArrowRight className="relative h-4 w-4 sm:h-5 sm:w-5 transition group-hover:translate-x-1" />
                  </Link>
                </ClickSpark>
                <ClickSpark sparkColor="#3b82f6" sparkSize={5} sparkRadius={12} sparkCount={5}>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
                  >
                    Explore Our Services
                  </Link>
                </ClickSpark>
              </div>
            </div>
          </AnimatedContent>
        </Container>
      </section>
    </div>
  );
}
