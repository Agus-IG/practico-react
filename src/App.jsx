import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import  Login  from './pages/Login';
import {PerfilUser} from  './pages/PerfilUser';
import Register from './pages/Register';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/home' Component={Home}>
          </Route>
          <Route path='/login' Component={Login}>
          </Route>
          <Route path='/perfiluser' Component={PerfilUser}>
          </Route>
          <Route path='/register' Component={Register}>
          </Route>
        </Routes>
      </BrowserRouter>

      <>
        <div>
          <a href="/home"> Inicio </a>
          <br></br>
          <a href="/login">Login</a>
          <br></br>
          <a href="/perfiluser">Perfil del usuario</a>
          <br></br>
          <a href="/register">Registro</a>
        </div>

      </>

    </>

  )
}

export default App
