"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function EditSalePage({ params }) {
  const [salestatus, setSalestatus] = useState();
  const [recibo, setRecibo] = useState();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getSale() {
      const response = await axios.get(`/api/dashboard/sales/${params.id}`);
      const sale = response.data;
      setValue("FK_salestatus", sale.FK_salestatus);
      setValue("totalAmount", sale.totalAmount);
      setValue("status", sale.status);
    }
    getSale();
    async function getSaleStatus() {
      const response = await axios.get("/api/dashboard/salesstatuses");
      setSalestatus(response.data);
    }
    getSaleStatus();

    async function getRecepcion() {
      const response = await axios.get(`/api/dashboard/paymentreceipts/${params.id}`);
      setRecibo(response.data);
    }
    getRecepcion();
  }, []);

  async function onSubmit(data) {
    const response = await axios.patch(
      `/api/dashboard/sales/${params.id}`,
      data
    );

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
          <h1 className="text-2xl font-medium text-white">Comprobante de venta</h1>
          <img src={recibo?.receiptImage} alt="" />
          <p>{recibo?.receiptDate}</p>



      <h1 className="text-2xl font-medium text-white">Editar Venta</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1">
          Estado de venta
          <select
            className="input-dark"
            type="text"
            {...register("FK_salestatus", {
              required: {
                value: true,
                message: "Debes seleccionar una categoria",
              },
            })}
          >
            <option value="">Seleccionar</option>
            {salestatus?.map((status) => (
              <option key={status.PK_salestatus} value={status.PK_salestatus}>
                {status.name}
              </option>
            ))}
          </select>
          {errors.FK_salestatus && (
            <span className="text-sm text-red-500">
              {errors.FK_salestatus.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Precio total
          <input
            className="input-dark"
            type="number"
            {...register("totalAmount", {
              required: {
                value: true,
                message: "Valor total obligatorio",
              },
            })}
          />
          {errors.totalAmount && (
            <span className="text-sm text-red-500">
              {errors.totalAmount.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Estado
          <input
            type="checkbox"
            className="input-dark size-8"
            {...register("status")}
          />
        </label>

        <ButtonSubmit name={"Editar"} />
      </form>
    </section>
  );
}

export default EditSalePage;
