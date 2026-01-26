"use client";
import {
  FaWhatsapp,
  FaBoxOpen,
  FaExchangeAlt,
  FaTruck,
  FaRecycle,
  FaWarehouse,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const servicios = [
    {
      icon: <FaBoxOpen className="text-5xl text-red-600 mb-4" />,
      titulo: "CONTRAENTREGA",
      descripcion:
        "Tus clientes pagan al recibir, aumentando la confianza. Aceptamos efectivo, transferencias, Yape, Plin y POS.",
    },
    {
      icon: <FaWarehouse className="text-5xl text-red-600 mb-4" />,
      titulo: "SERVICIO FULLFILMENT",
      descripcion:
        "Nos encargamos del almacenamiento, empaquetado, rotulado, envío y cobro de tus productos, permitiéndote enfocarte en otras áreas de tu negocio.",
    },
    {
      icon: <FaTruck className="text-5xl text-red-600 mb-4" />,
      titulo: "RECOJO A DOMICILIO",
      descripcion:
        "Pasamos por tus paquetes y nos encargamos del resto, garantizando eficiencia en la gestión y la entrega.",
    },
    {
      icon: <TfiReload className="text-5xl text-red-600 mb-4" />,
      titulo: "CAMBIO DE PRODUCTO",
      descripcion:
        "Facilitamos el proceso de cambio de productos para tus clientes, recogiendo el artículo no deseado y entregando el nuevo de manera rápida y segura.",
    },
    {
      icon: <FaRecycle className="text-5xl text-red-600 mb-4" />,
      titulo: "REUTILIZADO",
      descripcion:
        "Si no concretaste una venta, puedes reutilizar el pedido para otro cliente, optimizando recursos y tiempo.",
    },
  ];

  const razones = [
    {
      titulo: "Rapidez y Eficiencia",
      descripcion: "Entregas el mismo día en Lima Metropolitana",
    },
    {
      titulo: "Servicio Personalizado",
      descripcion: "Atención dedicada a las necesidades de tu negocio",
    },
    {
      titulo: "Tecnología de Punta",
      descripcion: "Sistema de rastreo en tiempo real",
    },
    {
      titulo: "Cobertura Total",
      descripcion: "Llegamos a todos los distritos de Lima y Callao",
    },
    {
      titulo: "Seguridad Garantizada",
      descripcion: "Tus paquetes están protegidos en todo momento",
    },
    {
      titulo: "Precios Competitivos",
      descripcion: "Tarifas justas y transparentes sin costos ocultos",
    },
  ];

  const testimonios = [
    {
      nombre: "María González",
      empresa: "Boutique Fashion",
      testimonio:
        "Excelente servicio, mis clientes reciben sus pedidos el mismo día. La opción de contraentrega ha aumentado mis ventas un 40%.",
      rating: 5,
      foto: "/images/clientes/maria.jpg",
    },
    {
      nombre: "Carlos Mendoza",
      empresa: "Tech Store Peru",
      testimonio:
        "El servicio de fullfilment me ha permitido enfocarme en las ventas mientras ellos se encargan de toda la logística. Muy recomendable.",
      rating: 5,
      foto: "/images/clientes/carlos.png",
    },
    {
      nombre: "Andrea Flores",
      empresa: "Cosméticos Lima",
      testimonio:
        "La atención es personalizada y siempre están disponibles. El cambio de prenda es perfecto para mi negocio de ropa.",
      rating: 5,
      foto: "/images/clientes/andrea.jpg",
    },
  ];

  // Hook para detectar cuando un elemento es visible
  const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Solo animar una vez
          }
        },
        { threshold: 0.1, ...options },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return { ref, isInView };
  };

  const { ref: serviciosRef, isInView: serviciosInView } = useInView();
  const { ref: razonesRef, isInView: razonesInView } = useInView();
  const { ref: testimoniosRef, isInView: testimoniosInView } = useInView();

  return (
    <div className="w-full">
      {/* Hero/Banner Section */}
      <section className="relative h-125 bg-linear-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        {/* Decorative boxes */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-red-600 opacity-20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-yellow-500 opacity-20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 opacity-20 rounded-lg transform rotate-45"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center md:ml-30">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              LA SATISFACCIÓN DE
              <br />
              <span className="text-white">TU CLIENTE ES</span>
              <br />
              <span className="text-white">NUESTRA PRIORIDAD</span>
            </h1>
            <div className="flex gap-4 mt-8">
              <a className=" cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition">
                CONOCE NUESTRO SERVICIO
              </a>
              <a className="bg-transparent cursor-pointer border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-3 rounded transition flex items-center gap-2">
                <FaWhatsapp /> ESCRÍBENOS
              </a>
            </div>
          </div>
        </div>

        {/* Large text background */}
        <div className="absolute inset-0 flex items-center justify-between px-20 pointer-events-none">
          <div className="text-gray-700 text-9xl font-black opacity-10">
            ESLOGAN
          </div>
          <div className="text-gray-700 text-9xl font-black opacity-10">
            EMPRESA
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section ref={serviciosRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              serviciosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FaBoxOpen className="text-white text-xl" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Servicios</h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones rápidas y seguras para la distribución de tus
              paquetes, garantizando eficiencia en cada entrega. Nuestro
              compromiso es brindarte un servicio confiable, adaptado a las
              necesidades de tu negocio, asegurando que tus envíos lleguen a
              tiempo y en perfectas condiciones.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`text-center p-4 py-10 rounded-lg hover:shadow-xl transition-all duration-500 border border-gray-100
                 w-full md:w-[calc(50%-1rem)] lg:w-[calc(26%-1rem)] max-w-sm ${
                   serviciosInView
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-10"
                 }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">{servicio.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos*/}
      <section ref={razonesRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 items-center">
            {/* Bloque azul (más angosto) */}
            <div
              className={`hidden lg:block lg:col-span-2 h-72 bg-[#001d56] rounded-lg transition-all duration-700 ${
                razonesInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            ></div>

            {/* Imagen repartidor */}
            <div
              className={`flex justify-center lg:col-span-3 transition-all duration-700 delay-200 ${
                razonesInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <img
                src="/images/repartidor.png"
                alt="Mensajero"
                className="max-h-100 object-contain"
              />
            </div>

            {/* Texto + razones (más ancho) */}
            <div
              className={`lg:col-span-3 transition-all duration-700 delay-300 ${
                razonesInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Por qué elegirnos como <br />
                <span className="text-red-600">servicio de mensajería?</span>
              </h2>

              <ul className="space-y-4">
                {razones.map((razon, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      razonesInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <FaCheckCircle className="text-[#001d56] text-xl mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {razon.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {razon.descripcion}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section ref={testimoniosRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              testimoniosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-600">
              La satisfacción de nuestros clientes es nuestra mejor carta de
              presentación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 ${
                  testimoniosInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Header: foto + rating */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex gap-1">
                      {[...Array(testimonio.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 text-sm" />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-800">
                      {testimonio.nombre}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonio.empresa}
                    </p>
                  </div>
                </div>

                {/* Testimonio */}
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonio.testimonio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
