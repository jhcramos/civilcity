import { NextResponse } from "next/server";
import { Resend } from "resend";

const requiredFields = ["name", "email", "projectLocation", "message", "consent"];
const recipientEmail = process.env.CONTACT_TO_EMAIL ?? "hello@civilcity.com.au";
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "CivilCity Website <onboarding@resend.dev>";
const maxFiles = 8;
const maxTotalFileSize = 4 * 1024 * 1024;
const allowedExtensions = new Set([
  "pdf",
  "dwg",
  "dxf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "csv",
  "jpg",
  "jpeg",
  "png",
  "webp",
  "zip",
]);

export async function POST(request: Request) {
  const formData = await request.formData();

  if (String(formData.get("website") ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const missing = requiredFields.filter((field) => !String(formData.get(field) ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const files = formData
    .getAll("files")
    .filter((value): value is File => value instanceof File && value.size > 0);

  const fileError = validateFiles(files);
  if (fileError) {
    return NextResponse.json({ error: fileError }, { status: 400 });
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
  const resendApiKey = process.env.RESEND_API_KEY;
  const fileSummaries = files.map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type || "application/octet-stream",
  }));

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type || "application/octet-stream",
      size: file.size,
    })),
  );

  if (resendApiKey) {
    const resend = new Resend(resendApiKey);
    const email = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: payload.email,
      subject: `CivilCity enquiry - ${payload.service || "Project enquiry"} - ${payload.projectLocation}`,
      text: buildEmailText(payload, fileSummaries),
      html: buildEmailHtml(payload, fileSummaries),
      attachments: attachments.map(({ filename, content, contentType }) => ({
        filename,
        content,
        contentType,
      })),
    });

    if (email.error) {
      console.error("CivilCity contact email failed", email.error);
      return NextResponse.json(
        { error: "The enquiry could not be sent. Please email hello@civilcity.com.au." },
        { status: 502 },
      );
    }
  } else if (webhookUrl) {
    const webhookAttachments = attachments.map((file) => ({
      name: file.filename,
      size: file.size,
      type: file.contentType,
      contentBase64: file.content.toString("base64"),
    }));

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ source: "civilcity.com.au", ...payload, attachments: webhookAttachments }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "The enquiry could not be sent. Please email hello@civilcity.com.au." },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("CivilCity contact enquiry", { ...payload, attachments: fileSummaries });
  } else {
    return NextResponse.json(
      { error: "Email delivery is not configured. Please email hello@civilcity.com.au." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

function buildEmailText(payload: Record<string, string>, files: Array<{ name: string; size: number; type: string }>) {
  return [
    "New CivilCity website enquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Project location: ${payload.projectLocation}`,
    `Service needed: ${payload.service || "Not provided"}`,
    `Project stage: ${payload.stage || "Not provided"}`,
    "",
    "Message:",
    payload.message,
    "",
    files.length > 0
      ? `Attachments:\n${files.map((file) => `- ${file.name} (${formatBytes(file.size)}, ${file.type})`).join("\n")}`
      : "Attachments: None",
  ].join("\n");
}

function buildEmailHtml(payload: Record<string, string>, files: Array<{ name: string; size: number; type: string }>) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Project location", payload.projectLocation],
    ["Service needed", payload.service || "Not provided"],
    ["Project stage", payload.stage || "Not provided"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #16351f; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 18px;">New CivilCity website enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border-top: 1px solid #d7c8b5; padding: 10px 12px; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                <td style="border-top: 1px solid #d7c8b5; padding: 10px 12px;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0 0 18px;">${escapeHtml(payload.message)}</p>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Attachments</h2>
      ${
        files.length > 0
          ? `<ul>${files
              .map((file) => `<li>${escapeHtml(file.name)} (${formatBytes(file.size)}, ${escapeHtml(file.type)})</li>`)
              .join("")}</ul>`
          : "<p>None</p>"
      }
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function validateFiles(files: File[]) {
  if (files.length > maxFiles) {
    return `Please attach no more than ${maxFiles} files.`;
  }

  const totalSize = files.reduce((total, file) => total + file.size, 0);
  if (totalSize > maxTotalFileSize) {
    return "Please keep attachments under 4 MB total.";
  }

  const unsupported = files.find((file) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    return !extension || !allowedExtensions.has(extension);
  });

  if (unsupported) {
    return "Please attach PDF, DWG, DXF, Office, image, CSV or ZIP files only.";
  }

  return "";
}
