import React, { useState } from 'react';
import { FiArrowRight, FiArrowUp } from 'react-icons/fi';
import './Faq.css';

const Faq = () => {
    const [showAns, setShowAns] = useState('1200');
    const faqs = [
        {
            id: 1200,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 7521,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 3705,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 4805,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 5178,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 6781,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 7457,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 8414,
            question: 'Amet minim mollit ?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
    ];

    const toogleShowHide = (id) => {
        if (showAns == '') {
            setShowAns(id);
        }
        else {
            setShowAns('');
        }
    };

    return (
        <div className="faq lg:px-20 py-20 px-5">
            <p className='text-[#71B131]'>FAQ</p>
            <h3 className='text-white text-2xl lg:text-6xl mt-5 mb-12'>Answers to our frequently asked questions</h3>
            {faqs.map(f => {
                return <div className='accordion'>
                    <div style={{ height: '1px' }} className={`${showAns == f?.id ? 'w-full bg-lime-500' : 'w-full bg-slate-400'}`}></div>
                    <p onClick={() => toogleShowHide(f?.id)} className='cursor-pointer text-white flex justify-between items-center py-6'>{f?.question} {showAns == f?.id ? <FiArrowUp className='text-[#71B131] text-2xl' /> : <FiArrowRight className='text-[#71B131] text-2xl' />}</p>
                    {showAns == f?.id && <p className='text-white py-6'>{f?.answer}</p>}
                </div>
            })}
            <div style={{ height: '1px' }} className='bg-slate-400'></div>
        </div>
    );
};

export default Faq;