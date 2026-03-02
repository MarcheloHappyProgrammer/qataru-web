"use client";
import {
  FaWarehouse,
  FaShoppingCart,
  FaStar,
  FaWhatsapp,
  FaPlane,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function ComprasInternacionales() {
  const beneficios = [
    {
      numero: "01",
      titulo: "Tarifa económica",
      descripcion: "10$ x KG + 8$ Por desaduanaje",
    },
    {
      numero: "02",
      titulo: "Asesoría Personalizada",
      descripcion:
        "Te brindamos soporte en tu compra y cualquier duda que tengas",
    },
    {
      numero: "03",
      titulo: "Consolidación de Paquetería",
      descripcion: "Compra en diferentes páginas y tráelo todo junto",
    },
  ];

  const pasos = [
    {
      numero: "1° Compra en tu tienda preferida de EEUU",
      icono: <FaShoppingCart className="text-6xl" />,
      titulo: "Al momento de comprar, usa nuestra dirección de Miami.",
    },
    {
      numero: "2° Envíanos el detalle de tu compra",
      icono: <FaWarehouse className="text-6xl" />,
      titulo: "Envíanos un correo con los datos de tu compra en PDF.",
    },
    {
      numero: "3° ¡El resto nos encargamos nosotros!",
      icono: <FaPlane className="text-6xl" />,
      titulo:
        "Una vez llegado al Perú, te informaremos para la recepción del producto. ",
    },
  ];

  const tiendas = [
    { nombre: "Amazon", logo: "/images/logos/Amazon.png" },
    { nombre: "Jomashop", logo: "/images/logos/Jomashop.png" },
    { nombre: "Adidas", logo: "/images/logos/Adidas.png" },
    { nombre: "eBay", logo: "/images/logos/Ebay.png" },
    { nombre: "The Children's Place", logo: "/images/logos/TheChildren.png" },
    { nombre: "Nike", logo: "/images/logos/Nike.png" },
    { nombre: "Shop Disney", logo: "/images/logos/Shopdisney.png" },
    { nombre: "Walmart", logo: "/images/logos/Walmart.png" },
    { nombre: "Michael Kors", logo: "/images/logos/MichaelKors.png" },
    { nombre: "Tommy Hilfiger", logo: "/images/logos/TommyHilfiger.png" },
    { nombre: "Sony", logo: "/images/logos/Sony.png" },
    { nombre: "6pm", logo: "/images/logos/6pm.png" },
  ];

  const testimonios = [
    {
      nombre: "Cynthia Rodriguez",
      empresa: "Joyería JK",
      testimonio:
        "Excelente servicio, mis clientes están satisfechos con las entregas que reciben día a día gracias al servicio de pago contra entrega.",
      rating: 5,
      foto: "/images/clientes/maria.jpg",
    },
    {
      nombre: "Jorge Cárdenas",
      empresa: "Importaciones Iphone",
      testimonio:
        "Mis importaciones me salen más rentables y lo mejor es que ellos me ayudan en todo mis tramites, buen servicio.",
      rating: 5,
      foto: "/images/clientes/carlos.jpg",
    },
    {
      nombre: "Angelica Raymundi",
      empresa: "Mikita",
      testimonio:
        "Mi pedido de EEUU me llego rápido, estoy muy agradecida con los chicos de Qataru Express, porque son muy amables y pacientes.",
      rating: 5,
      foto: "/images/clientes/andrea.jpg",
    },
  ];

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
      {/* Hero Banner */}
      {/*
        MÓVIL: altura automática, flex-col centrado, padding vertical
        DESKTOP: sin cambios (h-125, pl-20, flex row)
      */}
      <section className="relative h-auto py-16 px-6 md:py-20 md:px-10 lg:h-125 lg:py-0 lg:px-0 bg-linear-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        {/* Decorative boxes */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-red-600 opacity-20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-yellow-500 opacity-20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 opacity-20 rounded-lg transform rotate-45"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center text-center lg:flex-row lg:pl-20 lg:text-left lg:items-center gap-8 lg:gap-0">
          <div className="text-white flex-1 lg:flex-none" style={{ flexBasis: "auto" }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              TRAEMOS TUS
              <br />
              <span className="text-white">COMPRAS DESDE</span>
              <br />
              <span className="text-white">USA A PERU</span>
            </h1>

            <div className="flex flex-col gap-3 items-center lg:items-start">
              <button className="bg-orange-600 cursor-pointer hover:bg-orange-700 hover:scale-105 text-white font-semibold px-8 py-3 rounded transition-all duration-300 w-fit flex items-center gap-2 shadow-lg hover:shadow-xl">
                MAYOR INFORMACION
              </button>
            </div>
          </div>

          {/* Imagen: en móvil más pequeña y centrada, desktop sin cambios */}
          <div className="w-full flex justify-center lg:flex-2 lg:justify-end lg:p-30">
            <img
              src="images/banner/imagen-banner-compras-internacionales.jpeg"
              alt="Banner"
              className="max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-130 object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Traemos tus productos Section */}
      <section ref={productosRef} className="pt-16 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-8 transition-all duration-700 ${
              productosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              QATARU EXPRESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
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
              Compra en EEUU e impórtalo a Perú de manera fácil y sencilla con
              nosotros. Puedes traer celulares IPhone, zapatillas, ropa,
              calzado, carteras, artículos de oficina, maquillaje, perfumes y
              entre productos de las tiendas de Estados Unidos.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios y Servicios Section */}
      <section
        ref={beneficiosRef}
        className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto pb-10">
          {/*
            MÓVIL: 1 columna (stacked)
            DESKTOP: 2 columnas (sin cambios)
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Beneficios Column */}
            <div
              className={`transition-all duration-700 ${
                beneficiosInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-cyan-900 mb-8">
                Nuestro Servicio
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
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {beneficio.numero}
                      </div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-6 pb-6">
                      <h3 className="text-xl font-bold text-gray-700 mb-2">
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

            {/* Asesoría Column */}
            <div
              className={`bg-linear-to-br from-gray-50 to-gray-50 p-6 sm:p-8 rounded-lg transition-all duration-700 delay-300 ${
                beneficiosInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-900 mb-6 text-center">
                Asesoría
                <br />
                Personalizada
              </h3>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <a
                  href="https://wa.link/yc7jq2"
                  target="_blank"
                  className="w-full cursor-pointer bg-green-500 hover:bg-green-600 hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 mb-4 shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  Escríbenos al WhatsApp
                </a>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaWhatsapp className="text-green-500 text-5xl sm:text-6xl shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base text-gray-600 font-bold">
                        Compra en EEUU y tráelo Perú de manera sencilla y rápida
                        con una tarifa especial 📦✈️
                      </p>
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
            className={`text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-5 transition-all duration-700 ${
              pasosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            ¿Cómo funciona?
          </h2>

          {/*
            MÓVIL: 1 columna, padding reducido
            TABLET+: 3 columnas (sin cambios)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pasos.map((paso, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 p-8 sm:p-12 lg:p-15 ${
                  pasosInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-900 rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 flex items-center justify-center text-amber-500 hover:scale-110 transition-transform duration-300">
                  {paso.icono}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-900 mb-2">
                  {paso.numero}
                </h3>
                <p className="text-sm text-gray-700">{paso.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Dónde comprar en USA? Section */}
      <section ref={tiendasRef} className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 transition-all duration-700 ${
              tiendasInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            ¿Dónde comprar en USA?
          </h2>

          {/*
            MÓVIL: 2 columnas (ya estaba bien)
            TABLET+: 4 columnas (sin cambios)
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {tiendas.map((tienda, index) => (
              <div
                key={index}
                className={`bg-white p-4 sm:p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-700 flex items-center justify-center h-24 sm:h-32 border border-gray-200 group ${
                  tiendasInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={tienda.logo}
                  alt={tienda.nombre}
                  className="max-h-12 sm:max-h-16 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section ref={testimoniosRef} className="py-16 sm:py-25 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              testimoniosInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Testimonios de nuestros clientes
            </h2>
            <p className="text-gray-600">
              Ellos también confiaron en nuestros servicios, solo faltas tú
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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