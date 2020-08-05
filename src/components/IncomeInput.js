import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import { GlobalContext } from 'context/GlobalState';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(NumberFormat)`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
`;

const IncomeInput = () => {
  const currMonth = 6;
  const { income, updateIncome } = useContext(GlobalContext);

  const currIncome = income[currMonth];

  return (
    <StyledLabel htmlFor="monthlyIncome">
      This month income:
      <StyledInput
        id="monthlyIncome"
        value={currIncome}
        thousandSeparator
        prefix="$"
        decimalScale="2"
        onValueChange={({ value }) => {
          updateIncome(value);
        }}
      />
    </StyledLabel>
  );
};

export default IncomeInput;
