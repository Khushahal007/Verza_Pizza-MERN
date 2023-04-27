export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {

  switch (action.type) {
    case 'GET_PIZZAS_REQUEST': return {
      ...state,
      loading: true,
      pizzas:[]
      
    }
    case 'GET_PIZZAS_SUCCESS': return {
      loading: false,
      pizzas: action.payload
    }
    case 'GET_PIZZAS_ERROR': return {
      loading: false,
      pizzas: []
    }

    default: return state
  }
}
