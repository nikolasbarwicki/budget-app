import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import styled, { css } from 'styled-components';
import deleteIcon from 'assets/deleteIcon.png';

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 6rem min-content 6rem 10rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 8rem;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.gray};
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.p`
  margin: 0;
  justify-self: start;
`;

const StyledDelete = styled.button`
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
  justify-self: end;
`;

const StyledAmount = styled.span`
  font-weight: ${(props) => props.theme.bold};
  font-size: ${(props) => props.theme.fontSize.m};
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 1.1rem;
  width: 23rem;
  background-color: ${(props) => props.theme.gray};
  border-radius: 2rem;
  margin: 0 3.5rem;
  overflow: hidden;
`;

const PrgoressBarInside = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${(props) => props.theme.blue};

  ${({ width }) =>
    width >= 100 &&
    css`
      background-color: ${(props) => props.theme.red};
    `}
`;

const BudgetItem = ({ category, amount, spent, id }) => {
  const { deleteCategory } = useContext(GlobalContext);

  return (
    <Wrapper>
      <Category>{category}</Category>
      <AmountBox>
        <StyledAmount>${spent}</StyledAmount>
        <span>Spent</span>
      </AmountBox>
      <ProgressBar>
        <PrgoressBarInside width={(spent / amount) * 100} />
      </ProgressBar>
      <AmountBox>
        <StyledAmount>${amount}</StyledAmount>
        <span>Planned</span>
      </AmountBox>
      <StyledDelete type="button" onClick={() => deleteCategory(id, category)} />
    </Wrapper>
  );
};

export default BudgetItem;
