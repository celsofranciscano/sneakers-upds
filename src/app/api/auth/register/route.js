import { NextResponse } from "next/server";
import prisma from "@/connection/db";
import bcrypt from "bcrypt";

export async function GET() {
  const users = await prisma.tbusers.findMany();

  return NextResponse.json(users);
}

export async function POST(request) {
  const { firstName, lastName, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.tbusers.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(newUser);
}
