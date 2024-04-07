import { createClient } from "@/src/utils/supabase/server";
import { SignupUser } from "@/src/types/auth";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const supabase = createClient();
    try {
      const body = (await req.json()) as SignupUser;
      const { data, error } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
      });
      if (error) redirect("/signup?messages=Could not signup");
      return NextResponse.json(data, { status: 200 });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Something is wrong... Please try again.");
    }
  } else {
    return NextResponse.json("Method not allowed", { status: 405 });
  }
}
