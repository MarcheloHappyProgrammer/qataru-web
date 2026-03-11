import Link from "next/link";
import { FaFacebookF, FaInstagram, FaChevronRight } from "react-icons/fa";

const links = [
  { label: "Política de Privacidad", href: "/" },
  { label: "Sobre Nosotros", href: "/", scrollTop: true },
  { label: "Términos y Condiciones", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1b34] text-white pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna 1: Logo y Descripción */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl italic text-orange-500">
              QATARU <span className="text-white">EXPRESS</span>
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Somos una empresa de Courier para emprendedores e importamos tus
            compras internacionales de EEUU y lo llevamos hasta la puerta de tu
            domicilio sin hacer muchos tramites.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/QataruExpress/"
              target="_blank"
              className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-800 transition"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://www.instagram.com/qataruexpress/"
              target="_blank"
              className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-800 transition"
            >
              <FaInstagram size={14} />
            </Link>
          </div>
        </div>

        {/* Columna 2: Términos y Políticas */}
        <div className="ml-7">
          <h3 className="text-lg font-bold mb-6 ">Términos y Políticas</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaChevronRight className="text-blue-400 text-[10px]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Horarios */}
        <div className="ml-7">
          <h3 className="text-lg font-bold mb-6 ">Horarios de atención</h3>
          <div className="text-sm text-gray-300 space-y-4">
            <p>Lunes - Viernes: 8:00am a 5:00pm</p>
            <p>Sábados: 8:00am a 1:00pm</p>
            <p className="mt-6 mb-2">Contáctenos:</p>📩
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=qataruexpress@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              qataruexpress@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Inferior */}
      <div className="mt-12 pt-4 border-t border-blue-900 text-center text-xs text-gray-400">
        <p className="p-1">
          Copyright © 2026, Qataru Express. Sitio web desarrollado por Marchelo
          Cortabrazo Rios
        </p>
      </div>
    </footer>
  );
}