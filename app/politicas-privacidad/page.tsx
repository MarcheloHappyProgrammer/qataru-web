"use client";
import { FaShieldAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const secciones = [
  {
    titulo: "1. Información que Recopilamos",
    contenido:
      "Recopilamos información personal que usted nos proporciona directamente al contratar nuestros servicios, como: nombre completo, DNI o RUC, dirección de entrega o recojo, número de teléfono, correo electrónico y datos de pago. También podemos recopilar automáticamente información sobre el uso de nuestros sistemas de seguimiento, incluyendo datos de navegación y geolocalización relacionados con la entrega de sus paquetes.",
  },
  {
    titulo: "2. Uso de la Información",
    contenido:
      "La información recopilada se utiliza exclusivamente para: procesar y gestionar sus pedidos y entregas, brindarle atención personalizada y soporte, enviarle notificaciones sobre el estado de sus envíos, mejorar nuestros servicios y experiencia de usuario, cumplir con obligaciones legales y regulatorias aplicables en el Perú, y contactarle en caso de incidencias con su paquete.",
  },
  {
    titulo: "3. Compartir Información con Terceros",
    contenido:
      "Qataru Express no vende, alquila ni comercializa su información personal con terceros. Podemos compartir datos únicamente con: socios logísticos necesarios para completar la entrega, entidades financieras para procesar pagos, autoridades aduaneras y tributarias cuando la ley lo exija, y proveedores de tecnología que nos ayudan a operar nuestros sistemas, bajo estrictos acuerdos de confidencialidad.",
  },
  {
    titulo: "4. Seguridad de los Datos",
    contenido:
      "Implementamos medidas técnicas y organizativas adecuadas para proteger su información personal contra acceso no autorizado, pérdida, destrucción o alteración. Nuestros sistemas cuentan con cifrado de datos, acceso restringido por roles y monitoreo continuo. Sin embargo, ningún sistema de transmisión por internet es completamente seguro, por lo que le recomendamos no compartir sus credenciales de acceso.",
  },
  {
    titulo: "5. Cookies y Tecnologías de Seguimiento",
    contenido:
      "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación, recordar sus preferencias y analizar el tráfico. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar el funcionamiento de algunas funciones del sitio. No utilizamos cookies para rastrear su actividad en otros sitios web.",
  },
  {
    titulo: "6. Derechos del Titular de Datos",
    contenido:
      "De acuerdo con la Ley N° 29733 - Ley de Protección de Datos Personales del Perú, usted tiene derecho a: acceder a sus datos personales que tenemos almacenados, rectificar información incorrecta o desactualizada, solicitar la cancelación de sus datos cuando ya no sean necesarios, oponerse al tratamiento de sus datos para fines específicos, y revocar su consentimiento en cualquier momento.",
  },
  {
    titulo: "7. Retención de Datos",
    contenido:
      "Conservamos su información personal durante el tiempo necesario para cumplir con los fines para los que fue recopilada y para satisfacer los requisitos legales, contables o de informes aplicables. Los datos de transacciones se conservan por un período mínimo de 5 años según la normativa tributaria peruana. Tras este período, la información es eliminada de manera segura.",
  },
  {
    titulo: "8. Cambios en esta Política",
    contenido:
      "Qataru Express se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización. Le recomendamos revisar esta política periódicamente. El uso continuado de nuestros servicios después de la publicación de cambios constituye su aceptación de los mismos.",
  },
  {
    titulo: "9. Contacto y Ejercicio de Derechos",
    contenido:
      "Para ejercer sus derechos, reportar incidencias de privacidad o realizar cualquier consulta sobre el tratamiento de sus datos personales, puede contactarnos a través de nuestro WhatsApp oficial o enviar un correo a nuestro equipo de soporte. Atenderemos su solicitud en un plazo máximo de 15 días hábiles conforme a la normativa vigente.",
  },
];

export default function PoliticasPrivacidad() {
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
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Políticas de Privacidad
            </h1>
          </div>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mt-2">
            Última actualización: Enero 2026 · Tu privacidad es nuestra prioridad
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          {/* Intro */}
          <div className="mb-10 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              En <strong>Qataru Express</strong> nos comprometemos a proteger y respetar su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal de acuerdo con la{" "}
              <strong>Ley N° 29733 - Ley de Protección de Datos Personales</strong> de la República del Perú.
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