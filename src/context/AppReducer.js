export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        expenses: [
          ...state.expenses.slice(0, 4),
          state.expenses[4].filter((item) => item.id !== action.payload),
        ],
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        expenses: [...state.expenses.slice(0, 4), [...state.expenses[4], action.payload]],
      };
    case 'UPDATE_INCOME':
      return {
        ...state,
        income: [...state.income.slice(0, 4), action.payload],
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expense: [...state.expense.slice(0, 4), action.payload],
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        budget: [...state.budget.slice(0, 4), [...state.budget[4], action.payload]],
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
          ...state.budget.slice(0, 4),
          state.budget[4].filter((item) => item.id !== action.payload),
        ],
      };
    case 'DELETE_CATEGORY_LIST':
      return {
        ...state,
        categories: [...state.categories.filter((item) => item !== action.payload)],
      };

    default:
      return state;
  }
};
