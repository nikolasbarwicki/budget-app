import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import styled from 'styled-components';
import deleteIcon from 'assets/deleteIcon.svg';
import ProgressBar from 'components/ProgressBar';

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

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 25% 4rem min-content 4rem 4rem;
  }

  @media only screen and (max-width: 960px) {
    padding: 0;
    grid-template-columns: 30% 4rem min-content 4rem 4rem;
  }

  @media only screen and (max-width: 576px) {
    padding: 0;
    grid-template-columns: 30% repeat(2, minmax(2rem, 6rem)) 4rem;
  }
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
  background-color: #fff;
  color: white;
  background-repeat: no-repeat;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
  justify-self: end;
  overflow: hidden;
`;

const StyledAmount = styled.span`
  font-weight: ${(props) => props.theme.bold};
  font-size: ${(props) => props.theme.fontSize.m};
  margin-bottom: 0.5rem;
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
      <ProgressBar width={(spent / amount) * 100} />

      <AmountBox>
        <StyledAmount>${amount}</StyledAmount>
        <span>Planned</span>
      </AmountBox>
      <StyledDelete type="button" onClick={() => deleteCategory(id, category)} />
    </Wrapper>
  );
};

export default BudgetItem;
