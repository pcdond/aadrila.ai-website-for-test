// Hero.tsx
"use client";

import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen">
      {/* Background wave image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/hero.png"
          alt="Background wave"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-3 pt-[140px] pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[36px] leading-[48px] md:text-[48px] md:leading-[68.25px] lg:text-[56px] lg:leading-[66px] font-bold text-[#141219]">
              <span className="aadrila-gradient-text">AI-Powered</span>
              <br /> Document Automation <br /> & Fraud Detection
            </h1>

            <p className="mt-6 max-w-sm text-[20px] leading-[31.2px] font-medium text-[#1E1C26]">
              Enhance security, accuracy, and efficiency with our cutting-edge
              AI solutions for seamless document processing and fraud
              prevention.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="relative h-[52px] w-full max-w-[250px] rounded-[160px] overflow-hidden">
                <span className="absolute inset-0 bg-[#3E6EB4]" />
                <span className="relative z-10 flex h-full items-center justify-center text-[16px] font-semibold text-white">
                  Get a Demo
                </span>
              </button>

              <button className="relative h-[52px] w-full max-w-[250px] rounded-[160px] overflow-hidden">
                <span className="absolute inset-0 bg-[#3E6EB4]" />
                <span className="relative z-10 flex h-full items-center justify-center text-[16px] font-semibold text-white">
                  Explore Solutions
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center ">
            <HeroCarousel />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 w-full h-[110px] z-10
bg-[linear-gradient(360deg,#ffffff_23.83%,rgba(255,255,255,0.816193)_59.33%,rgba(255,255,255,0.545244)_85.33%,rgba(255,255,255,0)_100%)]"
      ></div>
    </section>
  );
}
