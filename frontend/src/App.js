import './App.css';
import RegistrarUsuario from './hojas/RegistrarUsuario';
import IniciarSecion from './hojas/IniciarSecion';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './hojas/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        
          <Routes>
            <Route path='/' element={<RegistrarUsuario/>} />
          </Routes>

          <Routes>
            <Route path='/uno' element={<IniciarSecion/>} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
