import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Actions/cartAction'
import { deleteFromCart } from '../Actions/cartAction'
import Checkout from '../Components/Checkout'

const CardScreen = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems

    var subtotal = cartItems.reduce((x, item) => x + item.price[0][item.variants] * item.quantity, 0)

    const dispatch = useDispatch();
// console.log(cartItems[0].variants)
    return (
        <div>
            <div className="row justify-content-center">

                <div className="col-md-6">
                    <h2 style={{ fontSize: '30px' }}> Cart Items</h2>

                    {cartItems.map(item => (
                        <div className="flex-container" key={item.name}>
                            <div className="text-left m-1 w-100">
                                <h1>{item.name}</h1>
                                <h1>Price: {item.quantity} * {item.price[0][item.variants]} = {item.quantity * item.price[0][item.variants]}</h1>
                                <h1 style={{ display: 'inline' }}>Quantity: </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => dispatch(addToCart(item, item.quantity + 1, item.variants))}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={() => dispatch(addToCart(item, item.quantity - 1, item.variants))}></i>


                                <hr />
                            </div>
                            <div className="m-1 w-100">
                                <img src={item.image} style={{ height: '80px' }} alt="" />
                            </div>
                            <div className="m-1 w-100">
                                <i className="fa fa-trash" aria-hidden="true" onClick={() => dispatch(deleteFromCart(item))}></i>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-md-4 text-right">
                    <h2 style={{ fontSize: '45px' }}>SubTotal : $ {subtotal} </h2>
                    <Checkout subtotal={subtotal} />
                </div>
            </div>
        </div>
    )
}






export default CardScreen