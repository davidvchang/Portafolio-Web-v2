import Home from "./sections/Home"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {

  return (
    <main className="w-screen min-h-screen  flex flex-col items-center">
      <NavBar/>
      <div className="w-[90%] h-full flex flex-col items-center">
        <Home/>
        <Projects/>
        <Skills/>
      </div>
    </main>
  )
}

export default App
