import { useState, type ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage'
import './App.css'
import NavBar from './components/NavBar'
import ProjectsPage from './components/projectsPage'
import type { RouteProps } from './Interface'



function App() {
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
