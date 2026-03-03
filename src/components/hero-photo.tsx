"use client";

import * as React from "react";

type HeroPhotoProps = {
  className?: string;
  alt: string;
};

export function HeroPhoto({ className, alt }: HeroPhotoProps) {
  const [src, setSrc] = React.useState("/assets/bhavika.png");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      alt={alt}
      width={148}
      height={148}
      loading="eager"
      onError={() => setSrc("/assets/bhavika.svg")}
    />
  );
}

