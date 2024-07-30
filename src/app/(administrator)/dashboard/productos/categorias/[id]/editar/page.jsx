"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function EditPageCategory({ params }) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    async function getCategory() {
      const response = await axios.get(
        `/api/dashboard/categories/${params.id}`
      );
      const category = response.data;

      setValue("name", category.name);
      setValue("urlCategory", category.urlCategory);
      setValue("description", category.description);
      setValue("status", category.status);
    }
    getCategory();
  }, []);

  async function onSubmit(data) {
    const response = await axios.patch(
      `/api/dashboard/categories/${params.id}`,
      data
    );
    if (response.status === 200) {
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
        <label className="flex flex-col gap-1">
          Estado
          <input
            type="checkbox"
            className="input-dark size-8"
            {...register("status")}
          />
        </label>

        <button
          type="submit"
          className="py-2 px-4 w-full bg-blue-500 rounded-md text-white md:col-span-3"
        >
          Editar 
        </button>
      </form>
    </section>
  );
}

export default EditPageCategory;
