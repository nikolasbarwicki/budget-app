import React, { useState, useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Modal = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(true);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    isModalOpen &&
    createPortal(
      <Overlay>
        <Dialog ref={ref}>
          <h4>Add new transaction</h4>
          <form>
            <label>
              Type
              <input type="radio" />
              <input type="radio" />
            </label>
            <label>
              Name
              <input type="text" />
            </label>
            <label>
              Category
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
            <label>
              Date
              <input type="date" />
            </label>
            <label>
              Amount
              <NumberFormat
                id="monthyIncome"
                // value={inputValue}
                thousandSeparator
                prefix="$"
                decimalScale="2"
                // onValueChange={({ value }) => {
                //  setInputValue(value);
                // }}
              />
            </label>
            <button type="button" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button type="submit">Confirm</button>
          </form>
        </Dialog>
      </Overlay>,
      document.querySelector('#modal'),
    )
  );
};

export default Modal;
