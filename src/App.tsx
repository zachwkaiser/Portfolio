import { useEffect, useState, type ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage'
import './App.css'
import NavBar from './components/NavBar'
import ProjectsPage from './components/projectsPage'
import type { RouteProps } from './Interface'
import { Link as ScrollLink, Element } from 'react-scroll';



function App() {

  const routes: RouteProps[] = [
    {
      name: "Home",
      element: <HomePage/>
    },
    {
      name: "About",
      element: <AboutPage/>
    },
    {
      name: "Projects",
      element: <ProjectsPage/>
    },
    {
      name: "Contact",
      element: <ContactPage/>
    },
  ]

  return (
    <>
      <NavBar routes={routes} />
      <div className="content">
      {
        routes.map((route) => (
          <Element name={route.name} id={route.name.toLowerCase()}>
            {route.element}
          </Element>
        ))
      }
      </div>
    </>
  )
}

export default App
