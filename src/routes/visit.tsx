import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ShoppingBag, Utensils } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Mampir ke Me.dia — Sukasari, Tangerang" },
      { name: "description", content: "Me.dia Coffee and Space di Jl. Ir. Sutami No.18, Sukasari, Kota Tangerang. Buka tiap hari sampai tengah malam. Makan di tempat & bawa pulang." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-14">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Mampir</div>
        <h1 className="font-display text-5xl md:text-6xl">Yuk, mampir!</h1>
        <p className="mt-4 text-muted-foreground text-lg">Walk-in, take away, atau delivery — kopinya udah siap nungguin kamu.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <InfoCard icon={<MapPin />} title="Alamat">
            Jl. Ir. Sutami No.18, RT.005/RW.011,<br />
            Sukasari, Kec. Tangerang, Kota Tangerang, Banten 15118
          </InfoCard>
          <InfoCard icon={<Clock />} title="Jam Buka">
            Buka tiap hari · tutup pukul 00.00
          </InfoCard>
          <InfoCard icon={<Phone />} title="Hubungi Kami">
            <a href="tel:082323239036" className="hover:text-primary transition-colors">0823-2323-9036</a>
          </InfoCard>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Pill icon={<Utensils size={14} />}>Makan di tempat</Pill>
            <Pill icon={<ShoppingBag size={14} />}>Bawa pulang</Pill>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-border bg-muted aspect-[4/3] lg:aspect-auto min-h-[400px]">
          <iframe
            title="Lokasi Me.dia Coffee and Space"
            src="https://www.google.com/maps?q=Me.dia+Coffee+and+Space+Jl.+Ir.+Sutami+Sukasari+Tangerang&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center">{icon}</span>
        <h2 className="font-display text-xl">{title}</h2>
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
