import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Me.dia Coffee & Roastery" },
      { name: "description", content: "Cek menu lengkap Me.dia — signature latte, espresso, iced drinks, pastry, dan lainnya. Rp 25–50K per orang." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Espresso & Panas",
    items: [
      { name: "Hot Cafe Latte", desc: "Double shot smooth, susu steam", price: "28K" },
      { name: "Hot Cappuccino", desc: "Espresso dengan foam lembut", price: "28K" },
      { name: "Hazelnut Latte", desc: "Hazelnut hangat, manisnya pas", price: "32K" },
      { name: "Caramel Latte", desc: "Signature — caramel buttery", price: "32K" },
      { name: "Affogato", desc: "Espresso panas di atas es krim vanilla", price: "35K" },
    ],
  },
  {
    title: "Iced & Dingin",
    items: [
      { name: "Iced Cappuccino", desc: "Cold foam, espresso nendang", price: "30K" },
      { name: "Iced Caramel Latte", desc: "Caramel, susu, espresso, es", price: "33K" },
      { name: "Coffee Lemonade", desc: "Espresso seger campur lemon", price: "30K" },
      { name: "Iced Hazelnut Latte", desc: "Nutty, manis, smooth", price: "33K" },
    ],
  },
  {
    title: "Cemilan",
    items: [
      { name: "Donat Keju", desc: "Donat lembut, keju leleh", price: "18K" },
      { name: "Croissant", desc: "Buttery, flaky, hangat", price: "22K" },
      { name: "Banana Bread", desc: "Slow-baked, sedikit toasted", price: "20K" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Menu</div>
        <h1 className="font-display text-5xl md:text-6xl">Listnya pendek. Rasanya juara.</h1>
        <p className="mt-4 text-muted-foreground">Rp 25–50K per orang · semua harga dalam IDR</p>
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
