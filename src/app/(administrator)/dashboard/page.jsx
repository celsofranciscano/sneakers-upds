import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
async function AdminPage() {
  const session = await getServerSession(authOptions);
    return (
        <h1>administracion: {session.user.email}</h1>
      );
}

export default AdminPage;