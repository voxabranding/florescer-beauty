import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

/**
 * Seção de depoimentos.
 * Renderiza SOMENTE quando há depoimentos reais em siteConfig.testimonials.
 * Não inventa depoimentos.
 */
export default function Testimonials() {
  const sectionRef = useScrollReveal();

  // Seção oculta quando não há depoimentos reais
  if (!siteConfig.testimonials || siteConfig.testimonials.length === 0) {
    return null;
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} aria-hidden="true">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title" ref={sectionRef}>
      <div className="container">
        <div className="testimonials__header" data-reveal>
          <span className="section-eyebrow">Clientes</span>
          <h2 className="section-title" id="testimonials-title">
            Quem já veio,<br />conta como foi.
          </h2>
        </div>

        <div className="testimonials__carousel-wrapper" data-reveal data-reveal-delay="1">
          <div className="testimonials__carousel">
            {siteConfig.testimonials.map((item, index) => (
              <article
                className="testimonial-card"
                key={index}
                role="listitem"
              >
                {item.rating && (
                  <div
                    className="testimonial-card__stars"
                    role="img"
                    aria-label={`${item.rating} de 5 estrelas`}
                  >
                    {renderStars(item.rating)}
                  </div>
                )}
                <blockquote className="testimonial-card__text">
                  {item.text}
                </blockquote>
                <cite className="testimonial-card__author">{item.name}, AVALIAÇÃO NO GOOGLE</cite>
              </article>
            ))}
          </div>
          
          <div className="testimonials__pagination" aria-hidden="true">
            {siteConfig.testimonials.map((_, index) => (
              <span key={index} className="testimonials__dot"></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
