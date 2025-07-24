"use client";
import Image from "next/image";

interface BannerProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function Banner({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
}: BannerProps) {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{description}</p>
        <a
          href={buttonLink}
          className="inline-block bg-[#7DF9FF] text-[#0000CD] font-semibold py-3 px-6 rounded hover:bg-white hover:text-[#0000CD] transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
