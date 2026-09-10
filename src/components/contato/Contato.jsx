import styled from 'styled-components'
import { Section, MarioCoin } from '../shared.jsx'
import iconeEmail from '../../img/icons/o-email.png'
import iconeLinkedin from '../../img/icons/linkedin.png'
import iconeGithub from '../../img/icons/github.png'
import iconeWhatsapp from '../../img/icons/whatsapp.png'

const contacts = [
  {
    label: 'E-mail',
    value: 'gustavo.gsilva1723@gmail.com',
    href: 'mailto:gustavo.gsilva1723@gmail.com',
    icon: iconeEmail,
    alt: 'Ícone de e-mail',
  },
  {
    label: 'LinkedIn',
    value: 'gustavo-guilherme-de-souza',
    href: 'https://www.linkedin.com/in/gustavo-guilherme-de-souza/',
    icon: iconeLinkedin,
    alt: 'Ícone do LinkedIn',
  },
  {
    label: 'GitHub',
    value: 'gustavoGui17',
    href: 'https://github.com/gustavoGui17',
    icon: iconeGithub,
    alt: 'Ícone do GitHub',
  },
  {
    label: 'WhatsApp',
    value: '(11) 95176-5849',
    href: 'https://wa.me/5511951765849',
    icon: iconeWhatsapp,
    alt: 'Ícone do WhatsApp',
  },
]

const ContactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 16px;
  margin-top: 28px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  font-family: var(--font-pixel);
  font-size: 9px;
  color: var(--pixel-black);
  background: var(--pixel-highlight);
  border: 3px solid var(--pixel-black);
  box-shadow: 3px 3px 0 var(--pixel-black);
  text-transform: uppercase;
  transition: transform 0.12s steps(2), box-shadow 0.12s steps(2),
    background 0.12s steps(2), color 0.12s steps(2);

  &:hover {
    background: var(--pixel-yellow);
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--pixel-black);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--pixel-black);
  }
`

const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  background: var(--pixel-white);
  border: 3px solid var(--pixel-black);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`

const ContactValue = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 56px;
  padding: 22px 0 6px;
  border-top: 3px solid var(--pixel-black);
  box-shadow: 0 -6px 0 var(--pixel-black);
`

const FooterLine = styled.p`
  font-family: var(--font-pixel);
  font-size: 9px;
  line-height: 1.8;
  color: var(--pixel-grey);
  text-transform: uppercase;
  text-align: center;
`

const EndLine = styled.p`
  font-family: var(--font-pixel);
  font-size: 9px;
  line-height: 1.8;
  color: var(--pixel-pink);
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
`

function Contato() {
  return (
    <Section id="contato">
      <h2><MarioCoin />▸ Contato</h2>
      <p>Formas de entrar em contato comigo → escolha uma via</p>
      <ContactsGrid>
        {contacts.map((c) => (
          <ContactLink
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <ContactIcon>
              <img src={c.icon} alt={c.alt} />
            </ContactIcon>
            <ContactValue>{c.label}: {c.value}</ContactValue>
          </ContactLink>
        ))}
      </ContactsGrid>
      <Footer>
        <FooterLine>1UP ▸ FIM DE JOGO</FooterLine>
        <FooterLine>© 2026 GUSTAVO GUILHERME SILVE DE SOUZA</FooterLine>
      </Footer>
      <EndLine>
        ▸ PRESSIONE START PARA COMEÇAR NOVAMENTE
        <MarioCoin />
      </EndLine>
    </Section>
  )
}

export default Contato