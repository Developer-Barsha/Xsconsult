import React, { useState } from 'react';
import './Header.css';
import logo from './../../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <section>
            <header className='lg:flex hidden justify-between items-center py-8 px-10'>
                <Link tp='/'><img src={logo} alt="" /></Link>

                <ul className='gap-10'>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/curriculam'>Curriculam</Link></li>
                </ul>
                <div className="button">
                    <button>
                        Eroll Now
                    </button>
                </div>
            </header>

            <header className='lg:hidden flex'>
                {/* menu hide and show icon */}
                <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden text-2xl absolute' style={{ zIndex: 1000 }}>
                    {showMenu ?
                        <i class="fa-solid fa-xmark fixed top-10 left-10"></i>
                        :
                        <i class="fa-solid fa-bars fixed top-10 right-10 bg-[#71B131] hover:bg-lime-400 rounded-md p-3"></i>
                    }
                </button>

                {/* header nav */}
                {showMenu &&
                    <div className='lg:w-0 transition-all flex flex-col items-center text-center justify-center gap-10 bg-black w-full h-screen fixed' style={{ zIndex: 100 }}>
                        <ul className='flex flex-col gap-10'>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/pricing'>Pricing</Link></li>
                            <li><Link to='/curriculam'>Curriculam</Link></li>
                        </ul>
                        <div className="button">
                            <button>
                                Eroll Now
                            </button>
                        </div>
                    </div>
                }
            </header>
        </section>
    );
};

export default Header;