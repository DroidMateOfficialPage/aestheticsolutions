"use client";

import React from "react";

interface VideoProps {
  src: string;           // Putanja do videa
  poster?: string;       // Slika koja se prikazuje prije pokretanja
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;    // dodatni Tailwind klase
}

const Video: React.FC<VideoProps> = ({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  className = "",
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default Video;
