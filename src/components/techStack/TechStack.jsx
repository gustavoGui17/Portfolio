import styled, { css } from 'styled-components'
import { Section, PixelCard, MarioCoin } from '../shared.jsx'
import { RevealCard, CardsGrid } from '../RevealCard.jsx'

const frontend = [
  { name: 'HTML', lvl: 90 },
  { name: 'CSS', lvl: 85 },
  { name: 'JavaScript', lvl: 80 },
  { name: 'Bootstrap', lvl: 70 },
  { name: 'React', lvl: 90 },
]

const backend = [
  { name: 'Node.js', lvl: 85 },
  { name: 'Express.js', lvl: 75 },
  { name: 'API REST', lvl: 80 },
  { name: 'MongoDB', lvl: 60 },
  { name: 'C#', lvl: 50 },
  { name: 'Java Spring Boot', lvl: 40 },
]

const outras = [
  { name: 'Git', lvl: 85 },
  { name: 'GitHub', lvl: 90 },
  { name: 'Postman', lvl: 80 },
  { name: 'Davinci Resolve', lvl: 50 },
  { name: 'Adobe Premiere', lvl: 40 },
]

const boasPraticas = [
  { name: 'Clean Code', lvl: 95 },
  { name: 'Clean Architecture', lvl: 95 },
  { name: 'Testes Unitários', lvl: 75 },
  { name: 'Testes de Int', lvl: 70 },
  { name: 'Design Patterns', lvl: 80 },
]

const metodologias = [
  { name: 'Scrum', lvl: 75 },
  { name: 'Kanban', lvl: 75 },
]

const groups = [
  { title: 'Frontend', items: frontend },
  { title: 'Backend', items: backend },
  { title: 'Outras Techs', items: outras },
  { title: 'Boas Práticas', items: boasPraticas },
  { title: 'Metodologias', items: metodologias },
]

const StackCard = styled(PixelCard)`
  h3 {
    margin-bottom: 18px;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--pixel-black);
  }
`

const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const Skill = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`

const SkillName = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const LvlBar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`

const Block = styled.span`
  width: 13px;
  height: 13px;
  background: transparent;
  border: 2px solid var(--pixel-black);

  ${({ active }) =>
    active &&
    css`
      background: var(--pixel-highlight);
    `}
`

const LvlNum = styled.span`
  margin-left: 8px;
  font-family: var(--font-pixel);
  font-size: 8px;
  color: var(--pixel-yellow);
`

function Level({ lvl }) {
  const blocks = Array.from({ length: 10 }, (_, i) => i)
  const filled = Math.round(lvl / 10)
  return (
    <LvlBar aria-label={`${lvl}%`}>
      {blocks.map((i) => (
        <Block key={i} active={i < filled} />
      ))}
      <LvlNum>{lvl}%</LvlNum>
    </LvlBar>
  )
}

function TechStack() {
  return (
    <Section id="tech-stack">
      <h2><MarioCoin />▸ Tech Stack</h2>
      <p>Tecnologias</p>
      <CardsGrid>
        {groups.map((group, i) => (
          <RevealCard key={group.title} delay={i * 100}>
            <StackCard as="div">
              <h3>{group.title}</h3>
              <SkillList>
                {group.items.map((s) => (
                  <Skill key={s.name}>
                    <SkillName>{s.name}</SkillName>
                    <Level lvl={s.lvl} />
                  </Skill>
                ))}
              </SkillList>
            </StackCard>
          </RevealCard>
        ))}
      </CardsGrid>
    </Section>
  )
}

export default TechStack