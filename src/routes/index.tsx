import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import dishwash from "@/assets/dishwash.png";
import floorCleaner from "@/assets/floor-cleaner.png";
import handWash from "@/assets/hand-wash.png";
import toiletCleaner from "@/assets/toilet-cleaner.png";
import waterBlack from "@/assets/wet-plus-water-black.png";
import heroBg from "@/assets/farm-hero.jpg";
import heroImage from "@/assets/hero-image.png";
import makhanaLaddu from "@/assets/makhana-laddu.png";
import sattuLaddu from "@/assets/sattu-laddu.png";
import sattuJaggeryBlocks from "@/assets/sattu-jaggery-blocks.png";
import logo from "@/assets/karom-logo.png";

const featuredProducts = [
  {
    name: "Makhana & Jaggery Laddu",
    price: "₹1000 / 1 Kg",
    description: "Traditional premium laddus with natural sweetness and wholesome nutrition.",
    image: makhanaLaddu,
    tag: "Bestseller",
  },
  {
    name: "Sattu Laddu",
    price: "₹1000 / 1 Kg",
    description:
      "Protein-rich traditional laddus crafted from roasted gram for sustained daily energy.",
    image: sattuLaddu,
    tag: "New",
  },
  {
    name: "Sattu & Jaggery Barfi",
    price: "₹1000 / 1 Kg",
    description: "Nutritious traditional barfi crafted from sattu and natural jaggery.",
    image: sattuJaggeryBlocks,
    tag: "Traditional",
  },
  {
    name: "Karom Dishwash",
    price: "₹75 / 500ml",
    description: "Strong on grease, gentle on hands for everyday kitchen use.",
    image: dishwash,
    tag: "Household",
  },
  {
    name: "Karom Rose Flavour Soft Wash",
    price: "₹75 / 250ml",
    description: "Gentle hand cleansing with rose freshness and skin-friendly care.",
    image: handWash,
    tag: "Hygiene",
  },
  {
    name: "Wet Plus Drinking Water",
    price: "₹10 / 500ml",
    description: "Hygienically processed drinking water for safe daily hydration.",
    image: waterBlack,
    tag: "Beverage",
  },
];

const stats = [
  { value: "10+", label: "Products" },
  { value: "100+", label: "Target Cities" },
  { value: "24h", label: "Response Time" },
  { value: "100%", label: "Natural Ingredients" },
];

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Karom Industries | Affordable Health & Hygiene Products",
      },
      {
        name: "description",
        content:
          "Explore Karom Industries' trusted range of healthy traditional snacks, household cleaners, and packaged drinking water.",
      },
      {
        property: "og:title",
        content: "Karom Industries | Affordable Health & Hygiene Products",
      },
      {
        property: "og:description",
        content:
          "Supporting farmers and families with hygienic, affordable, and quality-focused products across India.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      {/* ─── HERO SECTION (SPLIT LAYOUT) ─── */}
      <section className="relative overflow-hidden pt-14 pb-12 md:pt-20 md:pb-20">
        {/* Soft layered background – light warm cream with subtle brand tint */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.02 130) 0%, oklch(0.96 0.03 100) 50%, oklch(0.94 0.05 80) 100%)",
          }}
        />
        {/* Gold floating glow – top right */}
        <div
          className="absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full opacity-60 blur-3xl pointer-events-none -z-10 animate-drift-a"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.14 85 / 0.55), transparent 65%)",
          }}
        />
        {/* Green floating glow – bottom left */}
        <div
          className="absolute -left-32 -bottom-24 w-[440px] h-[440px] rounded-full opacity-45 blur-3xl pointer-events-none -z-10 animate-drift-b"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.14 137 / 0.45), transparent 65%)",
          }}
        />
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.30 0.05 100 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(0.30 0.05 100 / 0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        {/* Concentric rings */}
        <svg
          className="absolute right-10 top-24 w-40 h-40 opacity-30 pointer-events-none -z-10 animate-drift-a"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="40" stroke="oklch(0.65 0.14 85)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="28" stroke="oklch(0.65 0.14 85)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="16" stroke="oklch(0.65 0.14 85)" strokeWidth="0.5" />
        </svg>
        {/* Animated wave lines */}
        <svg
          className="absolute left-0 bottom-6 w-[70%] h-24 opacity-40 pointer-events-none -z-10"
          viewBox="0 0 400 80"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 55 Q 60 15 130 45 T 260 35 T 400 40"
            stroke="oklch(0.70 0.14 85)"
            strokeWidth="1.2"
            className="animate-wave"
          />
          <path
            d="M0 68 Q 60 28 130 58 T 260 48 T 400 55"
            stroke="oklch(0.55 0.12 137)"
            strokeWidth="1.2"
            className="animate-wave"
            style={{ animationDelay: "1.5s", animationDuration: "18s" }}
          />
        </svg>

        {/* Watermark logo */}
        <div className="absolute left-4 top-16 w-56 opacity-[0.05] pointer-events-none -z-10">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Column: Text */}
            <div className="flex flex-col gap-5 lg:pr-8">
              <p
                className="animate-fade-in-up text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "oklch(0.55 0.14 75)" }}
              >
                Traditional Nutrition for Modern India
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.15] text-foreground md:text-5xl lg:text-[3.5rem]">
                <span className="typewriter-line block">Affordable Health,</span>
                <span className="typewriter-line tw-2 block text-gradient-gold">
                  Hygienic Quality,
                </span>
                <span className="typewriter-line tw-3 block">Farmer&apos;s Trust</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-base md:text-lg font-medium leading-relaxed text-muted-foreground max-w-lg">
                Karom Industries delivers healthy nutrition and hygiene products built for families,
                retailers, schools, and institutions in India.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 pt-2">
                <Link
                  to="/products"
                  className="btn-shimmer inline-flex min-h-12 items-center justify-center rounded-xl px-7 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                    color: "oklch(0.18 0.02 80)",
                  }}
                >
                  Explore Products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-border bg-white/60 px-7 py-3 text-sm font-bold text-foreground backdrop-blur transition-all duration-300 hover:border-brand-gold hover:bg-white/80 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>

              {/* Inline stats */}
              <div className="animate-fade-in-up delay-400 mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="pt-4 border-t border-border">
                    <p className="text-2xl font-extrabold" style={{ color: "oklch(0.55 0.14 75)" }}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Image / Composition */}
            <div className="animate-fade-in-up delay-200 relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-3xl bg-surface-2 shadow-2xl">
                {/* Main hero image */}
                <img
                  src={heroImage}
                  alt="Karom Premium Products"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-xl border border-white">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-xl"
                      style={{
                        background: "oklch(0.80 0.12 85 / 0.2)",
                        color: "oklch(0.65 0.12 75)",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">100% Hygienic</p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Environment Friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY KAROM (VALUE PROPOSITIONS) ─── */}
      <section className="relative bg-transparent py-20 overflow-hidden">
        {/* Subtle gold gradient line */}
        <div className="section-divider" />

        <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-6">
          <div className="text-center reveal">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              Our Promise
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Why Families Choose <span className="text-gradient-gold">Karom</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🌾",
                title: "Farmer-Linked Sourcing",
                desc: "Direct partnerships with farming communities ensure fair value, fresher inputs, and stronger rural livelihoods.",
                delay: "delay-100",
              },
              {
                emoji: "🏥",
                title: "Hygienic Processing",
                desc: "Every product follows clean processing and quality-focused production standards for reliable safety.",
                delay: "delay-200",
              },
              {
                emoji: "💰",
                title: "Affordable Pricing",
                desc: "Premium nutrition and cleaning essentials priced for everyday Indian households in India.",
                delay: "delay-300",
              },
            ].map((item) => (
              <article key={item.title} className={`reveal ${item.delay} card-premium group p-7`}>
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                  }}
                >
                  {item.emoji}
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="relative bg-surface-2/50 backdrop-blur-sm py-20 overflow-hidden">
        {/* Background logo watermark */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-96 opacity-[0.03] pointer-events-none">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "oklch(0.80 0.12 85)" }}
              >
                Our Collection
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Featured <span className="text-gradient-gold">Products</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand-gold hover:shadow-md hover:scale-105"
            >
              View All Products →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, idx) => (
              <article
                key={product.name}
                className={`reveal delay-${(idx % 3) * 100 + 100} card-premium group`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg bg-gradient-to-b from-brand-soft to-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Tag badge */}
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.9), oklch(0.65 0.12 75 / 0.9))",
                      color: "oklch(0.18 0.02 80)",
                    }}
                  >
                    {product.tag}
                  </span>
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.18 0.02 80 / 0.4), transparent 50%)",
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground leading-snug">{product.name}</h3>
                  <p
                    className="mt-1.5 text-base font-bold"
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  >
                    {product.price}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex min-h-10 items-center rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.38 0.11 137), oklch(0.48 0.12 137))",
                      color: "oklch(0.98 0.01 105)",
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE PRINCIPLES ─── */}
      <section className="bg-transparent py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              What Drives Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Built on Three <span className="text-gradient-gold">Core Principles</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "💪",
                title: "Better Health",
                desc: "Through natural and traditional nutrition — no refined sugar, no artificial additives in our nutrition range.",
                gradient: "from-green-500/10 to-transparent",
              },
              {
                icon: "🤝",
                title: "Farmer Empowerment",
                desc: "Through direct sourcing and sustainable partnerships that strengthen rural economies.",
                gradient: "from-amber-500/10 to-transparent",
              },
              {
                icon: "🎯",
                title: "Affordable Quality",
                desc: "Premium outcomes at practical prices for consumers in Indian markets.",
                gradient: "from-blue-500/10 to-transparent",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`reveal delay-${(idx + 1) * 100} card-premium group flex flex-col items-center text-center p-8`}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110 animate-float"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.88 0.08 85 / 0.08))",
                    animationDelay: `${idx * 0.5}s`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.25 0.08 137), oklch(0.30 0.06 80))",
          }}
        />
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "120px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className="reveal text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Experience <span className="text-gradient-gold">Healthier Living?</span>
          </h2>
          <p className="reveal delay-100 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            Join thousands of families choosing Karom for better health, better hygiene, and better
            value. Your journey to traditional wellness starts here.
          </p>
          <div className="reveal delay-200 flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-shimmer inline-flex min-h-12 items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                color: "oklch(0.18 0.02 80)",
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
