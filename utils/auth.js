import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function accessControl(request, allowedRoles) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    if (!allowedRoles.includes(token.role)) {
      return NextResponse.json(
        {
          message: "Forbidden.",
        },
        { status: 403 }
      );
    }

    return null; // Indica que la autenticación y autorización fueron exitosas
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
