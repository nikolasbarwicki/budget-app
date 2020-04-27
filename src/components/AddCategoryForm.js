import React, { useContext } from 'react';
import { Formik } from 'formik';
import { GlobalContext } from 'context/GlobalState';
import MyNumberInput from 'components/MyNumberInput';
import cuid from 'cuid';

const Form = () => {
  const { addCategory } = useContext(GlobalContext);

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ id: cuid.slug(), category: '', name: '', amount: '' }}
        onSubmit={(values) => {
          addCategory(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="category">
              Category:
              <input type="text" id="category" />
            </label>

            <label htmlFor="amount">amount</label>
            <MyNumberInput
              value={props.values.amount}
              onValueChange={(val) => props.setFieldValue('amount', val.floatValue)}
            />

            <button type="submit">Add category</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
