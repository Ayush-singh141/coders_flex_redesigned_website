"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="bg-black/30 backdrop-blur-md text-white w-[95%] flex justify-between items-center fixed z-30 top-3 ml-4 mr-4 rounded-lg">
          <span className="flex font-bold items-center text-2xl pl-5">
            <Image
              src="/coders_flex_new_logo.png"
              width={70}
              height={70}
              alt="logo"
              className="-mr-3 brightness-150"
            ></Image>
            <Link href="/">
              Coders<span className="text-yellow-400">Flex</span>
            </Link>
          </span>

          {/* Desktop Navigation */}
          <span className="hidden md:flex gap-10 pr-8 text-md items-center">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/"
                  ? "border border-yellow-300 text-yellow-300"
                  : "border border-transparent text-white hover:text-yellow-200"
              }`}
            >
              Home
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/contact"
                  ? "border border-yellow-300 text-yellow-300"
                  : "border border-transparent text-white hover:text-yellow-200"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/about"
                  ? "border border-yellow-300 text-yellow-300"
                  : "border border-transparent text-white hover:text-yellow-200"
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/services"
                  ? "border border-yellow-300 text-yellow-300"
                  : "border border-transparent text-white hover:text-yellow-200"
              }`}
            >
              Services
            </Link>
          </span>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden pr-5 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 w-full h-full bg-black/95 backdrop-blur-lg z-20 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <Link
              href="/"
              className={`text-2xl px-8 py-4 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/"
                  ? "border-2 border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "border border-transparent text-white hover:text-yellow-200 hover:bg-white/5"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              href="/contact"
              className={`text-2xl px-8 py-4 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/contact"
                  ? "border-2 border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "border border-transparent text-white hover:text-yellow-200 hover:bg-white/5"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>

            <Link
              href="/about"
              className={`text-2xl px-8 py-4 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/about"
                  ? "border-2 border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "border border-transparent text-white hover:text-yellow-200 hover:bg-white/5"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`text-2xl px-8 py-4 rounded-full transition-all duration-300 ease-in-out ${
                pathname === "/services"
                  ? "border-2 border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "border border-transparent text-white hover:text-yellow-200 hover:bg-white/5"
              }`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
