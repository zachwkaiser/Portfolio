import { useEffect, useMemo, useState } from 'react'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import ContactPage from './components/contactPage'
import './App.css'
import NavBar from './components/NavBar'
import ProjectsPage from './components/projectsPage'
import type { RouteProps } from './Interface'
import { Element } from 'react-scroll';
import zkImage from './images/4C36770A-20B5-4FC1-89E1-806C90ACCFBE.png'



function App() {

  const [navbarHeight, setNavbarHeight] = useState<Number>(0);

  useEffect(() => {
      // Set the favicon to the ZK image
      const link = (document.querySelector("link[rel*='icon']") || document.createElement('link')) as HTMLLinkElement;
      link.type = 'image/png';
      link.rel = 'icon';
      link.href = zkImage;
      document.getElementsByTagName('head')[0].appendChild(link);
  });

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbarEl = document.querySelector('.navbar') as HTMLElement | null;
      const height = navbarEl ? navbarEl.offsetHeight : 0;
      setNavbarHeight(height);
      document.documentElement.style.setProperty('--navbar-h', `${height}px`);
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  const routes: RouteProps[] = useMemo(() => [
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
  ], [])

  return (
    <>
      <NavBar routes={routes} offset={-navbarHeight} />
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
