import React from 'react';
import department from '../../../Images/de-illustration.png.crdownload';
import './Dprt.css';

const Departmenthm = () => {
    return (
        <div>
            <div className="container">
                <h6>OUR DEPARTMENTS</h6>
                <div className="row">
                    <div className="col-md-6">
                        <h1>We Take Care Of Your Life <br /> Healthy Health</h1>
                        <div className='my-5'>
                            <div className='hover p-3 shadow'>
                            <h3>Pedlatric</h3>
                            <p>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.</p>
                            </div>
                            <div className='hover p-3 shadow my-3'>
                            <h3>Dental</h3>
                            <p>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.</p>
                            </div>
                            <div className='hover p-3 shadow'>
                            <h3>Physicians</h3>
                            <p>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img' src={department} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departmenthm;