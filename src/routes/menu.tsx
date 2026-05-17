import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Me.dia Coffee & Roastery" },
      { name: "description", content: "Explore Me.dia's full menu — signature lattes, espresso, iced drinks, pastries and more. Rp 25–50K per person." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Espresso & Hot",
    items: [
      { name: "Hot Cafe Latte", desc: "Smooth double shot, steamed milk", price: "28K" },
      { name: "Hot Cappuccino", desc: "Espresso topped with velvety foam", price: "28K" },
      { name: "Hazelnut Latte", desc: "Warm hazelnut, gentle sweetness", price: "32K" },
      { name: "Caramel Latte", desc: "House signature — buttery caramel", price: "32K" },
      { name: "Affogato", desc: "Hot espresso over vanilla ice cream", price: "35K" },
    ],
  },
  {
    title: "Iced & Cold",
    items: [
      { name: "Iced Cappuccino", desc: "Cold foam, bold espresso", price: "30K" },
      { name: "Iced Caramel Latte", desc: "Caramel, milk, espresso, ice", price: "33K" },
      { name: "Coffee Lemonade", desc: "Refreshing espresso with lemon", price: "30K" },
      { name: "Iced Hazelnut Latte", desc: "Nutty, sweet, smooth", price: "33K" },
    ],
  },
  {
    title: "Bites",
    items: [
      { name: "Donat Keju", desc: "Soft donut, melted cheese", price: "18K" },
      { name: "Croissant", desc: "Buttery, flaky, warm", price: "22K" },
      { name: "Banana Bread", desc: "Slow-baked, lightly toasted", price: "20K" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Menu</div>
        <h1 className="font-display text-5xl md:text-6xl">Small list. Big flavor.</h1>
        <p className="mt-4 text-muted-foreground">Rp 25–50K per person · all prices in IDR</p>
      </div>

      <div className="space-y-16">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-3xl mb-8 flex items-center gap-4">
              <span>{s.title}</span>
              <span className="flex-1 h-px bg-border" />
            </h2>
            <ul className="divide-y divide-border">
              {s.items.map((i) => (
                <li key={i.name} className="py-5 flex items-baseline gap-4">
                  <div className="flex-1">
                    <div className="font-medium text-lg">{i.name}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{i.desc}</div>
                  </div>
                  <div className="flex-1 hidden sm:block">
                    <div className="border-b border-dashed border-border" />
                  </div>
                  <div className="text-primary font-medium tabular-nums">Rp {i.price}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
