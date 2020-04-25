import React from 'react';
import { ModalContext } from 'context/modalContext';

const ToggleModal = () => {
  const { handleModal } = React.useContext(ModalContext);

  return (
    <>
      <button type="button" onClick={() => handleModal()}>
        Add new
      </button>
    </>
  );
};

export default ToggleModal;
