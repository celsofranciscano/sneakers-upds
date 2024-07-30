import { NextResponse } from "next/server";
import { accessControl } from "../../../../utils/auth";
import prisma from "@/connection/db";

export async function GET(request) {
  try {
    const response = await accessControl(request, ["Financiero", "Cliente"]);
    if (response) {
      return response; // Devuelve la respuesta de error (401 o 403)
    }

    const categoria = await prisma.tbcategories.findMany();

    return NextResponse.json(categoria);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
