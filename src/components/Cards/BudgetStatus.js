import React, { useContext } from 'react';
import ProgressBarCircle from 'components/ProgressBarCircle';
import { GlobalContext } from 'context/GlobalState';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, 25rem) 10rem;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  margin: auto 0;
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledAmount = styled.span`
  font-weight: ${(props) => props.theme.bold};
  font-size: ${(props) => props.theme.fontSize.m};
  margin-bottom: 0.5rem;
`;

const BudgetStatus = () => {
  const { expenses, budget, income } = useContext(GlobalContext);

  const currMonth = 6;

  const currExpenses = expenses[currMonth];
  const currBudget = budget[currMonth];
  const currIncome = income[currMonth];

  const spent = currExpenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  const left = currBudget.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  return (
    <Wrapper>
      <ProgressBarCircle percentage={parseInt((spent / left) * 100, 10) || 0} />
      <AmountBox>
        <StyledAmount>${currIncome - left}</StyledAmount>
        <span>Free</span>
      </AmountBox>
      <AmountBox>
        <StyledAmount>${spent}</StyledAmount>
        <span>Spent</span>
      </AmountBox>
      <AmountBox>
        <StyledAmount>${left}</StyledAmount>
        <span>Planned</span>
      </AmountBox>
    </Wrapper>
  );
};

export default BudgetStatus;
