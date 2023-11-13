import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import type { SignupUser } from "@/src/types/auth";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const body = (await req.json()) as SignupUser;
    const { name, email, password, image_url } = body;
    // Create hashed password
    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          image_url,
        },
      });
      return NextResponse.json(newUser, { status: 200 });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Something is wrong...");
    }
  } else {
    return NextResponse.json("Method not allowed", { status: 405 });
  }
}
