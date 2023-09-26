export const getAllPizzasReducer = (state = { pizzas: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case 'GET_PIZZAS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PIZZAS_SUCCESS':
      return {
        ...state,
        loading: false,
        pizzas: action.payload,
        error: null, // Reset the error to null on success
      };
    case 'GET_PIZZAS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload, // Set the error message
      };
    default:
      return state;
  }
};
