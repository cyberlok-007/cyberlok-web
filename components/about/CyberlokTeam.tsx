"use client";

import Container from "@/components/shared/Container";
import { motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                TEAM CARD                                   */
/* -------------------------------------------------------------------------- */

function TeamCard({
  img,
  name,
  role,
  focus,
}: {
  img: string;
  name: string;
  role: string;
  focus: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="
        group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent
        p-6 text-center
        transition-all duration-300 hover:border-blue-400/30
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative">
        <div className="mx-auto relative">
          <div className="relative h-36 w-36 mx-auto overflow-hidden rounded-full border-2 border-white/20 transition-all group-hover:border-blue-400/50">
            <img
              src={img}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p className="mt-6 text-lg font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-blue-400">{role}</p>
        <p className="mt-3 text-sm text-white/60 leading-6">
          {focus}
        </p>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            CYBERLOK TEAM SECTION                            */
/* -------------------------------------------------------------------------- */

export default function CyberlokTeam() {
  return (
    <section id="team" className="border-b border-white/10">
      <Container>
        <div className="py-12">

          {/* ===================== HEADING ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold tracking-widest text-blue-400">OUR PEOPLE</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Meet the team behind Cyberlok
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-sm text-white/60">
              Experienced professionals dedicated to protecting your digital assets.
            </p>
          </motion.div>

          {/* ===================== FOUNDER ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <div className="max-w-sm w-full">
              <TeamCard
                img="/team/Aryan_Founder_PSC.jpeg"
                name="Aryan"
                role="Founder & Principal Security Consultant"
                focus="Cyber Strategy • Architecture • Incident Response"
              />
            </div>
          </motion.div>

          {/* ===================== TEAM SPLIT ===================== */}
          <div className="mt-12 grid gap-14 lg:grid-cols-2">

            {/* ===================== SALES TEAM ===================== */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-8 text-center">
                <h3 className="inline-flex items-center gap-3 text-xl font-semibold tracking-wide text-white">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
                  Sales & Operations Team
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <TeamCard
                  img="/team/Mahesh_Sales_Lead.jpeg"
                  name="Sales Lead"
                  role="Sales Leadership"
                  focus="Revenue Strategy • Key Accounts"
                />

                <TeamCard
                  img="/team/Yash_Sales_Executive.jpeg"
                  name="Sales Executive"
                  role="Business Development"
                  focus="Client Acquisition • Closures"
                />

                <TeamCard
                  img="/team/Jash_Sales_Associate.jpeg"
                  name="Sales Associate"
                  role="Pre-Sales Support"
                  focus="Lead Qualification • Coordination"
                />

                <TeamCard
                  img="/team/Omkar_Sales_Associate.jpeg"
                  name="Sales Associate"
                  role="Pre-Sales Support"
                  focus="Proposals • Follow-ups"
                />
              </div>
            </motion.div>

            {/* ===================== CYBER TEAM ===================== */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-8 text-center">
                <h3 className="inline-flex items-center gap-3 text-xl font-semibold tracking-wide text-white">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
                  Cybersecurity Team
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <TeamCard
                  img="/team/Chandresh_Cybersecurity_Engineer.jpeg"
                  name="Cybersecurity Engineer"
                  role="Security Engineering"
                  focus="VAPT • Cloud Security • Hardening"
                />

                <TeamCard
                  img="/team/Raja_Security_Analyst.jpeg"
                  name="Security Analyst"
                  role="Detection & Analysis"
                  focus="Threat Monitoring • Incident Analysis"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
