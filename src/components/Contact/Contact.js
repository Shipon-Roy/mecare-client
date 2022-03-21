import React from 'react';
import contact from '../../Images/contact.png';

const Contact = () => {
    return (
        <div className='mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <img className='w-100' style={{height:"600px"}} src={contact} alt="" />
                </div>
                <div className="col-md-6 py-5">
                    <h6>CONTACT</h6>
                    <h1 className='my-3'>Get In Touch With Us</h1>
                    <input className='p-2 rounded-pill' type="text" name="" id="" placeholder='First Name' />
                    <input className='mx-5 p-2 rounded-pill' type="text" name="" id="" placeholder='Last Name'/> <br />
                    <input className='w-75 mt-3 p-2 rounded-pill' type="text" name="" id="" placeholder='Write Here your Email' /> <br />
                    <input className='w-75 my-3 p-2 rounded-pill' type="text" name="" id="" placeholder='I would like to discuss' /> <br />
                    <button className='btn btn-info rounded-pill'>Send Massage</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;