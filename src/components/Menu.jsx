import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../assets/img/logo.png"
import { NavLink, Link } from "react-router-dom"

const Menu = ()=> {
  const handleMenu = ({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"

    return (
      <>
        <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={Logo}
                width="30"
                height="30"
                className=" logo d-inline-block align-top"
                alt="React Bootstrap logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className={handleMenu} to="/">Home</NavLink>
            <NavLink className={handleMenu} to="/pokemones">Pokemones</NavLink>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
  }
  
  export default Menu