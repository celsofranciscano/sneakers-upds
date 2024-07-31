"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
function NewRecirPage({ params }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post(
      `/api/ecommerce/paymentreceipts/${params.id}`,
      data
    );
    console.log(response);
    if (response.status === 200) {
      router.refresh();
    }
  }
  return (
    <section className="bg-white dark:bg-zinc-900 p-4 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} className="grid  gap-4">
        <label className="flex flex-col gap-1">
          URL comprobante
          <input
            className="input-dark"
            type="text"
            {...register("receiptImage", {
              required: {
                value: true,
                message: "La url es requerido",
              },
            })}
          />
          {errors.receiptImage && (
            <span className="text-red-500 text-sm">
              {errors.receiptImage.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Fecha
          <input
            className="input-dark"
            type="date"
            {...register("receiptDate", {
              required: {
                value: true,
                message: "La fecha es requerido",
              },
            })}
          />
          {errors.receiptDate && (
            <span className="text-red-500 text-sm">
              {errors.receiptDate.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="py-2 px-4 w-full bg-blue-500 rounded-md text-white"
        >
          Enviar comprobante de pago
        </button>
      </form>
    </section>
  );
}

export default NewRecirPage;
