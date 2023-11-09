
import "./General.css"
import Certificados from "./components/Certificados"
import Experiencia from "./components/Experiencia"
import Header from "./components/Header"
import Preview from "./components/Preview"
import Skills from "./components/Skills"



function App() {
  
  return (
    <>
      <Header/>
      <main className="main">
      <Skills/>
     
      <Preview/>
      </main>
      
      <Experiencia/>
      <Certificados/>
     
     
    </>
  )
}

export default App
