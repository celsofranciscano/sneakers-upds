"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function EditAdministratorPage({ params }) {
  const [roles, setRoles] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getRoles() {
      const response = await axios.get("/api/dashboard/roles");
      setRoles(response.data);
    }
    getRoles();

    async function getUser() {
      const response = await axios.get(`/api/dashboard/users/${params.id}`);
      const user = response.data;
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("FK_role", user.FK_role);
      setValue("status", user.status);
    }
    getUser();
  }, [params.id]);

  async function onSubmit(data) {
    const response = await axios.patch(
      `/api/dashboard/administrators/${params.id}`,
      data
    );

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">
        Editar administrador
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Nombre
          <input
            type="text"
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
          Rol
          <select
            className="input-dark"
            {...register("FK_role", {
              required: {
                value: true,
                message: "El rol es obligatorio",
              },
            })}
          >
            {roles.map((role) => (
              <option key={role.PK_role} value={role.PK_role}>
                {role.role}
              </option>
            ))}
          </select>
          {errors.FK_role && (
            <span className="text-red-500 text-sm">
              {errors.FK_role.message}
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

        <ButtonSubmit name={"Guardar cambios"} />
      </form>
    </section>
  );
}

export default EditAdministratorPage;
