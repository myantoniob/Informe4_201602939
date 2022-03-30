import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBar(){
    return(

    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#">Publicaciones</Navbar.Brand>
            
            <Nav className="me-auto">
                <Nav.Link href="#">Perfil</Nav.Link>
                <Nav.Link href="/">Salir</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar;