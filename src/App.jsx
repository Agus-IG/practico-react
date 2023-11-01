import { BrowserRouter as BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { PerfilUser } from './pages/PerfilUser';
import Register from './pages/Register';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

export const App = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          
          <Button color="inherit" >Login</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Perfil</Button>

        </Toolbar>
      </AppBar>
    </Box>

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