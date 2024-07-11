import prisma from "@/connection/db";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
export async function GET() {
  try {
    const administrators = await prisma.tbadministrators.findMany();
    return NextResponse.json(administrators);
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

export async function POST(request) {
  try {
    const { FK_role, CI, firstName, lastName, email, phone, password } =
      await request.json();

    const existAdministrator = await prisma.tbadministrators.findUnique({
      where: {
        email: email,
      },
    });
    if (!existAdministrator) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newAdministrator = await prisma.tbadministrators.create({
        data: {
          FK_role,
          CI,
          firstName,
          lastName,
          email,
          phone,
          password: hashedPassword,
        },
      });
      return NextResponse.json(newAdministrator);
    }

   

    return NextResponse.json(
      {
        message: "Ya existe un usuario on el mismo correo electronio",
      },
      {
        status: 401,
      }
    );
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
