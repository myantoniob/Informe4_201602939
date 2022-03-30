import React from "react";
import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InicioNavbar from './InicioNavbar';

function IniciarSecion(){
    return (
        
        <div >
            <InicioNavbar/>
            <Row className="mt-5">
                <Col md={{ span: 5, offset: 5 }}> 
                    <Card  style={{ width: '25rem' }}>

                    <Card.Title className="mb-3 mt-3">Iniciar Sesion </Card.Title>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Registro Academico</Form.Label>
                                <Form.Control type="number" placeholder="Registro Academico" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><a href="/signin"> Registrarse</a> </Form.Label>
                                
                            </Form.Group>
                            

                            <Button className="mt-2 mb-4" variant="primary" type="submit">
                                Log in
                            </Button>

                        </Form>

                    </Card>
                </Col>
            </Row>
        </div>
        
    );
}

export default IniciarSecion;