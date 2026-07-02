import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import logo from "@/assets/karom-logo.png";
import karomPreview from "@/assets/karom-preview.png";

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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

export const Route = createFileRoute("/karom-store")({
  head: () => ({
    meta: [
      { title: "KJW Store | Healthy Food Marketplace – karom.in" },
      {
        name: "description",
        content:
          "Explore Karom's healthy food marketplace at karom.in — fresh salads, millet-based foods, wellness beverages, organic oils and more. Delivered to your doorstep.",
      },
      {
        property: "og:title",
        content: "KJW Store | Healthy Food Marketplace – karom.in",
      },
      {
        property: "og:description",
        content:
          "Our sister site karom.in brings you wholesome, fresh, and healthy meals — straight from trusted brands like Healthy 24, JJaivik Worldd and Nutralist.",
      },
    ],
  }),
  component: KaromStorePage,
});

const liveCategories = [
  {
    emoji: "🥗",
    title: "Fresh Salads",
    desc: "Crisp, colourful salad bowls made with fresh ingredients. Rich in nutrients, low in calories.",
    tag: "Healthy 24",
  },
  {
    emoji: "🥪",
    title: "Wholesome Sandwiches",
    desc: "Filling, wholesome sandwiches crafted with clean ingredients — perfect for a healthy meal on the go.",
    tag: "Healthy 24",
  },
  {
    emoji: "🌾",
    title: "Millet-Based Foods",
    desc: "Low-calorie, high-nutrition millet meals. Made with millet goodness, rich in fibre and vitamins.",
    tag: "Healthy 24",
  },
  {
    emoji: "🧃",
    title: "Wellness Beverages",
    desc: "Sattu drinks, healthy smoothies, and wellness-focused beverages for everyday energy.",
    tag: "Multiple Brands",
  },
  {
    emoji: "🫙",
    title: "Organic Cold-Pressed Oils",
    desc: "Pure, natural cold-pressed cooking oils from JJaivik Worldd — chemical-free, full of goodness.",
    tag: "JJaivik Worldd",
  },
  {
    emoji: "🍝",
    title: "High-Fibre Pasta",
    desc: "Light, nutritious pasta alternatives with better ingredients for guilt-free indulgence.",
    tag: "Healthy 24",
  },
];

const brands = [
  {
    name: "Healthy 24",
    tagline: "Nourishing You, Naturally",
    desc: "Specialises in wholesome ready-to-eat meals — salads, sandwiches, millet foods and more.",
    emoji: "🌿",
    color: "oklch(0.38 0.11 137 / 0.1)",
    borderColor: "oklch(0.38 0.11 137 / 0.2)",
  },
  {
    name: "JJaivik Worldd",
    tagline: "Organic & Natural",
    desc: "Cold-pressed oils, organic ingredients and natural wellness products sourced sustainably.",
    emoji: "🌱",
    color: "oklch(0.55 0.14 137 / 0.08)",
    borderColor: "oklch(0.55 0.14 137 / 0.2)",
  },
  {
    name: "Nutralist",
    tagline: "Premium Nutrition",
    desc: "Curated premium nutrition products designed for active, health-conscious lifestyles.",
    emoji: "💪",
    color: "oklch(0.80 0.12 85 / 0.08)",
    borderColor: "oklch(0.80 0.12 85 / 0.2)",
  },
];

const whyShop = [
  {
    emoji: "🚀",
    title: "Fast Local Delivery",
    desc: "Delivery available in Indore — fresh food to your doorstep at speed.",
  },
  {
    emoji: "✅",
    title: "No Preservatives",
    desc: "All products made with fresh ingredients and zero artificial preservatives.",
  },
  {
    emoji: "🛒",
    title: "Easy Online Ordering",
    desc: "Browse, add to cart, and pay — simple and secure online checkout.",
  },
  {
    emoji: "🏷️",
    title: "Transparent Pricing",
    desc: "Honest, affordable pricing with no hidden charges on every order.",
  },
];

function KaromStorePage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Dark green gradient background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.07 137), oklch(0.25 0.06 100))",
          }}
        />
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "100px",
            backgroundRepeat: "repeat",
          }}
        />
        {/* Gold glows */}
        <div
          className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, oklch(0.80 0.12 85 / 0.5), transparent 65%)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.14 137 / 0.6), transparent 65%)" }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                  style={{
                    background: "oklch(0.80 0.12 85 / 0.15)",
                    color: "oklch(0.80 0.12 85)",
                    border: "1px solid oklch(0.80 0.12 85 / 0.3)",
                  }}
                >
                  Sister Brand
                </span>
                <span className="text-xs text-white/50">karom.in</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
                Healthy Food,{" "}
                <span className="text-gradient-gold">Delivered Fresh</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-lg">
                Our sister marketplace <strong className="text-white">karom.in</strong> brings you
                wholesome meals, wellness drinks, and organic products — fresh,
                natural, and delivered right to your door in Indore.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://karom.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex min-h-12 items-center gap-2 justify-center rounded-xl px-7 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                    color: "oklch(0.18 0.02 80)",
                  }}
                >
                  Visit karom.in <ExternalLink size={14} />
                </a>
                <a
                  href="https://karom.in/stores/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  Browse Stores
                </a>
              </div>
            </div>

            {/* Right: Browser mockup iframe preview */}
            <div className="animate-fade-in-up delay-200 relative">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{ border: "1px solid oklch(0.80 0.12 85 / 0.25)" }}
              >
                {/* Browser top bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ background: "oklch(0.14 0.02 140)" }}
                >
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <div
                    className="ml-3 flex-1 rounded-md px-3 py-1 text-xs text-white/40"
                    style={{ background: "oklch(0.20 0.02 140)" }}
                  >
                    🔒 karom.in
                  </div>
                </div>
                {/* Static Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <img
                    src={karomPreview}
                    alt="karom.in – Healthy Food Marketplace"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Click overlay — sends user to karom.in */}
                  <a
                    href="https://karom.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    aria-label="Open karom.in"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.18 0.05 137 / 0.75), transparent 60%)",
                    }}
                  >
                    <span
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                        color: "oklch(0.18 0.02 80)",
                      }}
                    >
                      Open karom.in <ExternalLink size={13} />
                    </span>
                  </a>
                </div>
              </div>
              {/* Glow under the card */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-12 w-3/4 blur-2xl -z-10 rounded-full opacity-40"
                style={{ background: "oklch(0.80 0.12 85 / 0.5)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S AVAILABLE ─── */}
      <section className="bg-transparent py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              What You Can Order
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Fresh &amp; Healthy{" "}
              <span className="text-gradient-gold">Categories</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-muted-foreground leading-7">
              Everything currently live on karom.in — wholesome, fresh, and made
              with no artificial preservatives.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {liveCategories.map((cat, idx) => (
              <article
                key={cat.title}
                className={`reveal delay-${((idx % 3) + 1) * 100} card-premium group p-6`}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.38 0.11 137 / 0.12), oklch(0.80 0.12 85 / 0.08))",
                  }}
                >
                  {cat.emoji}
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      background: "oklch(0.80 0.12 85 / 0.1)",
                      color: "oklch(0.65 0.12 75)",
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {cat.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center reveal">
            <a
              href="https://karom.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex min-h-11 items-center gap-2 rounded-xl px-7 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                color: "oklch(0.18 0.02 80)",
              }}
            >
              Browse All on karom.in <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FEATURED BRANDS ─── */}
      <section className="bg-surface-2/50 backdrop-blur-sm py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              Trusted Sellers
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Featured <span className="text-gradient-gold">Brands</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brands.map((brand, idx) => (
              <article
                key={brand.name}
                className={`reveal delay-${(idx + 1) * 100} card-premium group p-8 text-center`}
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: brand.color,
                    border: `1px solid ${brand.borderColor}`,
                  }}
                >
                  {brand.emoji}
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {brand.name}
                </h3>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "oklch(0.80 0.12 85)" }}
                >
                  {brand.tagline}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {brand.desc}
                </p>
                <a
                  href="https://karom.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: "oklch(0.65 0.12 75)" }}
                >
                  Shop Now <ExternalLink size={12} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SHOP KAROM.IN ─── */}
      <section className="bg-transparent py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              Why Choose
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Why Shop at <span className="text-gradient-gold">karom.in</span>?
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyShop.map((item, idx) => (
              <div
                key={item.title}
                className={`reveal delay-${(idx + 1) * 100} card-premium group flex flex-col items-center text-center p-7`}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.12), oklch(0.65 0.12 75 / 0.08))",
                  }}
                >
                  {item.emoji}
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 137), oklch(0.28 0.05 90))",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "120px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className="reveal text-3xl font-bold text-white md:text-4xl">
            Ready to Eat{" "}
            <span className="text-gradient-gold">Healthier?</span>
          </h2>
          <p className="reveal delay-100 max-w-xl text-base leading-7 text-white/75">
            Visit karom.in to browse fresh salads, millet meals, wellness beverages
            and more — all from trusted brands, delivered to your door.
          </p>
          <div className="reveal delay-200 flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://karom.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex min-h-12 items-center gap-2 justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                color: "oklch(0.18 0.02 80)",
              }}
            >
              Visit karom.in <ExternalLink size={14} />
            </a>
            <a
              href="https://karom.in/stores/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Browse All Stores
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
