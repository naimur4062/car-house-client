import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header container d-flex justify-content-between mt-5'>
            <h2>CAR HOUSE</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/deals">Deals</Link>
            </nav>
        </div>
    );
};

export default Header;