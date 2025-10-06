"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/closeup-portrait-beautiful-woman-cosmetology-therapy-beauty-salon-botox-lips-injecting-professional-procedures-lifting-rejuvenation-modern-devices-healthcare.jpg" // zamijeni sa tvojom slikom
          alt="Luxury Aesthetic Clinic"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* tamni overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        {/* Subtitle (small elegant text) */}
        <p className="text-sm uppercase tracking-[0.4em] text-gray-300 mb-4">
          Aesthetic Excellence
        </p>

        {/* Main Luxury Heading */}
        <h1 className="text-5xl md:text-7xl  text-white leading-tight">
          Ekskluzivna ljepota. <br />
          <span className="text-[#6091EC]">Besprijekorna elegancija.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Klinika gdje stručnost i luksuz stvaraju prirodnu harmoniju ljepote.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex gap-6">
          <a
            href="#booking"
            className="px-8 py-3 rounded-full bg-[#6091EC] text-white font-semibold tracking-wide hover:bg-[#3D64AC] transition-all duration-300 shadow-lg"
          >
            Rezerviši konsultacije
          </a>
          <a
            href="#treatments"
            className="px-8 py-3 rounded-full border border-gray-400 text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            Otkrij tretmane
          </a>
        </div>
      </div>
    </section>
  );
}
