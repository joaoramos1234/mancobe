import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FiMail, FiCopy } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAProviders() {
  const [copied, setCopied] = useState(false);

  const email = "comercial.mancobe@gmail.com";
  const phoneIntl = "351968094981";
  const subject = "Pedido de Orçamento";
  const body = "Olá,\nGostaria de receber um orçamento para...";

  const encoded = {
    to: encodeURIComponent(email),
    subject: encodeURIComponent(subject),
    body: encodeURIComponent(body),
  };

  const providers = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encoded.to}&su=${encoded.subject}&body=${encoded.body}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?to=${encoded.to}&subject=${encoded.subject}&body=${encoded.body}`,
  };

  function openProvider(providerUrl) {
    try {
      window.open(providerUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Erro ao abrir provider:", err);
    }
  }

  async function copyEmailToClipboard() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar para clipboard:", err);
      setCopied(false);
    }
  }

  const whatsappHref = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(
    "Olá, gostaria de pedir um orçamento para limpeza do meu imóvel."
  )}`;

  return (
    <section id="cta" className="py-16 px-6 md:px-20 bg-main-blue scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">Peça já o seu orçamento</h2>
        <p className="text-white mb-8 text-base sm:text-lg">
          Escolha como prefere contactar-nos — Gmail, Outlook, copiar email ou WhatsApp.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <button
            type="button"
            onClick={copyEmailToClipboard}
            aria-label="Copiar email para a área de transferência"
            className="flex items-center justify-center w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold shadow hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          >
            <FiCopy className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>{copied ? "Email copiado!" : "Copiar email"}</span>
          </button>

          <button
            type="button"
            onClick={() => openProvider(providers.gmail)}
            aria-label="Abrir Gmail"
            className="flex items-center justify-center w-full px-4 py-3 bg-[#D14836] text-white rounded-lg font-semibold shadow hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D14836]/40"
          >
            <SiGmail className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>Gmail</span>
          </button>

          <button
            type="button"
            onClick={() => openProvider(providers.outlook)}
            aria-label="Abrir Outlook Web"
            className="flex items-center justify-center w-full px-4 py-3 bg-[#0078D4] text-white rounded-lg font-semibold shadow hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078D4]/40"
          >
            <FiMail className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>Outlook</span>
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp para pedir orçamento"
            className="flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700/40"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>

        
      </div>
    </section>
  );
}