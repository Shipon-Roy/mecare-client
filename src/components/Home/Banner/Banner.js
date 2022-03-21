import React from 'react';
import banner from '../../../Images/banner-img.png';

const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <h1><strong>Get Better Care For <br /> Your Health</strong></h1>
                        <p>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                        <button className='btn btn-info'>Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img className='w-75' src={banner} alt="" />
                    </div>
                </div>
                <div className="text-center shadow p-5">
                    <input className='p-2 rounded-pill' type="text" name="" id="" placeholder='Enter Name' />
                    <input className='mx-3 p-2 rounded-pill' type="text" placeholder='Select Doctor' />
                    <input className='mr-3 p-2 rounded-pill' type="text" name="" id="" placeholder='Select Departments' />
                    <button className='btn btn-info mx-3 rounded-pill'>Submit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;