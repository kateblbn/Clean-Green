import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
    href="https://wa.me/4793454461?text=Hei!%20Jeg%20%C3%B8nsker%20%C3%A5%20bestille%20rengj%C3%B8ring." 
     target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} color="white" />
    </a>
  )
}