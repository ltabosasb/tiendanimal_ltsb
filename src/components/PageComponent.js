import React from 'react';
import MisTareas from '../views/MisTareas';
import MisDevoluciones from '../views/MisDevoluciones';
import MisComunicaciones from './../views/MisComunicaciones';
import MisMejoresAmigos from './../views/MisMejoresAmigos';
import UserDataManager from './UserDataManager';

const PageComponent = ({ pageName }) => {
  const renderContent = () => {
    switch (pageName) {
      case 'Mis Datos':
        return <UserDataManager />
      case 'Mis Tareas':
        return <MisTareas />
      case 'Mis Devoluciones':
        return <MisDevoluciones />
      case 'Mis Comunicaciones':
        return <MisComunicaciones />
      case 'Mis Mejores Amigos':
        return <MisMejoresAmigos />
      default:
        return <MisTareas />
    }
  }

  return (
    <div className='main-view'>
      {renderContent()}
    </div>
  )
};

export default PageComponent;