import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"
import SkillsPage from "./pages/SkillsPage"

function App() {

  return (
    <main className="font-Poppins w-full h-full flex flex-col items-center">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <SkillsPage/>
    </main>
  )
}

export default App
