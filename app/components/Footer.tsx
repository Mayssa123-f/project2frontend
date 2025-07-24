import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#0000CD] text-white p-6 font-[Poppins]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image
                src="/logo.png"
                alt="BonVoyage Logo"
                width={100}
                height={50}
              />{" "}
            </div>
          </Link>
        </div>
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} BonVoyage. All rights reserved.
        </p>
        <div className="flex space-x-4 text-white text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7DF9FF] transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7DF9FF] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7DF9FF] transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
