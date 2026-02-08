import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-tight">CYBERLOK</p>
            <p className="mt-3 text-sm text-white/60">
              Cybersecurity services, solutions, awareness, and training for Individuals, SMEs,
              Enterprises and Government initiatives.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Company</p>
            <div className="mt-3 space-y-2 text-sm text-white/60">
              <Link className="block hover:text-white" href="/about">About</Link>
              <Link className="block hover:text-white" href="/careers">Careers</Link>
              <Link className="block hover:text-white" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Services</p>
            <div className="mt-3 space-y-2 text-sm text-white/60">
              <Link className="block hover:text-white" href="/services/penetration-testing">Penetration Testing</Link>
              <Link className="block hover:text-white" href="/services/soc-as-a-service">SOC as a Service</Link>
              <Link className="block hover:text-white" href="/services/sbom-management">SBOM Management</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Legal</p>
            <div className="mt-3 space-y-2 text-sm text-white/60">
              <Link className="block hover:text-white" href="/privacy">Privacy Policy</Link>
              <Link className="block hover:text-white" href="/terms">Terms</Link>
              <Link className="block hover:text-white" href="/responsible-disclosure">Responsible Disclosure</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-white/50">
          © {new Date().getFullYear()} Cyberlok. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
