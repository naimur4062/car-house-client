import React from 'react';
import './OrderedItems.css'

const OrderedItems = (props) => {
    const { product, orderTime } = props.order;
    return (
        <div className="ordered-details container d-flex justify-content-between mt-3">
            <h6 className="ordered-products">{product.name}</h6>
            <h6 className="ordered-price">${product.price}</h6>
            <h6 className="ordered-date">{(new Date(orderTime).toDateString('dd/MM/yyyy'))}</h6>
        </div>
    );
};

export default OrderedItems;