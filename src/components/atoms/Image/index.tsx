import I from "next/image";
import React from "react";

interface Image {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
}

export default function Image({
  alt,
  src,
  className,
  objectFit = "cover",
}: Image) {
  return (
    <div className={`relative ${className} select-none z-0`}>
      <I
        alt={alt}
        src={src}
        draggable={false}
        fill
        style={{ position: "absolute", objectFit }}
      />
    </div>
  );
}
