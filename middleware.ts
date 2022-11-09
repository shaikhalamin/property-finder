import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const isAdminRoute = (pathname: string) => {
  return pathname.startsWith("/admin");
};

const isHomeRoute = (pathname: string) => {
  return pathname.startsWith("/home");
};

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;
    //console.log("token in middleware",token )

    if (isAdminRoute(pathname)) {
      return NextResponse.rewrite(new URL(pathname, req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token }) {
        return token?.role === "agent";
      },
    },
  }
);

export const config = { matcher: ["/admin/:path*"] };
