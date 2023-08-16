/* eslint-disable no-unused-vars */

import React from 'react';
import HomePage from './Pages/HomePage';
import Modal from './Component/Modal';
import { useModal } from './Context/ModalContext';

const App = () => {
  const {isModalOpen, showModal, hideModal } = useModal();
  return (
    <div className='font-body scroll-smooth'>
      <HomePage/>


      <Modal visible={isModalOpen} hide={hideModal}/>
    </div>
  );
};

export default App;
