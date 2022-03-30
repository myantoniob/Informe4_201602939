import './App.css';
import RegistrarUsuario from './hojas/RegistrarUsuario';
import IniciarSecion from './hojas/IniciarSesion';
import Feed from './hojas/Feed';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './hojas/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>

          <Routes>
            <Route path='/' element={<Feed/>} />
          </Routes>

          <Routes>
            <Route path='/signin' element={<RegistrarUsuario/>} />
          </Routes>

          <Routes>
            <Route path='/login' element={<IniciarSecion/>} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
