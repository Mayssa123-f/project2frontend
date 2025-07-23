import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import UnderBanner from "./components/underBanner";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main className="flex-grow">
        <UnderBanner />
      </main>
      <Footer />
    </div>
  );
}
