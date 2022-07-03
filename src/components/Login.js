import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import axios from "axios";

function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onFormSubmit = (userCredentialObj) => {
        console.log(userCredentialObj)
    }
    return (
        <div>
            <div className='container bg-cyan w-80 h-80'>
                <div className='display-2 text-center text-info '>Login</div>
                <Form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)} >
                    {/* username */}
                    <Form.Group className="mb-3" >
                        <Form.Label >Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username"{...register("username", { required: true })} />
                        {/* validation error message for username */}
                        {errors.username?.type === 'required' && <p classname="text-danger">* Username is required</p>}
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3">
                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"{...register("password", { required: true })} />
                        {/* validation error message for password */}
                        {errors.password?.type === 'required' && <p classname="text-danger">*Password is required</p>}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login<MdLogin />
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login