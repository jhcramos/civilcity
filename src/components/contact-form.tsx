"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(form),
    });

    if (response.ok) {
      form.reset();
      setState("success");
      setMessage("Thanks. Your enquiry has been received and CivilCity will respond shortly.");
    } else {
      setState("error");
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setMessage(data?.error ?? "Something went wrong. Please email hello@civilcity.com.au.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" />
        <Field label="Project location" name="projectLocation" placeholder="e.g. Maroochydore" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          label="Service needed"
          name="service"
          options={[
            "Operational works",
            "RPEQ certification",
            "Stormwater design",
            "Civil design documentation",
            "Engineering due diligence",
            "Construction support",
            "Not sure yet",
          ]}
        />
        <Select
          label="Project stage"
          name="stage"
          options={[
            "Feasibility",
            "Planning application",
            "Development approval received",
            "Detailed design",
            "Tender",
            "Construction",
          ]}
        />
      </div>
      <label className="grid gap-2 text-sm font-medium text-graphite">
        Project message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y rounded-md border border-slate-300 bg-white px-3 py-3 text-base text-graphite outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"
          placeholder="Tell us what you are trying to approve, design or resolve."
        />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-slate-600">
        <input
          required
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-teal focus:ring-teal"
        />
        I agree to CivilCity using these details to respond to my enquiry.
      </label>
      <button
        disabled={state === "submitting"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 text-sm font-semibold text-white transition hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={16} aria-hidden />
        {state === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
      {message && (
        <p className={state === "error" ? "text-sm text-red-700" : "text-sm text-teal"} role="status">
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-graphite">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-md border border-slate-300 bg-white px-3 text-base text-graphite outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-graphite">
      {label}
      <select
        name={name}
        className="h-11 rounded-md border border-slate-300 bg-white px-3 text-base text-graphite outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
