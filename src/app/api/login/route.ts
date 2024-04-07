import { LoginUser } from "@/src/types/auth";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const supabase = createClient();
    console.log("bbbbbbbbbbbbb");
    try {
      const body = (await req.json()) as LoginUser;
      const { data, error } = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password,
      });
      if (error) redirect("/login?message=Could not login");
      return NextResponse.json(data, { status: 200 });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      throw new Error("Something is wrong... Please try again.");
    }
  } else {
    return NextResponse.json("Method not allowed", { status: 405 });
  }
}
