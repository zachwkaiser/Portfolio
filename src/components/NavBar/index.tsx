import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";
import './style.css'
import type { RouteProps } from '../../Interface'


interface NavBarProps{
  routes: RouteProps[]
}


function NavBar(props: NavBarProps) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                props.routes.map((route) =>(
                  <Nav.Link href={route.path}>{route.name}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;