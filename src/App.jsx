import Experience from './pages/Experience'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {

  return (
    <main className='main'>
      <NavBar/>
      <Home/>
      <Projects/>
      <Skills/>
      <Experience/>
    </main>
  )
}

export default App
