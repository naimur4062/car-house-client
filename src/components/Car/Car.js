import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Car.css'

const Car = ({car}) => {
    return (
        <div className="product-div mt-5">
            <Card className="product-card shadow bg-body" style={{ width: '20rem', height: '22rem' }}>
                <Card.Img style={{ width: '15rem', height: '10rem' }} className="rounded mx-auto d-block mt-4" variant="top" src={car.imageURL} />
                <Card.Title className="title mt-4">{car.name}</Card.Title>
                <Card.Body className="d-flex justify-content-around mt-2">
                    <Card.Title className="price">${car.price}</Card.Title>
                    <Link to={`/car/${car._id}`}>Buy Now</Link>
                </Card.Body>
            </Card>
        </div>   
    );
};

export default Car;