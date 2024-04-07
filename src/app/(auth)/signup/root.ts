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

// export async function POST(req: NextRequest) {
//   if (req.method === "POST") {
//     const body = (await req.json()) as SignupUser;
//     const { name, email, password, image_url } = body;
//     // Create hashed password
//     const hashedPassword = await bcrypt.hash(password, 12);

//     try {
//       const newUser = await prisma.user.create({
//         data: {
//           name,
//           email,
//           password: hashedPassword,
//           image_url,
//         },
//       });
//       return NextResponse.json(newUser, { status: 200 });
//     } catch (err) {
//       if (err instanceof Error) console.log(err.message);
//       throw new Error("Something is wrong...");
//     }
//   } else {
//     return NextResponse.json("Method not allowed", { status: 405 });
//   }
// }
