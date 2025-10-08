"use client";

import React from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ana Kovač",
    role: "Klijent",
    avatar: "/images/review1.jpg",
    comment:
      "Profesionalizam i posvećenost detaljima su na najvišem nivou. Rezultati su očaravajući.",
  },
  {
    id: 2,
    name: "Marko Jurić",
    role: "Klijent",
    avatar: "/images/review2.jpg",
    comment:
      "Svaka posjeta je luksuzno iskustvo. Toplo preporučujem kliniku svima koji traže vrhunski tretman.",
  },
  {
    id: 3,
    name: "Ivana Perić",
    role: "Klijent",
    avatar: "/images/review3.jpg",
    comment:
      "Od prve konsultacije do završetka tretmana, sve je bilo profesionalno i elegantno izvedeno.",
  },
  // Dodaj dodatne recenzije po potrebi
];

const References: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Naslov */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-wide">
          Šta naši klijenti kažu
        </h2>

        {/* Recenzije */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[320px] md:min-w-[360px] bg-white/80 backdrop-blur-lg rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 snap-start"
            >
              {/* Komentar */}
              <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light">
                "{review.comment}"
              </p>

              {/* Info o klijentu */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#6091EC]"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-md md:text-lg">
                    {review.name}
                  </p>
                  <p className="text-sm md:text-base text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
