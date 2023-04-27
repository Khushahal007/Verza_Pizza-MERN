import axios from 'axios';

export const getAllPizzas = () => async dispatch => {

    dispatch({ type: 'GET_PIZZAS_REQUEST' });

    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response)
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: 'GET_PIZZAS_ERROR', payload: [] });
    }
}
