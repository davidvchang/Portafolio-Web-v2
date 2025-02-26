import ContactMe from "./sections/ContactMe"
import Experience from "./sections/Experience"
import Home from "./sections/Home"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {

  return (
    <main className="w-screen min-h-screen  flex flex-col items-center">
      <NavBar/>
      <div className="w-[90%] 2xl:w-[67%] h-full flex flex-col items-center">
        <Home/>
        <Projects/>
        <Skills/>
        <Experience/>
        <ContactMe/>
      </div>
    </main>
  )
}

export default App
