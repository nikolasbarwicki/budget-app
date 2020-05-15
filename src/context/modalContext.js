import React from 'react';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const { modal, handleModal } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
