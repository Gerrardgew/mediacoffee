import { createFileRoute } from "@tanstack/react-router";
import beansImg from "@/assets/beans.jpg";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Me.dia Coffee & Roastery" },
      { name: "description", content: "Me.dia roasts beans in small batches and serves them in a warm, welcoming space in Bencongan Indah, Tangerang." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">About Me.dia</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1]">A neighborhood roastery with a soft spot for strangers.</h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We started Me.dia to make great coffee feel close to home — accessible, honest, and warm. Our roaster runs in small batches. Our doors stay open late. And our tables are yours for as long as you want them.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-4">
        <img src={beansImg} alt="Freshly roasted beans" loading="lazy" className="rounded-3xl aspect-square object-cover w-full" />
        <img src={interiorImg} alt="Me.dia interior" loading="lazy" className="rounded-3xl aspect-square object-cover w-full" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-12">
        {[
          { n: "01", t: "Source", d: "We pick beans from farms we trust — single-origin and seasonal blends." },
          { n: "02", t: "Roast", d: "Small-batch roasting in-house, dialed for the drinks we serve." },
          { n: "03", t: "Serve", d: "Pulled, poured, and handed across the bar with a smile." },
        ].map((s) => (
          <div key={s.n}>
            <div className="font-display text-primary text-5xl mb-4">{s.n}</div>
            <h3 className="font-display text-2xl mb-2">{s.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
