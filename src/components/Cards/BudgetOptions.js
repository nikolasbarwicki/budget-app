import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import styled, { css } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NumberInput from 'components/NumberInput';
import cuid from 'cuid';

const StyledInputs = css`
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
    box-shadow: 0 0 5px rgba(77, 124, 254, 0.5);
    outline: none;
  }
`;

const Wrapper = styled.div`
  padding: 0 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;

  @media only screen and (max-width: 576px) {
    padding: 1rem 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
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
  ${StyledInputs}

  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${(props) => props.theme.red};
      outline: none;

      &:focus,
      &:active {
        box-shadow: ${(props) => props.theme.red} 0px 0px 5px 1px;
        border: 1px solid ${(props) => props.theme.red};
        outline: none;
      }
    `}
`;

const StyledLabel = styled.label`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const OtherStyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledNumberInput = styled(NumberInput)`
  ${StyledInputs}

  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${(props) => props.theme.red};
      outline: none;

      &:focus,
      &:active {
        box-shadow: ${(props) => props.theme.red} 0px 0px 5px 1px;
        border: 1px solid ${(props) => props.theme.red};
        outline: none;
      }
    `}
`;

const Error = styled.span`
  color: ${(props) => props.theme.red};
  font-size: ${(props) => props.theme.fontSize.s};
  position: absolute;
  z-index: 10;
  top: 6rem;
  width: 20rem;
`;

const schema = Yup.object().shape({
  category: Yup.string()
    .min(1, 'The name is too short!')
    .max(50, 'The name is too long!')
    .required('Please enter the name'),
  amount: Yup.number()
    .positive('Must be greater than 0!')
    .required('Please enter the amount'),
});

const BudgetOptions = () => {
  const { addCategory, income, updateIncome } = useContext(GlobalContext);

  const currMonth = 6;

  const currIncome = income[currMonth];

  return (
    <Wrapper>
      <StyledLabel htmlFor="monthlyIncome">
        This month income:
        <StyledNumberInput
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
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          addCategory(values);
          resetForm();
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
                autoComplete="off"
                error={props.errors.category && props.touched.category}
              />
              {props.errors.category && props.touched.category ? (
                <Error>{props.errors.category}</Error>
              ) : null}
            </StyledLabel>
            <OtherStyledLabel htmlFor="amount">
              Amount:
              <StyledNumberInput
                value={props.values.amount}
                onValueChange={(val) =>
                  props.setFieldValue('amount', val.floatValue)
                }
                error={props.errors.amount && props.touched.amount}
              />
              {props.errors.amount && props.touched.amount ? (
                <Error>{props.errors.amount}</Error>
              ) : null}
            </OtherStyledLabel>
            <StyledButton type="submit">Add category</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default BudgetOptions;
