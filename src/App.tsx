import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  //useState uses count as the value, and updates when the function, setCount, is called.
  //This is used for dynamic rendering of a site. It allows values to change real time when the user is messing with them

  const [toggle, setToggle] = useState<boolean>(false)
  //the <boolean> is declaring what type toggle is

  return (
    <>
      <BrowserRouter>
        <div>
          navbar
        </div>
        <NavBar></NavBar>
        <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </div>


      </BrowserRouter>



      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{
          setCount((count) => count + 1)
          setToggle(!toggle)
        }
        } >
          count is {count}
        </button>
        <h1 style={{visibility:toggle ? "visible":"hidden"}}>zach is cool</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
