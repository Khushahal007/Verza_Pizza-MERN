import axios from 'axios';

export const getAllPizzas = () => async dispatch => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' });

  try {
    const response = await axios.get('/api/pizzas/getallpizzas');
    console.log(response);
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
  } catch (error) {
    // Handle the error and provide a more specific error message in the payload
    const errorMessage = error.response?.data?.message || 'An error occurred while fetching pizzas.';
    dispatch({ type: 'GET_PIZZAS_ERROR', payload: errorMessage });
  }
};
