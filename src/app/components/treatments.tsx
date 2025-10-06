"use client";

import Image from "next/image";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "PINK GLOW",
    description: "Instant hidratacija i blistav ten – tretman koji vašoj koži vraća svježinu i prirodni sjaj.",
    image: "/images/pinkglow.webp",
    link: "/",
  },
  {
    title: "Crystal Hydro PDRN",
    description: "Napredna regeneracija kože sa PDRN-om – za mladalački izgled i dugotrajan anti-aging efekt.",
    image: "/images/crystal.webp",
    link: "/",
  },
  {
    title: "AMBER GLOW",
    description: "Topli sjaj i ujednačen ton kože – luksuzni tretman za savršeno njegovan i zdrav izgled.",
    image: "/images/amberglow.png",
    link: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#07204E] mb-4 py-4">
          Glow & Skin Rejuvenation Treatments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#07204E] mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-700 flex-1">{caseStudy.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
