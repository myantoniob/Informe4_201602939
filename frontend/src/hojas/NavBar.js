import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/"> RegistrarUsuario </Link> </li>
            <li><Link to="/uno"> IniciarSecion </Link> </li>
            
        </ul>
    )
}

export default NavBar;