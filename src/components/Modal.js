import React, { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from 'context/modalContext';
import { GlobalContext } from 'context/GlobalState';
import styled from 'styled-components';
import useOnClickOutside from 'hooks/useOnClickOutside';
import NumberFormat from 'react-number-format';

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
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

const Modal = () => {
  const { handleModal, modal } = useContext(ModalContext);
  const { categories } = useContext(GlobalContext);

  const ref = useRef();
  useOnClickOutside(ref, () => handleModal());

  if (modal) {
    return createPortal(
      <Overlay>
        <Dialog ref={ref}>
          <h4>Add new transaction</h4>
          <form>
            <label>
              Name
              <input type="text" />
            </label>
            <label>
              Category
              <select>
                {categories.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </label>
            <label>
              Value
              <NumberFormat
                id="monthyIncome"
                // value={inputValue}
                thousandSeparator
                prefix="$"
                decimalScale="2"
                // onValueChange={({ value }) => {
                //   setInputValue(value);
                // }}
              />
            </label>
            <label>
              Date
              <input type="date" />
            </label>
            <button type="button" onClick={() => handleModal()}>
              Cancel
            </button>
            <button type="submit">Confirm</button>
          </form>
        </Dialog>
      </Overlay>,
      document.querySelector('#modal'),
    );
  }
  return null;
};

export default Modal;
