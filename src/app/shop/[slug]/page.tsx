"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [size, setSize] = useState("1ml");
  const [quantity, setQuantity] = useState(1);
  const [sliderPos, setSliderPos] = useState(50);
  const [mainImage, setMainImage] = useState("/images/product1.jpg");

  const product = {
    name: "Hyaluronic Filler Premium",
    category: "Fileri",
    price: "120 KM",
    description: `
      Hijaluronski filer vrhunskog kvaliteta razvijen za profesionalnu upotrebu u estetskoj medicini.
      Sadrži visokokoncentrisanu hijaluronsku kiselinu koja vraća volumen, poboljšava elastičnost kože
      i hidrira je iznutra. Rezultati su trenutno vidljivi i mogu trajati do 12 mjeseci.
      
      Formulisan u skladu s najvišim evropskim standardima, ovaj filer omogućava lako ubrizgavanje,
      preciznu kontrolu i prirodan izgled bez efekta prenapuhanosti. 
      
      Preporučuje se za konturisanje jagodica, usana i nazolabijalnih bora.
    `,
    features: [
      "Visoka čistoća hijaluronske kiseline",
      "Trenutni i dugotrajni rezultati",
      "Bezbolna aplikacija",
      "Sterilno pakovanje",
    ],
    sizes: ["1ml", "2ml", "3ml"],
    gallery: [
      "/images/product1.jpg",
      "/images/product2.jpg",
      "/images/product3.jpg",
      "/images/product4.jpg",
    ],
    beforeImage: "/images/before.png",
    afterImage: "/images/after.png",
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, percent)));
  };

  return (
    <>
    <Header/>
    <main className="max-w-6xl mx-auto p-6">
      {/* Gornji info dio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Glavna slika i galerija */}
        <div>
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl mb-4">
            <Image
              src={mainImage}
              alt="Proizvod"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Galerija */}
          <div className="grid grid-cols-4 gap-3">
            {product.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setMainImage(img)}
                className={`relative w-full h-24 rounded-xl overflow-hidden border-2 cursor-pointer transition ${
                  mainImage === img
                    ? "border-[#6091EC]"
                    : "border-transparent hover:border-[#6091EC]/40"
                }`}
              >
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Detalji proizvoda */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-[#1B2F4A] mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-bold text-[#6091EC] mb-6">{product.price}</p>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {product.description}
          </p>

          <ul className="mb-6 list-disc list-inside text-gray-600 space-y-2">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Odabir veličine */}
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">Odaberi veličinu:</p>
            <div className="flex gap-3">
              {product.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSize(s)}
                  className={`border px-4 py-2 rounded-lg transition ${
                    size === s
                      ? "bg-[#6091EC] text-white border-[#6091EC]"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Količina */}
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">Količina:</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100"
              >
                −
              </button>
              <span className="font-semibold text-gray-700">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Dugmad */}
          <div className="flex gap-4">
            <button className="bg-[#6091EC] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#0f1c33] transition-colors">
              Dodaj u korpu
            </button>
            <button className="border border-[#6091EC] text-[#6091EC] py-3 px-6 rounded-xl font-semibold hover:bg-[#6091EC] hover:text-white transition-colors">
              ♥ Lista želja
            </button>
          </div>
        </div>
      </div>

      {/* BEFORE/AFTER efekat ispod proizvoda */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-[#1B2F4A] mb-6 text-center">
          Prije i poslije tretmana
        </h2>
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-xl cursor-ew-resize"
          onMouseMove={handleSliderMove}
        >
          <div className="relative w-full h-[450px]">
            <Image
              src={product.afterImage}
              alt="After"
              fill
              className="object-cover rounded-2xl"
            />
            <div
              className="absolute top-0 left-0 h-full overflow-hidden rounded-2xl"
              style={{ width: `${sliderPos}%` }}
            >
              <Image
                src={product.beforeImage}
                alt="Before"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div
              className="absolute top-0"
              style={{
                left: `${sliderPos}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="w-1 h-full bg-white/70"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6091EC] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                {sliderPos < 50 ? "Before" : "After"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
