import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Building } from "lucide-react";
import logo from "@/assets/karom-logo.png";

/* ─── Scroll reveal utility ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Karom Industries | Product & Bulk Enquiries",
      },
      {
        name: "description",
        content:
          "Contact Karom Industries for product enquiries, bulk orders, partnerships, and distribution opportunities.",
      },
      {
        property: "og:title",
        content: "Contact Karom Industries | Product & Bulk Enquiries",
      },
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
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      {/* ─── HERO HEADER ─── */}
      <section className="relative overflow-hidden border-b border-border bg-surface/60 backdrop-blur-sm py-16 md:py-20">
        {/* Watermark */}
        <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-36 md:w-60 opacity-[0.05] pointer-events-none">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <p
            className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "oklch(0.80 0.12 85)" }}
          >
            Get In Touch
          </p>
          <h1 className="animate-fade-in-up delay-100 mt-2 text-4xl font-extrabold text-foreground md:text-5xl">
            Contact <span className="text-gradient-gold">Karom Industries</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Reach us for product enquiries, bulk orders, franchise discussions, and business
            partnerships. We aim to respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── CONTACT METHODS ─── */}
      <section className="bg-transparent py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <a
              href="tel:+918770147377"
              className="reveal card-premium group flex flex-col items-center text-center p-8 cursor-pointer"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                }}
              >
                <Phone
                  size={24}
                  style={{ color: "oklch(0.80 0.12 85)" }}
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">Call Us</h3>
              <p
                className="mt-2 text-base font-semibold"
                style={{ color: "oklch(0.80 0.12 85)" }}
              >
                +91 87701 47377
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Available Mon–Sat, 9AM–7PM IST
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:karominfo@kacpl.in"
              className="reveal delay-100 card-premium group flex flex-col items-center text-center p-8 cursor-pointer"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                }}
              >
                <Mail
                  size={24}
                  style={{ color: "oklch(0.80 0.12 85)" }}
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">Email Us</h3>
              <p
                className="mt-2 text-base font-semibold"
                style={{ color: "oklch(0.80 0.12 85)" }}
              >
                karominfo@kacpl.in
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We respond within 24 hours
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918770147377?text=Hello%20Karom%20Industries%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noreferrer"
              className="reveal delay-200 card-premium group flex flex-col items-center text-center p-8 cursor-pointer"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                }}
              >
                <MessageCircle
                  size={24}
                  style={{ color: "oklch(0.80 0.12 85)" }}
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">WhatsApp</h3>
              <p
                className="mt-2 text-base font-semibold"
                style={{ color: "oklch(0.80 0.12 85)" }}
              >
                Chat with us
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Quick replies for product queries
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS DETAILS + INQUIRY TYPES ─── */}
      <section className="bg-surface-2/50 backdrop-blur-sm py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Business Information */}
            <article className="reveal card-premium group p-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                  }}
                >
                  <Building
                    size={18}
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Business <span className="text-gradient-gold">Information</span>
                </h2>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="shrink-0 mt-1"
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Registered Office
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Villa No. 436, Omaxe City 2, Opposite DLF, Mangliya
                      Arniya, Indore, Madhya Pradesh 453771, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={16}
                    className="shrink-0 mt-1"
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+918770147377"
                      className="mt-1 block text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                    >
                      +91 87701 47377
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={16}
                    className="shrink-0 mt-1"
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:karominfo@kacpl.in"
                      className="mt-1 block text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                    >
                      karominfo@kacpl.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="shrink-0 mt-1"
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Business Hours
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mon – Sat: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Inquiry Types */}
            <article className="reveal delay-200 card-premium group p-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                  }}
                >
                  <MessageCircle
                    size={18}
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Inquiry <span className="text-gradient-gold">Types</span>
                </h2>
              </div>

              <div className="mt-6 space-y-5">
                {[
                  {
                    icon: "🛒",
                    title: "Product Orders",
                    desc: "Retail and individual purchase guidance for all our product categories.",
                  },
                  {
                    icon: "📦",
                    title: "Bulk & B2B",
                    desc: "For distributors, institutions, retailers, and hospitality supply needs.",
                  },
                  {
                    icon: "🤝",
                    title: "Partnerships",
                    desc: "Franchise, wholesale, and strategic collaboration opportunities across India.",
                  },
                  {
                    icon: "🏢",
                    title: "Corporate Inquiries",
                    desc: "For investor relations, media inquiries, and corporate partnerships.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918770147377?text=Hello%20Karom%2C%20I%20am%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer inline-flex min-h-11 items-center rounded-xl px-5 py-2 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                    color: "oklch(0.18 0.02 80)",
                  }}
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href="mailto:karominfo@kacpl.in"
                  className="inline-flex min-h-11 items-center rounded-xl border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-brand-gold hover:scale-105"
                >
                  ✉️ Send Email
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ─── */}
      <section className="bg-transparent py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center mb-8">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              Our Location
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Visit Our <span className="text-gradient-gold">Office</span>
            </h2>
          </div>
          <div className="reveal delay-100 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <iframe
              title="Karom Industries office map"
              src="https://www.google.com/maps?q=Villa%20No.%20436%2C%20Omaxe%20City%202%2C%20Opposite%20DLF%2C%20Mangliya%20Arniya%2C%20Indore%2C%20Madhya%20Pradesh%20453771&z=14&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
