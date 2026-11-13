import { useState } from 'react'
import { Brand } from './Brand'
import { Icon } from './Icon'
import { contact } from '../data/properties'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = !window.location.hash || window.location.hash === '#/'
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className={menuOpen ? 'header-nav is-open' : 'header-nav'} id="main-navigation" aria-label="Navegação principal">
          <a href="#/" aria-current={isHome ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#imoveis" onClick={() => setMenuOpen(false)}>Imóveis</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="button header-contact" href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" />Fale conosco</a>
        <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><Brand /><p>Seu melhor negócio começa<br />com uma boa escolha.</p></div>
        <div className="footer-links"><span>Explore</span><a href="#imoveis">Encontre seu imóvel</a><a href="#sobre">Conheça a imobiliária</a><a href="#contato">Entre em contato</a></div>
        <div className="footer-links"><span>Estamos por perto</span><p>Centro · Buriti Alegre, GO</p><a href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="phone" />{contact.phone}</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Imobiliária.</span><span>Proposta demonstrativa · Imóveis e valores de exemplo.</span></div>
    </footer>
  )
}
