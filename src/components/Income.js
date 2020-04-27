import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import { GlobalContext } from 'context/GlobalState';
import moment from 'moment';

const Income = () => {
  const currMonth = moment().month();
  const { income, updateIncome } = useContext(GlobalContext);

  const currIncome = income[currMonth];

  return (
    <div>
      <label htmlFor="monthyIncome">
        This month income:
        <NumberFormat
          id="monthyIncome"
          value={currIncome}
          thousandSeparator
          prefix="$"
          decimalScale="2"
          onValueChange={({ value }) => {
            updateIncome(value);
          }}
        />
      </label>
    </div>
  );
};

export default Income;
