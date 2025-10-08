"use client";

import React from "react";

interface VideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
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
    <video
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
};

export default Video;
