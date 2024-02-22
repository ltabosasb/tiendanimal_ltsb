import React, { useState } from 'react';
import './styles/SlidingNav.css'
import PageComponent from './PageComponent';
const navItems = ['Mis Datos', 'Mis Tareas', 'Mis Devoluciones', 'Mis Comunicaciones', 'Mis Mejores Amigos'];

const SlidingNav = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState('Mis Tareas');

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="sliding-nav">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            className={`nav-item ${selectedItem === item ? 'selected' : ''}`} 
            onClick={() => selectItem(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="selected-view">
        <h3>{selectedItem}</h3>
        <PageComponent pageName={selectedItem} />
      </div>
    </div>
  );
};

export default SlidingNav;