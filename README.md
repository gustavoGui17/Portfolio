# Portfolio - Gustavo Guilherme

Meu portfolio pessoal desenvolvido com tema retro/pixel art inspirado em jogos clássicos.

## Tech Stack

- **React 19** + **Vite 8**
- **styled-components 6**
- **Fonte:** Press Start 2P (pixel art) + Inter

## Como rodar

```bash
# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Seções

- **Home** - Tela de boot animada com botões GitHub e currículo
- **Tech Stack** - Habilidades agrupadas por área (Frontend, Backend, Outras)
- **Experiências** - Timeline profissional em formato "quest cards"
- **Projetos** - Cards de projetos com links para repositórios
- **Diplomas** - Certificações e diplomas com links de verificação
- **Contato** - Grid de contato (Email, LinkedIn, GitHub, WhatsApp)

## Estrutura

```
src/
├── components/
│   ├── home/           # Seção principal (hero)
│   ├── navbar/         # Navegação fixa
│   ├── techStack/     # Habilidades técnicas
│   ├── experiencias/  # Experiência profissional
│   ├── projetos/      # Projetos
│   ├── diplomas/      # Certificações
│   └── contato/       # Contato + footer
├── css/               # Estilos globais
├── hooks/             # Hooks customizados (scroll reveal)
├── img/               # Imagens e ícones
└── assets/            # Assets estáticos
```
