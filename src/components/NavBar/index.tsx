import { Navbar, Container, Nav } from "react-bootstrap";
import './style.css'
import type { RouteProps } from '../../Interface'
import { Link as ScrollLink } from 'react-scroll';

interface NavBarProps{
  routes: RouteProps[]
  offset?: number
}


function NavBar(props: NavBarProps) {
  return (
    <Navbar bg="none" data-bs-theme="dark" fixed="top" expand="sm" className="navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav">
              {
                props.routes.map((route) =>(
                  <Nav.Link
                    key={route.name}
                    as={ScrollLink}
                    to={route.name}
                    spy={true}
                    duration={300}
                    activeClass="active"
                    offset={props.offset ?? -80}
                  >
                    {route.name}
                  </Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;