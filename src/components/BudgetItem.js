import React from 'react';

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

const BudgetItem = ({ category, amount, spent }) => {
  return (
    <Wrapper>
      <Category>{category}</Category>
      <Category>Planned: ${amount}</Category>
      <Category>Spent: ${spent}</Category>
      <button type="button">Delete</button>
    </Wrapper>
  );
};

export default BudgetItem;
