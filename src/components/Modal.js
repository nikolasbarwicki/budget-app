import React, { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from 'context/modalContext';

import styled from 'styled-components';
import useOnClickOutside from 'hooks/useOnClickOutside';

import Form from 'components/Form';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;
`;

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  @media only screen and (max-width: 420px) {
    padding: 2rem;
  }
`;

const Modal = () => {
  const { handleModal, modal } = useContext(ModalContext);

  const ref = useRef();
  useOnClickOutside(ref, () => handleModal());

  if (modal) {
    return createPortal(
      <Overlay>
        <Dialog ref={ref}>
          <Form />
        </Dialog>
      </Overlay>,
      document.querySelector('#modal'),
    );
  }
  return null;
};

export default Modal;
