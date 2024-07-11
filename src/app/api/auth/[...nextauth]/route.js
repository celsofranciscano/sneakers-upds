import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/connection/db";
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
      
        const userFound = await prisma.tbusers.findUnique({
          where: {
            email: credentials.email,
          },
        });
      
        if (!userFound) throw new Error("No existe el usuario");

        // una vez encontrado el email se compara el password con bcrypt
        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) throw new Error("La contraseña esta incorrecta");
        return {
          id: userFound.PK_user,
          name: userFound.firstName,
          email: userFound.email,
          image: userFound.profileImage,
        };
      },
    })
  ],
 
  pages: {
    signIn: "/auth/login",
    
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
