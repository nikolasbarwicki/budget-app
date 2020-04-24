import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const Income = () => {
  const [inputValue, setInputValue] = useState('');

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
