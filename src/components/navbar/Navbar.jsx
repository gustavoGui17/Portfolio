import styled from 'styled-components'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Diplomas', href: '#diplomas' },
  { label: 'Contato', href: '#contato' },
]

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 18px clamp(20px, 5vw, 64px);
  background: var(--pixel-bg);
  border-bottom: 3px solid var(--pixel-black);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Brand = styled.a`
  font-family: var(--font-pixel);
  font-size: 14px;
  letter-spacing: 1px;
  color: var(--pixel-highlight);
  text-shadow: 2px 2px 0 var(--pixel-black);

  &:hover {
    color: var(--pixel-yellow);
  }
`

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const NavLink = styled.a`
  display: block;
  padding: 10px 12px;
  font-family: var(--font-pixel);
  font-size: 9px;
  color: var(--pixel-white);
  background: var(--pixel-panel);
  border: 3px solid var(--pixel-black);
  box-shadow: 3px 3px 0 var(--pixel-black);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: transform 0.12s steps(2), box-shadow 0.12s steps(2),
    background 0.12s steps(2), color 0.12s steps(2);

  &:hover {
    background: var(--pixel-pink);
    color: var(--pixel-black);
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--pixel-black);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--pixel-black);
  }
`

function Navbar() {
  return (
    <Header>
      <Brand href="#home">PLAYER 1 ▸ PORTFÓLIO</Brand>
      <nav>
        <NavList>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </NavList>
      </nav>
    </Header>
  )
}

export default Navbar