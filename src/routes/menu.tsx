import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Me.dia Coffee and Space" },
      { name: "description", content: "Menu Me.dia Coffee and Space — Kopi Mandra, Coconut Delight, hot cappuccino, americano, plus snack. Rp 25–50K per orang." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Signature",
    items: [
      { name: "Kopi Mandra", desc: "Signature kami — bold, khas Me.dia", price: "28K" },
      { name: "Coconut Delight", desc: "Kopi creamy dengan sentuhan kelapa", price: "32K" },
      { name: "Coffee Lemonade", desc: "Espresso seger campur lemon", price: "30K" },
    ],
  },
  {
    title: "Kopi Panas",
    items: [
      { name: "Hot Cappuccino", desc: "Cangkir gede, foam lembut, rasa kopi bold", price: "28K" },
      { name: "Hot Americano", desc: "Dominan pahit, nggak asem, mantap", price: "25K" },
      { name: "Hot Cafe Latte", desc: "Double shot smooth, susu steam", price: "28K" },
      { name: "Hazelnut Latte", desc: "Hazelnut hangat, manisnya pas", price: "32K" },
    ],
  },
  {
    title: "Kopi Dingin",
    items: [
      { name: "Iced Cappuccino", desc: "Cold foam, espresso nendang", price: "30K" },
      { name: "Iced Americano", desc: "Pekat, seger, no-nonsense", price: "27K" },
      { name: "Iced Caramel Latte", desc: "Caramel, susu, espresso, es", price: "33K" },
    ],
  },
  {
    title: "Snack",
    items: [
      { name: "Onion Ring", desc: "Porsi lumayan, gurih buat cemilan", price: "22K" },
      { name: "Brain Brain Fish", desc: "Otak-otak Singapore yang ditepungin", price: "25K" },
      { name: "Kentang Goreng", desc: "Crispy di luar, lembut di dalam", price: "20K" },
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
