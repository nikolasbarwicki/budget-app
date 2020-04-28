import React, { useContext } from 'react';
import { Formik } from 'formik';
import { GlobalContext } from 'context/GlobalState';
import NumberInput from 'components/NumberInput';
import cuid from 'cuid';

const Form = () => {
  const { addCategory } = useContext(GlobalContext);

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ id: cuid.slug(), category: '', amount: '' }}
        onSubmit={(values) => {
          addCategory(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="category">
              Category:
              <input
                id="category"
                name="category"
                type="text"
                onChange={props.handleChange}
                value={props.values.category}
              />
            </label>

            <label htmlFor="amount">amount</label>
            <NumberInput
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
