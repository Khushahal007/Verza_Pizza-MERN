import {combineReducers} from 'redux'
import {getAllPizzasReducer} from './Reducers/pizzaReducers'
import { createStore , applyMiddleware } from 'redux'
import { cartReducer } from './Reducers/cartReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer : cartReducer
})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState ={
    cartReducer:{
    cartItems: cartItems
    }
}
const composeEnhancers=composeWithDevTools({})
const store= createStore(finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)))

export default store