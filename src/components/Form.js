import React, { useContext } from 'react';
import { Formik } from 'formik';
import { GlobalContext } from 'context/GlobalState';
import { ModalContext } from 'context/modalContext';
import NumberInput from 'components/NumberInput';
import cuid from 'cuid';

const Form = () => {
  const { addTransaction, categories, updateExpense, expenses } = useContext(GlobalContext);
  const { handleModal } = useContext(ModalContext);

  const currExpenses = expenses[3];

  return (
    <div>
      <h1>My Form</h1>
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
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              onChange={props.handleChange}
              value={props.values.firstName}
            >
              {categories.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <label htmlFor="name">name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={props.handleChange}
              value={props.values.name}
            />

            <label htmlFor="date">date</label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={props.handleChange}
              value={props.values.date}
            />

            <label htmlFor="amount">amount</label>
            <NumberInput
              value={props.values.amount}
              onValueChange={(val) => props.setFieldValue('amount', val.floatValue)}
            />

            <button type="button" onClick={() => handleModal()}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
