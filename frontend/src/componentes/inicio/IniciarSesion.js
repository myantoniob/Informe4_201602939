import React, { useEffect, useState } from "react";
import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InicioNavbar from './InicioNavbar';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function IniciarSecion(){
    // * Variables a utilizar
    const [carnet, setCarnet] = useState(0)
    const [password, setPassword] = useState("")

    const redirect = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()

        

        const data = {
            carnet:carnet, 
            password: password
        }

        //console.log(data)
        Axios.post('/login', data)
            .then(res => {
                const pru = res.data.carnet
        
                if (pru == carnet)
                {
                    localStorage.setItem("carnet", res.data.carnet)
                    localStorage.setItem("password", res.data.password)
                    redirect('/user')
                }
            }) 
            
    }
        
        


    return (
        <div >
            <InicioNavbar/>
            <Row className="mt-5">
                <Col md={{ span: 5, offset: 5 }}> 
                    <Card  style={{ width: '25rem' }}>

                    <Card.Title className="mb-3 mt-3">Iniciar Sesion </Card.Title>
                        <Form onSubmit={submitForm}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Registro Academico</Form.Label>
                                <Form.Control type="number" placeholder="Registro Academico" onChange={(event) => setCarnet(event.target.value)} value={carnet}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}/>
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