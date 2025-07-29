"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import WeeklyOffers from "../components/offers";
import Discovery from "../components/discovery";
import AccordionSection from "../components/Accordion";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen font-[Poppins]">
      <Header />
      <Banner
        imageUrl="/images/bg2.jpg"
        title="EXPLORE OUR COUNTRY"
        description="Explore the world, one unforgettable trip at a time."
        buttonText="Discover More"
        buttonLink="#explore"
      />
      <main className="flex-grow">
        <div className="container mx-auto">
          <WeeklyOffers />
          <Discovery />
          <AccordionSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
