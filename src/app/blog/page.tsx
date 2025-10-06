"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Kako izabrati pravi filer za lice",
    category: "Fileri",
    date: "5. Oktobar 2025",
    excerpt: "Saznajte koji filer najbolje odgovara vašem tipu kože i željenom efektu.",
    image: "/images/blog/filer.jpg",
    link: "/blog/kako-izabrati-pravi-filer",
  },
  {
    id: 2,
    title: "Top 5 boostera za sjaj kože",
    category: "Boosteri",
    date: "2. Oktobar 2025",
    excerpt: "Boosteri koji će vam pomoći da koža izgleda zdravo i hidratizovano.",
    image: "/images/blog/booster.jpg",
    link: "/blog/top-5-boostera",
  },
  {
    id: 3,
    title: "Mikrodermoabrazija: sve što trebate znati",
    category: "Aparati",
    date: "28. Septembar 2025",
    excerpt: "Dubinska eksfolijacija za besprekornu i glatku kožu.",
    image: "/images/blog/mikrodermoabrazija.jpg",
    link: "/blog/mikrodermoabrazija-sve-sto-trebate-znati",
  },
  {
    id: 4,
    title: "Botoks: mitovi i činjenice",
    category: "Fileri",
    date: "25. Septembar 2025",
    excerpt: "Razbijamo najčešće mitove i objašnjavamo kako botoks zaista funkcioniše.",
    image: "/images/blog/botoks.jpg",
    link: "/blog/botoks-mitovi-i-cinjenice",
  },
  {
    id: 5,
    title: "LED terapija za zdravu kožu",
    category: "Aparati",
    date: "20. Septembar 2025",
    excerpt: "Kako LED svetlo stimuliše regeneraciju kože i smanjuje upale.",
    image: "/images/blog/led.jpg",
    link: "/blog/led-terapija",
  },
  {
    id: 6,
    title: "Vitamin C booster: sve što trebate znati",
    category: "Boosteri",
    date: "15. Septembar 2025",
    excerpt: "Hidratacija, sjaj i antioksidativna zaštita kože.",
    image: "/images/blog/vitc.jpg",
    link: "/blog/vitc-booster",
  },
];


export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Header/>
    <section className="py-20 bg-[#F6F8FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B2F4A]">
            Naš Blog
          </h1>

          {/* Diskretni search bar */}
          <div className="relative w-48 md:w-64">
            <input
              type="text"
              placeholder="🔍 Pretraži..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6091EC] placeholder-gray-400 text-sm"
            />
            {/* Ikonica može biti kao pseudo-element ili unutar placeholdera */}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group"
              >
                <Link href={post.link}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <span className="inline-block bg-[#E6EEFF] text-[#6091EC] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-semibold text-[#07204E] mb-2 hover:text-[#6091EC] transition-colors">
                    <Link href={post.link}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link
                      href={post.link}
                      className="text-[#6091EC] font-semibold hover:underline"
                    >
                      Čitaj više →
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              Nema rezultata za "{searchTerm}".
            </p>
          )}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
