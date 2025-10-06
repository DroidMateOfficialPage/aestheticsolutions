"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const proizvodi = [
  {
    id: 1,
    naziv: "Hijaluronski filer",
    kategorija: "Fileri",
    opis: "Prirodni izgled i volumen uz najkvalitetnije filere.",
    slika: "/images/filer.jpg",
    link: "/proizvodi/hijaluronski-filer",
  },
  {
    id: 2,
    naziv: "Skin Booster",
    kategorija: "Boosteri",
    opis: "Intenzivna hidratacija i regeneracija kože.",
    slika: "/images/booster.jpg",
    link: "/proizvodi/skin-booster",
  },
  {
    id: 3,
    naziv: "Aparat HydraFacial",
    kategorija: "Aparati",
    opis: "Dubinsko čišćenje i obnova kože u jednom tretmanu.",
    slika: "/images/hydrafacial.jpg",
    link: "/proizvodi/hydrafacial",
  },
  {
    id: 4,
    naziv: "Mezoterapija",
    kategorija: "Boosteri",
    opis: "Revitalizacija kože i stimulacija kolagena.",
    slika: "/images/mezoterapija.jpg",
    link: "/proizvodi/mezoterapija",
  },
];

const kategorije = ["Svi proizvodi", "Fileri", "Boosteri", "Aparati"];

export default function Proizvodi() {
  const [aktivnaKategorija, setAktivnaKategorija] = useState("Svi proizvodi");

  const filtriraniProizvodi =
    aktivnaKategorija === "Svi proizvodi"
      ? proizvodi
      : proizvodi.filter((p) => p.kategorija === aktivnaKategorija);

  return (
    <>
    <Header />
    <section className="py-20 bg-gradient-to-r from-[#EEF3FB] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#07204E] mb-10 text-center">
          Naši tretmani i proizvodi
        </h2>

        {/* Filter kategorije */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {kategorije.map((kat) => (
            <button
              key={kat}
              onClick={() => setAktivnaKategorija(kat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                aktivnaKategorija === kat
                  ? "bg-[#6091EC] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#dbe7fb]"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Lista proizvoda */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtriraniProizvodi.map((proizvod) => (
            <div
              key={proizvod.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <img
                src={proizvod.slika}
                alt={proizvod.naziv}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                {/* Tag kategorije */}
                <span className="inline-block bg-[#E6EEFF] text-[#6091EC] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {proizvod.kategorija}
                </span>

                <h3 className="text-2xl font-semibold text-[#07204E] mb-2">
                  {proizvod.naziv}
                </h3>
                <p className="text-gray-600 mb-4">{proizvod.opis}</p>

                <a
                  href={proizvod.link}
                  className="inline-block bg-[#6091EC] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0f1c33] transition-colors"
                >
                  Detaljnije
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
