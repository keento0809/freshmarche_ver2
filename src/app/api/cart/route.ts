import type { Cart } from "@/src/types/cart";
import { CartProduct } from "@/src/types/products";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export default async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const body = (await req.json()) as Cart;
    const { userId, products } = body;

    // check if cart of current user already exists
    const existingCart = await prisma.cart.findFirst({ where: { id: userId } });

    if (existingCart) {
    }

    try {
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
}
