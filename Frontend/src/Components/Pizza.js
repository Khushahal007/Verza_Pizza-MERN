import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch , useSelector} from 'react-redux';
import { addToCart } from '../Actions/cartAction';
 

export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const dispatch=useDispatch();
    function addtocart(){
        dispatch(addToCart(pizza, quantity, varient))
    }
    return (
        <div style={{ margin: '40px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} alt="pizza-image" className="img-fluid" style={{ height: '200px', width: '250px' }} />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="from-control" value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.variants.map(variant => (
                            <option value={variant.name}>{variant}</option>
                        ))}
                    </select>

                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className='from-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys(10)].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div style={{ padding: "2px", paddingTop: "8px" }}>
                    <h1>Price: $ {pizza.price[0][varient] * quantity}</h1>


                </div>
                <div style={{ marginLeft: "32px" }}>
                    <button className="btn" onClick={addtocart}>Add To Cart</button>
                </div>
            </div>


            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   <img src={pizza.image} className="img-fluid" style={{height:"400px"}} />
                   <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}
