import { supabase } from "@/src/supabase";
import { SignupUser } from "@/src/types/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const body = (await req.json()) as SignupUser;
      const { data } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
      });
      return NextResponse.json(data, { status: 200 });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Something is wrong... Please try again.");
    }
  } else {
    return NextResponse.json("Method not allowed", { status: 405 });
  }
}
