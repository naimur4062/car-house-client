import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css'

const Checkout = () => {
    const [car, setCar] = useState()
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fast-garden-97783.herokuapp.com/car/${id}`)
            .then(res => res.json())
            .then(data => {
                setCar(data[0])
            })
    }, [id]);

    const handleOrder = () => {
        const orderDetail = {...signedInUser, product: car, orderTime: new Date()};
        
        fetch('https://fast-garden-97783.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Order Placed Successfully')
            }
        })
    }
    return (
        <div>
            <div className="forHeader container d-flex justify-content-between">
                <Header />
                {!signedInUser.name && <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>}
                <p>{signedInUser.name}</p>
            </div>
            <div className="description container">
                <h1 className="checkout-title">Checkout</h1>
                <div className="shadow p-3 mb-3 mt-5 bg-body rounded">
                    <div className="heading container d-flex justify-content-between">
                        <h5>Description</h5>
                        <h5>Quantity</h5>
                        <h5>Price</h5>
                    </div>
                    <div className="product-details mt-3 p-3 container d-flex justify-content-between">
                        <h6>{car?.name}</h6>
                        <h6>1</h6>
                        <h6>${car?.price}</h6>
                    </div><div className="mt-3 container d-flex justify-content-between">
                        <h4>Total</h4>
                        <h4>${car?.price}</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button onClick={handleOrder} className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;