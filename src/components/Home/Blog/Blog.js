import React from 'react';
import blog1 from '../../../Images/blog_img01-1.jpg';
import blog2 from '../../../Images/blog_img02-1.jpg.crdownload';
import blog3 from '../../../Images/blog_img03-1.jpg';

const Blog = () => {
    return (
        <div>
            <div className="text-center my-5">
                <h6>OUR LATEST BLOG</h6>
                <h1>Stay Updated To Our Blog & News</h1>
                <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu <br /> urna pulvinar, iaculis ipsum in, porta massa.</p>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="py-5 shadow">
                            <img className='w-100' src={blog1} alt="" />
                            <h3>We denounce with of righteous one indignation.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-5 shadow">
                            <img className='w-100' style={{height:"250px"}} src={blog2} alt="" />
                            <h3>Making distribut product team work</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-5 shadow">
                            <img className='w-100' src={blog3} alt="" />
                            <h3>There are many variations passages</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;