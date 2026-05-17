import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Car, ShoppingBag, Utensils } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Me.dia — Bencongan Indah, Tangerang" },
      { name: "description", content: "Find Me.dia Coffee & Roastery at Jl. Palem Raja Raya, Bencongan Indah, Tangerang. Open daily until midnight. Dine-in, kerbside, delivery." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-14">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Visit</div>
        <h1 className="font-display text-5xl md:text-6xl">Come say hi.</h1>
        <p className="mt-4 text-muted-foreground text-lg">Walk in, take out, or have it delivered. Either way, the coffee's ready.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <InfoCard icon={<MapPin />} title="Address">
            Jl. Palem Raja Raya, Bencongan Indah,<br />
            Kec. Kelapa Dua, Kab. Tangerang, Banten 15810
          </InfoCard>
          <InfoCard icon={<Clock />} title="Hours">
            Open daily · closes 12:00 AM
          </InfoCard>
          <InfoCard icon={<Phone />} title="Call us">
            <a href="tel:082323239036" className="hover:text-primary transition-colors">0823-2323-9036</a>
          </InfoCard>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <Pill icon={<Utensils size={14} />}>Dine-in</Pill>
            <Pill icon={<Car size={14} />}>Kerbside</Pill>
            <Pill icon={<ShoppingBag size={14} />}>Delivery</Pill>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-border bg-muted aspect-[4/3] lg:aspect-auto min-h-[400px]">
          <iframe
            title="Me.dia location map"
            src="https://www.google.com/maps?q=Jl.+Palem+Raja+Raya+Bencongan+Indah+Tangerang&output=embed"
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
