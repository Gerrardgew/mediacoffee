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
    title: "Signature",
    items: [
      { name: "Cold Play", desc: "Espresso on the rock shake with mandarin orange", price: "33K" },
      { name: "Milky Doel", desc: "Foamy lychee milk-shake with yakult, the yogurty experience", price: "33K" },
      { name: "Coffee \u201CManggal\u201D", desc: "Coffee shake with mango jam and mandarin orange", price: "35K" },
      { name: "Coffee \u201CMandra\u201D", desc: "Coffee shake with white chocolate and rich aromatic gula aren", price: "35K" },
      { name: "Coconut Delight", desc: "Soft & creamy coffee with tropical coconut sensation", price: "35K" },
      { name: "Coffee Lemonade", desc: "Espresso on the rock with fresh lemon and soda", price: "35K" },
      { name: "Ess Berry", desc: "Espresso on the rock shake with orange and berry", price: "35K" },
      { name: "Palem Sunrise", desc: "Mandarin orange with yakult", price: "35K" },
    ],
  },
  {
    title: "Coffee",
    items: [
      { name: "Americano", desc: "Hot / Iced", price: "25/28K" },
      { name: "On The Rock", desc: "Espresso shot on ice", price: "20K" },
      { name: "Cappuccino", desc: "Hot / Iced", price: "28/30K" },
      { name: "Caffe Latte", desc: "Hot / Iced", price: "30/33K" },
      { name: "Mochaccino", desc: "Hot / Iced", price: "33/35K" },
      { name: "Picollo", desc: "Espresso + steamed milk in a small cup", price: "25K" },
      { name: "Affogato", desc: "Espresso panas di atas es krim vanilla", price: "35K" },
      { name: "Caramel Macchiato", desc: "Hot / Iced", price: "33/35K" },
      { name: "Happy Coffee", desc: "Daily house blend", price: "25K" },
      { name: "Fun Coffee", desc: "Easy sipping coffee", price: "25K" },
      { name: "Flavored Latte", desc: "Tiramisu, Pistachio, Caramel, Vanilla (Hot / Iced)", price: "30/33K" },
    ],
  },
  {
    title: "Manual Brew",
    items: [
      { name: "V60", desc: "Pour over, house bean", price: "25K" },
      { name: "V60 Premium", desc: "Pour over, premium single origin", price: "35K" },
      { name: "Japanese", desc: "Japanese-style iced pour over", price: "28K" },
      { name: "Crash Coffee", desc: "Quick brew, bold & simple", price: "18K" },
    ],
  },
  {
    title: "Frappe",
    items: [
      { name: "Chocolate Frappe", desc: "Blended cokelat dingin, manis & creamy", price: "35K" },
      { name: "Red Velvet Frappe", desc: "Blended red velvet, lembut & manis", price: "35K" },
      { name: "Charcoal Frappe", desc: "Blended charcoal latte, smoky & creamy", price: "35K" },
      { name: "Green Tea Frappe", desc: "Blended matcha, earthy & refreshing", price: "38K" },
    ],
  },
  {
    title: "Non Coffee",
    items: [
      { name: "Choco Latte", desc: "Hot / Iced", price: "30/33K" },
      { name: "Green Tea Latte", desc: "Hot / Iced", price: "35/38K" },
      { name: "Red Velvet Latte", desc: "Hot / Iced", price: "30/33K" },
      { name: "Charcoal Latte", desc: "Hot / Iced", price: "30/33K" },
      { name: "Ice Lychee Tea", desc: "Lychee + tea, dingin seger", price: "28K" },
      { name: "Ice Peppermint Tea", desc: "Mint dingin yang adem", price: "25K" },
      { name: "Organic Tea Collection", desc: "Aneka pilihan teh organik", price: "25K" },
      { name: "Side Ink Summer", desc: "Refreshing summer mocktail", price: "28K" },
      { name: "T-Reg (Tiramisu Regal)", desc: "Tiramisu blended dengan biskuit regal", price: "35K" },
      { name: "Mango Choco", desc: "Mango + cokelat, perpaduan tak terduga", price: "35K" },
    ],
  },
  {
    title: "Main Course",
    items: [
      { name: "Rice Bowl Chicken", desc: "Honey / Sambal Matah / Sambal Ijo / Sambal Bawang", price: "45K" },
      { name: "Rice Bowl Kulit", desc: "Sambal Matah / Sambal Bawang", price: "35K" },
      { name: "Rice Bowl Beef Blackpepper", desc: "Beef saus blackpepper di atas nasi", price: "55K" },
      { name: "Nasi Jeruk Kulit", desc: "Sambal Matah / Sambal Bawang", price: "38K" },
      { name: "Nasi Jeruk Ayam", desc: "Sambal Matah / Sambal Bawang / Sambal Ijo", price: "48K" },
      { name: "Spaghetti Aglio Olio", desc: "Bawang putih, cabai, olive oil", price: "35K" },
      { name: "Spaghetti Carbonara", desc: "Creamy carbonara dengan smoked beef", price: "35K" },
      { name: "Mie Katsu Chili Oil", desc: "Mie dengan katsu dan chili oil", price: "35K" },
    ],
  },
  {
    title: "Platters (2\u20134 pax)",
    items: [
      { name: "XXL Fries", desc: "Half kilogram french fries", price: "45K" },
      { name: "Mix Platters A", desc: "French fries, chicken pop & crispy cagar tofu", price: "50K" },
      { name: "Mix Platters B", desc: "Singkong, Cireng, Tahu Cagar", price: "50K" },
    ],
  },
  {
    title: "Signature Dish",
    items: [
      { name: "Chicken Cordon Bleu", desc: "Stuffed crispy chicken with cheese & smoked beef. Comes with rice or fries.", price: "50K" },
      { name: "Crispy Ton Katsu", desc: "Crispy pork-style katsu", price: "45K" },
      { name: "Grilled Chicken Butter Mushroom", desc: "Aromatic Indonesian chicken soup with rice on the side", price: "48K" },
    ],
  },
  {
    title: "Snack",
    items: [
      { name: "French Fries", desc: "Kentang goreng renyah", price: "25K" },
      { name: "Crispy Chicken Skin", desc: "Kulit ayam crispy, gurih banget", price: "25K" },
      { name: "Tahu Cagar", desc: "Tahu crispy ala Me.dia", price: "25K" },
      { name: "Tahu Walik", desc: "Tahu walik isian, crispy di luar", price: "35K" },
      { name: "Cireng", desc: "Aci goreng, dipping bumbu rujak", price: "25K" },
      { name: "Singkong Goreng", desc: "Singkong renyah, classic banget", price: "25K" },
      { name: "Banana Fritter", desc: "Golden brown deep fried banana served with chocolate dipping sauce", price: "30K" },
    ],
  },
  {
    title: "Add On",
    items: [
      { name: "Nasi Putih", desc: "Sepiring nasi putih hangat", price: "7K" },
      { name: "Nasi Daun Jeruk", desc: "Nasi wangi daun jeruk", price: "10K" },
      { name: "Chicken Katsu", desc: "Tambahan ayam katsu crispy", price: "25K" },
      { name: "Cordon Bleu", desc: "Tambahan cordon bleu", price: "30K" },
      { name: "Aneka Sambal", desc: "Sambal Matah / Sambal Bawang / Sambal Ijo", price: "5K" },
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
