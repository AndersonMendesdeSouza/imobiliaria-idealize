import houseFacade from '../assets/casas/casa1/image.png'
import houseLiving from '../assets/casas/casa1/image copy 2.png'
import houseKitchen from '../assets/casas/casa1/image copy.png'
import cityFacade from '../assets/casas/casa2/image copy 3.png'
import cityOverview from '../assets/casas/casa2/image copy.png'
import cityDriveway from '../assets/casas/casa2/image copy 4.png'
import cityServiceArea from '../assets/casas/casa2/image copy 5.png'

export type PropertyCategory = 'house' | 'land'

export interface PropertyImage {
  src: string
  alt: string
  collage?: boolean
}

export interface Property {
  id: string
  reference: string
  title: string
  category: PropertyCategory
  purpose: 'sale' | 'rent'
  price: number
  neighborhood: string
  city: string
  area: number
  bedrooms?: number
  bathrooms?: number
  parking?: number
  frontage?: number
  description: string
  features: string[]
  images: PropertyImage[]
  imageSource?: { label: string; url: string }
}

export const contact = {
  whatsapp: 'https://wa.me/556434441126',
  phone: '(64) 3444-1126',
  instagram: 'https://www.instagram.com/idealizenegociosimobiliarios/',
}

export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL', maximumFractionDigits: 0,
}).format(price)

const houseImages: PropertyImage[] = [
  { src: houseFacade, alt: 'Fachada de casa térrea com portão de garagem e telhado cerâmico' },
  { src: houseLiving, alt: 'Sala com piso cerâmico, janela e acesso à cozinha' },
  { src: houseKitchen, alt: 'Cozinha com armários planejados, bancada em granito e cooktop' },
]
const cityImages: PropertyImage[] = [
  { src: cityFacade, alt: 'Fachada de casa com varanda, escada de acesso e portão metálico' },
  { src: cityOverview, alt: 'Vista aérea da casa com telhado cerâmico e quintal pavimentado' },
  { src: cityDriveway, alt: 'Quintal pavimentado com acesso ao portão da rua' },
  { src: cityServiceArea, alt: 'Área de serviço externa com tanque e bancada revestida' },
]

const landImages: PropertyImage[] = [
  { src: '/images/lote-1.jpg', alt: 'Terreno gramado próximo a uma área arborizada, imagem ilustrativa' },
  { src: '/images/lote-2.jpg', alt: 'Vista de terreno aberto com árvores ao fundo, imagem ilustrativa' },
  { src: '/images/lote-3.jpg', alt: 'Lote residencial entre casas, imagem ilustrativa' },
  { src: '/images/lote-4.jpg', alt: 'Terreno com vista para uma rua residencial, imagem ilustrativa' },
  { src: '/images/lote-5.jpg', alt: 'Área verde e lago em um entorno residencial, imagem ilustrativa' },
]

// Valores, localização e medidas são fictícios. As fotos das casas foram fornecidas para a demonstração.
export const properties: Property[] = [
  {
    id: 'casa-lago-das-brisas', reference: 'ID-001', title: 'Casa com cozinha planejada', category: 'house', purpose: 'sale',
    price: 1250000, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 320, bedrooms: 3, bathrooms: 4, parking: 2,
    description: 'Uma casa térrea com fachada em tons acolhedores, sala com iluminação natural e cozinha com armários planejados, bancada em granito e cooktop. As fotos apresentam a fachada e os ambientes internos para você conhecer melhor os espaços. Este anúncio é demonstrativo; valores, localização, medidas e quantidades de cômodos são fictícios.',
    features: ['Cozinha planejada', 'Bancada em granito', 'Cooktop', 'Sala de estar', 'Portão de garagem', 'Piso cerâmico'], images: houseImages,
  },
  {
    id: 'casa-no-centro', reference: 'ID-002', title: 'Casa no Centro', category: 'house', purpose: 'sale',
    price: 420000, neighborhood: 'Centro', city: 'Buriti Alegre, GO', area: 180, bedrooms: 3, bathrooms: 2, parking: 2,
    description: 'Uma casa com telhado cerâmico, varanda na entrada e quintal pavimentado. A galeria reúne a fachada, uma vista aérea, o acesso ao portão e a área de serviço externa com tanque. Este anúncio é demonstrativo; valores, localização, medidas e quantidades de cômodos são fictícios.',
    features: ['Quintal pavimentado', 'Varanda de entrada', 'Área de serviço', 'Tanque com bancada', 'Portão metálico', 'Telhado cerâmico'], images: cityImages,
  },
  {
    id: 'lote-residencial-brisas', reference: 'ID-005', title: 'Lote Residencial Brisas', category: 'land', purpose: 'sale',
    price: 185000, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 450, frontage: 15,
    description: 'Um novo projeto começa com a escolha do lugar. Este lote demonstrativo representa uma oportunidade para planejar uma casa com espaço externo e ambientes do seu jeito. As imagens são ilustrativas e não representam um terreno anunciado em Buriti Alegre.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para jardim', 'Projeto personalizado'], images: [landImages[0], landImages[1], landImages[3]],
    imageSource: { label: 'Premium Imóveis Gramado', url: 'https://www.premiumimoveisgramado.com.br/imovel/venda-terrenos-residenciais-em-gramado/terreno-com-mais-de-900-metros/29290' },
  },
  {
    id: 'lote-jardim-dos-buritis', reference: 'ID-006', title: 'Lote Jardim dos Buritis', category: 'land', purpose: 'sale',
    price: 120000, neighborhood: 'Jardim dos Buritis', city: 'Buriti Alegre, GO', area: 360, frontage: 12,
    description: 'Liberdade para desenhar o seu próximo capítulo. Um exemplo de terreno residencial com espaço para construir e cultivar novas histórias. Valores, localização e medidas são fictícios; as fotografias mostram um terreno ilustrativo de outra região.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para quintal', 'Projeto personalizado'], images: [landImages[1], landImages[3], landImages[0]],
    imageSource: { label: 'Premium Imóveis Gramado', url: 'https://www.premiumimoveisgramado.com.br/imovel/venda-terrenos-residenciais-em-gramado/terreno-com-mais-de-900-metros/29290' },
  },
  {
    id: 'lote-vista-verde', reference: 'ID-007', title: 'Lote Vista Verde', category: 'land', purpose: 'sale',
    price: 210000, neighborhood: 'Residencial Vista Verde', city: 'Buriti Alegre, GO', area: 600, frontage: 20,
    description: 'Mais espaço para imaginar, planejar e construir. Este anúncio de exemplo apresenta um lote residencial para quem deseja uma casa com área verde. As fotos são apenas uma referência visual e não correspondem à localização e às medidas fictícias deste anúncio.',
    features: ['Uso residencial', 'Área verde', 'Espaço para lazer', 'Projeto personalizado'], images: [landImages[2], landImages[4]],
    imageSource: { label: 'Casas em Gramado', url: 'https://casasemgramado.com.br/terreno-lote-em-condominio/a-venda/gramado-rs' },
  },
  {
    id: 'lote-novo-horizonte', reference: 'ID-008', title: 'Lote Novo Horizonte', category: 'land', purpose: 'sale',
    price: 145000, neighborhood: 'Novo Horizonte', city: 'Buriti Alegre, GO', area: 400, frontage: 16,
    description: 'O endereço de uma nova fase começa com uma possibilidade. Este terreno faz parte do catálogo demonstrativo. A fotografia é ilustrativa, e os valores e as características foram criados para apresentar a experiência de navegação.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para lazer', 'Projeto personalizado'], images: [landImages[3], landImages[0], landImages[1]],
    imageSource: { label: 'Premium Imóveis Gramado', url: 'https://www.premiumimoveisgramado.com.br/imovel/venda-terrenos-residenciais-em-gramado/terreno-com-mais-de-900-metros/29290' },
  },
]
