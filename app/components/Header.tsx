"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current path

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#0000CD] text-white p-4 shadow-md font-[Poppins]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="BonVoyage Logo"
                width={100}
                height={50}
              />
            </div>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/about"
                className={`cursor-pointer hover:text-[#7DF9FF] ${
                  isActive("/about") ? "text-[#7DF9FF] font-bold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/reservation"
                className={`cursor-pointer hover:text-[#7DF9FF] ${
                  isActive("/reservation") ? "text-[#7DF9FF] font-bold" : ""
                }`}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`cursor-pointer hover:text-[#7DF9FF] ${
                  isActive("/contact") ? "text-[#7DF9FF] font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0000CD] text-white z-50 flex flex-col items-center justify-center space-y-6 transition-all duration-300 ease-in-out">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer transition duration-200 hover:text-[#7DF9FF] hover:scale-110"
          >
            &times;
          </button>
          <nav className="block md:hidden">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/about"
                  className={`cursor-pointer hover:text-[#7DF9FF] ${
                    isActive("/about") ? "text-[#7DF9FF] font-bold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className={`cursor-pointer hover:text-[#7DF9FF] ${
                    isActive("/reservation") ? "text-[#7DF9FF] font-bold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Reservation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`cursor-pointer hover:text-[#7DF9FF] ${
                    isActive("/contact") ? "text-[#7DF9FF] font-bold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
