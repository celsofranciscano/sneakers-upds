import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
   
    return NextResponse.json("Finanzas");
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
