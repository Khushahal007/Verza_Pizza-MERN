import {combineReducers} from 'redux'
import {getAllPizzasReducer} from './Reducers/pizzaReducers'
import { createStore , applyMiddleware } from 'redux'
import { cartReducer } from './Reducers/cartReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { registerUserReducer } from './Reducers/userReducer'
import { loginUserReducer } from './Reducers/userReducer'


const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState ={
    cartReducer:{
    cartItems: cartItems
    },
    loginUserReducer:{
        currentUser: currentUser
    }
}
const composeEnhancers=composeWithDevTools({})
const store= createStore(finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)))

export default store