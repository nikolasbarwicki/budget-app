import React from 'react';
import { ModalContext } from 'context/modalContext';
import styled from 'styled-components';

const ModalButton = styled.button`
  height: 6rem;
  width: 6rem;
  background-color: ${(props) => props.theme.blue};
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  position: relative;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);

  ::before {
    content: '';
    background: white;
    height: 38px;
    position: absolute;
    width: 8px;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }

  ::after {
    background: white;
    content: '';
    height: 8px;
    position: absolute;
    width: 38px;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }

  ${(props) =>
    props.small &&
    `
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 0.75rem;

    ::before {
      height: 30px;
      width: 6px;
      border-radius: 5px;
    }

    ::after {
      height: 6px;
      width: 30px;
      border-radius: 5px;
    }
  `}
`;

const ToggleModal = ({ small }) => {
  const { handleModal } = React.useContext(ModalContext);

  return <ModalButton type="button" onClick={() => handleModal()} small={small} />;
};

export default ToggleModal;
