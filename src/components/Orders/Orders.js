import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedItems from '../OrderedItems/OrderedItems';
import './Orders.css';

const Orders = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://fast-garden-97783.herokuapp.com/orders?email=' + signedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div className="order-title container mt-5">
                <h1>Dear {signedInUser.name}</h1>
                <h3>These are your orders</h3>
            </div>
            <div className="ordered container shadow mb-3 mt-5 p-5 bg-body">
                <div className="ordered-heading container d-flex justify-content-between">
                    <h5>Ordered products</h5>
                    <h5>Price</h5>
                    <h5>Date</h5>
                </div>
                <div>
                    {
                        orders.map(order => <OrderedItems order={order} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;