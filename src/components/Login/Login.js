import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import googleImg from '../../images/google.png';
import fbImg from '../../images/facebook.png';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // google sign in
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setUser(signedInUser);
                setSignedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorMessage, email)
            });
    }


    return (
        <div>
            <div className="header container mt-5">
                <h2>CAR HOUSE</h2>
            </div>
            <div className="loginTitle container mt-5 mb-5">
                <h1>Please Login</h1>
            </div>
            <div className="login">
                <button onClick={handleGoogleSignIn}>
                    <img src={googleImg} alt="" />
                    Continue With Google
                </button>
                <br />
                <button className="fb">
                    <img src={fbImg} alt="" />
                    Continue With Facebook
                </button>
            </div>
        </div>
    );
};

export default Login;