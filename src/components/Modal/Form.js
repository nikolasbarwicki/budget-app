import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { GlobalContext } from 'context/GlobalState';
import { ModalContext } from 'context/modalContext';
import NumberInput from 'components/NumberInput';
import cuid from 'cuid';
import styled, { css } from 'styled-components';

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

const StyledNumberInput = styled(NumberInput)`
  ${StyledInputs}

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

const StyledForm = styled.form`
  display: grid;
  width: 40rem;
  grid-gap: 2rem;

  @media only screen and (max-width: 576px) {
    width: 75vw;
  }
`;

const StyledSelect = styled.select`
  ${StyledInputs}

  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
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

const StyledButton = styled.button`
  height: 4rem;
  border: none;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  border-radius: 1.5rem;
  font-family: inherit;
  cursor: pointer;

  ${({ warning }) =>
    warning &&
    css`
      background-color: ${(props) => props.theme.gray};
      color: ${(props) => props.theme.darkblue};

      &:hover {
        background-color: ${(props) => props.theme.red};
        color: white;
      }
    `}
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const StyledHeading = styled.h2`
  margin-bottom: 2rem;
`;

const Error = styled.span`
  color: ${(props) => props.theme.red};
  font-size: ${(props) => props.theme.fontSize.s};
`;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'The name is too short!')
    .max(50, 'The name is too long!')
    .required('Please enter the name'),
  date: Yup.date().required('Please enter the date'),
  amount: Yup.number().required('Please enter the amount'),
});

const Form = () => {
  const { addTransaction, categories, updateExpense, expenses } = useContext(
    GlobalContext,
  );
  const { handleModal } = useContext(ModalContext);

  const currExpenses = expenses[4];

  return (
    <div>
      <StyledHeading>Add new transaction</StyledHeading>
      <Formik
        initialValues={{
          id: cuid.slug(),
          category: 'Food',
          name: '',
          date: '',
          amount: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          addTransaction(values);

          const spent = currExpenses.reduce((sum, item) => {
            return sum + item.amount;
          }, 0);

          updateExpense(spent);

          handleModal();
        }}
      >
        {(props) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <StyledLabel htmlFor="category">
              Category
              <StyledSelect
                id="category"
                name="category"
                onChange={props.handleChange}
                value={props.values.firstName}
              >
                {categories.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </StyledSelect>
            </StyledLabel>

            <StyledLabel htmlFor="name">
              Name
              <StyledInput
                id="name"
                name="name"
                type="text"
                onChange={props.handleChange}
                value={props.values.name}
                autoComplete="off"
                error={props.errors.name && props.touched.name}
              />
              {props.errors.name && props.touched.name ? (
                <Error>{props.errors.name}</Error>
              ) : null}
            </StyledLabel>

            <StyledLabel htmlFor="date">
              Date
              <StyledInput
                id="date"
                name="date"
                type="date"
                min="2020-07-01"
                max="2020-07-31"
                onChange={props.handleChange}
                value={props.values.date}
                parse={props.parse}
                error={props.errors.date && props.touched.date}
              />
              {props.errors.date && props.touched.date ? (
                <Error>{props.errors.date}</Error>
              ) : null}
            </StyledLabel>

            <StyledLabel htmlFor="amount">
              Amount
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
            </StyledLabel>

            <ButtonsWrapper>
              <StyledButton warning type="button" onClick={() => handleModal()}>
                Cancel
              </StyledButton>
              <StyledButton type="submit">Submit</StyledButton>
            </ButtonsWrapper>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
