import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ManageBar from '../ManageBar/ManageBar';
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const carData = {
            name: data.name,
            price: data.price,
            fuel: data.fuel,
            imageURL: imageURL
        }
        const url = `https://fast-garden-97783.herokuapp.com/addCar`;
        console.log(carData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then(res => {
                if(res){
                    alert('product saved successfully to database');
                }
            })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3fbd18749a02465de2e5cad61c40c47a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <ManageBar />
            </div>
            <div className="container mt-4 col-md-9">
                <h3>Add Product</h3>
                <div className="admin-form mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="admin container shadow p-3 mb-3 mt-5 bg-body">
                            <div className="d-flex justify-content-around p-3">
                                <div>
                                    <label htmlFor="form-label">Product Name</label> <br />
                                    <input name="name" defaultValue="Enter Name" type="form-control" ref={register} />
                                </div>
                                <div>
                                    <label htmlFor="form-label">Fuel</label><br />
                                    <input name="fuel" defaultValue="Enter Fuel" ref={register} />
                                </div>
                            </div>

                            <div className="d-flex justify-content-around p-3">
                                <div>
                                    <label htmlFor="form-label">Add Price</label> <br />
                                    <input name="price" defaultValue="Enter Price" ref={register} />
                                </div>
                                <div>
                                    <label htmlFor="form-label">Add Photo</label> <br />
                                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                                </div>
                            </div>
                        </div>
                        <div className="save-button d-flex justify-content-end">
                            <input type="submit" value="save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCar;