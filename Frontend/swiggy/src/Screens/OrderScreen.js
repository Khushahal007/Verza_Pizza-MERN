import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../Actions/orderAction'
import Error from '../Components/Error'
import Loading from '../Components/Loading'


export default function OrderScreen() {

  const dispatch=useDispatch()
  const orderstate = useSelector(state=>state.getUserOrdersReducer)
  const {orders, error, loading}=orderstate


  useEffect(()=>{
    dispatch(getUserOrders())
  })
  console.log(orderstate)
  return (
    <>
    <h2  style={{fontSize: '35px'}}>My Orders</h2>
    <div className="row justify-content-center">
      {loading && (<Loading/>)}
      {error && (<Error errorMessage='Something went wrong'/>)}
      {orders  && orders.map(order =>{
             return <div className="col-md-8 m-2 p-1">
              <div className="flex-containers">
                <div className='text-left w-100 m-1'>
                  <h2 style={{fontSize:'25px'}}>Items</h2>
                  {order.orderItems.map(item=>{
                    return <div>
                      <h1>{item.name} [{item.varient}] *{item.quantity}={item.price}</h1>
                    </div>
                  })}
                </div>
                <div className='text-left w-100 m-1'>
                      <h2> Address</h2>
                      <h1>Street : {order.shippingAddress.street}</h1>
                      <h1>City : {order.shippingAddress.city}</h1>
                      <h1>Country : {order.shippingAddress.country}</h1>
                      <h1>Pincode : {order.shippingAddress.pincode}</h1>
                </div>
                <div className='text-left w-100 m-1'>
                  <h2>Order Info</h2>
                  <h1>Order Amount: {order.orderAmount}</h1>
                  <h1>Date: {order.createdAt.substring(0, 10)}</h1>
                  <h1>Transaction Id: {order.transactionId}</h1>
                  <h1>Order Id: {order.order._id}</h1>
                </div>
              </div>
             </div>
      })}
    </div>
    </>
  )
}


//  order : [
//   {
//     orders: cartItems,
//     address: {}
//   },
//   {
//     orders: cartItems,
//     address: {}
//   }
//  ]