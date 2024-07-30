import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cookies } from "next/headers";

import axios from "axios";
async function AdminPage() {
  const session = await getServerSession(authOptions);
  console.log(session)

  const cookieStore = cookies();
  const { value: token } = cookieStore.get("next-auth.session-token");

  const response = await axios.get(`${process.env.URL_API}/api/protegido`, {
    headers: {
      Authorization: `Bearer ${token}`, // Agrega el token a los encabezados
    },
  });
  // console.log(response);
  return (
    <section>
      <h1>administracion: {session?.user?.email}</h1>
      <h1>{response?.data?.message}</h1>
    </section>
  );
}

export default AdminPage;
