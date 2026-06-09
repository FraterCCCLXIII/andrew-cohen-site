import { NextResponse } from "next/server";
import { BrevoConfigError, subscribeEmailToBrevoList } from "@/lib/brevo";
import { isValidEmail } from "@/lib/newsletter";

interface NewsletterRequestBody {
  email?: string;
  website?: string;
}

export async function POST(request: Request) {
  let body: NewsletterRequestBody;

  try {
    body = (await request.json()) as NewsletterRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions.
  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim().toLowerCase() ?? "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await subscribeEmailToBrevoList(email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof BrevoConfigError) {
      console.error("[newsletter]", error.message);
      return NextResponse.json(
        { error: "Newsletter signup is not configured yet." },
        { status: 503 }
      );
    }

    console.error("[newsletter]", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to subscribe right now. Please try again.",
      },
      { status: 502 }
    );
  }
}
