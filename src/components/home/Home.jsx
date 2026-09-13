import styled from 'styled-components'
import { Section, PixelButton } from '../shared.jsx'
import pixelBg from '../../img/Pixel.gif'

const Hero = styled(Section)`
  position: relative;
  margin-left: calc(-1 * clamp(20px, 5vw, 64px));
  margin-right: calc(-1 * clamp(20px, 5vw, 64px));
  padding-top: 140px;
  padding-bottom: 130px;
  padding-left: clamp(20px, 5vw, 64px);
  padding-right: clamp(20px, 5vw, 64px);
  border-bottom: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${pixelBg}) no-repeat;
    background-size: 100% 100%;
    opacity: 0.20;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 720px) {
    padding-top: 90px;
    padding-bottom: 80px;
  }
`

const BootLine = styled.p`
  font-family: var(--font-pixel);
  font-size: 10px;
  color: var(--pixel-highlight);
  text-transform: uppercase;
  margin: 0 0 12px;

  &.warn {
    color: var(--pixel-yellow);
  }
`

const HeroTitle = styled.h1`
  display: block;
  font-size: clamp(30px, 7vw, 60px);
  line-height: 1.2;
  margin: 28px 0 18px;
  color: var(--pixel-yellow);
  text-shadow:
    5px 5px 0 var(--pixel-black),
    11px 11px 0 var(--pixel-pink);
`

const Caret = styled.span`
  display: inline-block;
  color: var(--pixel-pink);
  animation: blink 1s steps(1) infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

const HeroSub = styled.p`
  margin: 0 0 6px;
  font-family: var(--font-pixel);
  font-size: 11px;
  color: var(--pixel-highlight);
  text-transform: uppercase;
  letter-spacing: 1px;
`

const HeroDescription = styled.p`
  max-width: 800px;
  margin-top: 28px;
`

const HeroDivider = styled.p`
  margin: 28px 0 0;
  color: var(--pixel-grey);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.6;
`

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
`

function Home() {
  return (
    <Hero id="home">
      <BootLine>&gt; INICIANDO SISTEMA...</BootLine>
      <BootLine className="warn">* IDENTIFICAÇÃO DO USUÁRIO *</BootLine>
      <HeroTitle>
        GUSTAVO<Caret>▮</Caret>
      </HeroTitle>
      <HeroSub>WEB DEVELOPER ▸ REACT &amp; NODE.JS</HeroSub>
      <HeroSub>FULL STACK DEV</HeroSub>
      <HeroDescription>
        Desenvolvedor JavaScript com foco em React e Node.js, experiência
        prática no desenvolvimento de sistemas web completos (Full Stack),
        incluindo criação de APIs REST, integração com banco de dados MongoDB e
        construção de interfaces modernas. Busco oportunidade para evoluir
        tecnicamente e entregar soluções eficientes e bem estruturadas.
      </HeroDescription>
      <HeroActions>
        <PixelButton
          href="https://github.com/gustavoGui17"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ GitHub
        </PixelButton>
        <PixelButton href={`${import.meta.env.BASE_URL}curriculo.pdf`} download>
          ▼ Curriculo
        </PixelButton>
      </HeroActions>
      <HeroDivider aria-hidden="true">
        ───────────────────────────────────────────────────────────────────────
      </HeroDivider>
    </Hero>
  )
}

export default Home