"use client";

import React from "react";
import Video from "./video";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <Video
        src="/video/7581715-uhd_4096_2160_25fps.mp4"
        poster="/images/postervideo.png"
      />
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* overlay */}

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight">
          Ekskluzivna ljepota
        </h1>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-[#6091EC] uppercase">
          Besprijekorna elegancija
        </h2>
      </div>
    </section>
  );
}
