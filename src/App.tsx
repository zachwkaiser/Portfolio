import { useState, type ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage'
import Projects from './components/projectsPage'
import './App.css'
import NavBar from './components/NavBar'
import ProjectsPage from './components/projectsPage'
import type { RouteProps } from './Interface'



function App() {
  const [count, setCount] = useState(0)
  //useState uses count as the value, and updates when the function, setCount, is called.
  //This is used for dynamic rendering of a site. It allows values to change real time when the user is messing with them

  const [toggle, setToggle] = useState<boolean>(false)
  //the <boolean> is declaring what type toggle is

  const routes: RouteProps[] = [
    {
      name: "Home",
      path: "/",
      element: <HomePage/>
    },
    {
      name: "About",
      path: "/about",
      element: <AboutPage/>
    },
    {
      name: "Projects",
      path: "/projects",
      element: <ProjectsPage/>
    },
    {
      name: "Contact",
      path: "/contact",
      element: <ContactPage/>
    },
  ]

  return (
    <>
      <BrowserRouter>
        <NavBar routes={routes} />
        <div className="content">
        <Routes>
          {
            routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))
          }
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
