import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
//   const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    // setModalContent(content);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    // setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
