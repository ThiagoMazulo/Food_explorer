
import Usuario from './assets/login/Usuario'
import './App.css'
import Login from './assets/login/Login';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
     <Usuario/> 
     <Login/> 
     <Outlet/>
    </>
  )
}

export default App;
