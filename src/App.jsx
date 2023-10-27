import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import  Login  from './pages/Login';
import {PerfilUser} from  './pages/PerfilUser';
import Register from './pages/Register';


function App() {
  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/home'Component={Home}>
  </Route>
  <Route path='/login'Component={Login}>
  </Route>
  <Route path='/perfiluser'Component={PerfilUser}>
  </Route>
  <Route path='/register'Component={Register}>
  </Route>
</Routes>
</BrowserRouter>

<>
<a href="/home">Inicio</a> 
<br></br>
<a href="/login">login</a>
<br></br>
<a href="/perfiluser">perfil del usuario</a>
<br></br>
<a href="/register">registro</a> 
</>

    </>
    
  )
}

export default App
