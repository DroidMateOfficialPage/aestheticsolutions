"use client";

export default function USPSection() {
  const uspItems = [
    {
      title: "Medicinska stručnost",
      description:
        "Naš tim posjeduje dugogodišnje iskustvo u estetskoj medicini, pružajući rezultate koji odišu perfekcijom.",
      icon: "🩺",
    },
    {
      title: "Individualiziran pristup",
      description:
        "Svaki tretman prilagođavamo vašim potrebama i željama, osiguravajući jedinstveno iskustvo.",
      icon: "💎",
    },
    {
      title: "Luksuzni ambijent",
      description:
        "Uživajte u sofisticiranom i diskretnom ambijentu dizajniranom za vašu udobnost i relaksaciju.",
      icon: "🏛️",
    },
    {
      title: "Povjerenje i sigurnost",
      description:
        "Vaša sigurnost i povjerenje nam je prioritet – koristimo samo provjerene metode i premium proizvode.",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#07204E" }}>
          Zašto izabrati nas?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-gray-500" >
          Spoj stručnosti, luksuza i povjerenja stvara iskustvo estetske transformacije
          kakvo zaslužujete.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {uspItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white backdrop-blur-md p-8 rounded-3xl text-center flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-2"  style={{ color: "#07204E" }}>{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
