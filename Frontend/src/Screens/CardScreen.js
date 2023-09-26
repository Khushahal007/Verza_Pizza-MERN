import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Actions/cartAction'
import { deleteFromCart } from '../Actions/cartAction'

const CardScreen = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    

    var subtotal=cartItems.reduce((x, item)=> x+item.price , 0)
    
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '30px' }}> Cart Items</h2>

                    {cartItems.map(item => {
                        return <div className="flex-container">
                            <div className="text-left m-1 w-100">
                                <h1>{item.name}</h1>
                                <h1>Price: {item.quantity} * {item.price[0][item.varient]}={item.prices}</h1>
                                <h1 style={{ display: 'inline' }}>Quantity: </h1>
                                <i class="fa fa-plus" aria-hidden="true" onClick={dispatch(addToCart(item, item.quantity, item.varient + 1))}></i>
                                <b>{item.quantity}</b>
                                <i class="fa fa-minus" aria-hidden="true" onClick={dispatch(addToCart(item, item.quantity, item.varient - 1))}></i>
                                <hr />
                            </div>
                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ height: '80px' }} alt="" />
                            </div>
                            <div className='m-1 w-100'>
                                <i class="fa fa-trash" aria-hidden="true" onClick={() => dispatch(deleteFromCart(item))}></i>
                            </div>
                        </div>
                    })}

                </div>
                <div className="col-md-4 text-right">
                    <h2 style={{fontSize:'45px'}}>SubTotal : $ {subtotal} </h2>
                    <button className='btn'>Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default CardScreen