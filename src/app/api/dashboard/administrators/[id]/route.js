import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    const user = await prisma.tbusers.findUnique({
      where: {
        PK_user: id,
      },
    });
    if (user) {
      return NextResponse.json(user);
    }
    return NextResponse.json({});
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

export async function PATCH(request, { params }) {
  try {
    const { firstName, lastName, FK_role, status } = await request.json();
    const editUser = await prisma.tbusers.update({
      where: {
        PK_user: Number(params.id),
      },
      data: {
        FK_role: Number(FK_role),
        firstName,
        lastName,
        status,
      },
    });
    return NextResponse.json(editUser);
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
