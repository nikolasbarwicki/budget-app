import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: lightblue;
  display: grid;
  grid-template-columns: 40% 30% auto 80px;
  align-items: center;
  height: 5rem;
  margin: 1rem 0;
  padding: 2rem;
`;

const Category = styled.p`
  margin: 0;
`;

const BudgetItem = ({ category, amount, spent, id }) => {
  const { deleteCategory } = useContext(GlobalContext);

  return (
    <Wrapper>
      <Category>{category}</Category>
      <Category>Planned: ${amount}</Category>
      <Category>Spent: ${spent}</Category>
      <button type="button" onClick={() => deleteCategory(id, category)}>
        Delete
      </button>
    </Wrapper>
  );
};

export default BudgetItem;
