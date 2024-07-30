"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function EditAdministratorPage({ params }) {
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function getRoles() {
      const response = await axios.get("/api/dashboard/roles");
      setRoles(response.data);
    }
    getRoles();

    async function getUser() {
      const response = await axios.get(`/api/dashboard/users/${params.id}`);
      setUser(response.data);
      setIsChecked(response.data.status);  // Set the initial checkbox state
    }
    getUser();
  }, [params.id]);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    data.status = isChecked;  // Include the checkbox state in the form data
    // const response = await axios.post("/api/auth/register", data);

    // if (response.status === 200) {
    //   router.refresh();
    //   router.back();
    // }

    console.log(data)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
            autoFocus
            defaultValue={user?.firstName}
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
            defaultValue={user?.lastName}
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
            value={user?.FK_role}
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
            className="sr-only peer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className="block cursor-pointer relative bg-blue-500 w-12 h-6 p-0.5 rounded-full before:absolute before:bg-blue-400 before:w-5 before:h-5 before:p-0.5 before:rounded-full before:transition-all before:duration-500 before:left-0.5 peer-checked:before:left-6 peer-checked:before:bg-white"></div>
        </label>

        <ButtonSubmit name={"Guardar cambios"} />
      </form>
    </section>
  );
}

export default EditAdministratorPage;
