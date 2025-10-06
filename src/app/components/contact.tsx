"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Slanje putem mailto linka
    window.location.href = `mailto:info@droidmate.dev?subject=${encodeURIComponent(
      `Upit: ${formData.service || "Bez kategorije"}`
    )}&body=${encodeURIComponent(
      `${formData.message}\n\nIme: ${formData.name}\nEmail: ${formData.email}`
    )}`;
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="kontakt"
      className="w-full relative py-20 bg-gradient-to-r from-[#BFD0EF] to-[#FFFFFF] overflow-hidden"
    >
      {/* Parallax background - diskretan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[url('/images/parallax-bg.svg')] bg-no-repeat bg-center bg-cover opacity-10 -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#07204E] mb-4">
          Kontaktirajte nas
        </h2>
        <p className="text-gray-600 mb-12">
          Imate pitanje, želite konsultacije ili da zakažete tretman?
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Forma */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Vaše ime"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B2F4A]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Vaš email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B2F4A]"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B2F4A]"
              required
            >
              <option value="" disabled>
                Odaberite tretman ili kategoriju pitanja
              </option>
              <option value="Botoks">💉 Botoks</option>
              <option value="Dermalni fileri">✨ Dermalni fileri</option>
              <option value="Mezoterapija">🌿 Mezoterapija</option>
              <option value="Hemijski piling">🧴 Hemijski piling</option>
              <option value="PRP tretman">🩸 PRP tretman</option>
              <option value="Hijaluronski tretmani">💧 Hijaluronski tretmani</option>
              <option value="Uklanjanje bora">👩‍🔬 Uklanjanje bora</option>
              <option value="Tretmani lica">🌸 Tretmani lica</option>
              <option value="Tretmani tijela">💆‍♀️ Tretmani tijela</option>
              <option value="Ostalo">💬 Ostalo</option>
            </select>

            <textarea
              name="message"
              placeholder="Vaša poruka"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B2F4A]"
              required
            />

            <button
              type="submit"
              className="bg-[#6091EC] text-white font-semibold py-3 rounded-lg hover:bg-[#0f1c33] transition-colors"
            >
              Pošalji poruku
            </button>
          </form>

          {/* Calendly dugme */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#07204E] mb-4">
              Zakazivanje konsultacija
            </h3>
            <p className="text-gray-600 mb-4">
              Kliknite ispod da rezervišete termin direktno sa našim timom.
            </p>
            <a
              href="https://calendly.com/ivana-droidmate/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6091EC] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0f1c33] transition-colors"
            >
              Rezervišite termin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
