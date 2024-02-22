import React from "react";
import './components/styles/Views.css'

import Header from './components/Header';
import SlidingNav from "./components/SlidingNav";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <SlidingNav items={['Mis Datos', 'Mis Tareas', 'Mis Devoluciones', 'Mis Comunicaciones', 'Mis Mejores Amigos']} />
    </div>
  )
}

export default App