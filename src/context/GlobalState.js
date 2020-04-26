import React, { createContext, useReducer } from 'react';
import AppReducer from 'context/AppReducer';

// Initial state
const initialState = {
  // TODO: figure out how to get sum of expenses for each month
  income: [1300, 1400, 1350, 1500],
  expense: [950, 1170, 895, 805],
  budget: [
    [],
    [],
    [],
    [
      { category: 'Food', amount: 250 },
      { category: 'Rent', amount: 750 },
      { category: 'Clothes', amount: 130 },
      { category: 'Car', amount: 70 },
      { category: 'Entertainment', amount: 140 },
    ],
  ],
  expenses: [
    [{ id: 1, name: 'Apartment', category: 'Rent', date: '2020-01-24', amount: 950 }],
    [{ id: 1, name: 'Apartment', category: 'Rent', date: '2020-02-24', amount: 1170 }],
    [{ id: 1, name: 'Apartment', category: 'Rent', date: '2020-03-24', amount: 895 }],
    [
      { id: 1, name: 'Apartment', category: 'Rent', date: '2020-04-24', amount: 180 },
      { id: 2, name: 'Shoes', category: 'Clothes', date: '2020-04-15', amount: 100 },
      { id: 3, name: 'Suit', category: 'Clothes', date: '2020-04-23', amount: 70 },
      { id: 4, name: 'Tesco', category: 'Food', date: '2020-04-02', amount: 85 },
      { id: 5, name: 'Tesco', category: 'Food', date: '2020-04-05', amount: 90 },
      { id: 6, name: 'Cinema', category: 'Entertainment', date: '2020-04-07', amount: 10 },
      { id: 7, name: 'Book', category: 'Entertainment', date: '2020-04-15', amount: 5 },
      { id: 8, name: 'dzsiaij', category: 'Entertainment', date: '2020-04-17', amount: 90 },
      { id: 9, name: 'Walmart', category: 'Food', date: '2020-04-09', amount: 140 },
      { id: 10, name: 'Gasoline', category: 'Car', date: '2020-04-11', amount: 35 },
    ],
  ],
  categories: ['Food', 'Rent', 'Clothes', 'Car', 'Entertainment'],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        expense: state.expense,
        budget: state.budget,
        income: state.income,
        categories: state.categories,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
