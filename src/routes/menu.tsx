import { createFileRoute } from "@tanstack/react-router";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});


type Item = {
  name: string;
  desc: string;
  descEn: string;
  price: string;
};

type Section = {
  title: string;
  titleEn: string;
  items: Item[];
};

const sections: Section[] = [
  {
    title: "Signature",
    titleEn: "Signature",
    items: [
      { name: "Cold Play", desc: "Espresso on the rock shake dengan jeruk mandarin", descEn: "Espresso on the rock shake with mandarin orange", price: "33K" },
      { name: "Milky Doel", desc: "Milk-shake leci berbusa dengan yakult, sensasi yogurt", descEn: "Foamy lychee milk-shake with yakult, the yogurty experience", price: "33K" },
      { name: "Coffee \u201CManggal\u201D", desc: "Coffee shake dengan selai mangga dan jeruk mandarin", descEn: "Coffee shake with mango jam and mandarin orange", price: "35K" },
      { name: "Coffee \u201CMandra\u201D", desc: "Coffee shake dengan cokelat putih dan aroma gula aren", descEn: "Coffee shake with white chocolate and rich aromatic gula aren", price: "35K" },
      { name: "Coconut Delight", desc: "Kopi lembut & creamy dengan sensasi kelapa tropis", descEn: "Soft & creamy coffee with tropical coconut sensation", price: "35K" },
      { name: "Coffee Lemonade", desc: "Espresso on the rock dengan lemon segar dan soda", descEn: "Espresso on the rock with fresh lemon and soda", price: "35K" },
      { name: "Ess Berry", desc: "Espresso on the rock shake dengan jeruk dan berry", descEn: "Espresso on the rock shake with orange and berry", price: "35K" },
      { name: "Palem Sunrise", desc: "Jeruk mandarin dengan yakult", descEn: "Mandarin orange with yakult", price: "35K" },
    ],
  },
  {
    title: "Coffee",
    titleEn: "Coffee",
    items: [
      { name: "Americano", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "25/28K" },
      { name: "On The Rock", desc: "Shot espresso di atas es", descEn: "Espresso shot on ice", price: "20K" },
      { name: "Cappuccino", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "28/30K" },
      { name: "Caffe Latte", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "30/33K" },
      { name: "Mochaccino", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "33/35K" },
      { name: "Picollo", desc: "Espresso + susu steamed dalam cangkir kecil", descEn: "Espresso + steamed milk in a small cup", price: "25K" },
      { name: "Affogato", desc: "Espresso panas di atas es krim vanilla", descEn: "Hot espresso poured over vanilla ice cream", price: "35K" },
      { name: "Caramel Macchiato", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "33/35K" },
      { name: "Happy Coffee", desc: "House blend harian", descEn: "Daily house blend", price: "25K" },
      { name: "Fun Coffee", desc: "Kopi ringan yang mudah diminum", descEn: "Easy sipping coffee", price: "25K" },
      { name: "Flavored Latte", desc: "Tiramisu, Pistachio, Caramel, Vanilla (Panas / Dingin)", descEn: "Tiramisu, Pistachio, Caramel, Vanilla (Hot / Iced)", price: "30/33K" },
    ],
  },
  {
    title: "Manual Brew",
    titleEn: "Manual Brew",
    items: [
      { name: "V60", desc: "Pour over, biji house", descEn: "Pour over, house bean", price: "25K" },
      { name: "V60 Premium", desc: "Pour over, single origin premium", descEn: "Pour over, premium single origin", price: "35K" },
      { name: "Japanese", desc: "Pour over dingin ala Jepang", descEn: "Japanese-style iced pour over", price: "28K" },
      { name: "Crash Coffee", desc: "Seduhan cepat, bold & simpel", descEn: "Quick brew, bold & simple", price: "18K" },
    ],
  },
  {
    title: "Frappe",
    titleEn: "Frappe",
    items: [
      { name: "Chocolate Frappe", desc: "Cokelat dingin blended, manis & creamy", descEn: "Blended cold chocolate, sweet & creamy", price: "35K" },
      { name: "Red Velvet Frappe", desc: "Red velvet blended, lembut & manis", descEn: "Blended red velvet, smooth & sweet", price: "35K" },
      { name: "Charcoal Frappe", desc: "Charcoal latte blended, smoky & creamy", descEn: "Blended charcoal latte, smoky & creamy", price: "35K" },
      { name: "Green Tea Frappe", desc: "Matcha blended, earthy & menyegarkan", descEn: "Blended matcha, earthy & refreshing", price: "38K" },
    ],
  },
  {
    title: "Non Coffee",
    titleEn: "Non Coffee",
    items: [
      { name: "Choco Latte", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "30/33K" },
      { name: "Green Tea Latte", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "35/38K" },
      { name: "Red Velvet Latte", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "30/33K" },
      { name: "Charcoal Latte", desc: "Panas / Dingin", descEn: "Hot / Iced", price: "30/33K" },
      { name: "Ice Lychee Tea", desc: "Leci + teh, dingin segar", descEn: "Lychee + tea, cold & refreshing", price: "28K" },
      { name: "Ice Peppermint Tea", desc: "Mint dingin yang adem", descEn: "Cool peppermint iced tea", price: "25K" },
      { name: "Organic Tea Collection", desc: "Aneka pilihan teh organik", descEn: "Assorted organic tea selection", price: "25K" },
      { name: "Side Ink Summer", desc: "Mocktail musim panas yang menyegarkan", descEn: "Refreshing summer mocktail", price: "28K" },
      { name: "T-Reg (Tiramisu Regal)", desc: "Tiramisu blended dengan biskuit regal", descEn: "Blended tiramisu with regal biscuits", price: "35K" },
      { name: "Mango Choco", desc: "Mangga + cokelat, perpaduan tak terduga", descEn: "Mango + chocolate, an unexpected pairing", price: "35K" },
    ],
  },
  {
    title: "Main Course",
    titleEn: "Main Course",
    items: [
      { name: "Rice Bowl Chicken", desc: "Honey / Sambal Matah / Sambal Ijo / Sambal Bawang", descEn: "Honey / Matah / Green / Shallot sambal", price: "45K" },
      { name: "Rice Bowl Kulit", desc: "Sambal Matah / Sambal Bawang", descEn: "Crispy chicken skin with matah or shallot sambal", price: "35K" },
      { name: "Rice Bowl Beef Blackpepper", desc: "Daging sapi saus blackpepper di atas nasi", descEn: "Beef in blackpepper sauce over rice", price: "55K" },
      { name: "Nasi Jeruk Kulit", desc: "Sambal Matah / Sambal Bawang", descEn: "Citrus rice with crispy skin & sambal", price: "38K" },
      { name: "Nasi Jeruk Ayam", desc: "Sambal Matah / Sambal Bawang / Sambal Ijo", descEn: "Citrus rice with chicken & sambal", price: "48K" },
      { name: "Spaghetti Aglio Olio", desc: "Bawang putih, cabai, olive oil", descEn: "Garlic, chili, olive oil", price: "35K" },
      { name: "Spaghetti Carbonara", desc: "Carbonara creamy dengan smoked beef", descEn: "Creamy carbonara with smoked beef", price: "35K" },
      { name: "Mie Katsu Chili Oil", desc: "Mie dengan katsu dan chili oil", descEn: "Noodles with katsu and chili oil", price: "35K" },
    ],
  },
  {
    title: "Platters (2\u20134 pax)",
    titleEn: "Platters (2\u20134 pax)",
    items: [
      { name: "XXL Fries", desc: "Setengah kilo kentang goreng", descEn: "Half kilogram french fries", price: "45K" },
      { name: "Mix Platters A", desc: "Kentang goreng, chicken pop & tahu cagar crispy", descEn: "French fries, chicken pop & crispy cagar tofu", price: "50K" },
      { name: "Mix Platters B", desc: "Singkong, Cireng, Tahu Cagar", descEn: "Cassava, cireng & cagar tofu", price: "50K" },
    ],
  },
  {
    title: "Signature Dish",
    titleEn: "Signature Dish",
    items: [
      { name: "Chicken Cordon Bleu", desc: "Ayam crispy isi keju & smoked beef. Pilih nasi atau kentang.", descEn: "Stuffed crispy chicken with cheese & smoked beef. Comes with rice or fries.", price: "50K" },
      { name: "Crispy Ton Katsu", desc: "Katsu crispy ala pork", descEn: "Crispy pork-style katsu", price: "45K" },
      { name: "Grilled Chicken Butter Mushroom", desc: "Sup ayam Indonesia beraroma dengan nasi di samping", descEn: "Aromatic Indonesian chicken soup with rice on the side", price: "48K" },
    ],
  },
  {
    title: "Snack",
    titleEn: "Snack",
    items: [
      { name: "French Fries", desc: "Kentang goreng renyah", descEn: "Crispy french fries", price: "25K" },
      { name: "Crispy Chicken Skin", desc: "Kulit ayam crispy, gurih banget", descEn: "Crispy chicken skin, super savory", price: "25K" },
      { name: "Tahu Cagar", desc: "Tahu crispy ala Me.dia", descEn: "Me.dia-style crispy tofu", price: "25K" },
      { name: "Tahu Walik", desc: "Tahu walik isian, crispy di luar", descEn: "Stuffed inside-out tofu, crispy outside", price: "35K" },
      { name: "Cireng", desc: "Aci goreng, dipping bumbu rujak", descEn: "Fried tapioca with rujak dip", price: "25K" },
      { name: "Singkong Goreng", desc: "Singkong renyah, classic banget", descEn: "Crispy fried cassava, classic", price: "25K" },
      { name: "Banana Fritter", desc: "Pisang goreng golden brown dengan saus cokelat", descEn: "Golden brown deep fried banana served with chocolate dipping sauce", price: "30K" },
    ],
  },
  {
    title: "Add On",
    titleEn: "Add On",
    items: [
      { name: "Nasi Putih", desc: "Sepiring nasi putih hangat", descEn: "A plate of warm steamed rice", price: "7K" },
      { name: "Nasi Daun Jeruk", desc: "Nasi wangi daun jeruk", descEn: "Rice fragrant with kaffir lime leaf", price: "10K" },
      { name: "Chicken Katsu", desc: "Tambahan ayam katsu crispy", descEn: "Extra crispy chicken katsu", price: "25K" },
      { name: "Cordon Bleu", desc: "Tambahan cordon bleu", descEn: "Extra cordon bleu", price: "30K" },
      { name: "Aneka Sambal", desc: "Sambal Matah / Sambal Bawang / Sambal Ijo", descEn: "Matah / Shallot / Green sambal", price: "5K" },
    ],
  },
];

function MenuPage() {
  useDocumentMeta({
    title: "Menu — Me.dia Coffee & Roastery",
    description: "Cek menu lengkap Me.dia — signature latte, espresso, iced drinks, pastry, dan lainnya. Rp 25–50K per orang.",
  });
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Menu</div>
        <h1 className="font-display text-5xl md:text-6xl">Listnya pendek. Rasanya juara.</h1>
        <p className="mt-2 text-sm italic text-muted-foreground/80">Short list. Champion taste.</p>
        <p className="mt-4 text-muted-foreground">
          Rp 25–50K per orang · semua harga dalam IDR
          <span className="block text-xs italic text-muted-foreground/70 mt-1">Rp 25–50K per person · all prices in IDR</span>
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-3xl mb-8 flex items-center gap-4">
              <span>
                {s.title}
                {s.titleEn !== s.title && (
                  <span className="block text-sm italic text-muted-foreground font-sans">{s.titleEn}</span>
                )}
              </span>
              <span className="flex-1 h-px bg-border" />
            </h2>
            <ul className="divide-y divide-border">
              {s.items.map((i) => (
                <li key={i.name} className="py-5 flex items-baseline gap-4">
                  <div className="flex-1">
                    <div className="font-medium text-lg">{i.name}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{i.desc}</div>
                    <div className="text-xs italic text-muted-foreground/70 mt-0.5">{i.descEn}</div>
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
