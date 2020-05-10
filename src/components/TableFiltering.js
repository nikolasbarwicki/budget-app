import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Input from 'components/Input';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;

  @media only screen and (max-width: 420px) {
    padding: 1rem 2rem;
  }
`;

const StyledSelect = styled.select`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;

  @media only screen and (max-width: 420px) {
    grid-gap: 0.6rem;
  }
`;

const StyledRadio = styled.label`
  height: 3rem;
  background-color: #edf0f5;
  border-radius: 1.5rem;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(77, 124, 254, 0.1);
  }

  @media only screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const StyledRadioInput = styled.input`
  display: none;

  &:checked {
    + label {
      background-color: ${(props) => props.theme.blue};
      color: white;
    }
  }
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

      <Input
        label="Search by name"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
      />

      <div>
        <p>Filter by date</p>
        <ButtonsWrapper>
          <div>
            <StyledRadioInput
              type="radio"
              name="options"
              id="filterDay"
              autoComplete="off"
              onChange={() => setDateFilter(moment().startOf('day').format('DD/MM/YYYY'))}
            />
            <StyledRadio htmlFor="filterDay">Today</StyledRadio>
          </div>
          <div>
            <StyledRadioInput
              type="radio"
              name="options"
              id="filterWeek"
              autoComplete="off"
              onChange={() => setDateFilter(moment().startOf('isoWeek').format('DD/MM/YYYY'))}
            />
            <StyledRadio htmlFor="filterWeek">This week</StyledRadio>
          </div>
          <div>
            <StyledRadioInput
              type="radio"
              name="options"
              id="filterMonth"
              autoComplete="off"
              onChange={() => setDateFilter(moment().startOf('month').format('DD/MM/YYYY'))}
              defaultChecked
            />
            <StyledRadio htmlFor="filterMonth">This month</StyledRadio>
          </div>
        </ButtonsWrapper>
      </div>
    </Wrapper>
  );
};

export default TableFiltering;
