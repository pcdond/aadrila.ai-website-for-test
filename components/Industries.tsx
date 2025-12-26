"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Insurance",
    description:
      "Automate claims processing with accurate document validation.",
    icon: "/images/industries/insurance.svg",
  },
  {
    title: "Lending",
    description:
      "Ensure faster loan approvals with fraud detection and instant verification.",
    icon: "/images/industries/lending.svg",
  },
  {
    title: "Healthcare",
    description:
      "Streamline patient record management and ensure compliance with HIPAA standards.",
    icon: "/images/industries/healthcare.svg",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    /* ---------------- DESKTOP ---------------- */
    mm.add("(min-width: 1024px)", () => {
      // Heading + ring from left
      gsap.from([headingRef.current, ringRef.current], {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Cards from right (X only)
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          x: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });
      });
    });

    /* ---------------- MOBILE ---------------- */
    mm.add("(max-width: 1023px)", () => {
      // Heading + ring from left
      gsap.from([headingRef.current, ringRef.current], {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Cards from bottom
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Background ring */}
      <div
        ref={ringRef}
        className="absolute left-[50px] top-[0px] z-0  md:block"
      >
        <Image
          src="/images/backgrounds/left-circle.svg"
          alt=""
          width={800}
          height={800}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div ref={headingRef}>
          <p className="text-secondary text-[24px] font-bold leading-none mb-1 aadrila-gradient-text">
            AI-driven innovation for growth.
          </p>

          <h2 className="text-[48px] leading-none font-semibold text-[#141219] mb-16">
            Industries We Empower
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-y-[80px]
            gap-x-[80px]
            justify-items-center
          "
        >
          {industries.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`industryCard-${
                index + 1
              } w-[320px] h-[320px] bg-white rounded-[20px]  p-[24px]  flex flex-col items-center text-center  gap-[16px]   shadow-[0px_0px_20px_0px_#0000001F]`}
            >
              <div className="flex flex-col items-center justify-center h-full gap-[16px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                />

                <h3 className="text-[24px] leading-none font-semibold text-[#141219]">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-6 text-[#696969] font-medium max-w-[272px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative dots */}
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <Image
            src="/images/backgrounds/dotsbox.svg"
            alt=""
            width={140}
            height={140}
          />
        </div>
      </div>
    </section>
  );
}
