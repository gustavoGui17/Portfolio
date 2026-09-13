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

const projetos = [
  {
    title: 'Web App - Lava Rápido',
    desc: 'Interface web (SPA) do sistema de gerenciamento de um lava rápido. Inclui landing page institucional, autenticação, painel do usuário (dashboard) e área administrativa de clientes, com animações de transição e sistema de temas de cores.',
    url: 'https://github.com/gustavoGui17/spa-LavaRapido',
    tags: ['React', 'SPA', 'UI'],
  },
  {
    title: 'Backend - Gestão de Tarefas',
    desc: 'Aplicação backend para gerenciamento de tarefas, desenvolvida com Node.js e Express.js. Inclui autenticação, CRUD de tarefas e integração com banco de dados MongoDB.',
    url: 'https://github.com/gustavoGui17/API-LavaRapido',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'WebAdvocacia',
    desc: 'Desenvolvimento de uma landing page institucional para escritório de advocacia, utilizando React, com foco em apresentação dos serviços, informações institucionais e facilidade de contato com potenciais clientes.',
    url: 'https://github.com/gustavoGui17/WebAdivocacia',
    tags: ['React', 'UI'],
  },
  {
    title: 'ApiPokemon',
    desc: 'API para consulta de informações sobre pokémons, desenvolvida com Node.js e Express.js. Inclui endpoints para buscar pokémons por ID, nome e tipo.',
    url: 'https://github.com/gustavoGui17/ApiPokemon',
    tags: ['javascript'],
  },
    {
    title: 'fornecedorCrud',
    desc: 'Desenvolvimento de uma aplicação em C# para gerenciamento de fornecedores, permitindo realizar operações de cadastro, consulta, edição e exclusão (CRUD) de informações.',
    url: 'https://github.com/gustavoGui17/FornecedorCrud',
    tags: ['C#', 'CRUD'],
  },
  {
    title: 'DashboardFintech',
    desc: 'Desenvolvimento de um dashboard financeiro em JavaScript para gerenciamento e acompanhamento de transações, permitindo visualizar e organizar informações financeiras de forma clara e intuitiva.',
    url: 'https://github.com/gustavoGui17/DashboardFintech',
    tags: ['javascript', 'html', 'css'],
  },
  {
    title: 'MarioJump',
    desc: 'Desenvolvimento de um jogo de plataforma 2D inspirado em jogos clássicos, utilizando JavaScript, com foco na implementação de mecânicas de movimentação, física e interação do personagem com o cenário.',
    url: 'https://github.com/gustavoGui17/MarioJump',
    tags: ['javascript', 'html', 'css'],
  },
  {
    title: 'Hangman',
    desc: 'Desenvolvimento de um jogo da forca baseado no universo de One Piece, executado diretamente pelo console, com interação por meio de comandos digitados pelo jogador.',
    url: 'https://github.com/gustavoGui17/Hangman',
    tags: ['lua'],
  },
  
]

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0 18px;
`

function Projetos() {
  return (
    <Section id="projetos">
      <h2><MarioCoin />▸ Projetos</h2>
      <p>Missões concluidas</p>
      <CardsGrid>
        {projetos.map((projeto, i) => (
          <RevealCard key={projeto.title} delay={i * 90}>
            <QuestCard as="div">
              <h3>▣ {projeto.title}</h3>
              <p>{projeto.desc}</p>
              <Tags>
                {projeto.tags.map((tag) => (
                  <PixelTag key={tag}>{tag}</PixelTag>
                ))}
              </Tags>
              <CardActions>
                <PixelButton
                  href={projeto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Abrir Repo
                </PixelButton>
              </CardActions>
            </QuestCard>
          </RevealCard>
        ))}
      </CardsGrid>
    </Section>
  )
}

export default Projetos