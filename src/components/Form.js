import React, { useContext } from 'react';
import { Formik } from 'formik';
import { GlobalContext } from 'context/GlobalState';
import MyNumberInput from 'components/MyNumberInput';
import cuid from 'cuid';

const Form = () => {
  const { addTransaction, categories } = useContext(GlobalContext);

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ id: cuid.slug(), category: 'Food', name: '', date: '', amount: '' }}
        onSubmit={(values) => {
          addTransaction(values);
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
            <MyNumberInput
              value={props.values.amount}
              onValueChange={(val) => props.setFieldValue('amount', val.floatValue)}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;