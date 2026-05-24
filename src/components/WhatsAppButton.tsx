import React from "react";
import whatsappIcon from "@/assets/whatsapp.png";

/** Floating WhatsApp button visible on all pages */
export function WhatsAppButton() {
  const phone = "6282323239036";
  const message = encodeURIComponent(
    "Halo Me.dia Coffee, saya ingin reservasi/booking!",
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
}
