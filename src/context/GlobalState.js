import React, { createContext, useReducer } from 'react';
import AppReducer from 'context/AppReducer';

// Initial state
const initialState = {
  expenses: [
    { id: 1, name: 'Biedronka', category: 'Jedzenie', date: '2020-04-24', amount: 18 },
    { id: 2, name: 'Biedrona', category: 'Jedzenie', date: '2020-04-15', amount: 14 },
    { id: 3, name: 'Biednka', category: 'Paliwo', date: '2020-04-23', amount: 13 },
    { id: 4, name: 'Biedonka', category: 'Alkohol', date: '2020-03-02', amount: 15 },
    { id: 5, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
    { id: 6, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
    { id: 7, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
    { id: 8, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
    { id: 9, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
    { id: 10, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  console.log(dispatch);
  //   // Actions
  //   function deleteTransaction(id) {
  //     dispatch({
  //       type: 'DELETE_TRANSACTION',
  //       payload: id,
  //     });
  //   }

  //   function addTransaction(transaction) {
  //     dispatch({
  //       type: 'ADD_TRANSACTION',
  //       payload: transaction,
  //     });
  //   }

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
