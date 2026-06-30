import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Karom Industries | Product & Bulk Enquiries" },
      {
        name: "description",
        content:
          "Contact Karom Industries for product enquiries, bulk orders, partnerships, and distribution opportunities.",
      },
      { property: "og:title", content: "Contact Karom Industries | Product & Bulk Enquiries" },
      {
        property: "og:description",
        content:
          "Reach our Indore team for retail, B2B, and partnership discussions. We aim to respond within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Full name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!/^\+?[0-9 ]{10,15}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid phone number";
    if (!form.subject.trim()) nextErrors.subject = "Please select a subject";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <div>
      <section className="border-b border-border bg-surface py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Contact Karom Industries</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Reach us for product enquiries, bulk orders, franchise discussions, and business
            partnerships. We aim to respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
          <article className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-bold text-foreground">Send Inquiry</h2>
            <form className="mt-5 space-y-4" onSubmit={submitForm} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    className="min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                  className="min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus:border-ring focus:outline-none"
                  aria-invalid={errors.subject ? "true" : "false"}
                >
                  <option value="">Select subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Bulk Order / B2B">Bulk Order / B2B</option>
                  <option value="Franchise / Partnership">Franchise / Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject ? <p className="mt-1 text-xs text-destructive">{errors.subject}</p> : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
              </div>

              <button
                type="submit"
                className="inline-flex min-h-11 items-center rounded-md bg-cta px-5 py-2 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90"
              >
                Send Inquiry
              </button>

              {status === "success" ? (
                <p className="rounded-md border border-brand bg-brand-soft px-3 py-2 text-sm text-brand">
                  Thank you! We&apos;ll contact you within 24 hours.
                </p>
              ) : null}
            </form>
          </article>

          <div className="space-y-6">
            <article className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground">Business Information</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Address:</span>
                  <br />
                  Villa No. 436, Omaxe City 2, Opposite DLF, Mangliya Arniya, Indore, Madhya
                  Pradesh 453771, India
                </p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>
                  <br />
                  +91 98264 70984
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email:</span>
                  <br />
                  karominfo@kacpl.in
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground">Inquiry Types</h2>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Product Orders:</span> Retail and
                  individual purchase guidance.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Bulk & B2B:</span> For distributors,
                  institutions, retailers, and hospitality supply.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Partnerships:</span> Franchise,
                  wholesale, and strategic collaboration opportunities.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground">Visit Our Office</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              title="Karom Industries office map"
              src="https://www.google.com/maps?q=Villa%20No.%20436%2C%20Omaxe%20City%202%2C%20Opposite%20DLF%2C%20Mangliya%20Arniya%2C%20Indore%2C%20Madhya%20Pradesh%20453771&z=14&output=embed"
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
