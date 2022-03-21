import React from 'react';
import about from '../../../Images/about.png.crdownload';
import count1 from '../../../Images/cunt-icon01.png';
import count2 from '../../../Images/cunt-icon02.png';
import count3 from '../../../Images/cunt-icon03.png';
import count4 from '../../../Images/cunt-icon04.png';

const Abouthm = () => {
    return (
        <div className='my-5'>
            <div className="row">
                <div className="col-md-6">
                    <img className='w-100' style={{height:"650px"}} src={about} alt="" />
                </div>
                <div className="col-md-6">
                    <h3>ABOUT US</h3>
                    <h1><strong>We Are Specialize in <br /> Medical Diagnositics</strong></h1>
                    <p>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</p>
                    <ul>
                        <li>Pellentesque placerat, nisi congue vehicula efficitur.</li>
                        <li>Pellentesque placerat, nisi congue vehicula efficitur.</li>
                        <li>Phasellus mattis vitae magna in suscipit. Nam tristique posuere sem, mattis molestie est bibendum.</li>
                    </ul>
                    <button className='btn btn-info rounded-pill w-25'>Read More</button>
                </div>
            </div>
            <div className="container gap-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="shadow text-center p-5">
                        <img src={count1} alt="" />
                        <h1>500+</h1>
                        <p>Doctors At Work</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="shadow text-center p-5">
                        <img src={count2} alt="" />
                        <h1>58796+</h1>
                        <p>Happy Patients</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="shadow text-center p-5">
                        <img src={count3} alt="" />
                        <h1>500+</h1>
                        <p>Medical Beds</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="shadow text-center p-5">
                        <img src={count4} alt="" />
                        <h1>200+</h1>
                        <p>Winning Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouthm;