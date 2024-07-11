import prisma from "@/connection/db";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    const administrator = await prisma.tbadministrators.findUnique({
      where: {
        PK_administrator: id,
      },
    });
    if (administrator) {
      return NextResponse.json(administrator);
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
    const id = parseInt(params.id);
    const { FK_role, CI, firstName, lastName, email, phone } = request.json();

    const existAdministrator = await prisma.tbadministrators.findUnique({
      where: {
        PK_administrator: id,
      },
    });
    if (existAdministrator) {
      const updateAdministrator = await prisma.tbadministrators.update({
        where: {
          PK_administrator: id,
        },
        data: {
          FK_role,
          CI,
          firstName,
          lastName,
          email,
          phone,
        },
      });

      return NextResponse.json(updateAdministrator);
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
