export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/protected", "/user/:path*"],
};

// import { NextRequest, NextResponse } from "next/server";

// export default async function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;
//   const session = !!req.cookies.get("next-auth.session-token");

//   if (!session) {
//     return NextResponse.redirect(new URL(`http://localhost:3000/login`));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//     "/protected",
//     "/workspace/:path*",
//   ],
// };
