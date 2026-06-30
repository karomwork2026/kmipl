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
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "@/assets/karom-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
      { property: "og:title", content: "Karom Industries Private Limited" },
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
});

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

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Go to Karom Industries home">
          <img src={logo} alt="Karom Industries logo" className="h-10 w-10 rounded-md object-cover" />
          <div>
            <p className="font-heading text-sm font-semibold text-brand md:text-base">
              Karom Industries Pvt. Ltd.
            </p>
            <p className="text-xs text-muted-foreground">Healthy food & hygiene essentials</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand text-brand-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-input bg-surface text-foreground transition-colors hover:bg-accent md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen ? (
        <nav aria-label="Mobile" className="border-t border-border bg-surface px-4 py-2 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pb-2">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand text-brand-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <section>
          <h2 className="font-heading text-lg font-semibold text-brand">Karom Industries Pvt. Ltd.</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Affordable health, hygienic quality, and trusted products for families, retailers,
            schools, and institutions.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted-foreground transition-colors hover:text-brand">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground transition-colors hover:text-brand">
                Contact
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground">Contact</h2>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <p>+91 98264 70984</p>
            <p>karominfo@kacpl.in</p>
            <p>
              Villa No. 436, Omaxe City 2, Opposite DLF,
              <br />
              Mangliya Arniya, Indore, MP 453771
            </p>
          </div>
        </section>
      </div>
      <div className="border-t border-border/80 px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Karom Industries Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main id="main-content" className="min-h-[calc(100vh-16rem)]">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
