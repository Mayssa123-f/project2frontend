import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0000CD] text-white p-6 font-[Poppins]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="BonVoyage Logo" width={80} height={40} />
        </div>

        {/* Social Media Links */}
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

        {/* Copyright */}
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} BonVoyage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
