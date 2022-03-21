import React from 'react';
import price1 from '../../../Images/pr-icon01.png';
import price2 from '../../../Images/pr-icon02.png';
import price3 from '../../../Images/pr-icon03.png';

const Pricing = () => {
    return (
        <div>
            <div className="text-center my-5">
                <h6>OUR PRICING</h6>
                <h1>Afforable Pricing Packages</h1>
                <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. <br /> Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="shadow p-3">
                            <h1>SILVER PLAN</h1>
                            <h6>$25.99</h6>
                            <img className='my-3' src={price1} alt="" />
                            <p>It is a long established fact that a <br /> reader will be distracted.</p>
                            <ul>
                                <li>Update</li>
                                <li>File compressed</li>
                                <li>Commercial use</li>
                                <li>Support</li>
                            </ul>
                            <button className='btn btn-info'>Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3" style={{border:"dashed"}}>
                            <h1>GOLD PLAN</h1>
                            <h6>$45.99</h6>
                            <img className='my-3' src={price2} alt="" />
                            <p>It is a long established fact that a <br /> reader will be distracted.</p>
                            <ul>
                                <li>Update</li>
                                <li>File compressed</li>
                                <li>Commercial use</li>
                                <li>Support</li>
                            </ul>
                            <button className='btn btn-info'>Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shadow p-3">
                            <h1>PREMIUM PLAN</h1>
                            <h6>$75.99</h6>
                            <img className='my-3' src={price3} alt="" />
                            <p>It is a long established fact that a <br /> reader will be distracted.</p>
                            <ul>
                                <li>Update</li>
                                <li>File compressed</li>
                                <li>Commercial use</li>
                                <li>Support</li>
                            </ul>
                            <button className='btn btn-info'>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;