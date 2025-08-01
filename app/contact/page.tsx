"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
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

      <main className="flex-grow">
        <div className="container mx-auto">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
