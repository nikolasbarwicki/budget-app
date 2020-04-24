import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: lightblue;
  display: grid;
  grid-template-columns: auto 100px 50%;
  align-items: center;
  height: 5rem;
  margin: 1rem 0;
  padding: 2rem;
`;

const Category = styled.p`
  margin: 0;
`;

const BudgetItem = () => {
  return (
    <Wrapper>
      <Category>Food</Category>
      <Category>$450</Category>
      <ProgressBar now="60" label="60%" />
    </Wrapper>
  );
};

export default BudgetItem;