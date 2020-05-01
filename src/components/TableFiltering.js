import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const StyledSelect = styled.select`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
`;

const StyledInput = styled.input`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  height: 3rem;
  width: 10rem;
  background-color: #edf0f5;
  border-radius: 1.5rem;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  cursor: pointer;
`;

const TableFiltering = ({
  categoryFilter,
  nameSearch,
  setCategoryFilter,
  setNameSearch,
  setDateFilter,
}) => {
  return (
    <Wrapper>
      <StyledLabel>
        Search by category:
        <StyledSelect
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setDateFilter(null);
            setNameSearch(null);
          }}
        >
          <option value="">All</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Clothes">Clothes</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Car">Car</option>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel>
        Search by name:
        <StyledInput
          type="text"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </StyledLabel>

      <div>
        <p>Filter by date</p>
        <ButtonsWrapper>
          <StyledButton
            type="button"
            onClick={() => setDateFilter(moment().startOf('day').format('DD/MM/YYYY'))}
          >
            Today
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => setDateFilter(moment().startOf('week').format('DD/MM/YYYY'))}
          >
            This week
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => setDateFilter(moment().startOf('month').format('DD/MM/YYYY'))}
          >
            This month
          </StyledButton>
        </ButtonsWrapper>
      </div>
    </Wrapper>
  );
};

export default TableFiltering;
