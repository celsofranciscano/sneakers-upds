import prisma from "@/connection/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const roles = await prisma.tbroles.findMany();
  

    return NextResponse.json(roles);
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
    const { role, PK_role } = await request.json();
    const newRole = await prisma.tbroles.create({
      data: {
        PK_role,
        role,
      },
    });
    return NextResponse.json(newRole);
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
