import styled from "styled-components";
import { Section, QuestCard, PixelTag, MarioCoin } from "../shared.jsx";
import { RevealCard, CardsGrid } from "../RevealCard.jsx";

const jobs = [
  {
    title: "Work Service / Analista de Dados",
    period: "Dezembro 2021/2025 | Cliente: Carrefour",
    text: "Atuação no setor de Fraudes, responsável pelo acompanhamento e controle da entrada e saída dos serviços, garantindo a gestão das informações e o cumprimento dos processos operacionais. Elaboração e manutenção de relatórios gerenciais utilizando SQL, com consultas e tratamento de dados para acompanhamento diário das operações. Atuação como Assistente MIS, realizando análise, organização e consolidação de dados para geração de indicadores e suporte à tomada de decisões. Geração de relatórios diários em SQL cujas informações impactavam diretamente o processo de faturamento do cliente. Análise e validação de informações, identificando inconsistências e apoiando a melhoria dos processos internos. Apoio direto ao gestor no desenvolvimento de sistemas e ferramentas internas em C#, automatizando processos e facilitando o tratamento de documentos.",
    tags: ["SQL", "C#", "MIS", "Dados"],
  },
  {
    title: "Unidas / Suporte administrativo",
    period: "2019 a 2022",
    text: "Atuação no suporte às oficinas parceiras da Unidas, realizando o acompanhamento dos processos de manutenção dos veículos da frota. atendimento e suporte às oficinas parceiras durante os processos de manutenção dos veículos, análise e aprovação de orçamentos para serviços de manutenção preventiva e corretiva da frota, acompanhamento das solicitações de manutenção, garantindo o correto andamento dos serviços, avaliação dos serviços e valores apresentados pelas oficinas, seguindo os procedimentos e critérios estabelecidos pela empresa, controle e acompanhamento das demandas, contribuindo para a disponibilidade e manutenção adequada da frota de veículos.",
    tags: ["Suporte", "Oficinas", "Manutenção"],
  },
  {
    title: "Vera Cruz / Suporte administrativo",
    period: "06/07/2017 a 29/09/2018",
    text: "Atuação na área de Tecnologia da Informação, prestando suporte técnico a alunos e colaboradores. Atendimento e resolução de chamados de TI, diagnóstico e solução de problemas em computadores, softwares, periféricos e infraestrutura. Manutenção preventiva e corretiva de equipamentos. Responsável por atividades de manutenção e suporte em Data Centers. Suporte aos usuários com orientação técnica até a resolução dos problemas. Gerenciamento dos chamados, priorizando demandas e garantindo o atendimento dentro dos prazos. Apoio ao time de TI na edição e produção de vídeos.",
    tags: ["TI", "Suporte", "Datacenter"],
  },
];

const Period = styled.p`
  font-size: 14px;
  color: var(--pixel-grey);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0 18px;
`;

function Experience() {
  return (
    <Section id="experience">
      <h1>
        <MarioCoin />▸ Experiencias
      </h1>
      <p>Registros de missões concluídas</p>
      <CardsGrid>
        {jobs.map((job, i) => (
          <RevealCard key={job.title} delay={i * 120}>
            <QuestCard as="div">
              <h3>★ {job.title}</h3>
              <Period>⏱ {job.period}</Period>
              <p>{job.text}</p>
              <Tags>
                {job.tags.map((tag) => (
                  <PixelTag key={tag}>+{tag}</PixelTag>
                ))}
              </Tags>
            </QuestCard>
          </RevealCard>
        ))}
      </CardsGrid>
    </Section>
  );
}

export default Experience;
