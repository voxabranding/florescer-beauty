import './ServicesMarquee.css';

export default function ServicesMarquee() {
  const services = [
    'Manicure',
    'Estética Corporal',
    'Cortes & Penteados',
    'Progressiva',
    'Nails Designer'
  ];

  // Duplicar a lista para efeito de loop infinito
  const loopItems = [...services, ...services, ...services];

  return (
    <div className="marquee" aria-label="Nossos principais serviços">
      <div className="marquee__track">
        {loopItems.map((service, index) => (
          <div className="marquee__item" key={index} aria-hidden={index >= services.length}>
            <span className="marquee__text">{service}</span>
            <span className="marquee__dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
