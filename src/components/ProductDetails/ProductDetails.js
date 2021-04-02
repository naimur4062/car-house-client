import React from 'react';
import './ProductDetails.css';
import Edit from '../../images/edit.png';
import Delete from '../../images/delete.png';

const ProductDetails = (props) => {
    const { _id, name, fuel, price } = props.product;
    const deleteProduct = id => {
        window.location.reload();
       fetch(`https://fast-garden-97783.herokuapp.com/delete/${id}`, {
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(result => {
           console.log('deleted successfully', result);
       })
    }
    return (
        <div>
          <div className="container d-flex justify-content-between mt-3">
                <h6 className="name">{name}</h6>
                <h6 className="fuel">{fuel} mpg</h6>
                <h6 className="cost">${price}</h6>
                <div className="update">
                <button>
                    <img src={Edit} alt=""/>
                </button>
                <button onClick={() => deleteProduct(_id)}>
                    <img src={Delete} alt=""/>
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;