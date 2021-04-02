import React from 'react';
import { Link } from 'react-router-dom';
import './ManageBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

const ManageBar = () => {
    return (
        <div>
            <div className="manageBar pt-3">
                <h1>Car House</h1>
                <div className="barLink mt-5">
                    <Link to="/manageProduct" className="d-flex justify-content-start">
                        <FontAwesomeIcon className="filled" icon={faTasks} />
                        <p>Manage Product</p>
                    </Link>
                    <Link to="/addProduct" className="d-flex justify-content-start">
                        <FontAwesomeIcon className="filled" icon={faPlus} />
                        <p>Add Product</p>
                    </Link>
                    <Link className="d-flex justify-content-start">
                        <FontAwesomeIcon className="filled" icon={faEdit} />
                        <p>Edit product</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageBar;