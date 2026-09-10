import styled from 'styled-components'
import {
  Section,
  QuestCard,
  CardActions,
  PixelButton,
  PixelTag,
  MarioCoin,
} from '../shared.jsx'
import { RevealCard, CardsGrid } from '../RevealCard.jsx'

const certificacoes = [
  { name: 'Análise de Sistemas e Prototipagem Web', code: '7BD9F189' },
  { name: 'Desenvolvimento de Aplicativos Móveis', code: 'AC11842C' },
  { name: 'Empreendedorismo Digital e Gestão de TI', code: 'EC6862AD' },
]

const Cert = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
  padding: 12px 0;
  margin-bottom: 0;
  border-bottom: 2px dashed var(--pixel-black);
`

const CertItem = styled.span`
  font-size: 15px;
`

const CertCode = styled.span`
  margin-left: auto;
  font-family: var(--font-pixel);
  font-size: 8px;
  color: var(--pixel-highlight);
`

const DiplomaMeta = styled.p`
  font-size: 14px;
  color: var(--pixel-grey);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 14px;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0 18px;
`

function Diplomas() {
  return (
    <Section id="diplomas">
      <h1><MarioCoin />▸ Certificações &amp; Diploma</h1>
      <p>Cursos concluídos no inventario</p>
      <CardsGrid>
        <RevealCard delay={0}>
          <QuestCard as="div">
            <h3>★ Certificações FIAP</h3>
            {certificacoes.map((c) => (
              <Cert key={c.code}>
                <CertItem>□ {c.name}</CertItem>
                <CertCode>[ {c.code} ]</CertCode>
              </Cert>
            ))}
            <Tags>
              <PixelTag>+FIAP</PixelTag>
            </Tags>
            <CardActions>
              <PixelButton
                href="https://www.fiap.com.br/consultadocumento"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Consultar Documento
              </PixelButton>
            </CardActions>
          </QuestCard>
        </RevealCard>

        <RevealCard delay={120}>
          <QuestCard as="div">
            <h3>★ Diploma</h3>
            <h4>Analise e Desenvolvimento de Sistemas</h4>
            <DiplomaMeta>FIAP · Código: 852.852.c2dbef0babec4d632271b71b</DiplomaMeta>
            <Tags>
              <PixelTag>+FIAP</PixelTag>
            </Tags>
            <CardActions>
              <PixelButton
                href="https://www.fiap.com.br/graduacao/consulta-publicade-diplomas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Consultar Diploma
              </PixelButton>
            </CardActions>
          </QuestCard>
        </RevealCard>
      </CardsGrid>
    </Section>
  )
}

export default Diplomas