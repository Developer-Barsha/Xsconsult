import React, { useState, useEffect } from 'react';
import './Curriculam.css';
import rectangle from './../../../images/rectangle.png';
import { HiPlus, HiMinus} from 'react-icons/hi';
import {MdOndemandVideo} from 'react-icons/md'
import {FiVideo} from 'react-icons/fi'
import {BsPeopleFill} from 'react-icons/bs'
import {RiUserLocationLine} from 'react-icons/ri'

const Curriculam = () => {
    const [showAns, setShowAns] = useState('');
    const faqs = [
        {
            id: 1200,
            question: 'Introduction to Linux',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 7521,
            question: 'Containerisation',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 3705,
            question: 'Cloud Computing with AWS',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 4805,
            question: 'Git',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 5178,
            question: 'Jenkins',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 6781,
            question: 'Python',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 7457,
            question: 'Ansible',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
    ];

    const toogleShowHide = (id) => {
        console.log(showAns, id, 'asugmf');
        if (showAns == '') {
            setShowAns(id);
        }
        else {
            setShowAns('');
        }
    };


    return (
        <section className='lg:p-20 px-5 py-20 '>
            <div className='pb-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
                <div className='flex flex-col gap-4'>
                    <h1 className="text-3xl lg:text-5xl">Curriculum</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <h2 className="text-2xl">Course Features</h2>
                    <div className="flex gap-3 lg:flex-row md:lg:flex-row flex-col">
                        <div className="flex gap-2 items-center">
                            <MdOndemandVideo className='text-[#71B131]' />
                            <p>Live Quizzes</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FiVideo className='text-[#71B131]' />
                            <p>Webinars</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <BsPeopleFill className='text-[#71B131]' />
                            <p>Soft Skill Training</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <RiUserLocationLine className='text-[#71B131]' />
                            <p>Assisted Learning</p>
                        </div>
                    </div>
                </div>
                <img src={rectangle} className='w-full' width={'50%'} alt="" />
            </div>

            {faqs.map(f => {
                return <div className={`${showAns == f?.id && 'bg-lime-500 rounded-none rounded-t-lg'} w-full border border-lime-500 px-8 my-4 rounded-lg`}>
                    <p style={{fontSize:'20px'}} onClick={() => toogleShowHide(f?.id)} className={`${showAns !== f?.id && 'text-black'} cursor-pointer text-white flex justify-between items-center py-6`}>{f?.question} {showAns == f?.id ? <HiMinus className='text-white text-2xl' /> : <HiPlus className='text-white text-2xl' />}</p>
                    {showAns == f?.id && <p className='text-white py-6'>{f?.answer}</p>}
                </div>
            })}
        </section>
    );
};

export default Curriculam;