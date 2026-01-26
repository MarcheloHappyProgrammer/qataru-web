import Link from "next/link";
import { FaFacebookF, FaInstagram, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001540] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna 1: Logo y Descripción */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl italic text-orange-500">
              CHASQUI <span className="text-white">EXPRESS</span>
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Somos una empresa peruana que brinda el servicio de importación de
            Estados Unidos a Perú para diversos productos. Si necesitas un
            producto vendido en EEUU, podemos traerlo a Lima y enviarlo a
            provincia.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-800 transition"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="#"
              className="bg-blue-900/50 p-3 rounded-full hover:bg-blue-800 transition"
            >
              <FaInstagram size={14} />
            </Link>
          </div>
        </div>

        {/* Columna 2: Términos y Políticas */}
        <div>
          <h3 className="text-lg font-bold mb-6">Términos y Políticas</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            {[
              "Cómo comprar en USA",
              "FAQ y Recomendaciones",
              "Política de Privacidad",
              "Sobre Nosotros",
              "Términos y Condiciones",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <FaChevronRight className="text-blue-400 text-[10px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Horarios */}
        <div>
          <h3 className="text-lg font-bold mb-6">Horarios de atención</h3>
          <div className="text-sm text-gray-300 space-y-4">
            <p>Lunes - Viernes: 10:00am a 6:00pm</p>
            <p>Sábados: 10:00am a 3:00pm</p>
            <p className="mt-6 italic">
              Chasqui Express, te brinda una solución confiable y eficaz para
              traer tus productos de Estados Unidos a Perú.
            </p>
            <Link
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:underline mt-4"
            >
              <FaChevronRight className="text-[10px]" /> Chasqui Express Perú
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Inferior */}
      <div className="mt-12 pt-6 border-t border-blue-900 text-center text-xs text-gray-400">
        <p>
          Copyright © 2026, Chasqui Express. Sitio web desarrollado por tu
          Marchelo Cortabrazo
        </p>
      </div>
    </footer>
  );
}
