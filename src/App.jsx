import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"
import Projects from "./pages/Projects"
import SkillsPage from "./pages/SkillsPage"

function App() {

  return (
    <main className="font-Poppins w-full h-full flex flex-col items-center dark:bg-slate-900 bg-white">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <SkillsPage/>
      <Projects/>
    </main>
  )
}

export default App
