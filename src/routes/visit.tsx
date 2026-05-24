import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Car, ShoppingBag, Utensils, Instagram } from "lucide-react";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
});


type Branch = {
  name: string;
  tag: string;
  address: string;
  hours: string;
  phone: string;
  mapsQuery: string;
  services: { icon: React.ReactNode; label: string }[];
  note?: string;
};

const branches: Branch[] = [
  {
    name: "Me.dia Coffee & Roastery",
    tag: "Bencongan Indah",
    address: "Jl. Palem Raja Raya, Bencongan Indah, Kec. Kelapa Dua, Kab. Tangerang, Banten 15810",
    hours: "Buka tiap hari · tutup jam 12 malam",
    phone: "0823-2323-9036",
    mapsQuery: "Me.dia+Coffee+Roastery+Palem+Raja+Raya+Bencongan+Indah+Tangerang",
    services: [
      { icon: <Utensils size={14} />, label: "Dine-in" },
      { icon: <Car size={14} />, label: "Kerbside" },
      { icon: <ShoppingBag size={14} />, label: "Delivery" },
    ],
    note: "Roastery utama — small-batch roasting, invisible door buat area smoking & non-smoking.",
  },
  {
    name: "Me.Dia Coffee and Space",
    tag: "Sukasari",
    address: "Jl. Ir. Sutami No.18, RT.005/RW.011, Sukasari, Kec. Tangerang, Kota Tangerang, Banten 15118",
    hours: "Buka tiap hari · tutup jam 12 malam",
    phone: "0823-2323-9036",
    mapsQuery: "Me.Dia+Coffee+and+Space+Jl+Ir+Sutami+Sukasari+Tangerang",
    services: [
      { icon: <Utensils size={14} />, label: "Dine-in" },
      { icon: <ShoppingBag size={14} />, label: "Bawa pulang" },
    ],
    note: "Outdoor luas & asri buat nongkrong + ngerokok, indoor adem ber-AC. Banyak colokan, ada board game & gitar.",
  },
];

function VisitPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-14">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Mampir</div>
        <h1 className="font-display text-5xl md:text-6xl">Yuk, mampir!</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Sekarang ada <span className="text-foreground font-medium">dua kedai</span> di Tangerang — pilih yang paling deket sama kamu.
        </p>
      </div>

      <div className="space-y-16">
        {branches.map((b, idx) => (
          <article key={b.name} className="grid lg:grid-cols-5 gap-8 items-start">
            <div className={`lg:col-span-2 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary mb-2">Kedai #{idx + 1} · {b.tag}</div>
                <h2 className="font-display text-3xl md:text-4xl">{b.name}</h2>
                {b.note && <p className="mt-3 text-muted-foreground leading-relaxed">{b.note}</p>}
              </div>

              <InfoCard icon={<MapPin />} title="Alamat">{b.address}</InfoCard>
              <InfoCard icon={<Clock />} title="Jam Buka">{b.hours}</InfoCard>
              <InfoCard icon={<Phone />} title="Hubungi">
                <a href={`tel:${b.phone.replace(/-/g, "")}`} className="hover:text-primary transition-colors">{b.phone}</a>
              </InfoCard>

              <div className="flex flex-wrap gap-2 pt-1">
                {b.services.map((s) => (
                  <Pill key={s.label} icon={s.icon}>{s.label}</Pill>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-3 rounded-3xl overflow-hidden border border-border bg-muted aspect-[4/3] lg:aspect-auto min-h-[380px] ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <iframe
                title={`Lokasi ${b.name}`}
                src={`https://www.google.com/maps?q=${b.mapsQuery}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
            <Instagram size={18} />
          </span>
          <div>
            <div className="font-display text-xl">@me.dia.coffee</div>
            <div className="text-sm text-muted-foreground">Update menu & event paling kekinian ada di IG.</div>
          </div>
        </div>
        <a
          href="https://instagram.com/me.dia.coffee/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Follow IG
        </a>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center">{icon}</span>
        <h3 className="font-display text-xl">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium">
      {icon}{children}
    </div>
  );
}
