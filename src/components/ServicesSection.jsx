export default function ServicesSection() {
  const services = [
    { title: "Serviço 1", desc: "Descrição do serviço 1." },
    { title: "Serviço 2", desc: "Descrição do serviço 2." },
    { title: "Serviço 3", desc: "Descrição do serviço 3." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-12">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="rounded-2xl shadow-md p-6 bg-white">
            <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
