/* eslint-disable no-unused-vars */

import React from 'react';
import HomePage from './Pages/HomePage';
import Modal from './Component/Modal';
import { useModal } from './Context/ModalContext';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';

const App = () => {
  const {isModalOpen, showModal, hideModal } = useModal();
  return (
    <div className='font-body scroll-smooth'>

      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/admin' element={ <AdminPage/>}/>
      </Routes>
     


      <Modal visible={isModalOpen} hide={hideModal}/>
    </div>
  );
};

export default App;
