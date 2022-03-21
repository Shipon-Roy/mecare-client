import React from 'react';
import logo from '../../Images/logo.png';

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                        <img className='w-50 my-3' src={logo} alt="" />
                        <p>Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam eaque ipsa quae ab illose inntore veritatis</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Our Links</h3>
                        <ul>
                            <li> Partners</li>
                            <li>About Us</li>
                            <li> Career</li>
                            <li> Reviews</li>
                            <li> Terms & Conditions</li>
                            <li> Help</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h3>Other Links</h3>
                        <ul>
                            <li>  Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Project</li>
                            <li>Our Team</li>
                            <li>Latest Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <p>1800-121-3637
                        <br />+91 555 234-8765</p>
                        
                        <p>info@example.com <br />
                            sale@example.com</p>
                            
                        <p>
                        380 St Kilda Road, Melbourne <br />
                        VIC 3004, Australia</p>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-center p-3">
                <p>© 2020 mecare All design Shtheme.</p>
            </div>
        </div>
    );
};

export default Footer;