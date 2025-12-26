"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/#industries" },
    { label: "Products", href: "/#products" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact Us", href: "/#contact" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-[11px] left-1/2 -translate-x-1/2
          w-[1440px] max-w-[calc(100%-24px)]
          h-[85px]
          z-50
          rounded-full
          bg-white/5
          backdrop-blur-[20px]
          border border-white/10
        "
      >
        <div className="h-full px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <Image
              src="images/logo.svg"
              alt="Company Logo"
              width={180}
              height={51}
              className="object-cover"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    text-[16px]
                    leading-[18px]
                    font-normal
                    transition-colors
                    ${
                      isActive
                        ? "text-[var(--color-nav-active)]"
                        : "text-[var(--color-nav-text)] hover:text-[var(--color-nav-active)]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <button
            className="
              hidden lg:inline-flex
              bg-primary hover:bg-primary-hover
              text-white
              px-6 py-3
              rounded-full
              text-sm font-medium
              transition
            "
          >
            Get a Demo
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[2px] bg-text-primary" />
            <span className="w-6 h-[2px] bg-text-primary" />
            <span className="w-6 h-[2px] bg-text-primary" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            fixed top-[11px] left-1/2 -translate-x-1/2
            w-[calc(100%-24px)]
            max-w-md
            z-40
            rounded-2xl
            bg-white/90
            backdrop-blur-[20px]
            border border-white/20
            shadow-lg
          "
        >
          <nav className="flex flex-col divide-y">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-6 py-4 text-[16px] leading-[18px]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="p-4">
              <button className="w-full bg-primary text-white py-3 rounded-full">
                Get a Demo
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
