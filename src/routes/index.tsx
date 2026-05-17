import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";
import beansImg from "@/assets/beans.jpg";
import interiorImg from "@/assets/interior.jpg";
import latteImg from "@/assets/latte.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Me.dia Coffee & Roastery — Brewed with love in Tangerang" },
      { name: "description", content: "A warm corner for coffee lovers. Hand-crafted drinks, cozy interiors, open until midnight in Bencongan Indah, Tangerang." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 md:pt-20 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs">
              <span className="flex items-center gap-1 text-primary">
                <Star size={12} fill="currentColor" /> 4.6
              </span>
              <span className="text-muted-foreground">· 280 reviews on Google</span>
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
              Slow mornings,<br />
              <span className="text-primary italic">strong</span> coffee.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              Me.dia is a coffee & roastery in Tangerang where authentic flavor meets a quiet, comfy place to chill, work, and hang out — until midnight.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-all hover:gap-3">
                See the menu <ArrowRight size={16} />
              </Link>
              <Link to="/visit" className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition-colors">
                Visit the shop
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Open · closes 12 AM</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Bencongan Indah</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-secondary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Espresso being pulled into a white ceramic cup at Me.dia"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/5] md:aspect-[5/6]"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card border border-border rounded-2xl p-4 shadow-xl max-w-[220px]">
              <div className="text-xs uppercase tracking-widest text-primary mb-1">Today's brew</div>
              <div className="font-display text-lg">Caramel Latte</div>
              <div className="text-xs text-muted-foreground mt-1">Rich, smooth, signature.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-secondary text-secondary-foreground py-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>· Caramel Latte</span>
              <span className="text-primary">· Iced Cappuccino</span>
              <span>· Coffee Lemonade</span>
              <span className="text-primary">· Hazelnut Latte</span>
              <span>· Affogato</span>
              <span className="text-primary">· Donat Keju</span>
              <span>· Hot Cafe Latte</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </section>

      {/* SIGNATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3">Signatures</div>
            <h2 className="font-display text-4xl md:text-5xl max-w-md">The drinks people come back for.</h2>
          </div>
          <Link to="/menu" className="text-sm font-medium inline-flex items-center gap-2 hover:text-primary transition-colors">
            Full menu <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Caramel Latte", price: "Rp 32K", img: latteImg, note: "Silky, sweet, signature pour." },
            { name: "Iced Cappuccino", price: "Rp 30K", img: heroImg, note: "Bold espresso over cold foam." },
            { name: "Affogato", price: "Rp 35K", img: beansImg, note: "Hot shot meets cold vanilla." },
          ].map((d) => (
            <article key={d.name} className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.note}</p>
                </div>
                <span className="text-primary font-medium text-sm whitespace-nowrap">{d.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={interiorImg} alt="Inside Me.dia coffee shop" loading="lazy" width={1400} height={1000} className="rounded-3xl object-cover w-full aspect-[4/3]" />
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-3">The Place</div>
          <h2 className="font-display text-4xl md:text-5xl">A comfy place to chill & hang out.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Warm light, plants, and the gentle hiss of an espresso machine. We split the room with an invisible door — smoking and non-smoking, both air-conditioned, both welcome.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-y-4 text-sm">
            {["Dine-in", "Kerbside pickup", "Delivery", "Smoking area (AC)", "Prayer room", "Outdoor seating"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />{f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-accent/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-primary mb-3">Word of mouth</div>
            <h2 className="font-display text-4xl md:text-5xl">4.6 from 280 reviews.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { q: "What a comfy place to chill & hang out — affordable price 10/10 love it.", a: "Local Guide" },
              { q: "Authentic drinks menu to be honest, rich flavour in the right combination.", a: "Muhamad Farhan" },
              { q: "Cozy place with extraordinary coffee and various menu.", a: "muhbrohim" },
            ].map((r, i) => (
              <figure key={i} className="bg-card border border-border rounded-3xl p-8">
                <div className="flex gap-1 text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="font-display text-xl leading-snug">"{r.q}"</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">— {r.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-12 md:p-16">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Come for the coffee, stay <span className="text-primary italic">a while.</span>
            </h2>
            <div className="md:text-right">
              <p className="text-secondary-foreground/80 mb-6">Open daily until midnight. Walk in, dine in, or take it to go.</p>
              <Link to="/visit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-all hover:gap-3">
                Get directions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
