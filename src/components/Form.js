import React, { useContext } from 'react';
import { Formik } from 'formik';
import { GlobalContext } from 'context/GlobalState';
import { ModalContext } from 'context/modalContext';
import NumberInput from 'components/NumberInput';
import cuid from 'cuid';
import styled, { css } from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  width: 40rem;
  grid-gap: 2rem;
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

const StyledInput = styled.input`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
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

const Form = () => {
  const { addTransaction, categories, updateExpense, expenses } = useContext(GlobalContext);
  const { handleModal } = useContext(ModalContext);

  const currExpenses = expenses[3];

  return (
    <div>
      <StyledHeading>Add new transaction</StyledHeading>
      <Formik
        initialValues={{ id: cuid.slug(), category: 'Food', name: '', date: '', amount: '' }}
        onSubmit={(values) => {
          addTransaction(values);
          console.log(values);
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
              />
            </StyledLabel>

            <StyledLabel htmlFor="date">
              Date
              <StyledInput
                id="date"
                name="date"
                type="date"
                onChange={props.handleChange}
                value={props.values.date}
              />
            </StyledLabel>

            <StyledLabel htmlFor="amount">
              Amount
              <NumberInput
                value={props.values.amount}
                onValueChange={(val) => props.setFieldValue('amount', val.floatValue)}
              />
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
