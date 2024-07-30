import { NextResponse } from "next/server";
import prisma from "@/connection/db";


export async function GET() {
  try {
    // Obtener todos los usuarios con PK_role distinto de 67483231 (CLIENTE)
    const users = await prisma.tbusers.findMany({
      where: {
        NOT: {
          FK_role: 67483231
        }
      }
    });

    // Obtener todos los roles
    const roles = await prisma.tbroles.findMany();

    // Crear un mapa de roles por su clave primaria para acceso rápido
    const roleMap = roles.reduce((acc, role) => {
      acc[role.PK_role] = role;
      return acc;
    }, {});

    // Formatear los usuarios para incluir la información del rol correspondiente
    const formattedUsers = users.map(user => {
      const role = roleMap[user.FK_role];
      return {
        ...user,
        role: role.role 
      };
    });

    return NextResponse.json(formattedUsers);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}



