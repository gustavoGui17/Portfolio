import './css/GlobalStyle.js'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import TechStack from './components/techStack/TechStack.jsx'
import Experience from './components/experiencias/Experience.jsx'
import Projetos from './components/projetos/Projetos.jsx'
import Diplomas from './components/diplomas/Diplomas.jsx'
import Contato from './components/contato/Contato.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <TechStack />
        <Experience />
        <Projetos />
        <Diplomas />
        <Contato />
      </main>
    </>
  )
}

export default App
