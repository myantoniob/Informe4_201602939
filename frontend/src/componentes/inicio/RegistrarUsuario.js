import React from "react";
import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import InicioNavbar from './InicioNavbar';

function RegistrarUsuario(){
    return (
        <div >
             <InicioNavbar/>
            <Row className="mt-5 mb-5">
                <Col md={{ span: 4, offset: 4 }}> 
                    <Card  style={{ width: '25rem' }}>

                    <Card.Title className="mb-3 mt-3">Registrarse </Card.Title>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Registro Academico</Form.Label>
                                <Form.Control type="number" placeholder="Registro Academico" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="Nombres" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Apellidos" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Correo" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button className="mt-2 mb-4" variant="primary" type="submit">
                                Sing in
                            </Button>

                        </Form>

                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default RegistrarUsuario;