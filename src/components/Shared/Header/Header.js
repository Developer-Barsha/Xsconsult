import React from 'react';
import './Header.css';
import logo from './../../../images/logo.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-5 px-10 text-white'>
            <img src={logo} alt="" />
            <ul className='gap-10'>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Pricing</li>
                <li>Curriculam</li>
            </ul>
            <div className="button">
                <button class="gradient-border-button">
                    Click me
                </button>
            </div>
            {/* <button className='btn rounded-full border-green-500'>Enroll Now</button> */}
        </header>
    );
};

export default Header;