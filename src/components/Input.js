import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = ({ label, value, onChange }) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput type="text" value={value} onChange={onChange} />
    </StyledLabel>
  );
};

export default Input;
