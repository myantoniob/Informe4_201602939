import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Container, Nav, Row, Col, Card} from 'react-bootstrap'
import InicioNavbar from './InicioNavbar';

function Inicio(){
    return(
        <div >
            <InicioNavbar/>
            <Row className="mt-5">
                <Col md={{ span: 5, offset: 5 }}> 
                    <Card  style={{ width: '25rem' }}>

                    <Card.Title className="mb-3 mt-3">Objetivo </Card.Title>
                    <Card.Text> 
                        Poder dar opiniones en base a experiencias de los Ingenieros
                        al igual que de los cursos del área de ingeniería 
                    </Card.Text>
                    </Card>
                </Col>
            </Row>
        </div>

    );
}

export default Inicio;