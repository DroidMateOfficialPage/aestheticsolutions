"use client";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function BlogSection() {
  const posts: BlogPost[] = [
    {
      title: "5 koraka do besprijekorne kože",
      description:
        "Otkrijte kako naši tretmani i stručni savjeti transformišu kožu na luksuzan način.",
      image: "/blog1.jpg",
      link: "#",
    },
    {
      title: "Anti-aging tajne vrhunskih stručnjaka",
      description:
        "Saznajte koje metode pružaju dugotrajan mladalački izgled i savršen sjaj kože.",
      image: "/blog2.jpg",
      link: "#",
    },
    {
      title: "Glow tretmani koji mijenjaju igru",
      description:
        "PINK GLOW, AMBER GLOW i Crystal Hydro PDRN – tretmani za instant luksuzni sjaj.",
      image: "/blog3.jpg",
      link: "#",
    },
  ];

  return (
    <section className=" py-20 px-6">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4" style={{ color: "#07204E" }}>
          Savjeti i inspiracija za besprijekoran izgled
        </h2>
        <p className="text-gray-500">
          Ekspertiza i luksuz u svakom članku – inspiracija za vašu najbolju verziju.
        </p>
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 ">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#07204E] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-4">{post.description}</p>
              <span className="text-[#07204E] font-semibold underline group-hover:no-underline">
                Pročitaj više →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA button */}
      <div className="text-center mt-16">
        <a
          href="#all-posts"
          className="px-10 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300"
        >
          Pogledajte sve članke
        </a>
      </div>
    </section>
  );
}
