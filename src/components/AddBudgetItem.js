import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const AddBudgetItem = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="category">
          Category:
          <input type="text" id="category" />
        </label>
        <label htmlFor="monthlyBudget">
          Monthly budget:
          <NumberFormat
            id="monthlyBudget"
            value={inputValue}
            thousandSeparator
            prefix="$"
            decimalScale="2"
            onValueChange={({ value }) => {
              setInputValue(value);
            }}
          />
        </label>
        <button type="submit">Add category</button>
      </form>
    </div>
  );
};

export default AddBudgetItem;
