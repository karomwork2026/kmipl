import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import logo from "@/assets/karom-logo.png";
import heroBg from "@/assets/farm-hero.jpg";

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

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Karom Industries Private Limited" },
      {
        name: "description",
        content:
          "Learn Karom Industries' mission, vision, farmer-first sourcing model, and values behind affordable wellness products.",
      },
      {
        property: "og:title",
        content: "About Karom Industries Private Limited",
      },
      {
        property: "og:description",
        content:
          "Making health accessible to every Indian family with traditional nutrition and hygienic everyday essentials.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef}>
      {/* ─── HERO / INTRO ─── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <img
          src={heroBg}
          alt="Farm landscape"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.15 0.04 137 / 0.88), oklch(0.20 0.03 80 / 0.82))",
          }}
        />
        {/* Watermark logo */}
        <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-40 md:w-72 opacity-[0.08] pointer-events-none">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p
            className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "oklch(0.80 0.12 85)" }}
          >
            About Us
          </p>
          <h1 className="animate-fade-in-up delay-100 mt-3 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            About <span className="text-gradient-gold">Karom Industries</span> Private Limited
          </h1>
          <p className="animate-fade-in-up delay-200 mt-4 text-lg font-medium text-white/80">
            Making Health Accessible to Every Indian Family
          </p>
        </div>
      </section>

      {/* ─── MAIN ABOUT CONTENT ─── */}
      <section className="relative bg-transparent py-20 overflow-hidden">
        <div className="section-divider" />

        {/* Watermark */}
        <div className="absolute left-0 bottom-0 w-64 opacity-[0.03] pointer-events-none">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pt-16 md:grid-cols-[1.2fr_0.8fr] md:px-6 items-center">
          <div className="reveal">
            <p className="text-base leading-8 text-muted-foreground">
              <strong className="text-foreground">Karom Industries Private Limited</strong> is an
              Indian FMCG company committed to making{" "}
              <strong className="text-foreground">
                healthy, affordable, and hygienically processed food and beverage products
              </strong>{" "}
              accessible to every household, with a special focus on Tier-2 and Tier-3 cities. Our
              mission is to revive the goodness of traditional Indian nutrition by combining
              time-tested ingredients with modern food processing and quality standards.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Our product portfolio includes{" "}
              <strong className="text-foreground">
                Sattu-based nutrition products, Gud (jaggery) and Raab products, Gud chocolates and
                candies, healthy beverages, and flavored and alkaline drinking water
              </strong>
              , offering consumers healthier alternatives to refined sugar and highly processed
              foods.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              At Karom Industries, we believe that good health should be affordable and accessible.
              We work directly with farmers and local producer groups to source high-quality
              agricultural products, ensuring fair value for farmers while delivering fresh,
              natural, and trustworthy products to consumers.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Driven by innovation, hygiene, and sustainability, we are building a strong
              distribution network across retail stores, schools, institutions, distributors, and
              digital channels. Our vision is to become one of India's most trusted brands for
              traditional health foods and beverages while creating a positive impact on rural
              livelihoods and consumer wellness.
            </p>
          </div>

          <div className="reveal delay-200 flex items-center justify-center">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{
                  background: "linear-gradient(135deg, oklch(0.80 0.12 85), oklch(0.65 0.12 75))",
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl p-8 animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, oklch(0.95 0.03 132), oklch(0.90 0.02 100))",
                  border: "1px solid oklch(0.80 0.12 85 / 0.2)",
                }}
              >
                <img
                  src={logo}
                  alt="Karom Industries brand emblem"
                  className="w-full max-w-sm rounded-lg animate-float"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="relative bg-surface-2/50 backdrop-blur-sm py-20 overflow-hidden">
        {/* Subtle logo pattern */}
        <div className="absolute right-0 top-0 w-72 opacity-[0.03] pointer-events-none">
          <img src={logo} alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              What We Stand For
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                emoji: "💪",
                title: "Better Health",
                desc: "Natural, traditional nutrition choices that support everyday wellness without refined sugar or artificial additives.",
                delay: "delay-100",
              },
              {
                emoji: "🤝",
                title: "Farmer Empowerment",
                desc: "Fair sourcing and direct procurement that strengthens rural livelihoods and agriculture.",
                delay: "delay-200",
              },
              {
                emoji: "💰",
                title: "Affordable Quality",
                desc: "Premium outcomes at practical prices for households and institutions in Indian markets.",
                delay: "delay-300",
              },
              {
                emoji: "🌱",
                title: "Sustainability",
                desc: "Community-focused growth with eco-conscious practices and long-term social impact.",
                delay: "delay-400",
              },
            ].map((item) => (
              <article
                key={item.title}
                className={`reveal ${item.delay} card-premium group p-6 text-center`}
              >
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
                  }}
                >
                  {item.emoji}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BY THE NUMBERS ─── */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.25 0.08 137), oklch(0.30 0.06 80))",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "100px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              By The <span className="text-gradient-gold">Numbers</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: "Products in Portfolio" },
              { value: "100+", label: "Target Tier-2/3 Cities" },
              { value: "24h", label: "Inquiry Response Goal" },
              { value: "3", label: "Product Categories" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`reveal delay-${(idx + 1) * 100} rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-105`}
              >
                <p
                  className="text-4xl font-extrabold md:text-5xl animate-count-up"
                  style={{
                    color: "oklch(0.80 0.12 85)",
                    animationDelay: `${idx * 150}ms`,
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="bg-transparent py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <article className="reveal card-premium group p-8">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
              }}
            >
              🔭
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground">
              Our <span className="text-gradient-gold">Vision</span>
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">
              Become one of India&apos;s most trusted brands for traditional health foods and
              beverages while creating a positive impact on rural livelihoods and consumer wellness.
              We aim to be the bridge between India's agricultural heritage and modern consumer
              needs.
            </p>
          </article>
          <article className="reveal delay-200 card-premium group p-8">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.12 85 / 0.15), oklch(0.65 0.12 75 / 0.1))",
              }}
            >
              🎯
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground">
              Our <span className="text-gradient-gold">Mission</span>
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">
              Provide affordable, hygienic, and nutritious products while creating employment,
              supporting agriculture, and building a scalable distribution model spanning retail,
              distributors, institutions, e-commerce, and franchise partners across India.
            </p>
          </article>
        </div>
      </section>

      {/* ─── DISTRIBUTION NETWORK ─── */}
      <section className="bg-surface-2/50 backdrop-blur-sm py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="reveal text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.80 0.12 85)" }}
            >
              Our Reach
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Distribution <span className="text-gradient-gold">Network</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏪",
                title: "Retail Stores",
                desc: "Direct presence in neighborhood retail outlets.",
              },
              {
                icon: "🏫",
                title: "Schools & Institutions",
                desc: "Bulk supply partnerships with schools, hostels, and institutional canteens.",
              },
              {
                icon: "🤝",
                title: "Distributors",
                desc: "Expanding distributor network for deeper market penetration across regions.",
              },
              {
                icon: "🛒",
                title: "E-Commerce",
                desc: "Online sales through digital channels for modern consumer convenience.",
              },
              {
                icon: "🏢",
                title: "Franchise Partners",
                desc: "Partnership opportunities for entrepreneurs aligned with our vision.",
              },
              {
                icon: "🏨",
                title: "Hospitality & Hotels",
                desc: "Supply of packaged water and cleaning products to hotels and hospitality sector.",
              },
            ].map((channel, idx) => (
              <article
                key={channel.title}
                className={`reveal delay-${((idx % 3) + 1) * 100} card-premium group p-6`}
              >
                <span className="text-2xl">{channel.icon}</span>
                <h3 className="mt-3 text-base font-bold text-foreground">{channel.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{channel.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
