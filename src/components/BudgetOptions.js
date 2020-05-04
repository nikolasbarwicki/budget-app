import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import styled from 'styled-components';
import { Formik } from 'formik';
import NumberFormat from 'react-number-format';
import NumberInput from 'components/NumberInput';
import cuid from 'cuid';

const Wrapper = styled.div`
  padding: 0 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const StyledForm = styled.form`
  width: 93%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
`;

const StyledButton = styled.button`
  align-self: end;
  height: 4rem;
  border: none;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  border-radius: 1.5rem;
  font-family: inherit;
  cursor: pointer;
`;

const StyledHr = styled.hr`
  border: 1px solid ${(props) => props.theme.gray};
  margin: 1rem 0;
`;

const StyledInput = styled.input`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
`;

const StyledLabel = styled.label`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
`;

const StyledNumberFormat = styled(NumberFormat)`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
`;

const BudgetOptions = () => {
  const { addCategory, income, updateIncome } = useContext(GlobalContext);

  const currIncome = income[3];

  return (
    <Wrapper>
      <StyledLabel htmlFor="monthlyIncome">
        This month income:
        <StyledNumberFormat
          id="monthlyIncome"
          value={currIncome}
          thousandSeparator
          prefix="$"
          decimalScale="2"
          placeholder="Set this month income..."
          onValueChange={({ value }) => {
            updateIncome(parseInt(value, 10));
          }}
        />
      </StyledLabel>

      <StyledHr />
      <Formik
        initialValues={{ id: cuid.slug(), category: '', amount: '' }}
        onSubmit={(values) => {
          addCategory(values);
        }}
      >
        {(props) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <StyledLabel htmlFor="category">
              Category:
              <StyledInput
                id="category"
                name="category"
                type="text"
                onChange={props.handleChange}
                value={props.values.category}
              />
            </StyledLabel>
            <label htmlFor="amount">
              Amount:
              <NumberInput
                value={props.values.amount}
                onValueChange={(val) => props.setFieldValue('amount', val.floatValue)}
              />
            </label>
            <StyledButton type="submit">Add category</StyledButton>
          </StyledForm>
        )}
      </Formik>
      {/* <Input label="Category name:" />
      <InnerWrapper>
        <Input label="Amount:" />
        <StyledButton>Add category</StyledButton>
      </InnerWrapper> */}
    </Wrapper>
  );
};

export default BudgetOptions;
