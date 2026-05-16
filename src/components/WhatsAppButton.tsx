import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "+2349063468136";
  const message = "Hello House of Bowgan, I'd like to inquire about your event planning services.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
      <span className="absolute -top-2 -right-2 bg-brand-gold flex h-3 w-3 rounded-full animate-ping"></span>
    </a>
  );
}
