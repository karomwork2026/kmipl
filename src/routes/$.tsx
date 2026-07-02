import { createFileRoute, Link, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page Not Found | Karom Industries" },
      {
        name: "description",
        content: "The page you're looking for doesn't exist. Browse Karom Industries' products or contact us for help.",
      },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  const location = useLocation();

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="relative inline-block">
          <p
            className="text-[9rem] font-extrabold leading-none select-none animate-fade-in-up"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75), oklch(0.88 0.08 85))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 32px oklch(0.80 0.12 85 / 0.35))",
            }}
          >
            404
          </p>
          {/* Pulsing accent dots */}
          <span
            className="absolute -top-3 -right-3 h-5 w-5 rounded-full animate-pulse"
            style={{ background: "oklch(0.80 0.12 85 / 0.7)" }}
          />
          <span
            className="absolute bottom-4 -left-4 h-3 w-3 rounded-full animate-pulse"
            style={{ background: "oklch(0.65 0.12 75 / 0.6)", animationDelay: "0.6s" }}
          />
          <span
            className="absolute top-12 -right-8 h-2 w-2 rounded-full animate-pulse"
            style={{ background: "oklch(0.88 0.08 85 / 0.5)", animationDelay: "1.1s" }}
          />
        </div>

        {/* Gold divider */}
        <div
          className="mx-auto my-6 h-[3px] w-28 rounded-full animate-fade-in-up delay-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.80 0.12 85), oklch(0.65 0.12 75), transparent)",
          }}
        />

        <div className="animate-fade-in-up delay-200">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground max-w-sm mx-auto">
            We couldn&apos;t find{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm font-mono text-foreground">
              {location.pathname}
            </code>
            . It may have been removed or the URL might be incorrect.
          </p>
        </div>

        {/* Navigation options */}
        <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-shimmer inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
              color: "oklch(0.18 0.02 80)",
            }}
          >
            🏠 Go Home
          </Link>
          <Link
            to="/products"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-brand-gold hover:shadow-md hover:scale-105"
          >
            Browse Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-brand-gold hover:shadow-md hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful suggestion strip */}
        <div
          className="animate-fade-in-up delay-400 mt-10 rounded-xl border border-border bg-card p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Popular Pages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Our Products" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-brand-gold hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="animate-fade-in-up delay-500 mt-8 text-xs text-muted-foreground">
          Error code:{" "}
          <span className="font-mono font-semibold">404</span>
          {" "}&middot; Page not found
        </p>
      </div>
    </div>
  );
}
