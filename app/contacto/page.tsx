"use client";
import { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    whatsapp: "",
    mensaje: "",
    privacidad: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      !formData.nombres ||
      !formData.apellidos ||
      !formData.email ||
      !formData.whatsapp ||
      !formData.mensaje
    ) {
      alert("Por favor completa todos los campos");
      return;
    }
    if (!formData.privacidad) {
      alert("Debes aceptar las políticas de privacidad");
      return;
    }
    console.log("Formulario enviado:", formData);
    alert(
      "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
    );
    setFormData({
      nombres: "",
      apellidos: "",
      email: "",
      whatsapp: "",
      mensaje: "",
      privacidad: false,
    });
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img src="/images/banner/contacto.jpg" alt="" />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                CONTÁCTANOS
              </h1>
              <p className="text-gray-600 mb-8">
                Cuéntanos qué necesitas y desde qué distrito. Planificamos la
                ruta, retiramos en la ventana acordada y mantenemos comunicación
                clara hasta confirmar la entrega.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <textarea
                  name="mensaje"
                  placeholder="Tu mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                ></textarea>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="privacidad"
                    id="privacidad"
                    checked={formData.privacidad}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label htmlFor="privacidad" className="text-sm text-gray-600">
                    He leído y acepto la{" "}
                    <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                      Políticas de privacidad
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-linear-to-r from-red-400 cursor-pointer to-red-400 hover:from-red-700 hover:to-red-500 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51928600370"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-50"
        title="Chatea con nosotros"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}
