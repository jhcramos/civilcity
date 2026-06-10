import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "projectLocation", "message", "consent"];

export async function POST(request: Request) {
  const formData = await request.formData();

  if (String(formData.get("website") ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const missing = requiredFields.filter((field) => !String(formData.get(field) ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const payload = Object.fromEntries(
    [
      "name",
      "email",
      "phone",
      "projectLocation",
      "service",
      "stage",
      "message",
    ].map((field) => [field, String(formData.get(field) ?? "").trim()]),
  );

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ source: "civilcity.com.au", ...payload }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "The enquiry could not be sent. Please email hello@civilcity.com.au." },
        { status: 502 },
      );
    }
  } else {
    console.info("CivilCity contact enquiry", payload);
  }

  return NextResponse.json({ ok: true });
}
