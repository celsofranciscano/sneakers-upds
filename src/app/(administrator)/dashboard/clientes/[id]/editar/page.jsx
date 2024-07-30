"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function EditClientPage({ params }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`/api/dashboard/users/${params.id}`);
      const userData = response.data;

      setValue("firstName", userData.firstName);
      setValue("lastName", userData.lastName);
      setValue("status", userData.status);
    }
    fetchUser();
  }, []);

  async function onSubmit(data) {
    const response = await axios.patch(
      `/api/dashboard/users/${params.id}`,
      data
    );

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">Editar cliente</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Nombre
          <input
            type="text"
            autoFocus
            className="input-dark"
            {...register("firstName", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
            })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Apellido
          <input
            type="text"
            className="input-dark"
            {...register("lastName", {
              required: {
                value: true,
                message: "El apellido es obligatorio",
              },
            })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
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

        <ButtonSubmit name={"Actualizar cliente"} />
      </form>
    </section>
  );
}

export default EditClientPage;
