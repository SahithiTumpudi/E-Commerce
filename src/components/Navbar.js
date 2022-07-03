import React from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import Login from './Login';
import { FiUserPlus } from "react-icons/fi";
import { BsFillCartPlusFill,BsBoxArrowInRight } from "react-icons/bs";

function Navbar() {
    return (
        <div>

            {/* links to routes */}
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 " to="#">Easy Shop</NavLink>
                    <div className='dropdown'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle docs navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 me-3">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="aboutus">About us</NavLink>
                                </li>
                            </ul>
                            <div className="buttons">
                                {/* Register button */}
                                {/* Login button */}
                                <NavLink to="/login" className="btn btn-outline-dark ms-2 navlink active">
                                    <i className="me-1"></i><BsBoxArrowInRight/>  Login</NavLink>
                                <NavLink to="/signup" className="btn btn-outline-dark ms-2  navlink active">
                                    <i className="me-1"></i><FiUserPlus/>  Register</NavLink>
                                {/* Cart button
                                <NavLink to="/cart " className="btn btn-outline-dark ms-2 navlink active">
                                    <i className="me-1"></i><BsFillCartPlusFill/>  Cart</NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* define the routes for its children */}
            <Routes>
                {/* route for home component */}
                <Route path="/" element={<Home />} />
                {/* users component */}
                <Route path="/products" element={<Products />} />
                {/* aboutus component */}
                <Route path="/aboutus" element={<AboutUs />} />
                {/* Signup component */}
                <Route path="/signup" element={<SignUp />} />
                {/* Login component */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}


export default Navbar;