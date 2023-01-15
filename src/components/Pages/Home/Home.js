import React from 'react';
import './Home.css'
import banner from './../../../images/banner.png'
import curriculam from './../../../images/curriculam.png'
import projectBased from './../../../images/project-based.png'
import brand1 from './../../../images/brand1.png'
import brand2 from './../../../images/brand2.png'
import brand3 from './../../../images/brand3.png'
import brand4 from './../../../images/brand4.png'
import brand5 from './../../../images/brand5.png'

const Home = () => {

    return (
        <div>
            <div className="banner grid-sec grid lg:grid-cols-2 grid-cols-1 items-start px-16 py-20">
                <div className='flex flex-col gap-10 pt-10'>
                    <h1 className="text-6xl">Take your <span>cloud DevOps</span> career to the next <span>level</span></h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <button className='common-btn'>Book a free demo</button>
                </div>
                <div className='grid-img lg:px-0 px-4 flex justify-end'>
                    <img src={banner} alt="" />
                    <div className='img-bg'></div>
                </div>
            </div>

            <div className="brands grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-5 items-center justify-center px-16 py-3 bg-[#D9D9D9]">
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
            </div>

            <div className="curriculam grid-sec grid lg:grid-cols-2 grid-cols-1 items-center px-16 py-20">
                <div className='grid-img flex justify-start'>
                    <img src={curriculam} alt="" />
                    <div className='img-bg'></div>
                </div>
                <div className='flex flex-col items-end text-right gap-10 pt-10'>
                    <h1 className="text-5xl">Essential knowledge for <span>beginning a career in DevOps</span></h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <button className='btn rounded-full border-lime-500 hover:bg-lime-500 py-3 px-5 border flex items-center gap-3'>See Curriculam <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className='guide py-5 px-12'>
                <h1 className='text-5xl text-center'>Guide to a career as a <br/> <span>DevOps engineer</span></h1>
            </div>
            
            <div className="project-based grid-sec grid lg:grid-cols-2 grid-cols-1 items-start px-16 py-20">
                <div className='flex flex-col gap-10 pt-10'>
                    <h1 className="text-6xl">Project-Based Learning: Obtaining Real-World Experience</h1>
                    <p>With us, you will learn High-Value DevOps skills from industry professionals that are usually obtainable while on a paid job.</p>
                    <button className='btn text-[#71B131] underline hover:no-underline flex items-center gap-3'>Download Curriculam <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='grid-img lg:px-0 px-4 flex justify-end'>
                    <img src={projectBased} alt="" />
                    <div className='img-bg'></div>
                </div>
            </div>
        </div>
    );
};

export default Home;