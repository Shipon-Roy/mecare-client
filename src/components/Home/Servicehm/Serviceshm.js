import React from 'react';
import sr1 from '../../../Images/sr-icon01.png';
import sr2 from '../../../Images/sr-icon02.png';
import sr3 from '../../../Images/sr-icon03.png';

const Serviceshm = () => {
    return (
        <div className='my-5'>
            <div className="text-center">
            <h5>OUR SERVICES</h5>
            <h1>Our Special Services For You</h1>
            <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. <br /> Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img className='shadow p-5 rounded-pill' src={sr1} alt="" />
                        <h3>Online Emergency</h3>
                        <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div>
                            <img className='shadow p-5 rounded-pill' src={sr2} alt="" />
                        </div>
                        <h3>Online Emergency</h3>
                        <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div>
                            <img className='shadow p-5 rounded-pill' src={sr3} alt="" />
                        </div>
                        <h3>Online Emergency</h3>
                        <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Serviceshm;