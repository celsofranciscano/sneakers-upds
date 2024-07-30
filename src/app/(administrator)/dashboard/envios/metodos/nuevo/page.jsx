"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/common/ButtonSubmit";
function Nuevo() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("/api/dashboard/shipments", data);
    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 rounded-md bg-white dark:bg-zinc-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1">
          Ciudad
          <input
            className="input-dark"
            type="text"
            {...register("city", {
              required: {
                value: true,
                message: "La ciudad es requerida",
              },
            })}
          />
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Precio
          <input
            className="input-dark"
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "El precio es requerido",
              },
            })}
          />
          {errors.price && (
            <span className="text-sm text-red-500">{errors.price.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Descripcion
          <textarea
            className="input-dark h-10"
            {...register("description", {
              required: {
                value: true,
                message: "La descripcion del envio es requerido",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </label>

        <ButtonSubmit name={"Añadir nuevo metodo"} />
      </form>
    </section>
  );
}

export default Nuevo;
