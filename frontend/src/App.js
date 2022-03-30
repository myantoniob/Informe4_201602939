import './App.css';
import RegistrarUsuario from './componentes/inicio/RegistrarUsuario';
import IniciarSecion from './componentes/inicio/IniciarSesion';
import Feed from './componentes/usuario/Feed';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './componentes/inicio/Inicio'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<Inicio/>} />
          </Routes>

          <Routes>
            <Route path='/signin' element={<RegistrarUsuario/>} />
          </Routes>

          <Routes>
            <Route path='/login' element={<IniciarSecion/>} />
          </Routes>

          <Routes>
            <Route path='/user' element={<Feed/>} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
