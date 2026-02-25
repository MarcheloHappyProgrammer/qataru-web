"use client";
import {
  FaWhatsapp,
  FaBoxOpen,
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
      icon: <FaBoxOpen className="text-5xl text-orange-400 mb-4" />,
      titulo: "CONTRA ENTREGA",
      descripcion:
        "Permite a los clientes pagar sus productos al momento de recibirlos. Aceptamos Efectivo Yape Plin o Pos.",
    },
    {
      icon: <TfiReload className="text-5xl text-orange-400 mb-4" />,
      titulo: "CAMBIO DE PRODUCTO",
      descripcion:
        "El cliente devuelve un producto y recibe a cambio un producto diferente.",
    },

    {
      icon: <FaWarehouse className="text-5xl text-orange-400 mb-4" />,
      titulo: "SERVICIO FULLFILMENT",
      descripcion:
        "Recepción, almacenamiento, gestión de inventario, empaquetado y envío de productos a los clientes finales.",
    },
    {
      icon: <FaTruck className="text-5xl text-orange-400 mb-4" />,
      titulo: "RECOJO A DOMICILIO",
      descripcion:
        "Pasamos por tus paquetes y nos encargamos del resto, garantizando eficiencia en la gestión y la entrega.",
    },
  ];

  const razones = [
    {
      titulo: "Atención personalizada",
      descripcion: "Nos comunicamos por vía whatsapp cualquier inconveniente",
    },
    {
      titulo: "Sistema de Seguimiento",
      descripcion: "Monitoreo de su pedido en Tiempo Real",
    },
    {
      titulo: "Cobertura",
      descripcion: "Llegamos a todo Lima metropolitana y Callao el mismo día",
    },
    {
      titulo: "Seguridad y Garantía",
      descripcion: "Ante cualquier perdida o robo que sufra tu producto",
    },
    {
      titulo: "Tarifa Exclusiva",
      descripcion: "Si tienes envíos masivos, tenemos tarifa especial para ti",
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
        <div className="absolute top-10 left-20 w-32 h-32 bg-orange-500 opacity-30 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-yellow-500 opacity-20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 opacity-20 rounded-lg transform rotate-45"></div>

        <div className="relative z-10 max-w-6xl mx-auto pl-20 h-full flex items-center">
          <div className="text-white flex-1">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              TU VENDES...
              <br />
              <span className="text-white">NOSOTROS LO</span>
              <br />
              <span className="text-white">ENTREGAMOS</span>
            </h1>
            <div className="flex gap-4 mt-8">
              <a className="bg-green-700 cursor-pointer hover:bg-green-800 hover:scale-105 text-white font-semibold px-8 py-3 rounded transition-all duration-300 w-fit flex items-center gap-2 shadow-lg hover:shadow-xl">
                <FaWhatsapp/> ESCRÍBENOS
              </a>
            </div>
          </div>

          <div className="flex-2 flex justify-end pl-10">
            <img
              src="images/banner/imagen-banner-principal.jpeg"
              alt="Banner"
              className="max-h-130 object-contain rounded-xl"
            />
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
      <section ref={serviciosRef} className="pt-16 pb-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              serviciosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                <FaBoxOpen className="text-white text-xl" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Servicio</h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Empresa especializada en entregas de paquetes seguras y rápidas,
              garantizando eficiencia y compromiso, adaptándonos a sus
              necesidades que tiene su negocio para cumplir sus objetivos en
              cada entrega.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`text-center p-4 py-10 rounded-lg hover:shadow-xl transition-all duration-500 border border-gray-100
                 w-full md:w-[calc(50%-1rem)] lg:w-[calc(22%-1rem)] max-w-sm ${
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

      {/* Beneficios */}
      <section ref={razonesRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-40">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 items-center">
            {/* Imagen repartidor */}
            <div
              className={`flex justify-center lg:col-span-4  transition-all duration-700 delay-200 ${
                razonesInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <img
                src="/images/repartidor.jpeg"
                alt="Mensajero"
                className="max-h-100 object-contain"
              />
            </div>

            {/* Texto + razones (más ancho) */}
            <div
              className={`lg:col-span-4 transition-all duration-700 delay-300 px-10 ${
                razonesInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                
                - Beneficios
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
                    <FaCheckCircle className="text-orange-600 text-xl mt-1 shrink-0" />
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
