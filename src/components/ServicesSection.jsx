import telhadosImage from '../assets/Limpeza_telhados.jpeg';
import exterioresImage from '../assets/Limpeza_exteriores.jpeg';
import vidrosImage from '../assets/Limpeza_vidros.jpeg';

export default function ServicesSection() {
  const services = [
    {
      title: "Limpeza de Telhados",
      image: telhadosImage,
      desc:
        "Eliminamos musgo, líquenes e resíduos que danificam o telhado ao longo do tempo. Aumente a durabilidade do seu telhado e melhore a imagem da sua casa sem necessidade de obras.",
    },
    {
      title: "Limpeza de Exteriores",
      image: exterioresImage,
      desc:
        "Removemos sujidade, manchas, algas e poluição de fachadas, muros, pavimentos e garagens.\nDevolva o aspeto original ao seu imóvel com uma limpeza profunda, segura e eficaz.",
    },
    {
      title: "Lavagem de Vidros",
      image: vidrosImage,
      desc:
        "Limpeza profissional de vidros, janelas e montras, interiores e exteriores.\nMais luminosidade, melhor visibilidade e um acabamento impecável, sem manchas nem marcas.",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-gray-100"
      id="services"
      aria-label="Services section"
    >
      <h2 className="text-7xl font-bold text-center mb-16 text-main-blue">Nossos Serviços</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            tabIndex={0}
            className={
              "rounded-2xl shadow-md p-6 bg-white transform transition " +
              "duration-500 ease-out will-change-transform " +
              "hover:scale-105 hover:-translate-y-1 hover:shadow-xl " +
              "focus:scale-105 focus:-translate-y-1 focus:shadow-xl " +
              "border-2 border-transparent hover:border-black focus:border-black transition-colors"+
              "overflow-hidden"
        
            }
            role="article"
            aria-label={s.title}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-dark-blue">{s.title}</h3>

            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-48 object-cover transform transition duration-300 ease-out hover:scale-110"
              />
            </div>

            <p className="whitespace-pre-line text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}