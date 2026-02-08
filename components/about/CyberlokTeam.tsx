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
      className="
        rounded-3xl border border-white/10 bg-white/5
        p-8 text-center min-h-[320px]
        transition hover:shadow-[0_0_0_1px_rgba(34,211,238,0.30)]
      "
    >
      <div className="mx-auto h-38 w-30 overflow-hidden rounded-full border border-white/20">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="mt-6 text-lg font-semibold">{name}</p>
      <p className="mt-1 text-sm text-cyan-300">{role}</p>
      <p className="mt-3 text-sm text-white/60 leading-6">
        {focus}
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            CYBERLOK TEAM SECTION                            */
/* -------------------------------------------------------------------------- */

export default function CyberlokTeam() {
  return (
    <section className="border-b border-white/10">
      <Container>
        <div className="py-12">

          {/* ===================== HEADING ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Pill label */}
            <span className="inline-flex items-center rounded-full border border-cyan-400/40 
                             bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Our Leadership
            </span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-cyan-300">
              The experts driving Cyberlok’s security mission forward
            </h2>


          </motion.div>

          {/* ===================== FOUNDER ===================== */}
          <div className="mt-8 flex justify-center">
            <div className="max-w-sm w-full">
              <TeamCard
                img="/team/Aryan_Founder_PSC.jpeg"
                name="Aryan"
                role="Founder & Principal Security Consultant"
                focus="Cyber Strategy • Architecture • Incident Response"
              />
            </div>
          </div>

          {/* ===================== TEAM SPLIT ===================== */}
          <div className="mt-12 grid gap-14 lg:grid-cols-2">

            {/* ===================== SALES TEAM ===================== */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="mb-8 text-xl font-semibold text-center text-cyan-300">
                Sales & Operations Team
              </h3>

              <div className="grid gap-8 sm:grid-cols-2">
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
              <h3 className="mb-8 text-xl font-semibold text-center text-cyan-300">
                Cybersecurity Team
              </h3>

              <div className="grid gap-8 sm:grid-cols-2">
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
