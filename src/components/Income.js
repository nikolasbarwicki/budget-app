import React, { useState, useContext } from 'react';
import NumberFormat from 'react-number-format';
import { GlobalContext } from 'context/GlobalState';
import moment from 'moment';

const Income = () => {
  const currYear = moment().year();
  const currMonth = moment().month();

  const { income } = useContext(GlobalContext);

  const currIncome = income[currYear][currMonth];

  const [inputValue, setInputValue] = useState(currIncome);

  // TODO: Add reducer to input

  return (
    <div>
      <label htmlFor="monthyIncome">
        This month income:
        <NumberFormat
          id="monthyIncome"
          value={inputValue}
          thousandSeparator
          prefix="$"
          decimalScale="2"
          onValueChange={({ value }) => {
            setInputValue(value);
          }}
        />
      </label>
    </div>
  );
};

export default Income;
