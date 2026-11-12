import { Icon } from './Icon'
import { formatPrice } from '../data/properties'
import type { Property } from '../data/properties'

export function PropertyCard({ property }: { property: Property }) {
  const cover = property.images[0]
  const isHouse = property.category === 'house'
  const location = [property.neighborhood, property.city].filter(Boolean).join(' · ') || 'Localização sob consulta'
  const formattedArea = property.area.toLocaleString('pt-BR', {
    minimumFractionDigits: Number.isInteger(property.area) ? 0 : 2,
  })

  return (
    <article className="property-card">
      <a
        className="property-card-link"
        href={`#/imovel/${property.id}`}
        aria-label={`Ver detalhes de ${property.title}`}
      >
        <div className="property-cover">
          <img
            className={cover.collage ? 'collage-cover' : ''}
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
          />
          <span className={`purpose-badge ${property.purpose}`}>
            {property.purpose === 'sale' ? 'À venda' : 'Para alugar'}
          </span>
          <span className="photo-count"><Icon name="photos" />{property.images.length}</span>
        </div>

        <div className="property-card-body">
          <span className="property-category">{isHouse ? 'Casa' : 'Lote'} · Ref. {property.reference}</span>
          <h3>{property.title}</h3>
          <p className="property-location"><Icon name="pin" />{location}</p>

          <div className="property-specs">
            <div>
              <span><Icon name="area" />{formattedArea} m²</span>
              <small>{isHouse ? 'Área construída' : 'Área do terreno'}</small>
            </div>
            {isHouse ? (
              <>
                <div>
                  <span><Icon name="bed" />{property.bedrooms}</span>
                  <small>Quartos</small>
                </div>
                <div>
                  <span><Icon name="bath" />{property.bathrooms}</span>
                  <small>Banheiros</small>
                </div>
              </>
            ) : (
              <>
                {property.frontage !== undefined && (
                  <div>
                    <span><Icon name="area" />{property.frontage} m</span>
                    <small>Frente</small>
                  </div>
                )}
                <div>
                  <span><Icon name="house" /></span>
                  <small>Lote</small>
                </div>
              </>
            )}
          </div>
          <div className="card-footer">
            <div className="card-price">{formatPrice(property.price)}{property.purpose === 'rent' && property.price !== null && <small>/mês</small>}</div>
            <span className="card-action" aria-hidden="true"><Icon name="arrow" /></span>
          </div>
        </div>
      </a>
    </article>
  )
}
