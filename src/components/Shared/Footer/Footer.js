import React from 'react';
import './Footer.css';
import logo from './../../../images/logo.png';
import {FiPhone, FiMail} from 'react-icons/fi';
import {SlLocationPin} from 'react-icons/sl';
import {BsLinkedin} from 'react-icons/bs';
import {FaFacebookSquare, FaPinterest, FaYoutube} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="bg-black flex lg:flex-row flex-col gap-5 justify-between items-center py-10 px-12">
                <div>
                    <h2 className="text-3xl">Newsletter</h2>
                    <p>Be the first one to know  about discounts, offers and events</p>
                </div>
                <div className='relative w-full lg:w-1/2 flex justify-end'>
                    <input type='text' className="p-3 lg:w-2/3 w-full outline-none hover:shadow-lg rounded-lg border-none text-black" placeholder='Enter Your Name' />
                    <button className='absolute top-1 right-1 bg-[#71B131] text-black hover:text-white p-2 rounded-lg'>Submit</button>
                </div>
            </div>

            <div className='py-10 px-12'>
                <div>
                    <img src={logo} alt="" />
                    <p className='mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-8">
                    <div className='flex gap-5'>
                        <FiPhone/>
                        <div className='flex flex-col gap-3'>
                            <p>Tel</p>
                            <p>(866) 839 1217</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <SlLocationPin/>
                        <div className='flex flex-col gap-3'>
                            <p>Address</p>
                            <p>675 Alpha Drive Highland.<br/>New Jersey United States.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <FiMail/>
                        <div className='flex flex-col gap-3'>
                            <p>Mail</p>
                            <p>info@nanosoftconsulting.com</p>
                        </div>
                    </div>
                    <div className='flex gap-5 text-2xl justify-start lg:justify-end text-slate-500'>
                        <a href='https://facebook.com' target='_blank' ><BsLinkedin className=' hover:scale-110'/></a>
                        <a href='https://facebook.com' target='_blank' ><FaYoutube className=' hover:scale-110'/></a>
                        <a href='https://facebook.com' target='_blank' ><FaFacebookSquare className=' hover:scale-110'/></a>
                        <a href='https://facebook.com' target='_blank' ><FaPinterest className=' hover:scale-110'/></a>
                        <a href='https://facebook.com' target='_blank' ><RiInstagramFill className=' hover:scale-110'/></a>
                    </div>
                </div>

                <hr className='my-5' />
                <div>
                    <ul className='flex-col lg:flex-row gap-10 text-[#A1A1AA]'>
                        <li className='hover:text-white'><Link to='/about'>About Us</Link></li>
                        <li className='hover:text-white'><Link to='/contact'>Contact Us</Link></li>
                        <li className='hover:text-white'><Link to='/faq'>FAQ</Link></li>
                        <li className='hover:text-white'><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer >
    );
};

export default Footer;