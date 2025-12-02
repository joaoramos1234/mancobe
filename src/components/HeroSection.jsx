export default function HeroSection() {
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
            A sua casa ou negócio protegido, limpo e valorizado.
            <br />
            Serviço premium, execução rápida e resultados comprovados.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-3xl text-lg md:text-xl bg-main-blue hover:bg-light-blue duration-300">
              Pedir Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}