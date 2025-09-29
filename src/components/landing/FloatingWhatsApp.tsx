import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/923337783611"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with +92 333 7783611"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};