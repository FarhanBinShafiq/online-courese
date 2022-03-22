import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';



const Header = () => {
    const activeStyle ={
        borderBottom : '2px solid tomato',
    }
    return (
        <div className='header-container'>
            {/* //header logo */}
           <div className='row d-flex align-items-center justify-content-between container'>
                <div className='col-lg-5'>
                   <h1 className='logo-title text-white'><span className='logo-frist-letter'></span>Online Courese</h1>
                </div>
                {/* header nav bar  */}
                <div className='col-lg-7'>
                    <nav className='d-flex nav-bar'>
                        <NavLink className='text-decoration-none nav-link' to='/home' activeStyle={activeStyle}>HOME</NavLink>
                        <NavLink className='text-decoration-none nav-link' to='/about' activeStyle={activeStyle}>ABOUT</NavLink>
                        <NavLink className='text-decoration-none nav-link' to='/services' activeStyle={activeStyle}>SERVICES</NavLink>
                        <Link className='text-decoration-none nav-link' to='/blog' activeStyle={activeStyle}>BLOGS</Link>
                    </nav>
                </div>
           </div>
          
               
    
        </div>
    );
};

export default Header;