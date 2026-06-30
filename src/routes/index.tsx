import { createFileRoute, Link } from "@tanstack/react-router";
import dishwash from "@/assets/dishwash.png";
import floorCleaner from "@/assets/floor-cleaner.png";
import handWash from "@/assets/hand-wash.png";
import toiletCleaner from "@/assets/toilet-cleaner.png";
import waterBlack from "@/assets/wet-plus-water-black.png";
import heroBg from "@/assets/farm-hero.jpg";

const featuredProducts = [
  {
    name: "Makhana & Jaggery Laddu",
    price: "₹1000 / 1 Kg",
    description: "Traditional premium laddus with natural sweetness and wholesome nutrition.",
    image: heroBg,
  },
  {
    name: "Karom Dishwash Liquid",
    price: "₹75 / 500 ml",
    description: "Strong on grease, gentle on hands for everyday kitchen use.",
    image: dishwash,
  },
  {
    name: "Karom Floor Cleaner",
    price: "₹75 / 500 ml",
    description: "Fresh-fragrance floor hygiene solution for daily home cleaning.",
    image: floorCleaner,
  },
  {
    name: "Karom Rose Soft Hand Wash",
    price: "₹75 / 250 ml",
    description: "Gentle hand cleansing with rose freshness and skin-friendly care.",
    image: handWash,
  },
  {
    name: "Karom Toilet Cleaner",
    price: "₹75 / 500 ml",
    description: "Deep stain and odor removal for hygienic bathroom surfaces.",
    image: toiletCleaner,
  },
  {
    name: "Wet Plus Packaged Water",
    price: "₹20 / 500 ml",
    description: "Hygienically processed drinking water for safe daily hydration.",
    image: waterBlack,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karom Industries | Affordable Health & Hygiene Products" },
      {
        name: "description",
        content:
          "Explore Karom Industries' trusted range of healthy traditional snacks, household cleaners, and packaged drinking water.",
      },
      { property: "og:title", content: "Karom Industries | Affordable Health & Hygiene Products" },
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
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <img
          src={heroBg}
          alt="Farm landscape representing farmer-linked sourcing"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand/60" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-20 text-brand-foreground md:px-6 md:py-24">
          <p className="text-base font-medium md:text-lg">Traditional nutrition for modern India</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Affordable Health, Hygienic Quality, Farmer&apos;s Trust
          </h1>
          <p className="max-w-2xl text-base leading-7 text-brand-foreground/90 md:text-lg">
            Karom Industries delivers healthy nutrition and hygiene products built for families,
            retailers, schools, and institutions in Tier-2 and Tier-3 India.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-cta px-5 py-2 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-foreground/40 bg-brand-foreground/10 px-5 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why families choose Karom</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-border bg-card p-6">
              <p className="text-2xl" aria-hidden="true">
                🌾
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Farmer-Linked Sourcing</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Direct partnerships with farming communities ensure fair value and fresher inputs.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-6">
              <p className="text-2xl" aria-hidden="true">
                🏥
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Hygienic Processing</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Every product follows clean processing and quality-focused production standards.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-6">
              <p className="text-2xl" aria-hidden="true">
                ₹
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Affordable Pricing</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Premium nutrition and cleaning essentials priced for everyday Indian households.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface-2 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured Products</h2>
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              View all products
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="group rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-md bg-brand-soft">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{product.name}</h3>
                <p className="mt-1 text-base font-semibold text-brand">{product.price}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
                <Link
                  to="/products"
                  className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Choose Karom</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Natural ingredients with no refined sugar or artificial additives in nutrition range",
              "Supports local farmers through direct and fair-value sourcing relationships",
              "Tier-2 and Tier-3 focused pricing model for practical affordability",
              "Trusted hygiene and quality standards across product categories",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card px-5 py-4 text-sm leading-6 text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-brand py-14 text-brand-foreground">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Ready to experience healthier living?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-foreground/90 md:text-base">
              Join thousands of families choosing Karom for better health, better hygiene, and
              better value.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-cta px-5 py-2 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-foreground/40 bg-brand-foreground/10 px-5 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/20"
            >
              Shop Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
