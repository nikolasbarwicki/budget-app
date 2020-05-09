import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context/GlobalState';
import BudgetItem from 'components/BudgetItem';

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BudgetItems = () => {
  //   const currMonth = moment().month();

  const { budget, expenses } = useContext(GlobalContext);

  const currBudget = budget[4];
  const currExpenses = expenses[4];

  const calcCategoryExpenses = (cat) => {
    return [...currExpenses.filter(({ category }) => category === cat)].reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
  };

  return (
    <Wrapper>
      {currBudget.map((item) => (
        <BudgetItem
          category={item.category}
          amount={item.amount}
          spent={calcCategoryExpenses(item.category)}
          key={item.id}
          id={item.id}
        />
      ))}
    </Wrapper>
  );
};

export default BudgetItems;