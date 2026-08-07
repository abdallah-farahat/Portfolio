'use client';
import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const navLinks = ['About', 'Price', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll 48s linear infinite;
        }
      `}</style>

      {/* إضاءات هادئة خلفية */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-8 md:px-16 pt-8 z-30 relative">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm md:text-base lg:text-lg hover:text-purple-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* 2. الشريط المتحرك الهادي في الخلفية */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="w-full whitespace-nowrap flex overflow-hidden select-none">
          <div className="marquee-container items-center text-[10vw] sm:text-[11vw] md:text-[12vw] font-black uppercase tracking-tight text-[#E2E8F0] opacity-80">
            <span className="px-8">HI, I&apos;M ABDALLAH</span>
            <span className="text-neutral-600 px-4">•</span>
            <span className="px-8">DATA ENGINEER</span>
            <span className="text-neutral-600 px-4">•</span>

            <span className="px-8">HI, I&apos;M ABDALLAH</span>
            <span className="text-neutral-600 px-4">•</span>
            <span className="px-8">DATA ENGINEER</span>
            <span className="text-neutral-600 px-4">•</span>
          </div>
        </div>
      </div>

      {/* 3. الصورة / الأفاتار */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[52%] -translate-y-1/2 z-10 flex justify-center pointer-events-none">
        <FadeIn delay={0.4} y={20} className="flex items-center justify-center">
          <div className="pointer-events-none">
            <img
              src="/abdallah-avatar.png"
              alt="Abdallah Ali portrait"
              className="w-[380px] sm:w-[480px] md:w-[600px] lg:w-[700px] h-auto select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
              draggable={false}
            />
          </div>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="flex justify-between items-end px-8 md:px-16 pb-8 md:pb-12 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}
          >
            a data engineer driven by crafting striking and unforgettable
            architectures
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="scale-105 md:scale-110 origin-bottom-right">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
