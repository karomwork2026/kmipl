import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, ChevronRight } from "lucide-react";
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
import makhanaLaddu from "@/assets/makhana-laddu.png";
import sattuLaddu from "@/assets/sattu-laddu.png";
import sattuJaggeryBlocks from "@/assets/sattu-jaggery-blocks.png";
import blackCleaner from "@/assets/black-cleaner.png";

interface Product {
  name: string;
  category: "Nutrition" | "Household" | "Beverages";
  subCategory: string;
  packSize: string;
  price: string;
  mrp?: string;
  description: string;
  image: string;
  badge?: string;
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
    image: makhanaLaddu,
    badge: "Bestseller",
  },
  {
    name: "Sattu Laddu",
    category: "Nutrition",
    subCategory: "Healthy Traditional Snacks",
    packSize: "1 Kg",
    price: "₹1000",
    description:
      "Protein-rich traditional laddus crafted from roasted gram for sustained daily energy.",
    image: sattuLaddu,
    badge: "New",
  },
  {
    name: "Sattu & Jaggery Barfi",
    category: "Nutrition",
    subCategory: "Healthy Traditional Snacks",
    packSize: "1 Kg",
    price: "₹1000",
    description:
      "Nutritious traditional barfi crafted from sattu and natural jaggery with no refined sugar additives.",
    image: sattuJaggeryBlocks,
    badge: "Traditional",
  },
  {
    name: "Wet Plus - Packaged Drinking Water",
    category: "Beverages",
    subCategory: "Drinking Water",
    packSize: "1 Ltr",
    price: "₹20",
    description:
      "Hygienically processed packaged drinking water in a convenient 1 Litre bottle for safe daily hydration.",
    image: waterRed,
  },
  {
    name: "Wet Plus - Packaged Drinking Water",
    category: "Beverages",
    subCategory: "Drinking Water",
    packSize: "500ml",
    price: "₹10",
    description:
      "Hygienically processed packaged drinking water for safe and refreshing hydration.",
    image: waterBlack,
  },
  {
    name: "Karom Detergent Liquid",
    category: "Household",
    subCategory: "Laundry Care",
    packSize: "500ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Advanced detergent liquid for tough stain removal while protecting fabric quality.",
    image: floorCleaner,
  },
  {
    name: "Karom Dishwash",
    category: "Household",
    subCategory: "Kitchen Care",
    packSize: "500ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Grease-cutting dishwash formula that keeps utensils sparkling and hands comfortable.",
    image: dishwash,
  },
  {
    name: "Karom Rose Flavour Soft Wash",
    category: "Household",
    subCategory: "Personal Hygiene",
    packSize: "250ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Rose-fragranced hand wash for effective cleansing and soft-feel after each wash.",
    image: handWash,
  },
  {
    name: "Karom Glass Cleaner",
    category: "Household",
    subCategory: "Surface Cleaner",
    packSize: "500ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Streak-free cleaner for mirrors, windows, showcases, and glass furniture surfaces.",
    image: glassCleaner,
  },
  {
    name: "Karom Floor Cleaner",
    category: "Household",
    subCategory: "Floor Care",
    packSize: "500ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Multipurpose floor cleaner with long-lasting freshness and hygienic performance.",
    image: floorCleaner,
  },
  {
    name: "Karom White Floor Cleaner",
    category: "Household",
    subCategory: "Floor Care",
    packSize: "1L",
    price: "₹40",
    mrp: "₹85",
    description:
      "Economical daily floor cleaner suitable for tiles, marble, granite, and cement floors.",
    image: whiteFloorCleaner,
    badge: "Value Pack",
  },
  {
    name: "Karom Black Cleaner",
    category: "Household",
    subCategory: "Professional Cleaning",
    packSize: "5L",
    price: "₹120",
    description:
      "Heavy-duty deep cleaning solution designed for commercial-scale hygiene needs.",
    image: blackCleaner,
    badge: "Pro",
  },
  {
    name: "Karom Toilet Cleaner",
    category: "Household",
    subCategory: "Bathroom Care",
    packSize: "500ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Thick formula toilet cleaner that removes stains, limescale, odor, and germs.",
    image: toiletCleaner,
  },
  {
    name: "Karom Bathroom Cleaner",
    category: "Household",
    subCategory: "Bathroom Care",
    packSize: "500ml",
    price: "₹75",
    mrp: "₹95",
    description:
      "Powerful cleaner for tiles, sinks, taps, and bathroom fittings.",
    image: bathroomCleaner,
  },
];

const filters = ["All Products", "Nutrition", "Household", "Beverages"] as const;
type FilterType = (typeof filters)[number];

const filterIcons: Record<string, string> = {
  "All Products": "📦",
  Nutrition: "🌾",
  Household: "🏠",
  Beverages: "💧",
};

/* ─── Scroll reveal utility ─── */
function useReveal(deps: any[] = []) {
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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    const el = ref.current;
    if (el) {
      // First, remove "revealed" from all elements to reset animation if needed
      // Actually, just observe them
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, deps);

  return ref;
}

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: "Karom Products | Nutrition, Household & Beverages",
      },
      {
        name: "description",
        content:
          "Browse Karom's complete catalog of laddus, hygiene cleaners, and packaged drinking water with transparent pricing.",
      },
      {
        property: "og:title",
        content: "Karom Products | Nutrition, Household & Beverages",
      },
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
  const pageRef = useReveal([activeFilter, searchTerm]);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const filterMatch =
        activeFilter === "All Products" || product.category === activeFilter;
      const query = searchTerm.trim().toLowerCase();
      const searchMatch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.subCategory.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return filterMatch && searchMatch;
    });
  }, [activeFilter, searchTerm]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  return (
    <div ref={pageRef}>
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden border-b border-border bg-surface/60 backdrop-blur-sm py-16 md:py-20">
        {/* Watermark */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-32 md:w-56 opacity-[0.05] pointer-events-none">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <p
            className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "oklch(0.80 0.12 85)" }}
          >
            Our Collection
          </p>
          <h1 className="animate-fade-in-up delay-100 mt-2 text-4xl font-extrabold text-foreground md:text-5xl">
            Our <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Premium traditional nutrition, reliable household cleaning essentials, and packaged
            drinking water for everyday family and institutional needs.
          </p>

          {/* Filter tabs */}
          <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    active
                      ? "border-transparent text-cta-foreground font-semibold shadow-md"
                      : "border-border bg-card text-foreground hover:border-brand-gold hover:shadow-sm"
                  }`}
                  style={
                    active
                      ? {
                          background:
                            "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                        }
                      : undefined
                  }
                  aria-pressed={active}
                >
                  <span>{filterIcons[filter]}</span>
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="animate-fade-in-up delay-400 mt-4 max-w-md relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by product name or category..."
              className="min-h-11 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:shadow-md transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* ─── PRODUCT GRID ─── */}
      <section className="bg-transparent py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <strong className="text-foreground">{visibleProducts.length}</strong>{" "}
              products
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product, idx) => (
              <article
                key={`${product.name}-${product.packSize}`}
                className="reveal card-premium group cursor-pointer"
                style={{ animationDelay: `${(idx % 6) * 80}ms` }}
                onClick={() => setSelectedProduct(product)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProduct(product);
                  }
                }}
              >
                {/* Product image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg bg-gradient-to-b from-brand-soft to-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.9), oklch(0.65 0.12 75 / 0.9))",
                        color: "oklch(0.18 0.02 80)",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  {/* MRP Savings badge */}
                  {product.mrp && (
                    <span className="absolute top-3 right-3 rounded-full bg-destructive/90 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md z-10">
                      Save {parseInt(product.mrp.replace("₹", "")) - parseInt(product.price.replace("₹", ""))}₹
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.18 0.02 80 / 0.5), oklch(0.18 0.02 80 / 0.15) 50%, transparent)",
                    }}
                  >
                    <span className="flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-foreground shadow-lg transition-transform group-hover:scale-100 scale-90">
                      View Details <ChevronRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{
                        background: "oklch(0.80 0.12 85 / 0.12)",
                        color: "oklch(0.65 0.12 75)",
                      }}
                    >
                      {product.subCategory}
                    </span>
                    <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {product.packSize}
                    </span>
                  </div>
                  <h2 className="mt-3 text-base font-bold text-foreground leading-snug">
                    {product.name}
                  </h2>
                  <div className="mt-1.5 flex items-center gap-2">
                    <p
                      className="text-lg font-bold"
                      style={{ color: "oklch(0.80 0.12 85)" }}
                    >
                      {product.price}
                    </p>
                    {product.mrp && (
                      <p className="text-sm text-muted-foreground line-through">
                        MRP {product.mrp}
                      </p>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-4xl">🔍</p>
              <p className="mt-4 text-lg font-semibold text-foreground">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── PRODUCT DETAIL MODAL ─── */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/55 p-0 sm:items-center sm:p-4 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProduct(null);
          }}
        >
          <div className="animate-scale-in max-h-[92vh] w-full max-w-3xl overflow-auto rounded-t-2xl border border-border bg-card p-6 sm:rounded-2xl shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                {selectedProduct.badge && (
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                      color: "oklch(0.65 0.12 75)",
                    }}
                  >
                    {selectedProduct.badge}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-input bg-surface text-foreground transition-all duration-200 hover:bg-accent hover:scale-110"
                aria-label="Close product details"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-b from-brand-soft to-surface">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "oklch(0.80 0.12 85)" }}
                >
                  {selectedProduct.subCategory}
                </p>
                <div className="mt-2 flex items-baseline gap-3">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "oklch(0.80 0.12 85)" }}
                  >
                    {selectedProduct.price}
                  </p>
                  <span className="text-sm text-muted-foreground">
                    · {selectedProduct.packSize}
                  </span>
                </div>
                {selectedProduct.mrp && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    MRP:{" "}
                    <span className="line-through">{selectedProduct.mrp}</span>
                    <span
                      className="ml-2 font-semibold"
                      style={{ color: "oklch(0.55 0.18 140)" }}
                    >
                      Save ₹
                      {parseInt(selectedProduct.mrp.replace("₹", "")) -
                        parseInt(selectedProduct.price.replace("₹", ""))}
                    </span>
                  </p>
                )}
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {selectedProduct.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  {[
                    "Hygienically processed and packed for reliable quality.",
                    "Ideal for homes, retailers, and institutional requirements.",
                    "Bulk and distribution inquiry support available.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "oklch(0.80 0.12 85)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="btn-shimmer inline-flex min-h-11 items-center rounded-xl px-5 py-2 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                      color: "oklch(0.18 0.02 80)",
                    }}
                  >
                    Inquire Now
                  </Link>
                  <a
                    href={`https://wa.me/918770147377?text=${encodeURIComponent(`Hello Karom, I want details for ${selectedProduct.name} (${selectedProduct.packSize}).`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-xl border border-border bg-surface px-5 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:scale-105"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
