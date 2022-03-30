import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav, Row} from 'react-bootstrap'

function InicioNavbar(){
    return(

    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Inicio</Navbar.Brand>
            <Navbar.Brand href="/login">IniciarSecion</Navbar.Brand>
            <Navbar.Brand href="/signin">RegistrarUsuario</Navbar.Brand>
        </Container>
    </Navbar>
    );
}

export default InicioNavbar;