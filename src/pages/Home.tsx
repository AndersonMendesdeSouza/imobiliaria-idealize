import { Icon } from '../components/Icon'
import { PropertyCarousel } from '../components/PropertyCarousel'
import { contact, properties } from '../data/properties'
import type { PropertyCategory } from '../data/properties'
import heroImage from '../assets/hero-idealize.jpg'
import aboutImage from '../assets/casas/casa2/image copy.png'

export type PropertyFilter = 'all' | PropertyCategory

interface HomeProps {
  filter: PropertyFilter
  onFilterChange: (filter: PropertyFilter) => void
}

export function Home({ filter, onFilterChange }: HomeProps) {
  const houses = properties.filter((property) => property.category === 'house')
  const lands = properties.filter((property) => property.category === 'land')
  const visibleProperties = properties.filter((property) => filter === 'all' || property.category === filter)

  return (
    <main id="conteudo" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="Imagem ilustrativa de uma casa moderna ao entardecer, com jardim e iluminação acolhedora" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-eyebrow"><Icon name="pin" />Buriti Alegre e região · GO</span>
            <h1 id="hero-title">Seu próximo lar<br />começa <em>aqui</em>.</h1>
            <p>Encontre o imóvel ideal para viver,<br className="hero-description-break" /> investir e realizar seus sonhos.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#imoveis"><Icon name="house" />Explorar imóveis<Icon name="arrow" /></a>
              <a className="button hero-contact-link" href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" />Fale com um corretor</a>
            </div>
          </div>
          <div className="hero-services" id="servicos" role="region" aria-label="Serviços da imobiliária">
            <div><Icon name="house" /><span>Compra e<br />venda</span></div>
            <div><Icon name="key" /><span>Locação e<br />administração</span></div>
            <div><Icon name="compass" /><span>Avaliação<br />imobiliária</span></div>
            <div><Icon name="pin" /><span>Atendimento<br />local e regional</span></div>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M-10 55C240-45 485 105 820 57S1210-5 1450 40" stroke="currentColor" strokeWidth="2" /></svg>
      </section>

      <section className="properties-section section-space" id="imoveis" aria-labelledby="properties-title">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Explore as possibilidades</span><h2 id="properties-title">Qual é o seu próximo plano?</h2></div>
            <p>Conheça nossa seleção de casas e lotes.<br />O seu novo endereço pode estar aqui.</p>
          </div>
          <div className="catalog-toolbar">
            <div className="category-tabs" role="group" aria-label="Filtrar por tipo de imóvel">
              <button type="button" aria-pressed={filter === 'all'} onClick={() => onFilterChange('all')}>
                Todos<span>{properties.length.toString().padStart(2, '0')}</span>
              </button>
              <button type="button" aria-pressed={filter === 'house'} onClick={() => onFilterChange('house')}>
                <Icon name="house" />Casas<span>{houses.length.toString().padStart(2, '0')}</span>
              </button>
              <button type="button" aria-pressed={filter === 'land'} onClick={() => onFilterChange('land')}>
                <Icon name="area" />Lotes<span>{lands.length.toString().padStart(2, '0')}</span>
              </button>
            </div>
            <span className="catalog-count" role="status">{visibleProperties.length} imóveis para conhecer</span>
          </div>
          <div className="property-groups">
            {(filter === 'all' || filter === 'house') && <PropertyCarousel category="house" properties={houses} />}
            {(filter === 'all' || filter === 'land') && <PropertyCarousel category="land" properties={lands} />}
          </div>
          <div className="catalog-bottom"><span className="demo-note">Catálogo demonstrativo · Valores e características fictícios.</span></div>
        </div>
      </section>

      <section className="about-section section-space" id="sobre" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-visual"><img src={aboutImage} alt="Vista aérea de casa com telhado cerâmico e quintal pavimentado" loading="lazy" /><div className="about-image-note"><Icon name="house" /><span>Mais que um imóvel.<br /><strong>Um lugar para os seus planos.</strong></span></div></div>
          <div className="about-copy">
            <span className="eyebrow">Conheça a imobiliária</span>
            <h2 id="about-title">Perto de você.<br />Do começo à <em>chave.</em></h2>
            <p>Escolher um imóvel é uma decisão importante. Ter alguém que conhece a região e entende o que você procura faz toda a diferença.</p>
            <p>Nossa equipe atua em Buriti Alegre, com compra, venda, locação e administração de imóveis. Uma conversa simples pode ser o começo do seu próximo plano.</p>
            <div className="about-services">
              <div><Icon name="shield" /><span>Clareza em cada etapa</span></div>
              <div><Icon name="pin" /><span>Conhecimento da nossa região</span></div>
              <div><Icon name="key" /><span>Atendimento próximo de você</span></div>
            </div>
            <a className="text-link" href={contact.whatsapp} target="_blank" rel="noreferrer">Converse com a nossa equipe<Icon name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="container contact-inner">
          <div><span className="eyebrow">Vamos dar o próximo passo?</span><h2 id="contact-title">Você conta os planos.<br /><em>A gente encontra o lugar.</em></h2><p>Fale com a nossa equipe e descubra as possibilidades para você.</p></div>
          <a className="button button-primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" />Fale conosco<Icon name="arrow" /></a>
        </div>
      </section>
    </main>
  )
}
