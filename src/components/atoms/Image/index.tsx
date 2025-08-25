import I from "next/image";
import React from "react";

interface Image {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ alt, src, className }: Image) {
  return (
    <div className={`relative ${className}`}>
      <I
        alt={alt}
        src={src}
        fill
        style={{ position: "absolute", objectFit: "cover" }}
      />
    </div>
  );
}
