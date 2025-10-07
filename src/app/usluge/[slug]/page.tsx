"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface ServicePageProps {
  params: { slug: string };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Ovdje bi inače povukla podatke iz CMS-a (WordPress/Strapi itd.)
  const service = {
    title: "Mesoheal PHLO – Luksuzna Revitalizacija Lica",
    heroImage: "/images/services/argitox new.png",
    description: `
      Mesoheal PHLO je napredni anti-age tretman koji vraća koži sjaj, elastičnost
      i tonus. Zahvaljujući jedinstvenoj formuli koja kombinuje hijaluronsku kiselinu
      i peptide, ovaj tretman djeluje dubinski – hidrira, regeneriše i stimuliše
      prirodnu proizvodnju kolagena.
    `,
    benefits: [
      "Trenutna hidratacija i poboljšanje teksture kože",
      "Smanjenje bora i finih linija",
      "Prirodno zatezanje i lifting efekat",
      "Pogodan za sve tipove kože",
    ],
    images: [
      "/images/services/16.JPG",
      "/images/services/17.JPG",
      "/images/services/18.JPG",
    ],
    beforeAfter: {
      before: "/images/services/19.JPG",
      after: "/images/services/20.JPG",
    },
    faqs: [
      {
        question: "Koliko traje tretman?",
        answer:
          "Sam tretman traje oko 45 minuta, uključujući pripremu kože i završnu njegu.",
      },
      {
        question: "Da li je tretman bolan?",
        answer:
          "Tretman je gotovo bezbolan, jer se koristi topikalna anestezija prije početka.",
      },
      {
        question: "Kada se vide rezultati?",
        answer:
          "Rezultati su vidljivi odmah nakon tretmana, a puni efekat se vidi nakon 5–7 dana.",
      },
    ],
  };

  return (
    <>
    <Header/>
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent flex items-end justify-center">
          <h1 className="text-4xl md:text-6xl font-light mb-10 text-[#6091EC] text-center max-w-3xl leading-tight">
            {service.title}
          </h1>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
          {service.description}
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#d2dff7] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#6091EC] mb-10">
            Ključne Prednosti
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-[#6091EC] rounded-2xl bg-white shadow-sm"
              >
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light text-[#6091EC] mb-10 text-center">
          Galerija
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {service.images.map((src, i) => (
            <div key={i} className="relative w-full h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={src}
                alt={`Slika ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="bg-[#d2dff7] py-20">
        <h2 className="text-3xl font-light text-[#6091EC] mb-10 text-center">
          Prije i Poslije
        </h2>
        <div className="max-w-4xl mx-auto relative h-[400px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.beforeAfter.before}
              alt="Before"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-[#6091EC] transition-all duration-500 hover:w-[70%]">
            <Image
              src={service.beforeAfter.after}
              alt="After"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light text-[#6091EC] mb-10 text-center">
          Često postavljena pitanja
        </h2>
        <div className="space-y-6">
          {service.faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-[#6091EC] pb-4 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">{faq.question}</p>
                <ChevronDown
                  className={`w-5 h-5 text-[#6091EC] transition-transform duration-300 ${
                    openFAQ === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openFAQ === i && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-600 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ServicePage;
