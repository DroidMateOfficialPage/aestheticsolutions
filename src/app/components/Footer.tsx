"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#6091EC] text-white pt-10 pb-6">
      {/* container */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo & kratki opis */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/images/aesthetic solutions LOGO FINAL.png" 
            alt="Aesthetic Solutions logo"
            width={150}
            height={150}
            className="mb-3"
          />
          <p className="text-sm text-gray-200 text-center md:text-left max-w-xs">
            Klinika gdje stručnost i luksuz stvaraju prirodnu harmoniju ljepote.
          </p>
        </div>

        {/* Navigacija */}
        <div>
          <h3 className="font-semibold mb-3">Navigacija</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:text-white transition">Početna</a></li>
            <li><a href="/usluge" className="hover:text-white transition">Usluge</a></li>
            <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="/onama" className="hover:text-white transition">O nama</a></li>
          </ul>
        </div>

        {/* Informacije */}
        <div>
          <h3 className="font-semibold mb-3">Informacije</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-white transition">Impressum</a></li>
            <li><a href="/" className="hover:text-white transition">Uslovi korištenja</a></li>
            <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
          </ul>
        </div>

        {/* Društvene mreže */}
        <div>
          <h3 className="font-semibold mb-3">Prati nas</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/DroidMateOfficial/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/droidmateofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/droidmate/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.tiktok.com/@droidmateofficial?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-gray-500 mt-10 pt-4 text-center text-xs text-gray-200">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-semibold">Aesthetic Solutions</span>. Sva prava zadržana.
        </p>
        <p className="mt-1">
          Napravio{" "}
          <a
            href="https://droidmate.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition"
          >
            DroidMate
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
