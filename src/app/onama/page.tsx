"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        {/* HERO SECTION */}
        <section className="relative w-full bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1B2F4A" }}>
                O nama
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Dobrodošli u <span className="font-semibold">Aesthetic Solutions</span> – 
                mjesto gdje se <em>nauka, estetika i prirodna ljepota</em> susreću.  
                Naš cilj je da istaknemo ono najbolje u vama kroz individualni pristup, 
                vrhunsku stručnost i pažljivo odabrane tretmane.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/aesthetic solutions LOGO FINAL.png" 
                alt="Aesthetic Solutions Logotip"
                width={320}
                height={320}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* BIOGRAFIJA */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-10" style={{ color: "#1B2F4A" }}>
              Osnivač & Glavni estetski stručnjak – dr. [Ime i prezime]
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Dr. [Ime i prezime] je <strong>specijalista estetske medicine</strong> 
              sa dugogodišnjim iskustvom u radu sa najpoznatijim svjetskim brendovima i tehnikama.  
              Njena/njegova filozofija je <em>“manje je više”</em> – prirodan izgled, zdrava koža i 
              samopouzdanje koje dolazi iznutra.  
              Svaki tretman u našoj klinici osmišljen je s pažnjom prema 
              individualnim potrebama klijenta i najvišim standardima sigurnosti.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/dr-photo.jpg"
              alt="dr. photo"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* KLINIKA */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#1B2F4A" }}>
              Naša filozofija
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="font-semibold text-xl mb-3">Misija</h3>
                <p className="text-gray-600">
                  Da svakom klijentu pružimo personalizovanu njegu i 
                  vrhunske estetske tretmane koji naglašavaju prirodnu ljepotu 
                  i vraćaju samopouzdanje.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="font-semibold text-xl mb-3">Vizija</h3>
                <p className="text-gray-600">
                  Da budemo sinonim za kvalitet, eleganciju i profesionalnost u 
                  estetskoj medicini – mjesto gdje se ljepota njeguje s ljubavlju i znanjem.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="font-semibold text-xl mb-3">Vrijednosti</h3>
                <p className="text-gray-600">
                  Povjerenje, stručnost, individualni pristup i diskrecija –
                  to su temelji na kojima gradimo svaki odnos sa našim klijentima.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USLUGE */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#1B2F4A" }}>
            Naše najtraženije usluge
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/facials.jpg"
              alt="Estetski tretmani"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1B2F4A" }}>
                Anti-age i dermalni tretmani
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Naša klinika nudi pažljivo odabrane <strong>anti-age procedure</strong>, 
                filere, boostere i tretmane aparativne kozmetologije koji 
                osvježavaju, zatežu i revitalizuju kožu.  
                Cilj nam je da postignemo prirodne rezultate koji osnažuju 
                vaš osjećaj samopouzdanja.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
