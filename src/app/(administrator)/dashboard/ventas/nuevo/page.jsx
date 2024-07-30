"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function NewSalePage() {
  const [salestatus, setSalestatus] = useState();
  const [users, setUsers] = useState();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getSaleStatus() {
      const response = await axios.get("/api/dashboard/salesstatuses");
      setSalestatus(response.data);
    }
    getSaleStatus();
    async function getUsers() {
      const response = await axios.get("/api/dashboard/users");
      setUsers(response.data);
    }
    getUsers();
  }, []);

  async function onSubmit(data) {
    const response = await axios.post(`/api/dashboard/sales`, data);

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-2xl font-medium text-white">Agregar nuevo</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1">
          Usuario
          <select
            className="input-dark"
            type="text"
            {...register("FK_user", {
              required: {
                value: true,
                message: "Debes seleccionar un usuario",
              },
            })}
          >
            <option value="">Seleccionar</option>
            {users?.map((user) => (
              <option key={user.PK_user} value={user.PK_user}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
          {errors.FK_user && (
            <span className="text-sm text-red-500">
              {errors.FK_user.message}
            </span>
          )}
        </label>
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

        <ButtonSubmit name={"Añadir nuevo"} />
      </form>
    </section>
  );
}

export default NewSalePage;
