import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/").filter(Boolean)[0];

  if (segment === defaultLocale) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (segment && segment.length === 2 && !isLocale(segment)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (segment && isLocale(segment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-site-locale", segment);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set("NEXT_LOCALE", segment, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  if (pathname === "/") {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-site-locale", defaultLocale);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set("NEXT_LOCALE", defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/(zh|hi|es|fr|ar|bn|pt|ru|ja|de|ko|ta|it|tr|vi)"],
};
