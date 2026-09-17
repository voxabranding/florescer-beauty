import './ServicesMarquee.css';

export default function ServicesMarquee() {
  const services = [
    'Hair',
    'Mechas premium',
    'Exoplastia',
    'Unhas',
    'Design de Sobrancelha',
    'Spa dos pés',
    'Maquiagem',
    'Estética facial'
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
