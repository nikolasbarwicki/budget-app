import React, { createContext, useReducer } from 'react';
import AppReducer from 'context/AppReducer';

// Initial state
const initialState = {
  income: [1300, 1400, 1350, 1500, 1450, 1450, 1450],
  expense: [950, 1170, 895, 805, 950, 910, 970],
  budget: [
    [],
    [],
    [],
    [
      { id: 1, category: 'Food', amount: 250 },
      { id: 2, category: 'Rent', amount: 0 },
      { id: 3, category: 'Clothes', amount: 130 },
      { id: 4, category: 'Car', amount: 70 },
      { id: 5, category: 'Entertainment', amount: 140 },
    ],
    [
      { id: 1, category: 'Food', amount: 250 },
      { id: 2, category: 'Rent', amount: 150 },
      { id: 3, category: 'Clothes', amount: 130 },
      { id: 4, category: 'Car', amount: 70 },
      { id: 5, category: 'Entertainment', amount: 250 },
    ],
    [
      { id: 1, category: 'Food', amount: 250 },
      { id: 2, category: 'Rent', amount: 150 },
      { id: 3, category: 'Clothes', amount: 130 },
      { id: 4, category: 'Car', amount: 70 },
      { id: 5, category: 'Entertainment', amount: 250 },
    ],
    [
      { id: 1, category: 'Food', amount: 250 },
      { id: 2, category: 'Rent', amount: 150 },
      { id: 3, category: 'Clothes', amount: 130 },
      { id: 4, category: 'Car', amount: 70 },
      { id: 5, category: 'Entertainment', amount: 250 },
    ],
  ],
  expenses: [
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-01-01',
        amount: 950,
      },
    ],
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-02-01',
        amount: 1170,
      },
    ],
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-03-01',
        amount: 895,
      },
    ],
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-04-01',
        amount: 1050,
      },
    ],
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-05-01',
        amount: 1150,
      },
    ],
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-06-01',
        amount: 900,
      },
    ],
    [
      {
        id: 1,
        name: 'Apartment',
        category: 'Rent',
        date: '2020-07-01',
        amount: 180,
      },
      {
        id: 2,
        name: 'Shoes',
        category: 'Clothes',
        date: '2020-07-02',
        amount: 100,
      },
      {
        id: 3,
        name: 'Suit',
        category: 'Clothes',
        date: '2020-07-03',
        amount: 70,
      },
      {
        id: 4,
        name: 'Tesco',
        category: 'Food',
        date: '2020-07-04',
        amount: 85,
      },
      {
        id: 5,
        name: 'Tesco',
        category: 'Food',
        date: '2020-07-05',
        amount: 90,
      },
      {
        id: 6,
        name: 'Cinema',
        category: 'Entertainment',
        date: '2020-07-06',
        amount: 10,
      },
      {
        id: 7,
        name: 'Book',
        category: 'Entertainment',
        date: '2020-07-07',
        amount: 5,
      },
      {
        id: 8,
        name: 'Doctor',
        category: 'Entertainment',
        date: '2020-07-08',
        amount: 90,
      },
      {
        id: 9,
        name: 'Walmart',
        category: 'Food',
        date: '2020-07-09',
        amount: 140,
      },
      {
        id: 10,
        name: 'Gasoline',
        category: 'Car',
        date: '2020-07-10',
        amount: 35,
      },
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

  function updateIncome(income) {
    dispatch({
      type: 'UPDATE_INCOME',
      payload: income,
    });
  }

  function updateExpense(expense) {
    dispatch({
      type: 'UPDATE_EXPENSE',
      payload: expense,
    });
  }

  function addCategory(payload) {
    dispatch({
      type: 'ADD_CATEGORY',
      payload,
    });
    dispatch({
      type: 'ADD_CATEGORY_LIST',
      payload: payload.category,
    });
  }

  function deleteCategory(id, category) {
    dispatch({
      type: 'DELETE_CATEGORY',
      payload: id,
    });
    dispatch({
      type: 'DELETE_CATEGORY_LIST',
      payload: category,
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
        updateIncome,
        updateExpense,
        addCategory,
        deleteCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
