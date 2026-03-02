"use client";
import { FaFileContract, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const secciones = [
  {
    titulo: "1. Aceptación de los Términos",
    contenido:
      "Al utilizar los servicios de Qataru Express, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder ni utilizar nuestros servicios. Qataru Express se reserva el derecho de modificar estos términos en cualquier momento, siendo responsabilidad del usuario revisarlos periódicamente.",
  },
  {
    titulo: "2. Descripción del Servicio",
    contenido:
      "Qataru Express ofrece servicios de courier y logística dentro de Lima Metropolitana y Callao, incluyendo entrega contra entrega, cambio de productos, servicio de fulfillment, recojo a domicilio, e importación de compras internacionales desde Estados Unidos. Nos comprometemos a realizar las entregas en los plazos acordados, sujeto a condiciones externas fuera de nuestro control.",
  },
  {
    titulo: "3. Responsabilidades del Cliente",
    contenido:
      "El cliente es responsable de proporcionar información correcta y completa sobre el destinatario y el contenido del paquete. Queda prohibido el envío de mercancía ilegal, peligrosa, perecedera sin declaración, o cualquier artículo restringido por la legislación peruana. El cliente asume plena responsabilidad por la veracidad de la información declarada.",
  },
  {
    titulo: "4. Tarifas y Pagos",
    contenido:
      "Las tarifas aplicables serán las vigentes al momento de la contratación del servicio. Para compras internacionales, la tarifa base es de $10 por kilogramo más $8 por concepto de desaduanaje. Los pagos pueden realizarse en efectivo, Yape, Plin o POS. Qataru Express se reserva el derecho de ajustar sus tarifas con previo aviso.",
  },
  {
    titulo: "5. Pérdida, Robo o Daño",
    contenido:
      "En caso de pérdida, robo o daño comprobado imputable a Qataru Express, la empresa reconocerá una compensación de acuerdo al valor declarado del paquete, con un límite máximo establecido en el contrato de servicio. Para activar la garantía, el cliente deberá reportar el incidente dentro de las 24 horas siguientes a la fecha de entrega programada.",
  },
  {
    titulo: "6. Limitación de Responsabilidad",
    contenido:
      "Qataru Express no será responsable por retrasos o incumplimientos causados por eventos de fuerza mayor, condiciones climáticas extremas, bloqueos viales, huelgas, actos de autoridad, o cualquier otra circunstancia ajena a su control. Tampoco asumiremos responsabilidad por daños indirectos, pérdida de ganancias o perjuicios consecuentes.",
  },
  {
    titulo: "7. Uso del Sistema de Seguimiento",
    contenido:
      "El sistema de seguimiento en tiempo real es una herramienta de información disponible para los clientes. Qataru Express no garantiza la disponibilidad ininterrumpida del sistema y no será responsable por decisiones tomadas en base a información del rastreador. Cualquier discrepancia debe reportarse de inmediato a nuestro equipo de soporte.",
  },
  {
    titulo: "8. Jurisdicción y Ley Aplicable",
    contenido:
      "Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia derivada de la prestación de servicios será sometida a la jurisdicción de los tribunales competentes de la ciudad de Lima, renunciando las partes a cualquier otro fuero que pudiera corresponderles.",
  },
];

export default function TerminosCondiciones() {
  const [abiertos, setAbiertos] = useState<Record<number, boolean>>({});

  const toggleSeccion = (index: number) => {
    setAbiertos((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-auto py-16 px-6 md:py-20 lg:h-72 lg:py-0 bg-linear-to-r from-gray-800 to-gray-900 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        {/* Decorative boxes */}
        <div className="absolute top-6 left-16 w-20 h-20 bg-orange-500 opacity-20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-6 right-24 w-28 h-28 bg-yellow-500 opacity-10 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-10 right-40 w-14 h-14 bg-orange-400 opacity-20 rounded-lg transform rotate-45"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
              <FaFileContract className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Términos y Condiciones
            </h1>
          </div>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mt-2">
            Última actualización: Enero 2026 · Léelos antes de usar nuestros servicios
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          {/* Intro */}
          <div className="mb-10 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              Bienvenido a <strong>Qataru Express</strong>. Estos Términos y Condiciones regulan el uso de nuestros servicios de courier, logística y compras internacionales. Te recomendamos leerlos detenidamente antes de contratar cualquiera de nuestros servicios.
            </p>
          </div>

          {/* Acordeón de secciones */}
          <div className="space-y-3">
            {secciones.map((seccion, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleSeccion(index)}
                  className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200 text-left cursor-pointer"
                >
                  <span className="font-bold text-gray-800 text-base sm:text-lg pr-4">
                    {seccion.titulo}
                  </span>
                  <span className="shrink-0 text-orange-500">
                    {abiertos[index] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    abiertos[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {seccion.contenido}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}