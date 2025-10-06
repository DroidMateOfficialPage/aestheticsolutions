"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Početna", href: "/" },
    { label: "Usluge", href: "/usluge" },
    { label: "Shop", href: "/shop" },
    { label: "Kontakt", href: "#kontakt" },
    { label: "Blog", href: "/blog" },
    { label: "O nama", href: "/onama" },
  ];


  return (
    <header className="w-full bg-gradient-to-r from-[#BFD0EF] to-[#FFFFFF] font-bold text-gray-300 shadow-md px-4 py-2 flex items-center justify-between relative">
  {/* Logo - lijevo */}
  <div className="flex items-center">
    <Link href="/">
      <Image
        src="/images/aesthetic solutions LOGO FINAL.png"
        alt="Aesthetic Solutions Logotype"
        width={50}
        height={50}
        priority
        className="cursor-pointer rounded-full hover:opacity-80 transition-opacity duration-200"
      />
    </Link>
  </div>

  {/* Navigacija - centar (desktop only) */}
  <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-10 text-white">
    {navItems.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className="text-lg font-medium cursor-pointer transition-all duration-200 hover:scale-110 hover:text-white"
        style={{
          transition: "all 0.2s ease-in-out",
          textShadow: "0 0 4px rgba(0,0,0,0.5)", // lagani shadow da se tekst ističe
        }}
      >
        {item.label}
      </Link>
    ))}
  </nav>

  <button
    onClick={() => router.push("/contact")}
    className="hidden md:block bg-[#6091EC]/80 text-white px-4 py-2 rounded hover:bg-[#6091EC]/100 transition-colors duration-200"
  >
    Zakaži termin
  </button>

  {/* Hamburger ikona - mobilni only */}
  <div className="md:hidden">
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  </div>

  {/* Mobilni meni */}
  {isOpen && (
    <div className="absolute top-16 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg flex flex-col items-center gap-6 py-6 z-50 md:hidden">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-lg font-medium hover:text-[#2A4D7A]"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )}
</header>

  );
};

export default Header;
