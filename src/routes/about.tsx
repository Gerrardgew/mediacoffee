import { createFileRoute } from "@tanstack/react-router";
import beansImg from "@/assets/beans.jpg";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang — Me.dia Coffee and Space" },
      { name: "description", content: "Me.dia Coffee and Space di Sukasari, Tangerang — indoor adem & estetik, outdoor rimbun, kopi bold dan ramah di kantong." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Tentang Me.dia</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1]">Roastery tetangga yang ramah sama siapa aja.</h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Kami bikin Me.dia biar ngopi enak terasa kayak di rumah — accessible, jujur, dan hangat. Roaster kami jalan small-batch. Pintunya buka sampai malam. Mejanya buat kamu, mau berapa lama pun nggak masalah.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-4">
        <img src={beansImg} alt="Biji kopi baru di-roasting" loading="lazy" className="rounded-3xl aspect-square object-cover w-full" />
        <img src={interiorImg} alt="Interior Me.dia" loading="lazy" className="rounded-3xl aspect-square object-cover w-full" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-12">
        {[
          { n: "01", t: "Source", d: "Biji kopi kami pilih dari petani yang kami percaya — single-origin & blend musiman." },
          { n: "02", t: "Roast", d: "Roasting in-house small-batch, di-tune buat minuman yang kami sajikan." },
          { n: "03", t: "Serve", d: "Ditarik, dituang, diserahin lewat bar sambil senyum tulus." },
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
