import styled from 'styled-components'
import {
  Section,
  PixelCard,
  CardActions,
  PixelTag,
  MarioCoin,
} from '../shared.jsx'
import { RevealCard, CardsGrid } from '../RevealCard.jsx'

const futuros = [
  {
    title: 'Clone Spotify',
    desc: 'Clone do Spotify com funcionalidades de streaming de música, criação de playlists e recomendações personalizadas.',
    tags: ['React', 'Node.js', 'typescript'],
  },
  {
    title: 'Sistema de Agendamentos mobile',
    desc: 'Plataforma de agendamento online para prestadores de serviços, com calendário dinâmico, notificações por e-mail e integração com pagamento.',
    tags: ['Flutter', 'Dart', 'mongoDB'],
  },
  {
    title: 'Biblioteca Digital',
    desc: 'Aplicativo mobile desenvolvido em Flutter para gerenciamento e consulta de uma biblioteca digital. A aplicação permite aos usuários explorar um catálogo de livros, visualizar informações detalhadas sobre cada obra, pesquisar por título, autor ou categoria e organizar seus livros favoritos.',
    tags: ['Flutter', 'Node.js + express', 'Dart', 'mongoDB'],
  },
]

const TomorrowCard = styled(PixelCard)`
  border-radius: 18px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0 var(--pixel-black);
  }

  &::before {
    content: '★';
    position: absolute;
    top: -14px;
    left: -14px;
    z-index: 2;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--pixel-pink);
    border: 3px solid var(--pixel-black);
    border-radius: 8px;
    box-shadow: 3px 3px 0 var(--pixel-black);
    font-family: var(--font-pixel);
    font-size: 12px;
    color: var(--pixel-black);
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0 18px;
`

const SoonBadge = styled.span`
  display: inline-block;
  padding: 8px 14px;
  font-family: var(--font-pixel);
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--pixel-black);
  background: var(--pixel-highlight);
  border: 3px solid var(--pixel-black);
  border-radius: 12px;
  box-shadow: 3px 3px 0 var(--pixel-black);
`

function ProjetosFuturos() {
  return (
    <Section id="projetos-futuros">
      <h2><MarioCoin />▸ Projetos Futuros</h2>
      <p>Próximas missões</p>
      <CardsGrid>
        {futuros.map((projeto, i) => (
          <RevealCard key={projeto.title} delay={i * 90}>
            <TomorrowCard as="div">
              <h3>▣ {projeto.title}</h3>
              <p>{projeto.desc}</p>
              <Tags>
                {projeto.tags.map((tag) => (
                  <PixelTag key={tag}>{tag}</PixelTag>
                ))}
              </Tags>
              <CardActions>
                <SoonBadge>EM BREVE</SoonBadge>
              </CardActions>
            </TomorrowCard>
          </RevealCard>
        ))}
      </CardsGrid>
    </Section>
  )
}

export default ProjetosFuturos