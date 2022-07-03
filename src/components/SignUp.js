import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function SignUp() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate=useNavigate()
    const onFormSubmit = (userObj) => {
        axios.post("http://localhost:5000/user-api/create-user", userObj)
            .then(response => {
                console.log(response);
                if(response.data.message==="New User created"){
                    //navigate to login
                    navigate("/login")
                }
            })
            .catch(error => {
                console.log(error)
                alert("something is wrong in creating the user")
            });
    }
    return (
        <div className='container bg-cyan w-80 h-80'>
            <div className='display-2 text-center text-info '>SignUp</div>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)} >
                {/* username */}
                <Form.Group className="mb-3" >
                    <Form.Label >Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"{...register("username", { minLength: 4, maxLength: 10, required: true })} />
                    {/* validation error message for username */}
                    {errors.username?.type === 'required' && <p classname="text-danger">* Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className="text-danger">* Min length should be 4</p>}
                    {errors.username?.type === 'maxLength' && <p className="text-danger">* Max length should be 10</p>}
                </Form.Group>
                {/* password */}
                <Form.Group className="mb-3">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"{...register("password", { required: true, minLength: 4, maxLength: 10 })} />
                    {/* validation error message for password */}
                    {errors.password?.type === 'required' && <p classname="text-danger">*Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-danger">* Min length should be 4</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-danger">* Max length should be 10</p>}
                </Form.Group>
                {/* E-mail */}
                <Form.Group className="mb-3">
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="mail" placeholder="Enter mail"{...register("mail", { required: true })} />
                    {/* validation error message for E-mail */}
                    {errors.email && <p classname="text-danger">*E-mail is required</p>}
                </Form.Group>
                <p>Address</p>
                {/* City */}
                <Form.Group className="mb-3">
                    <Form.Label >Street Address</Form.Label>
                    <Form.Control type="street" placeholder=""{...register("street", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Street Address line 2</Form.Label>
                    <Form.Control type="street2" placeholder=""{...register("street2")} />
                </Form.Group>
                <div className="row">
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label >City</Form.Label>
                    <Form.Control type="city" placeholder=""{...register("city", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label >State</Form.Label>
                    <Form.Control type="state" placeholder=""{...register("state", { required: true })} />
                </Form.Group>
                </div>
                <Form.Group className="mb-3">
                    <Form.Label >Zip Code</Form.Label>
                    <Form.Control type="zip" placeholder=""{...register("zip", { required: true })} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup<MdLogin />
                </Button>
            </Form>
        </div>
    );
}

export default SignUp;




