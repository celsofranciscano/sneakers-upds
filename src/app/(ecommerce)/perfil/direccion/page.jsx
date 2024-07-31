"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import { useSession } from "next-auth/react";

function DireccionPage() {
  const { data: session } = useSession();

  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (!session) {
      return;
    }

    async function getAddress() {
      try {
        const response = await axios.get(
          `/api/ecommerce/addresses/${session.user.email}`
        );
        setAddress(response.data);
      } catch (error) {
        console.error("Error fetching address:", error);
      } finally {
      }
    }

    getAddress();
  }, [session]);

  if (address) {
    return (
      <section className="p-4 bg-white rounded-md shadow-md grid gap-4 ">
        <h1 className="font-medium text-lg mb-4">Información de Envío</h1>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex flex-col">
            <span className="font-semibold">Dirección:</span>
            <span>{address.address}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Teléfono:</span>
            <span>{address.phone}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Indicaciones:</span>
            <span>{address.indications}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Ciudad:</span>
            <span>{address.shipment.city}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Descripción del Envío:</span>
            <span>{address.shipment.description}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Precio del Envío:</span>
            <span>{address.shipment.price} Bs</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 bg-white rounded-md">
      <h1 className="font-medium pb-8">No tienes direccion</h1>
    </section>
  );
}

export default DireccionPage;
