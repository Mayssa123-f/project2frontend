import Image from "next/image";
import { Poppins } from "next/font/google";
import { countries } from "./data/countries";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Countries from "./components/Countries";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen font-[Poppins]">
      <Header />
      <Banner />
      <div className="container mx-auto">
        <main className="flex-grow">
          <Countries />
        </main>
      </div>
      <Footer />
    </div>
  );
}
