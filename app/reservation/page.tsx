import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

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
        imageUrl="/images/bg3.jpg"
        title="Make Your Reservation"
        description="Book your dream trip today — easy, fast, and hassle-free reservations!"
        buttonText="Discover More"
        buttonLink="#explore"
      />
      <main className="flex-grow">
        <div className="container mx-auto"></div>
      </main>

      <Footer />
    </div>
  );
}
