import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import './Results.css';

/**
 * Seção de resultados / transformações.
 * Renderiza SOMENTE quando há dados reais em siteConfig.results.
 * Não exibe imagens geradas por IA como trabalhos do salão.
 */
export default function Results() {
  const sectionRef = useScrollReveal();

  // Seção oculta quando não há resultados reais
  if (!siteConfig.results || siteConfig.results.length === 0) {
    return null;
  }

  return (
    <section className="results" aria-labelledby="results-title" ref={sectionRef}>
      <div className="container results__container">
        <div className="results__sidebar" data-reveal>
          <span className="section-eyebrow">Galeria</span>
          <h2 className="section-title" id="results-title">
            Transformações reais
          </h2>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary results__instagram-btn"
          >
            Ver mais no Instagram
          </a>
        </div>

        <div className="results__gallery-wrapper" data-reveal data-reveal-delay="1">
          <div className="results__gallery">
            {siteConfig.results.map((result, index) => (
              <article className="results__card" key={index}>
                <ImagePlaceholder className="results__card-image" style={{ aspectRatio: '3/5' }} />
                
                <button className="results__card-play" aria-label="Ver transformação">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div className="results__card-badge">
                  <span>{result.category || result.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
