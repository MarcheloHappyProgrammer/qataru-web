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
        {/* Logo Area - oculto en móvil cuando el menú está abierto */}
        <div className={`pl-6 md:pl-10 shrink-0 z-50 transition-opacity duration-200 ${isMenuOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : ""}`}>
          <Link
            href="/"
            className="text-orange-500 font-bold text-xl md:text-2xl flex items-center gap-2"
          >
            <img src="/images/logos/Qataru.png" alt="" className="max-w-50" />
          </Link>
        </div>

        {/* Desktop Navigation - sin cambios */}
        <div
          className="hidden lg:flex grow h-full relative items-center justify-center bg-orange-500 text-white px-10"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div className="flex gap-8 text-md font-semibold">
            <Link href="/" className="hover:scale-105 transition">
              COURIER LIMA
            </Link>
            <Link href="/compras" className="hover:scale-105 transition">
              COMPRAS INTERNACIONALES
            </Link>
            <Link href="/contacto" className="hover:scale-105 transition">
              CONTACTO
            </Link>
          </div>
        </div>

        {/* Desktop Zona Clientes - sin cambios */}
        <div className="hidden lg:flex h-full items-center bg-white px-10">
          <a
            href="https://www.qataruexpress.com/auth/sign-in"
            target="_blank"
            className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-gray-900 transition"
          >
            <FaUser className="text-gray-400" />
            Zona Clientes
          </a>
        </div>

        {/* Desktop Barra Roja - sin cambios */}
        <div className="hidden lg:block h-full w-20 bg-orange-500"></div>

        {/* Mobile: franja naranja + botón hamburguesa */}
        <div className="lg:hidden flex h-full items-center">
          <div
            className="h-full bg-orange-500 flex items-center pr-6 pl-10"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <button
              onClick={toggleMenu}
              className="text-2xl text-white z-50 cursor-pointer"
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
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
          {/* Mobile Menu Header con botón X */}
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Menú</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-orange-500 transition text-2xl cursor-pointer"
              aria-label="Cerrar menú"
            >
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-6 space-y-4">
            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-orange-400 transition py-2"
              onClick={toggleMenu}
            >
              Courier Lima
            </Link>
            <Link
              href="/compras"
              className="text-gray-700 font-medium hover:text-orange-400 transition py-2"
              onClick={toggleMenu}
            >
              Compras internacionales
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 font-medium hover:text-orange-400 transition py-2"
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
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-orange-400 transition py-2"
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