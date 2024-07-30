"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function CreatePage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter()

  async function onSubmit(data) {
    const response = await axios.post("/api/dashboard/categories", data);
    if(response.status===200){
      router.refresh();
      router.back();
    }


  }
  return (
    <section className="p-4 bg-white  dark:bg-zinc-900 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1   ">
          Nombre
          <input
            autoFocus
            type="text"
            className="input-dark"
            placeholder="Ejemplo: Sneakers"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre del rol requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-1   ">
          Slug
          <input
            type="text"
            className="input-dark"
            placeholder="Escribe bien"
            {...register("urlCategory", {
              required: {
                value: true,
                message: "El slug es requerido",
              },
            })}
          />
          {errors.urlCategory && (
            <span className="text-sm text-red-500">
              {errors.urlCategory.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1   ">
          Descripcion
          <textarea
            type="text"
            className="input-dark h-10"
            placeholder="Escribe bien"
            {...register("description", {
              required: {
                value: true,
                message: "La descripcion del rol es requerido",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="py-2 px-4 w-full bg-blue-500 rounded-md text-white md:col-span-3"
        >
          Crear nuevo rol
        </button>
      </form>
    </section>
  );
}

export default CreatePage;
