import React from "react";
import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


function Feed(){
    const carnet = localStorage.getItem("carnet")
    const password = localStorage.getItem("password")
    const data = {
        carnet, password
    }

    Axios.get('/validar', data)
        .then(res => {
            console.log(res)
        })

    return (
        <div>
            <NavBar/>
            hola esto es el feed
        </div>
    );
}

export default Feed;