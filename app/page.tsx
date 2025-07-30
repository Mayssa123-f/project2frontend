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
import Countries from "./components/Countries";
import Tab from "./components/homeTab";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen font-[Poppins]">
      <Header />
      <Banner
        imageUrl="/images/bg.jpg"
        title="Welcome to BonVoyage"
        description="Discover your next unforgettable journey with us."
        buttonText="Explore Now"
        buttonLink="#explore"
      />
      <div className="container mx-auto">
        <main className="flex-grow">
          <Countries />
          <Tab />
        </main>
      </div>
      <Footer />
    </div>
  );
}
