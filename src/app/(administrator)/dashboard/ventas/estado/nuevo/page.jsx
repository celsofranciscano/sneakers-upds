"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
function NewSalesStatusesPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("/api/dashboard/salesstatuses", data);
    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="bg-white dark:bg-zinc-900 p-4 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <label className="flex flex-col gap-1">
          Nombre
          <input
            className="input-dark"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre del estado es requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Descripcion
          <textarea
            className="input-dark h-10"
            {...register("description", {
              required: {
                value: true,
                message: "La descripcion es requerida",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </label>

        <ButtonSubmit name={"Añadir estado"} />
      </form>
    </section>
  );
}

export default NewSalesStatusesPage;
