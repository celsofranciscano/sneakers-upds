"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function NewProductsPage() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function getCategories() {
      const response = await axios.get("/api/dashboard/categories");
      setCategories(response.data);
    }
    getCategories();
  }, []);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const response = await axios.post(`/api/dashboard/products`, data);

    if(response.status===200){
      router.refresh();
      router.back();
    }
  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-2xl font-medium text-white">
        Agregar nuevo
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1">
          Categoria
          <select
            className="input-dark"
            type="text"
            {...register("FK_category", {
              required: {
                value: true,
                message: "Debes seleccionar una categoria",
              },
            })}
          >
            {categories?.map((category) => (
              <option key={category.PK_category} value={category.PK_category}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.FK_category && (
            <span className="text-sm text-red-500">
              {errors.FK_category.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Producto
          <input
            className="input-dark"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Slug
          <input
            className="input-dark"
            type="text"
            {...register("urlProduct", {
              required: {
                value: true,
                message: "El slug es requerido",
              },
            })}
          />
          {errors.urlProduct && (
            <span className="text-sm text-red-500">
              {errors.urlProduct.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Precio regular
          <input
            className="input-dark"
            type="number"
            {...register("regularPrice", {
              required: {
                value: true,
                message: "El precio Regular es requerido",
              },
            })}
          />
          {errors.regularPrice && (
            <span className="text-sm text-red-500">
              {errors.regularPrice.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Precion de oferta
          <input
            className="input-dark"
            type="number"
            {...register("offerPrice", {
              required: {
                value: true,
                message: "Realiza un precio de oferta",
              },
            })}
          />
          {errors.offerPrice && (
            <span className="text-sm text-red-500">
              {errors.offerPrice.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Stock
          <input
            className="input-dark"
            type="number"
            {...register("stock", {
              required: {
                value: true,
                message: "Debes ingresar un stock",
              },
            })}
          />
          {errors.stock && (
            <span className="text-sm text-red-500">{errors.stock.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Descripcion
          <textarea
            className="input-dark h-10"
            type="text"
            {...register("description", {
              required: {
                value: true,
                message: "Ingresa una descripcion",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </label>

        <ButtonSubmit name={"Añadir nuevo"} />
      </form>
    </section>
  );
}

export default NewProductsPage;
