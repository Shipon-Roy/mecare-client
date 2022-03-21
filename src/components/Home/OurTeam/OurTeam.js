import React from 'react';
import team1 from '../../../Images/team01.png';
import team2 from '../../../Images/team02.png';
import team3 from '../../../Images/team03.png';

const OurTeam = () => {
    return (
        <div>
            <div className="text-center">
                <h6>OUR TEAM</h6>
                <h1>Docter’s In The Medical Sciences</h1>
                <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. <br /> Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={team1} alt="" />
                        <h1>Samanta Carone</h1>
                        <p>CEO of Fire Epic</p>
                    </div>
                    <div className="col-md-4">
                        <img src={team2} alt="" />
                        <h1>Norman Colins</h1>
                        <p>Internist, Genaral Practitoner</p>
                    </div>
                    <div className="col-md-4">
                        <img src={team3} alt="" />
                        <h1>Ostin Green</h1>
                        <p>CEO of Fire Epic</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;