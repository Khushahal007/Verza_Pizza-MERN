export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {

  switch (action.type) {
    case 'GET_PIZZAS_REQUEST': return {
      ...state,
      loading: true,
      pizzas:[]
      
    }
    case 'GET_PIZZAS_SUCCESS': return {
      ...state,
      loading: false,
      pizzas: action.payload
    }
    case 'GET_PIZZAS_ERROR': return {
      ...state,
      loading: false,
      pizzas: action.payload.error.response
    }

    default: return state
  }
}
