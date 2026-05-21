import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Me<span className="text-primary">.</span>dia</div>
          <p className="mt-3 text-secondary-foreground/70 max-w-sm leading-relaxed">
            Coffee and Space — pojok santai di Sukasari, Tangerang. Indoor adem, outdoor rimbun, kopinya bold.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Jelajah</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Tentang</Link></li>
            <li><Link to="/visit" className="hover:text-primary transition-colors">Mampir</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Cari Kami</div>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /><span>Jl. Ir. Sutami No.18, Sukasari, Kota Tangerang, Banten 15118</span></li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /><span>0823-2323-9036</span></li>
            <li className="flex gap-2"><Instagram size={16} className="mt-0.5 shrink-0" /><span>@mediacoffee</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-secondary-foreground/60 flex justify-between">
          <span>© {new Date().getFullYear()} Me.dia Coffee & Roastery</span>
          <span>Buka tiap hari · sampai jam 12 malam</span>
        </div>
      </div>
    </footer>
  );
}
