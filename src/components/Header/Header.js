import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logo.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='sticky-top'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" to="/home">
                        <img className='w-50' src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/departments">Departments</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/addReview">Review</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    {user?.email ? <button onClick={logOut} className="btn btn-info px-5 py-2">LogOut</button>
                    :
                    <Link to="/login"><button className="btn btn-info px-5 py-2">LogIn</button></Link>}
                    <img style={{width: "40px"}} className="rounded-circle" src={user?.photoURL} alt="" />
                    <span>{user.displayName}</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;