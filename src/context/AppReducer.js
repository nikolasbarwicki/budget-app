import moment from 'moment';

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        expenses: [
          ...state.expenses.slice(0, moment().month()),
          state.expenses[moment().month()].filter(
            (item) => item.id !== action.payload,
          ),
        ],
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        expenses: [
          ...state.expenses.slice(0, moment().month()),
          [...state.expenses[moment().month()], action.payload],
        ],
      };
    case 'UPDATE_INCOME':
      return {
        ...state,
        income: [...state.income.slice(0, moment().month()), action.payload],
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expense: [...state.expense.slice(0, moment().month()), action.payload],
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        budget: [
          ...state.budget.slice(0, moment().month()),
          [...state.budget[moment().month()], action.payload],
        ],
      };
    case 'ADD_CATEGORY_LIST':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case 'DELETE_CATEGORY':
      return {
        ...state,
        budget: [
          ...state.budget.slice(0, moment().month()),
          state.budget[moment().month()].filter(
            (item) => item.id !== action.payload,
          ),
        ],
      };
    case 'DELETE_CATEGORY_LIST':
      return {
        ...state,
        categories: [
          ...state.categories.filter((item) => item !== action.payload),
        ],
      };

    default:
      return state;
  }
};
