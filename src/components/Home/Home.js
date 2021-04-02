import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Car from '../Car/Car';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('https://fast-garden-97783.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [cars]);
   
    return (
        <div className="homeDiv">
            <div className="forHeader container d-flex justify-content-between">
                <Header />
               {!signedInUser.name && <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>}
                <p>{signedInUser.name}</p>
            </div>
            <div className="home container">
                {
                    cars.length === 0 && <CircularProgress className
                    ="spinner" />
                }
                {
                    cars.map(car => <Car car={car} key={car._id}></Car>)
                }
            </div>
        </div>
    );
};

export default Home;