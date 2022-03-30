import React from 'react'
//import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBar(){
    return(
        //<ul>
            //<li><Link to="/"> RegistrarUsuario </Link> </li>
            //<li><Link to="/uno"> IniciarSecion </Link> </li>
            
        //</ul>


    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Publicaciones</Navbar.Brand>
            
            <Nav className="me-auto">
                <Nav.Link href="/login">IniciarSecion</Nav.Link>
                <Nav.Link href="/signin">RegistrarUsuario</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar;