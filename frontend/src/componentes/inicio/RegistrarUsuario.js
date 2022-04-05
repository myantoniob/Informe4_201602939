import React, { useState } from "react";
import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import InicioNavbar from './InicioNavbar';
import Axios from "axios";

function RegistrarUsuario(){
    // * Varibles
    const [carnet, setCarnet] = useState(0)
    const [names, setNames] = useState("")
    const [lastnames, setLastnames] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitForm = (e) => {
        e.preventDefault()

        const data = {
            carnet, names, lastnames,
            email, password
        }

        Axios.post('http://localhost:3001/signin', data)
            .then(res => {
                if (res.data != null){
                    localStorage.setItem("carnet", res.data.carnet)
                }
            })
    }


    return (
        <div >
             <InicioNavbar/>
            <Row className="mt-5 mb-5">
                <Col md={{ span: 4, offset: 4 }}> 
                    <Card  style={{ width: '25rem' }}>

                    <Card.Title className="mb-3 mt-3">Registrarse </Card.Title>
                        <Form onSubmit={submitForm}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Registro Academico</Form.Label>
                                <Form.Control type="number" placeholder="Registro Academico" onChange={(event) => setCarnet(event.target.value)} value={carnet}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="Nombres" onChange={(event) => setNames(event.target.value)} value={names}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Apellidos" onChange={(event) => setLastnames(event.target.value)} value={lastnames}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Correo" onChange={(event) => setEmail(event.target.value)} value={email}/>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}/>
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