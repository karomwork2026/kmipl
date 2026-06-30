import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import bathroomCleaner from "@/assets/bathroom-cleaner.png";
import dishwash from "@/assets/dishwash.png";
import floorCleaner from "@/assets/floor-cleaner.png";
import glassCleaner from "@/assets/glass-cleaner.png";
import handWash from "@/assets/hand-wash.png";
import logo from "@/assets/karom-logo.png";
import toiletCleaner from "@/assets/toilet-cleaner.png";
import waterBlack from "@/assets/wet-plus-water-black.png";
import waterRed from "@/assets/wet-plus-water-red.png";
import whiteFloorCleaner from "@/assets/white-floor-cleaner.png";

interface Product {
  name: string;
  category: "Nutrition" | "Household" | "Beverages";
  subCategory: string;
  packSize: string;
  price: string;
  mrp?: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Makhana & Jaggery Laddu",
    category: "Nutrition",
    subCategory: "Healthy Traditional Snacks",
    packSize: "1 Kg",
    price: "₹1000",
    description:
      "Handmade premium laddus with roasted makhana and natural jaggery, rich in fiber and calcium.",
    image: logo,
  },
  {
    name: "Sattu Laddu",
    category: "Nutrition",
    subCategory: "Healthy Traditional Snacks",
    packSize: "1 Kg",
    price: "₹1000",
    description: "Protein-rich traditional laddus crafted from roasted gram for sustained daily energy.",
    image: logo,
  },
  {
    name: "Sattu & Jaggery Laddu",
    category: "Nutrition",
    subCategory: "Healthy Traditional Snacks",
    packSize: "1 Kg",
    price: "₹1000",
    description: "Nutritious blend of sattu and natural jaggery with no refined sugar additives.",
    image: logo,
  },
  {
    name: "Karom Detergent Liquid",
    category: "Household",
    subCategory: "Laundry Care",
    packSize: "500 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Advanced detergent liquid for tough stain removal while protecting fabric quality.",
    image: floorCleaner,
  },
  {
    name: "Karom Dishwash Liquid",
    category: "Household",
    subCategory: "Kitchen Care",
    packSize: "500 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Grease-cutting dishwash formula that keeps utensils sparkling and hands comfortable.",
    image: dishwash,
  },
  {
    name: "Karom Rose Soft Hand Wash",
    category: "Household",
    subCategory: "Personal Hygiene",
    packSize: "250 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Rose-fragranced hand wash for effective cleansing and soft-feel after each wash.",
    image: handWash,
  },
  {
    name: "Karom Glass Cleaner",
    category: "Household",
    subCategory: "Surface Cleaner",
    packSize: "500 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Streak-free cleaner for mirrors, windows, showcases, and glass furniture surfaces.",
    image: glassCleaner,
  },
  {
    name: "Karom Floor Cleaner",
    category: "Household",
    subCategory: "Floor Care",
    packSize: "500 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Multipurpose floor cleaner with long-lasting freshness and hygienic performance.",
    image: floorCleaner,
  },
  {
    name: "Karom White Floor Cleaner (1L)",
    category: "Household",
    subCategory: "Floor Care",
    packSize: "1 Litre",
    price: "₹40",
    mrp: "₹85",
    description: "Economical daily floor cleaner suitable for tiles, marble, granite, and cement floors.",
    image: whiteFloorCleaner,
  },
  {
    name: "Karom White Floor Cleaner (5L)",
    category: "Household",
    subCategory: "Floor Care",
    packSize: "5 Litres",
    price: "₹120",
    description: "Bulk cleaning solution for homes, offices, schools, hotels, and institutions.",
    image: whiteFloorCleaner,
  },
  {
    name: "Karom Evolution Deep Clean",
    category: "Household",
    subCategory: "Professional Cleaning",
    packSize: "5 Litres",
    price: "₹120",
    description: "Heavy-duty deep cleaning solution designed for commercial-scale hygiene needs.",
    image: waterRed,
  },
  {
    name: "Karom Toilet Cleaner",
    category: "Household",
    subCategory: "Bathroom Care",
    packSize: "500 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Thick formula toilet cleaner that removes stains, limescale, odor, and germs.",
    image: toiletCleaner,
  },
  {
    name: "Karom Bathroom Cleaner",
    category: "Household",
    subCategory: "Bathroom Care",
    packSize: "500 ml",
    price: "₹75",
    mrp: "₹95",
    description: "Powerful cleaner for tiles, sinks, taps, and bathroom fittings.",
    image: bathroomCleaner,
  },
  {
    name: "Wet Plus Packaged Drinking Water",
    category: "Beverages",
    subCategory: "Drinking Water",
    packSize: "500 ml Bottle",
    price: "₹20",
    description: "Hygienically processed packaged drinking water for safe and refreshing hydration.",
    image: waterBlack,
  },
];

const filters = ["All Products", "Nutrition", "Household", "Beverages"] as const;
type FilterType = (typeof filters)[number];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Karom Products | Nutrition, Household & Beverages" },
      {
        name: "description",
        content:
          "Browse Karom's complete catalog of laddus, hygiene cleaners, and packaged drinking water with transparent pricing.",
      },
      { property: "og:title", content: "Karom Products | Nutrition, Household & Beverages" },
      {
        property: "og:description",
        content:
          "From traditional nutrition to household hygiene, explore products designed for value, quality, and trust.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const filterMatch = activeFilter === "All Products" || product.category === activeFilter;
      const query = searchTerm.trim().toLowerCase();
      const searchMatch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.subCategory.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return filterMatch && searchMatch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div>
      <section className="border-b border-border bg-surface py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Our Products</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Premium traditional nutrition, reliable household cleaning essentials, and packaged
            drinking water for everyday family and institutional needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-medium transition-colors ${
                    active
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border bg-card text-foreground hover:bg-accent"
                  }`}
                  aria-pressed={active}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <label className="mt-4 block max-w-md">
            <span className="mb-2 block text-sm font-medium text-foreground">Search products</span>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by product name or category"
              className="min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
            />
          </label>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="mb-4 text-sm text-muted-foreground">Showing {visibleProducts.length} products</div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article key={`${product.name}-${product.packSize}`} className="rounded-lg border border-border bg-card p-4">
                <div className="aspect-[4/5] overflow-hidden rounded-md bg-brand-soft">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                    {product.subCategory}
                  </span>
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {product.packSize}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground">{product.name}</h2>
                <div className="mt-1 flex items-center gap-3">
                  <p className="text-base font-semibold text-brand">{product.price}</p>
                  {product.mrp ? <p className="text-sm text-muted-foreground">MRP {product.mrp}</p> : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/55 p-0 sm:items-center sm:p-4">
          <div className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-t-lg border border-border bg-card p-6 sm:rounded-lg">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h2>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-input bg-surface text-foreground transition-colors hover:bg-accent"
                aria-label="Close product details"
              >
                ✕
              </button>
            </div>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-md border border-border bg-brand-soft">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand">{selectedProduct.subCategory}</p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {selectedProduct.price} · {selectedProduct.packSize}
                </p>
                {selectedProduct.mrp ? (
                  <p className="mt-1 text-sm text-muted-foreground">MRP: {selectedProduct.mrp}</p>
                ) : null}
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{selectedProduct.description}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Hygienically processed and packed for reliable quality.</li>
                  <li>Ideal for homes, retailers, and institutional requirements.</li>
                  <li>Bulk and distribution inquiry support available.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-11 items-center rounded-md bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90"
                  >
                    Inquire Now
                  </Link>
                  <a
                    href={`https://wa.me/919826470984?text=${encodeURIComponent(`Hello Karom, I want details for ${selectedProduct.name} (${selectedProduct.packSize}).`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    Share on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
