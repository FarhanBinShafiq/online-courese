import React from 'react';
import './Team.css';

const Team = (props) => {
    //destructing
    const {name, img, designation} = props.team.instructor;
    return (
        <div className='col-lg-3 py-3'>
           <div class="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h3 class="card-title text-info">{name}</h3>
                <h5>{designation}</h5>
                <p class="card-text text-start">To teach all students according to today’s standards, teachers need to understand subject matter deeply and flexibly so they can help students.</p>
                </div>
                <div class="card-footer d-flex justify-content-around fs-3">
                <span className='team-icon1'><i class="fab fa-facebook-square"></i></span>
                <span className='team-icon2'><i class="fab fa-twitter"></i></span>
                <span className='team-icon3'><i class="fab fa-instagram"></i></span>
                </div>
            </div>  
        </div>
    );
};

export default Team;