import { BrowserRouter as BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { PerfilUser } from './pages/PerfilUser';
import Register from './pages/Register';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

export const App = () => {
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

      <a href="/home">Inicio</a>
      <a href="/login">login</a>
      <a href="/perfiluser">perfil del usuario</a>
      <a href="/register">registro</a>
    </>
  )};


export default App