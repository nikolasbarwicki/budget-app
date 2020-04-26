export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        expenses: [
          ...state.expenses.slice(0, 3),
          state.expenses[3].filter((item) => item.id !== action.payload),
        ],
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        expenses: [...state.expenses, state.expenses[3].push(action.payload)],
      };

    default:
      return state;
  }
};
