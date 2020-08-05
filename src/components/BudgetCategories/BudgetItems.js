import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'context/GlobalState';
import BudgetItem from 'components/BudgetCategories/BudgetItem';

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BudgetItems = () => {
  const currMonth = 6;

  const { budget, expenses } = useContext(GlobalContext);

  const currBudget = budget[currMonth];
  const currExpenses = expenses[currMonth];

  const calcCategoryExpenses = (cat) => {
    return [...currExpenses.filter(({ category }) => category === cat)].reduce(
      (sum, item) => {
        return sum + item.amount;
      },
      0,
    );
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
