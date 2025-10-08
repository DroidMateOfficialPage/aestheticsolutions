"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobilni meni
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // dropdown mobilni
  // state za dropdown (desktop + mobile)


  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-3 bg-transparent">
      {/* Logo */}
      <Image
        src="/images/aesthetic solutions LOGO FINAL.png"
        alt="Koru Logo"
        width={100}
        height={100}
        className="h-auto w-auto max-w-[150px] md:max-w-[200px]"
      />

      {/* Desktop navigacija */}
      <nav className="hidden lg:flex items-center gap-x-8 relative bg-white/70 backdrop-blur-xl rounded-[30px] px-6 py-3">
        <Link className="text-black text-[16px] font-medium hover:text-accent" href="/">Početna</Link>

        <div
          className="relative"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <button className="flex items-center gap-1 text-black text-[16px] font-medium hover:text-accent">
            Proizvodi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>

          {/* Desktop dropdown */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 grid grid-cols-4 gap-x-8 gap-y-6 bg-white/70 backdrop-blur-xl rounded-[1.875rem] p-6 shadow-lg min-w-[900px] z-50
                  -translate-x-80">
              {/* Kolona 1 */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-lg text-primary">Fillers</div>
                <Link href="/products/avalon-fillers" className="text-sm text-primary hover:text-accent">AVALON™ Fillers</Link>
                <Link href="/products/mesoheal-body" className="text-sm text-primary hover:text-accent">MESOHEAL® Body Fillers</Link>
              </div>
              {/* Kolona 2 */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-lg text-primary">Skinboosters</div>
                <Link href="/products/mesoheal-phlo" className="text-sm text-primary hover:text-accent">MESOHEAL® Phlo</Link>
                <Link href="/products/glow-series" className="text-sm text-primary hover:text-accent">MESOHEAL® Glow Series</Link>
                <Link href="/products/mesoheal-bio" className="text-sm text-primary hover:text-accent">MESOHEAL® Bio</Link>
                <Link href="/products/mesoheal-plus" className="text-sm text-primary hover:text-accent">MESOHEAL®+</Link>
              </div>
              {/* Kolona 3 */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-lg text-primary">Biostimulators</div>
                <Link href="/products/reversal-dual" className="text-sm text-primary hover:text-accent">REVERSAL Dual</Link>
                <Link href="/products/reversal-neo" className="text-sm text-primary hover:text-accent">REVERSAL Neo</Link>
              </div>
              {/* Kolona 4 */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-lg text-primary">Professional Skincare</div>
                <Link href="/products/mesoheal-post" className="text-sm text-primary hover:text-accent">MESOHEAL® Post-Treatment</Link>
                <Link href="/products/avalon-beta" className="text-sm text-primary hover:text-accent">AVALON™ Beta-Glucan</Link>
                <Link href="/products/crystal-carboxy" className="text-sm text-primary hover:text-accent">Crystal Carboxy</Link>
                <Link href="/products/glomedic" className="text-sm text-primary hover:text-accent">Glomedic</Link>
              </div>
            </div>
          )}
        </div>

        {/* Ostale stavke */}
        <Link className="text-black text-[16px] font-medium hover:text-accent" href="/usluge">Usluge</Link>
        <Link className="text-black text-[16px] font-medium hover:text-accent" href="/shop">Shop</Link>
        <Link className="text-black text-[16px] font-medium hover:text-accent" href="/blog">Blog</Link>
        <Link className="text-black text-[16px] font-medium hover:text-accent" href="/onama">O nama</Link>

        <Link
          href="/book"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#00ADEE] text-white py-2 px-4 rounded-full hover:bg-[#007BB5]"
        >
          Zakaži termin
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col w-6 h-6 justify-between items-center"
        >
          <span className={`block h-0.5 w-full bg-black transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-full bg-black transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-full bg-black transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-0 w-64 mt-2 bg-white/70 backdrop-blur-xl rounded-lg p-4 shadow-lg z-50 flex flex-col gap-3">
            <Link href="/" className="text-black text-[16px] font-medium hover:text-accent">Početna</Link>

            {/* Mobile dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between w-full text-black text-[16px] font-medium hover:text-accent"
              >
                Proizvodi
                <svg
                  className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileDropdownOpen && (
                <div className="flex flex-col gap-2 mt-2 pl-4">
                  <Link href="/products/avalon-fillers" className="text-sm text-primary hover:text-accent">AVALON™ Fillers</Link>
                  <Link href="/products/mesoheal-body" className="text-sm text-primary hover:text-accent">MESOHEAL® Body Fillers</Link>
                  <Link href="/products/mesoheal-phlo" className="text-sm text-primary hover:text-accent">MESOHEAL® Phlo</Link>
                  <Link href="/products/glow-series" className="text-sm text-primary hover:text-accent">MESOHEAL® Glow Series</Link>
                  <Link href="/products/mesoheal-bio" className="text-sm text-primary hover:text-accent">MESOHEAL® Bio</Link>
                  <Link href="/products/mesoheal-plus" className="text-sm text-primary hover:text-accent">MESOHEAL®+</Link>
                  <Link href="/products/reversal-dual" className="text-sm text-primary hover:text-accent">REVERSAL Dual</Link>
                  <Link href="/products/reversal-neo" className="text-sm text-primary hover:text-accent">REVERSAL Neo</Link>
                  <Link href="/products/mesoheal-post" className="text-sm text-primary hover:text-accent">MESOHEAL® Post-Treatment</Link>
                  <Link href="/products/avalon-beta" className="text-sm text-primary hover:text-accent">AVALON™ Beta-Glucan</Link>
                  <Link href="/products/crystal-carboxy" className="text-sm text-primary hover:text-accent">Crystal Carboxy</Link>
                  <Link href="/products/glomedic" className="text-sm text-primary hover:text-accent">Glomedic</Link>
                </div>
              )}
            </div>

            <Link href="/services" className="text-black text-[16px] font-medium hover:text-accent">Usluge</Link>
            <Link href="/shop" className="text-black text-[16px] font-medium hover:text-accent">Shop</Link>
            <Link href="/blog" className="text-black text-[16px] font-medium hover:text-accent">Blog</Link>
            <Link href="/about-us" className="text-black text-[16px] font-medium hover:text-accent">O nama</Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#00ADEE] text-white py-2 px-4 rounded-full hover:bg-[#007BB5]"
            >
              Zakaži termin
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
