import { PhotoGallery } from '../components/PhotoGallery'
import { Icon } from '../components/Icon'
import { Brand } from '../components/Brand'
import { contact, formatPrice } from '../data/properties'
import type { Property } from '../data/properties'

export function PropertyDetails({ property }: { property: Property }) {
  const message = `Olá! Tenho interesse no imóvel ${property.title}, referência ${property.reference}. Gostaria de mais informações.`
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(message)}`
  const isHouse = property.category === 'house'
  const isRent = property.purpose === 'rent'
  const location = [property.neighborhood, property.city].filter(Boolean).join(' · ') || 'Localização sob consulta'
  const formattedArea = property.area.toLocaleString('pt-BR', {
    minimumFractionDigits: Number.isInteger(property.area) ? 0 : 2,
  })

  return (
    <main id="conteudo" tabIndex={-1} className="details-page container">
      <nav className="detail-breadcrumb" aria-label="Localização na página">
        <a className="detail-back" href="#imoveis"><Icon name="arrow" className="rotate" />Voltar aos imóveis</a>
        <span>Idealize <span aria-hidden="true">/</span> {isHouse ? 'Casas' : 'Lotes'} <span aria-hidden="true">/</span> {property.reference}</span>
      </nav>

      <div className="detail-content">
        <div className="detail-main">
          <PhotoGallery images={property.images} title={property.title} />
          {property.imageSource && (
            <p className="image-credit">
              Imagens ilustrativas de outra região · Fonte:{' '}
              <a href={property.imageSource.url} target="_blank" rel="noreferrer">{property.imageSource.label}</a>
            </p>
          )}
          <div className="detail-specs">
            <div>
              <Icon name="area" />
              <strong>{formattedArea} m²</strong>
              <span>{isHouse ? 'Área construída' : 'Área do terreno'}</span>
            </div>
            {isHouse ? (
              <>
                <div>
                  <Icon name="bed" />
                  <strong>{property.bedrooms}</strong>
                  <span>Quartos</span>
                </div>
                <div>
                  <Icon name="bath" />
                  <strong>{property.bathrooms}</strong>
                  <span>Banheiros</span>
                </div>
                <div>
                  <Icon name="car" />
                  <strong>{property.parking}</strong>
                  <span>Vagas de garagem</span>
                </div>
              </>
            ) : (
              <>
                {property.frontage !== undefined && (
                  <div>
                    <Icon name="area" />
                    <strong>{property.frontage} m</strong>
                    <span>Frente do lote</span>
                  </div>
                )}
                <div>
                  <Icon name="house" />
                  <strong>Lote</strong>
                  <span>Tipo de imóvel</span>
                </div>
              </>
            )}
          </div>

          <section className="detail-description" aria-labelledby="description-title">
            <span className="eyebrow">Conheça o imóvel</span>
            <h2 id="description-title">Imagine seus planos aqui.</h2>
            <p>{property.description}</p>
          </section>

          <section className="features-section" aria-labelledby="features-title">
            <h3 id="features-title">O que este imóvel oferece</h3>
            <ul>
              {property.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="location-box" aria-label="Localização aproximada">
            <span className="location-box-icon"><Icon name="pin" /></span>
            <div>
              <h3>Conheça a região</h3>
              <p>{location}</p>
              <small>Consulte a equipe para saber o endereço completo.</small>
            </div>
          </section>
        </div>

        <aside className="price-panel" aria-label="Resumo do imóvel e contato">
          <div className="detail-labels">
            <span className={`purpose-badge ${property.purpose}`}>{isRent ? 'Para alugar' : 'À venda'}</span>
            <span className="detail-category">{isHouse ? 'Casa' : 'Lote'}</span>
          </div>
          <div className="detail-heading">
            <h1>{property.title}</h1>
            <p className="detail-location"><Icon name="pin" />{location}</p>
            <span className="reference">Referência {property.reference}</span>
          </div>
          <span className="price-label">{isRent ? 'Aluguel mensal' : 'Valor do imóvel'}</span>
          <div className="detail-price">
            {formatPrice(property.price)}
            {isRent && property.price !== null && <small>/mês</small>}
          </div>
          <div className="price-information">
            <Icon name="house" />
            <span>{isRent ? 'Consulte as condições de locação' : 'Consulte as condições de compra'}</span>
          </div>
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            Tenho interesse
            <Icon name="arrow" />
          </a>
          <p className="contact-hint">
            A mensagem já vai com o nome do imóvel e a referência <strong>{property.reference}</strong>.
          </p>
          <div className="advisor">
            <Brand />
            <span>Atendimento em Buriti Alegre e região</span>
            <a href={`tel:+55${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
          </div>
          <p className="demo-disclaimer">
            {property.disclaimer ?? 'Anúncio demonstrativo. Preço, localização e características são fictícios.'}
          </p>
        </aside>
      </div>
    </main>
  )
}
