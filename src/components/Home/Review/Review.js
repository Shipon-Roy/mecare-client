import React, { useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    fetch('https://intense-brushlands-24520.herokuapp.com/allReview')
    .then(res => res.json())
    .then(data => setReviews(data))
    return (
        <div>
            <div className="text-center mt-5">
                <h6>TESTIMONIALS</h6>
                <h1>What Our Client’s Say’s</h1>
                <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu <br /> urna pulvinar, iaculis ipsum in, porta massa.</p>
            </div>
            <div className="row">
                {
                    reviews.map(review => <div key={review._id} className="col-md-4 my-3 text-center">
                        <div className="shadow p-3 h-100">
                        <h3>{review.name}</h3>
                        <p>{review.describtion}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;