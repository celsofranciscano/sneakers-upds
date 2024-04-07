"use client";
import { useState } from "react";
import Carousel from "@/components/ecommerce/Carrusel";

function AppPage() {
  const [index, setIndex] = useState(0);
  const imagenes = [
    "https://i.pinimg.com/564x/6d/70/07/6d7007794ab6023b1d453cefc932eacd.jpg",
    "https://i.pinimg.com/564x/77/59/37/775937499d042d0ca19672df77f747ae.jpg",
    "https://i.pinimg.com/564x/47/06/dd/4706dd9f077b207aca6942d54171463b.jpg",
    // Agrega más rutas de imágenes según sea necesario
  ];
  const slides = [
    "https://i.pinimg.com/564x/6d/70/07/6d7007794ab6023b1d453cefc932eacd.jpg",
    "https://i.pinimg.com/564x/77/59/37/775937499d042d0ca19672df77f747ae.jpg",
    "https://i.pinimg.com/564x/34/a4/b2/34a4b2945df92a8f496ef1c1e41b841d.jpg",
  ];

  const siguiente = () => {
    setIndex((prevIndex) =>
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const anterior = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <Carousel slides={slides} />
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
          onClick={anterior}
        >
          Anterior
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
          onClick={siguiente}
        >
          Siguiente
        </button>
        <img
          src={imagenes[index]}
          alt={`Imagen ${index + 1}`}
          className="mx-auto"
        />
      </div>
    </>
  );
}

export default AppPage;
