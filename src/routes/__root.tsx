import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useLocation,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "@/assets/karom-logo.png";

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
}

/* ─── Scroll to Top ─── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
        color: "oklch(0.18 0.02 80)",
      }}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center animate-fade-in-up">
        <h1 className="text-8xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-shimmer inline-flex min-h-11 items-center justify-center rounded-lg px-6 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
              color: "oklch(0.18 0.02 80)",
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn&apos;t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Karom Industries Private Limited" },
        {
          name: "description",
          content:
            "Karom Industries Private Limited offers affordable nutrition and hygiene products for Indian families and institutions.",
        },
        {
          property: "og:title",
          content: "Karom Industries Private Limited",
        },
        {
          property: "og:description",
          content:
            "Traditional nutrition, hygienic household products, and packaged water crafted for trusted everyday use.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "icon",
          href: "/favicon.png",
          type: "image/png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/products", label: "Products" },
      { to: "/contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-brand-gold/5"
          : "bg-surface/95 backdrop-blur border-b border-border/60"
      }`}
    >
      {/* Gold accent line at top */}
      <div
        className="h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75), oklch(0.88 0.08 85), oklch(0.80 0.12 85))",
        }}
      />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Go to Karom Industries home"
        >
          <div className="relative flex items-center justify-center">
            <img
              src={logo}
              alt="Karom Industries logo"
              className="h-12 w-auto max-w-[3.5rem] object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute -inset-2 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.25), oklch(0.65 0.12 75 / 0.15))",
              }}
            />
          </div>
          <div>
            <p className="font-heading text-sm font-bold text-foreground md:text-base tracking-tight">
              Karom Industries <span className="text-gradient-gold">Pvt. Ltd.</span>
            </p>
            <p className="text-[11px] text-muted-foreground tracking-wide uppercase">
              Healthy Food & Hygiene Essentials
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "text-cta-foreground font-semibold"
                    : "text-foreground hover:text-brand-gold"
                }`}
                style={
                  active
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                      }
                    : undefined
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-input bg-surface text-foreground transition-colors hover:bg-accent md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="border-t border-border bg-surface px-4 py-2">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pb-2">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-cta-foreground font-semibold"
                      : "text-foreground hover:text-brand-gold"
                  }`}
                  style={
                    active
                      ? {
                          background:
                            "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                        }
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface-2">
      {/* Gold line top */}
      <div className="section-divider" />

      {/* Watermark logo bg */}
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.04] pointer-events-none">
        <img src={logo} alt="" className="w-full h-full object-contain" aria-hidden="true" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" className="h-10 w-10 rounded-lg object-cover" aria-hidden="true" />
            <h2 className="font-heading text-lg font-bold text-foreground">
              Karom Industries <span className="text-gradient-gold">Pvt. Ltd.</span>
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            A fast-growing Indian FMCG company dedicated to making healthy, affordable, and
            hygienically manufactured food and beverage products accessible to every household.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/about"
                className="text-muted-foreground transition-all duration-300 hover:text-brand-gold hover:pl-1"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-muted-foreground transition-all duration-300 hover:text-brand-gold hover:pl-1"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-muted-foreground transition-all duration-300 hover:text-brand-gold hover:pl-1"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a
              href="tel:+918770147377"
              className="flex items-center gap-2 transition-colors hover:text-brand-gold"
            >
              <Phone size={14} className="text-brand-gold shrink-0" />
              +91 87701 47377
            </a>
            <a
              href="mailto:karominfo@kacpl.in"
              className="flex items-center gap-2 transition-colors hover:text-brand-gold"
            >
              <Mail size={14} className="text-brand-gold shrink-0" />
              karominfo@kacpl.in
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
              <span>
                Villa No. 436, Omaxe City 2, Opposite DLF, Mangliya Arniya, Indore, MP 453771
              </span>
            </p>
          </div>
        </section>
      </div>
      <div
        className="border-t border-border/60 px-4 py-4 text-center text-xs text-muted-foreground"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.80 0.12 85 / 0.03), transparent, oklch(0.80 0.12 85 / 0.03))",
        }}
      >
        © {new Date().getFullYear()} Karom Industries Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

function GlobalBackdrop() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% -10%, oklch(0.95 0.05 130 / 0.55), transparent 60%), radial-gradient(1000px 700px at 110% 10%, oklch(0.88 0.09 85 / 0.35), transparent 60%), radial-gradient(900px 700px at 50% 110%, oklch(0.92 0.07 137 / 0.4), transparent 60%), linear-gradient(180deg, oklch(0.985 0.008 98.5), oklch(0.96 0.02 105))",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="oklch(0.38 0.11 137)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          transform: `translate3d(0, ${y * 0.15}px, 0)`,
          background: "radial-gradient(circle, oklch(0.80 0.12 85 / 0.35), transparent 65%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          transform: `translate3d(0, ${y * -0.12}px, 0)`,
          background: "radial-gradient(circle, oklch(0.55 0.14 137 / 0.28), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          transform: `translate3d(0, ${y * 0.08}px, 0)`,
          background: "radial-gradient(circle, oklch(0.75 0.10 75 / 0.30), transparent 65%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: `translate3d(0, ${y * -0.05}px, 0)` }}
      >
        <g fill="none" stroke="oklch(0.38 0.11 137)" strokeWidth="1.2">
          <circle cx="180" cy="220" r="90" />
          <circle cx="960" cy="180" r="140" />
          <circle cx="640" cy="720" r="180" />
          <path d="M100 600 Q 300 500 500 620 T 900 640" />
          <path d="M200 100 Q 450 260 700 120 T 1150 200" />
        </g>
      </svg>
      <img
        src={logo}
        alt=""
        className="absolute right-[-4%] bottom-[10%] w-[420px] max-w-[45vw] opacity-[0.04]"
        style={{ transform: `translate3d(0, ${y * -0.06}px, 0)` }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-multiply">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useScrollReveal();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen text-foreground">
        <GlobalBackdrop />
        <SiteHeader />
        <main id="main-content" className="min-h-[calc(100vh-16rem)]">
          <Outlet />
        </main>
        <SiteFooter />
        <ScrollToTop />
      </div>
    </QueryClientProvider>
  );
}
