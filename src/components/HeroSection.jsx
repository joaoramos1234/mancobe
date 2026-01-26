import React from "react";

export default function HeroSection() {
  // Scroll smoothly to #cta, compensating for the fixed header height and focusing the target for accessibility.
  function handleScrollToCta(e) {
    if (e) e.preventDefault();

    if (typeof window === "undefined") return;

    const targetId = "cta";
    const el = document.getElementById(targetId);
    if (!el) return;

    // Find the fixed nav (we used aria-label="Main navigation" in your Navbar)
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    const headerHeight = nav ? nav.offsetHeight : 0;

    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const extraOffset = 12; // px of breathing room between the section and the header
    const targetY = elementTop - headerHeight - extraOffset;

    window.scrollTo({ top: targetY, behavior: "smooth" });

    // focus the target for accessibility without causing another scroll
    const hadTabIndex = el.hasAttribute && el.hasAttribute("tabindex");
    if (!hadTabIndex) el.setAttribute("tabindex", "-1");
    el.focus && el.focus({ preventScroll: true });
    if (!hadTabIndex) el.removeAttribute("tabindex");
  }

  return (
    <section className="w-full relative hero-css overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0" />

      {/* Use the same container padding as the navbar so left edges line up */}
      <div className="container mx-auto relative z-10 flex items-center justify-center lg:justify-start min-h-screen px-6 md:px-20 font-bold text-white">
        <div className="w-full max-w-3xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 leading-tight whitespace-normal break-words">
            Soluções Profissionais de Lavagem e Impermeabilização
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 font-medium md:mb-10 leading-relaxed whitespace-normal break-words">
            Empresa especializada em limpezas de exteriores, com foco na segurança, qualidade e resultados visíveis
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleScrollToCta}
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-3xl text-lg md:text-xl bg-main-blue hover:bg-light-blue duration-300"
              aria-label="Pedir orçamento — ir para a secção de contactos"
              type="button"
            >
              Pedir Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}