import { BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { PerfilUser } from './pages/PerfilUser';
import Register from './pages/Register';
import * as React from 'react';

import NavBar from './components/navBar';

export const App = () => {
  return (
    <>
    <NavBar></NavBar>
    </>
  )};
 
export default App