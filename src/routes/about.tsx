import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/karom-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Karom Industries Private Limited" },
      {
        name: "description",
        content:
          "Learn Karom Industries' mission, vision, farmer-first sourcing model, and values behind affordable wellness products.",
      },
      { property: "og:title", content: "About Karom Industries Private Limited" },
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
  return (
    <div>
      <section className="border-b border-border bg-surface py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              About Karom Industries Private Limited
            </h1>
            <p className="mt-3 text-lg font-medium text-brand">
              Making Health Accessible to Every Indian Family
            </p>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Karom Industries Private Limited is an Indian FMCG company committed to making
              healthy, affordable, and hygienically processed food and beverage products accessible
              to every household, with a special focus on Tier-2 and Tier-3 cities.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Our mission is to revive the goodness of traditional Indian nutrition by combining
              time-tested ingredients with modern food processing and quality standards.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We work directly with farmers and local producer groups to source high-quality
              agricultural products, ensuring fair value for farmers while delivering fresh,
              natural, and trustworthy products to consumers.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-border bg-brand-soft p-6">
            <img src={logo} alt="Karom Industries brand emblem" className="w-full max-w-sm rounded-md" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl" aria-hidden="true">
                💪
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Better Health</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Natural, traditional nutrition choices that support everyday wellness.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl" aria-hidden="true">
                🤝
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Farmer Empowerment</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fair sourcing and local procurement that strengthens rural livelihoods.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl" aria-hidden="true">
                💰
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Affordable Quality</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Premium outcomes at practical prices for households and institutions.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl" aria-hidden="true">
                🌱
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Sustainability</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Community-focused growth with eco-conscious practices and long-term impact.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-2 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">By The Numbers</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-brand">10+</p>
              <p className="mt-2 text-sm text-muted-foreground">Products in portfolio</p>
            </article>
            <article className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-brand">100+</p>
              <p className="mt-2 text-sm text-muted-foreground">Target Tier-2/3 cities</p>
            </article>
            <article className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-brand">24h</p>
              <p className="mt-2 text-sm text-muted-foreground">Inquiry response goal</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 md:grid-cols-2 md:px-6">
          <article className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-bold text-foreground">Vision</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Become one of India&apos;s most trusted brands for traditional health foods and
              beverages while creating a positive impact on rural livelihoods and consumer
              wellness.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-bold text-foreground">Mission</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Provide affordable, hygienic, and nutritious products while creating employment and
              supporting agriculture.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
