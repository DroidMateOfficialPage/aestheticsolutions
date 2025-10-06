"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Godina iskustva" },
  { number: "1200+", label: "Izvedenih tretmana" },
  { number: "50+", label: "Dostupnih tretmana" },
  { number: "98%", label: "Klijenata preporučuje" },
];

const text = `Naša klinika spaja vrhunsku medicinsku stručnost 
sa iskustvom luksuza – od prvog kontakta 
do posttretmanske njege.`;

export default function StatsSection() {
  const letters = text.split(""); // razdvojimo po slovima

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03, // vremenski razmak između slova
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 overflow-hidden">
          <motion.h2
            className="text-3xl font-bold tracking-tight inline-block"
            style={{ color: "#07204E" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {letters.map((char, index) => (
              <motion.span key={index} variants={child}>
                {char === "\n" ? <br /> : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="text-4xl font-extrabold" style={{ color: "#07204E" }}>
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
