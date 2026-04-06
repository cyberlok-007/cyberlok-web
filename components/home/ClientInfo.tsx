"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function ClientInfo() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    console.log("Client Info:", data);

    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    form.reset();

    alert("Thanks! Our team will contact you shortly.");
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="
        relative w-full max-w-md
        rounded-3xl border border-white/10
        bg-black/60 backdrop-blur-xl
        p-6 shadow-[0_20px_80px_rgba(34,211,238,0.18)]
      "
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />

      {/* header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10">
          <Calendar className="h-5 w-5 text-blue-400" />
        </span>
        <div>
          <h3 className="text-lg font-semibold">
            Book Your Free Consultation
          </h3>
          <p className="text-sm text-white/60">
            Our security experts are here to help
          </p>
        </div>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          name="fullName"
          placeholder="Full name *"
          required
          maxLength={80}
          autoComplete="name"
        />

        <Input
          name="email"
          type="email"
          placeholder="Email address *"
          required
          maxLength={120}
          autoComplete="email"
        />

        <Input
          name="phone"
          placeholder="Phone number *"
          required
          maxLength={20}
          autoComplete="tel"
        />

        <Input
          name="company"
          placeholder="Company name"
          maxLength={120}
          autoComplete="organization"
        />

        {/* ✅ SERVICE / SOLUTION REQUIRED */}
        <Input
          name="serviceRequired"
          placeholder="Service / Solution Required * (e.g. MDR, Pentest, SOC, Cloud Security)"
          required
          maxLength={160}
          autoComplete="off"
        />

        <textarea
          name="message"
          placeholder="Write message (optional details)..."
          maxLength={600}
          className="
            w-full min-h-[90px] rounded-2xl
            border border-white/10 bg-white/5
            px-4 py-3 text-sm text-white
            placeholder:text-white/40 outline-none
            focus:border-cyan-400/40
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            group inline-flex w-full items-center justify-center gap-2
            rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3
            font-semibold text-black transition
            hover:bg-cyan-400 disabled:opacity-60
          "
        >
          {loading ? "Submitting..." : "Request Free Consultation"}
          <ArrowRight className="h-4 w-4 text-white transition group-hover:translate-x-0.5" />
        </button>
      </form>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* INPUT COMPONENT                                                            */
/* -------------------------------------------------------------------------- */

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        w-full rounded-2xl
        border border-white/10 bg-white/5
        px-4 py-3 text-sm text-white
        placeholder:text-white/40 outline-none
        focus:border-cyan-400/40
      "
    />
  );
}
