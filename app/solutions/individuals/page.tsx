"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import {
  Smartphone,
  Mail,
  Wifi,
  CheckCircle2,
  Star,
  Heart,
  ChevronRight,
  CreditCard,
  Users,
  ArrowRight,
  Shield,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const whyMatters = [
  {
    stat: "1 in 4",
    desc: "Indians faced cybercrime in 2024, with average losses of ₹50,000+",
  },
  {
    stat: "₹1.5L Cr",
    desc: "estimated annual cost of cybercrime to Indian businesses and individuals",
  },
  {
    stat: "95%",
    desc: "of Indians are unaware of basic digital security practices",
  },
];

const services = [
  {
    title: "Personal Identity Protection",
    desc: "Monitor your Aadhaar, PAN, and financial accounts for unauthorized activity with real-time alerts.",
    icon: Shield,
    features: ["Aadhaar & PAN monitoring", "Bank account alerts", "Dark web scanning", "Instant breach notifications"],
    price: "From ₹299/mo",
  },
  {
    title: "Home Network Security",
    desc: "Secure your home Wi-Fi, Jio/Airtel routers, smart devices, and family browsing.",
    icon: Wifi,
    features: ["Router security setup", "Smart home protection", "Parental controls", "VPN for all devices"],
    price: "From ₹499/mo",
  },
  {
    title: "UPI & Payment Protection",
    desc: "Protect your UPI transactions, bank accounts, and credit cards from fraud and scams.",
    icon: CreditCard,
    features: ["UPI fraud alerts", "Transaction monitoring", "SIM swap detection", "EMV chip security"],
    price: "From ₹199/mo",
  },
  {
    title: "Mobile Security Suite",
    desc: "Protect your Android/iPhone from malware, phishing apps, and online threats.",
    icon: Smartphone,
    features: ["Malware protection", "App permission audit", "Safe browsing", "Anti-theft features"],
    price: "From ₹349/mo",
  },
  {
    title: "Phishing & Fraud Protection",
    desc: "AI-powered protection against WhatsApp scams, fake calls, and phishing SMS.",
    icon: Mail,
    features: ["WhatsApp scam detection", "SMS fraud filtering", "Fake call blocking", "Fraud awareness tips"],
    price: "From ₹249/mo",
  },
  {
    title: "Family Security Bundle",
    desc: "Comprehensive protection for your entire family including parental controls and kids' digital safety.",
    icon: Heart,
    features: ["Multi-device coverage (up to 5)", "Screen time management", "Location sharing", "Emergency SOS"],
    price: "From ₹599/mo",
  },
];

const testimonials = [
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
];

const faqs = [
  {
    q: "Do I need cybersecurity if I&apos;m just a regular person?",
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
];

export default function IndividualsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,140,0,0.08),transparent_50%)]" />
        </div>
        <Container>
          <div className="py-10 sm:py-14 md:py-24">
            <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Individuals" }]} className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Users className="h-4 w-4 text-cyan-300" />
              Personal Security Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-white/90">Protect What Matters</span>
              <br />
              <span className="text-cyan-300">You, Your Family, Your Digital Life</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Cyberlok brings enterprise-grade security to Indians. From Aadhaar protection to UPI fraud detection,
              we help you stay safe in India&apos;s digital ecosystem—without the complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 sm:mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Start Your Protection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View Protection Plans
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">WHY IT MATTERS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Cyber threats targeting Indians
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {whyMatters.map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-300">{item.stat}</p>
                  <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-white/10">
        <Container>
          <div className="py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">PROTECTION PACKAGES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Security solutions for every need
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/65">
                Choose the protection level that fits your lifestyle. All plans include 24/7 monitoring, Hindi support, and satisfaction guarantee.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <service.icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <span className="text-sm font-semibold text-cyan-300">{service.price}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{service.desc}</p>

                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
                  >
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
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
              <p className="text-xs font-semibold tracking-widest text-cyan-300">REAL STORIES</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Indians trust Cyberlok to protect their digital lives
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <p className="text-xs font-semibold tracking-widest text-cyan-300">QUESTIONS</p>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-semibold text-sm">{faq.q}</p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_50%)]" />
        <Container>
           <div className="py-10 sm:py-16">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 sm:p-10 md:p-14 text-center"
             >
               <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                 Your family&apos;s safety starts today
               </h2>
               <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/65">
                 Join thousands of Indians who trust Cyberlok to protect their digital lives.
                 Get started with a free security assessment.
               </p>
               <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
                >
                  Get Free Assessment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  View All Services
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
