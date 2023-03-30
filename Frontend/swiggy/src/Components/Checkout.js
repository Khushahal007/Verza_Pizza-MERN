import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../Actions/orderAction'
import Error from '../Components/Error'
import Success from '../Components/Success'
import Loading from '../Components/Loading'

export default function Checkout(subtotal) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error errorMessage='Something went wrong' />)}
            {success && (<Success successMessage='Your Order Placed Successfully' />)}
            <StripeCheckout amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51MrDgDSHxYJ0zyNYSHFRuszhQO8CBDwlIS9Lho2zwhqf7seqZZyUckDx7Dw9YPciMuliz7EKvfqOlWqLOutomzLJ00OONVHeFg'
                currency='USD'
                billingAddress
            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}
