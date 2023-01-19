import React from 'react';
import about from './../../../images/building.png';
import aboutEllipse from './../../../images/about-ellipse.png';
import aboutTeam from './../../../images/about-team.png';
import './About.css'

const About = () => {
    return (
        <div className=''>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center p-8 lg:px-16 lg:py-20">
                <div className='flex flex-col gap-10 pt-10'>
                    <div>
                        <h1 className="text-3xl lg:text-5xl pb-5">About Us</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-5xl text-[#71B131] pb-5">Our Mission</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-5xl pb-5">Our Core Values</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div className='grid-img lg:p-0 p-8 flex justify-end'>
                    <img src={about} alt="" />
                </div>
            </div>

            <div className="bg-black flex flex-col gap-3 m-5 lg:m-12 pt-12 px-12 text-center">
                <h1 className="text-2xl lg:text-5xl pb-5">Meet Our Team</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                <img src={aboutTeam} className='w-full' />
            </div>

            <div className="bg-black flex flex-col gap-3 m-5 lg:mx-24 lg:my-12 p-8 text-center relative">
                <img src={aboutEllipse} className='absolute -top-32 -left-32' width={'50%'} alt="" />
                <h1 className="text-2xl pb-5">Get in touch with us</h1>
                <p>Contact us for more  enquiries. </p>
                <button className="common-btn flex mx-auto">Contact Us</button>
            </div>
        </div>
    );
};

export default About;