import Home from "./sections/Home"
import NavBar from "./sections/NavBar"

function App() {

  return (
    <main className="w-screen min-h-screen  flex flex-col items-center">
      <NavBar/>
      <div className="w-[90%] h-full flex flex-col items-center">
        <Home/>

      </div>
    </main>
  )
}

export default App
