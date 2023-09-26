import React from 'react'
import { getAllPizzas } from '../Actions/pizzaAction'
import Pizza from '../Components/Pizza'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../Components/Error'

const HomeScreen = () => {

  const dispatch = useDispatch();

  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <img style={{marginTop:'auto', width:'500px'}} src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading GIF" />
        ) : error ? (
          <Error error='Something went wrong'/>
          ) : (
          pizzas.map((pizza) => {
            return (
              <div className=" col-md-3 m-3" key={pizza._id}>
                <div >
                  <Pizza pizza={pizza} />

                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default HomeScreen