"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0000CD] text-white p-4 shadow-md font-[Poppins]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image
                src="/logo.png"
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
              <a href="/" className="hover:text-[#7DF9FF]">
                Home
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#7DF9FF] cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#7DF9FF]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7DF9FF]">
                Contact
              </a>
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
          <nav>
            <ul className="text-center text-2xl space-y-6">
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#7DF9FF]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#7DF9FF]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#7DF9FF]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#7DF9FF]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
