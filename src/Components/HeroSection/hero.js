import React from 'react';
import img from '../../img1.png';
import './hero.css';

const hero = () => {
    return (
        <div>
            <div className="row w-100 banner-container d-flex justify-content-center align-items-center container mx-auto">
                <div className="col-lg-6">
                    <h1 className='banner-title text-white'>The Smarter Way To Learn Anything</h1>
                    <p className='text-white text-start py-3 fs-5'>Omnis dolor repellendus temporibus aue quibus dam et aut officiis debitis.</p>
                    <div className='text-start mx-2'>
                        <button className='btn-contact'>Contact Us</button>
                        <button className='btn-readMore'>Read More</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={img} className='banner-img' alt="" />
                </div>
            </div>
        </div>
    );
};

export default hero;