"use client";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm w-full font-sans">
      {/* Desktop & Mobile Header */}
      <div className="flex items-center justify-between h-20">
        {/* Logo Area */}
        <div className="pl-6 md:pl-10 shrink-0 z-50">
          <Link
            href="/"
            className="text-red-600 font-bold text-xl md:text-2xl flex items-center gap-2"
          >
            <div className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
              <div className="bg-white w-4 h-2 rounded-full"></div>
            </div>
            <span>DINSIDES</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex grow h-full relative items-center justify-center bg-red-600 text-white px-12"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div className="flex items-center gap-8 text-sm font-semibold">
            <Link href="/" className="hover:underline transition">
              Courier Lima
            </Link>
            <Link href="/compras" className="hover:underline transition">
              Compras internacionales
            </Link>
            <Link href="/contacto" className="hover:underline transition">
              Contacto
            </Link>
          </div>
        </div>

        {/* Desktop Zona Clientes */}
        <div className="hidden lg:flex h-full items-center bg-white border-l px-10">
          <a
            href="https://www.qataruexpress.com/auth/sign-in"
            target="_blank"
            className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-gray-900 transition"
          >
            <FaUser className="text-gray-400" />
            Zona Clientes
          </a>
        </div>

        {/* Desktop Barra Roja */}
        <div className="hidden lg:block h-full w-20 bg-red-600"></div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden pr-6 text-2xl text-gray-700 z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Menú</h2>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-6 space-y-4">
            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-red-600 transition py-2"
              onClick={toggleMenu}
            >
              Courier Lima
            </Link>
            <Link
              href="/compras"
              className="text-gray-700 font-medium hover:text-red-600 transition py-2"
              onClick={toggleMenu}
            >
              Compras internacionales
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 font-medium hover:text-red-600 transition py-2"
              onClick={toggleMenu}
            >
              Contacto
            </Link>

            {/* Divider */}
            <div className="border-t pt-4"></div>

            {/* Mobile Zona Clientes */}
            <a
              href="https://www.qataruexpress.com/auth/sign-in"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-red-600 transition py-2"
            >
              <FaUser className="text-gray-400" />
              Zona Clientes
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
