import { useState } from "react"
import "./App.css"
import PromptBox from './components/PromptBox'
import Preview from './components/Preview'
import CodeEditor from './components/CodeEditor'
import DownloadButton from "./components/DownloadButton"

function App() {

  const [website, setWebsite] = useState("");
  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">✦ WebAI</div>

        <div className="navbar-right">
          <span className="status">● AI Ready</span>

          
        </div>
      </header>


      <main>
        <section className="hero">
          <div className="hero-bedge">
            ✨ AI Powered Website Builder
          </div>

          <h1>Build Website <br />
          <span>with AI</span>
          </h1>

          <p>Create stunning websites in seconds with the power of artificial intelligence.</p>
        </section>

       <PromptBox onWebsiteGenerated={setWebsite}/>

       <Preview website={website}/>

       <DownloadButton website={website}/>

       <CodeEditor website={website} onCodeChange={setWebsite}/>


       <footer className="footer">
        <p>&copy; Build with Yashu</p>
       </footer>

      </main>
    </div>
  )
}

export default App