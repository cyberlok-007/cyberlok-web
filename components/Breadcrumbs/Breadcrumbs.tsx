"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export default function Breadcrumbs({ items, showHome = true, className }: BreadcrumbsProps) {
  const breadcrumbs = showHome 
    ? [{ label: "Home", href: "/" }, ...(items || [])]
    : items || [];

  return (
    <nav className={cn("flex items-center gap-1 text-sm text-white/60", className)}>
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-white/40" />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-300"
            >
              {index === 0 ? (
                <>
                  <Home className="h-3.5 w-3.5" />
                  <span>Home</span>
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </Link>
          ) : (
            <span className="text-white/90">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

export function BackButton({ href, label = "Go Back" }: { href?: string; label?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const backHref = href || segments.length > 1 
    ? "/" + segments.slice(0, -1).join("/")
    : "/";

  return (
    <Link
      href={backHref}
      className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-cyan-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      {label}
    </Link>
  );
}
