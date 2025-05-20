import { NavLink } from "react-router-dom"
import './style.css'



function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          //basically saying If this is the active ling, assign the class name to nav-link and active, OTHERWISE only do nav-link
          //Class names are referenced in the styling sheet
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;