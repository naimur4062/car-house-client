import React, { useEffect, useState } from 'react';
import ManageBar from '../ManageBar/ManageBar';
import ProductDetails from '../ProductDetails/ProductDetails';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fast-garden-97783.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-3">
                <ManageBar />
            </div>
            <div className="container mt-4 col-md-9">
                <h3>Manage Product</h3>
                <div className="manage shadow mb-3 mt-5 bg-body">
                    <div className="manage-heading container d-flex justify-content-between">
                        <h5>Product Name</h5>
                        <h5>Fuel</h5>
                        <h5>Price</h5>
                        <h5>Action</h5>
                    </div>
                    <div className="productDetails">
                        {
                            products.map(product => <ProductDetails product={product}></ProductDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;