"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const proizvodi = [
  { id: 1, naziv: "Hijaluronski filer", kategorija: "Fileri", brend: "Juvederm", opis: "Prirodni volumen i definicija lica.", slika: "/images/filer.jpg", link: "/shop/hijaluronski-filer", popular: true },
  { id: 2, naziv: "Skin Booster", kategorija: "Boosteri", brend: "Restylane", opis: "Dubinska hidratacija i regeneracija kože.", slika: "/images/booster.jpg", link: "/shop/skin-booster", popular: false },
  { id: 3, naziv: "Aparat mikrodermoabrazija", kategorija: "Aparati", brend: "DermaTech", opis: "Blaga eksfolijacija za sjajnu kožu.", slika: "/images/aparat.jpg", link: "/shop/mikrodermoabrazija", popular: true },
  { id: 4, naziv: "Botoks", kategorija: "Fileri", brend: "Allergan", opis: "Gladi bore i osvježava lice.", slika: "/images/botoks.jpg", link: "/shop/botoks", popular: true },
  { id: 5, naziv: "Vitamin C booster", kategorija: "Boosteri", brend: "Mesotherapy", opis: "Hidratacija i sjaj kože.", slika: "/images/vitc.jpg", link: "/shop/vitc-booster", popular: false },
  { id: 6, naziv: "LED terapija", kategorija: "Aparati", brend: "SkinLight", opis: "Regeneracija i smanjenje upala.", slika: "/images/led.jpg", link: "/shop/led-terapija", popular: true },
];


export default function Shop() {
  const [filters, setFilters] = useState({ kategorija: "Svi proizvodi", brend: "Svi brendovi" });

  const filtrirani = proizvodi.filter(
    p =>
      (filters.kategorija === "Svi proizvodi" || p.kategorija === filters.kategorija) &&
      (filters.brend === "Svi brendovi" || p.brend === filters.brend)
  );

  const uniqueBrendovi = ["Svi brendovi", ...new Set(proizvodi.map(p => p.brend))];

  return (
    <>
    <Header/>
    <section className="py-20 bg-[#F6F8FC]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">

        {/* Modern Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-3xl shadow-lg sticky top-24 h-fit">
          <h3 className="text-2xl font-bold mb-6 text-[#07204E]">Filteri</h3>

          {/* Kategorija */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Kategorija</h4>
            <div className="flex flex-col gap-3">
              {["Svi proizvodi", "Fileri", "Boosteri", "Aparati"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilters({ ...filters, kategorija: cat })}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    filters.kategorija === cat
                      ? "bg-[#6091EC] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Brend */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Brend</h4>
            <div className="flex flex-col gap-3">
              {uniqueBrendovi.map(brend => (
                <button
                  key={brend}
                  onClick={() => setFilters({ ...filters, brend })}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    filters.brend === brend
                      ? "bg-[#6091EC] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {brend}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid proizvoda */}
        <div className="w-full md:w-3/4 grid md:grid-cols-3 gap-8">
          {filtrirani.map(p => (
            <div
              key={p.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group"
            >
              <img
                src={p.slika}
                alt={p.naziv}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <span className="inline-block bg-[#E6EEFF] text-[#6091EC] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {p.kategorija}
                </span>
                <h3 className="text-2xl font-semibold text-[#07204E] mb-2">{p.naziv}</h3>
                <p className="text-gray-600 mb-4">{p.opis}</p>
                {p.popular && (
                  <span className="absolute top-4 right-4 bg-[#FFB800] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popularno
                  </span>
                )}
                <a
                  href={p.link}
                  className="inline-block bg-[#6091EC] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0f1c33] transition-colors mt-2"
                >
                  Detaljnije / Rezerviši
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
