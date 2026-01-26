"use client";
import {
  FaWarehouse,
  FaShoppingCart,
  FaFacebookMessenger,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdComputer,
  MdShoppingBag,
  MdLocalShipping,
  MdCardGiftcard,
} from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

export default function ComprasInternacionales() {
  const beneficios = [
    {
      numero: "01",
      titulo: "Buena Tarifa",
      descripcion:
        "Tarifas económicas. $10.5 x KG + $10 por la guía operativa.",
    },
    {
      numero: "02",
      titulo: "Asesoría Personalizada",
      descripcion: "Soporte y recomendaciones a la hora de realizar tu compra.",
    },
    {
      numero: "03",
      titulo: "Unión de Paquetes",
      descripcion:
        "Une todas tus compras de distintas páginas en un solo paquete.",
    },
    {
      numero: "04",
      titulo: "Cotización Gratuita",
      descripcion: "Cotizamos todos los productos que desees.",
    },
  ];

  const pasos = [
    {
      numero: "#1",
      icono: <MdComputer className="text-6xl" />,
      titulo: "Regístrate con Envío Franco",
      descripcion: "y empieza a comprar.",
      link: "aquí",
    },
    {
      numero: "#2",
      icono: <FaShoppingCart className="text-6xl" />,
      titulo: "Regístrate en tus tiendas online",
      descripcion: "preferidas con la dirección de Envío Franco.",
    },
    {
      numero: "#3",
      icono: <MdShoppingBag className="text-6xl" />,
      titulo: "¡¡¡Compra eso que tanto",
      descripcion: "quieres!!!",
    },
    {
      numero: "#4",
      icono: <MdLocalShipping className="text-6xl" />,
      titulo: "Coordina con Envío Franco el",
      descripcion: "embarque de tu pedido.",
    },
    {
      numero: "#5",
      icono: <MdCardGiftcard className="text-6xl" />,
      titulo: "¡Recibe y disfruta tu compra!",
    },
  ];

  const tiendas = [
    {
      nombre: "Amazon",
      logo: "/images/logos/Amazon.png",
    },
    {
      nombre: "Zumiez",
      logo: "/images/logos/Zumiez.png",
    },
    {
      nombre: "GAP Factory",
      logo: "/images/logos/GapFactory.jpg",
    },
    {
      nombre: "eBay",
      logo: "/images/logos/Ebay.png",
    },
    {
      nombre: "The Children's Place",
      logo: "/images/logos/TheChildren.png",
    },
    {
      nombre: "OshKosh",
      logo: "/images/logos/Oshkosh.png",
    },
    {
      nombre: "Shop Disney",
      logo: "/images/logos/Shopdisney.png",
    },
    {
      nombre: "Carter's",
      logo: "/images/logos/Carters.svg",
    },
    {
      nombre: "Banana Republic",
      logo: "/images/logos/BananaRepublic.png",
    },
    {
      nombre: "Tommy Hilfiger",
      logo: "/images/logos/TommyHilfiger.png",
    },
    {
      nombre: "Polo Ralph Lauren",
      logo: "/images/logos/RalphLauren.png",
    },
    {
      nombre: "6pm",
      logo: "/images/logos/6pm.png",
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
            observer.disconnect();
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

  const { ref: productosRef, isInView: productosInView } = useInView();
  const { ref: beneficiosRef, isInView: beneficiosInView } = useInView();
  const { ref: pasosRef, isInView: pasosInView } = useInView();
  const { ref: tiendasRef, isInView: tiendasInView } = useInView();
  const { ref: testimoniosRef, isInView: testimoniosInView } = useInView();

  return (
    <div className="w-full">
      {/* Hero Banner - Warehouse */}
      <section className="relative h-125 bg-linear-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        {/* Decorative boxes */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-red-600 opacity-20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-yellow-500 opacity-20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 opacity-20 rounded-lg transform rotate-45"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="flex items-center justify-between w-full mx-30 ">
            <div className="text-white max-w-xl pr-4">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                NUEVA DIRECCIÓN
              </h1>
              <p className="text-xl mb-6 uppercase tracking-wide">
                En nuestro warehouse de Miami
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 hover:scale-105 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 w-fit shadow-lg hover:shadow-xl">
                  Ver más
                </button>
                <button className="bg-red-600 cursor-pointer hover:bg-red-700 hover:scale-105 text-white font-semibold px-8 py-3 rounded transition-all duration-300 w-fit flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <FaWarehouse /> Regístrate Ahora
                </button>
                <button className="bg-blue-100 cursor-pointer hover:bg-blue-200 hover:scale-105 text-blue-900 font-semibold px-8 py-3 rounded transition-all duration-300 w-fit shadow-md hover:shadow-lg">
                  → Cotiza Tu Pedido
                </button>
              </div>
            </div>

            {/* Warehouse Image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-120 rounded-lg shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <img src="/images/banner/casa.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traemos tus productos Section */}
      <section ref={productosRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-8 transition-all duration-700 ${
              productosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              CHASQUI EXPRESS
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Traemos tus productos
              <br />
              de EEUU a Perú
            </h2>
          </div>

          <div
            className={`max-w-4xl mx-auto text-center space-y-4 text-gray-700 transition-all duration-700 delay-200 ${
              productosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p>
              Somos una empresa peruana que brinda el servicio de importación de
              Estados Unidos a Perú para diversos productos. Si necesitas un
              producto que es vendido en EEUU, podemos traerlo a Lima y enviarlo
              a provincia.
            </p>
            <p>
              Los productos importados son variados como tecnología, ropa,
              zapatillas, accesorios, artículos para la oficina, maquillaje y
              entre otros productos de tiendas en los Estados Unidos.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios y Servicios Section */}
      <section
        ref={beneficiosRef}
        className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Beneficios Column */}
            <div
              className={`transition-all duration-700 ${
                beneficiosInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-sm text-cyan-500 uppercase tracking-wide mb-3">
                Beneficios y servicios
              </p>
              <h2 className="text-4xl font-bold text-cyan-900 mb-8">
                Chasqui Express
              </h2>

              <div className="space-y-6">
                {beneficios.map((beneficio, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-500 ${
                      beneficiosInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                        {beneficio.numero}
                      </div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-6 pb-6">
                      <h3 className="text-xl font-bold text-cyan-800 mb-2">
                        {beneficio.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {beneficio.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Te atendemos personalmente Column */}
            <div
              className={`bg-linear-to-br from-blue-50 to-cyan-50 p-8 rounded-lg transition-all duration-700 delay-300 ${
                beneficiosInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Te atendemos
                <br />
                personalmente
              </h3>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 mb-4 shadow-md hover:shadow-lg">
                  <FaWhatsapp className="text-2xl" />
                  Escríbenos al WhatsApp
                </button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaWhatsapp className="text-green-500 text-6xl shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        WhatsApp Chasqui
                      </h4>
                      <p className="text-sm text-gray-600">
                        Como comprar de USA de Manera Rápida, Barata y Segura?
                        Te apoyamos, asesoramos paso a paso lo que debes hacer y
                        como hacerlo usar🤩✈️ Compra de USA y Recíbelo en Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 justify-center">
                    <div className="w-12 h-12 bg-blue-500 hover:bg-blue-600 hover:scale-110 rounded-lg flex items-center justify-center cursor-pointer shadow transition-all duration-300">
                      <FaFacebookMessenger className="text-white text-xl" />
                    </div>

                    <div className="w-12 h-12 bg-gray-500 hover:bg-gray-600 hover:scale-110 rounded-lg flex items-center justify-center cursor-pointer shadow transition-all duration-300">
                      <MdEmail className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? Section */}
      <section ref={pasosRef} className="pb-16 pt-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center text-cyan-700  mb-18 transition-all duration-700 ${
              pasosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            ¿Cómo funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {pasos.map((paso, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  pasosInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-900 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform duration-300">
                  {paso.icono}
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {paso.numero}
                </h3>
                <p className="text-sm text-gray-700">
                  {paso.titulo}{" "}
                  {paso.link && (
                    <span className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors">
                      {paso.link}
                    </span>
                  )}{" "}
                  {paso.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-8 transition-all duration-700 delay-500 ${
              pasosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="bg-gray-800 cursor-pointer hover:bg-gray-900 hover:scale-105 text-white font-semibold px-8 py-3 rounded transition-all duration-300 shadow-lg hover:shadow-xl">
              COTIZA AQUÍ
            </button>
          </div>
        </div>
      </section>

      {/* ¿Dónde comprar en USA? Section */}
      <section ref={tiendasRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center text-cyan-800 mb-12 transition-all duration-700 ${
              tiendasInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            ¿Dónde comprar en USA?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tiendas.map((tienda, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-700 flex items-center justify-center h-32 border border-gray-200 group ${
                  tiendasInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={tienda.logo}
                  alt={tienda.nombre}
                  className="max-h-16 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
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
                className={`bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
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
                    className="w-14 h-14 rounded-full object-cover hover:scale-110 transition-transform duration-300"
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
