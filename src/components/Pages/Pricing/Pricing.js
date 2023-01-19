import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className='flex flex-col gap-5 lg:px-12 lg:py-32 px-5 py-24'>
            <div>
                <h1 className="text-3xl text-[#71B131] mb-4">Need help? Reach out to us</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className='bg-[#18181B] border rounded-lg p-5 flex flex-col gap-4'>
                    <p>One Time Fee</p>
                    <h1 className="text-5xl">$2000</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua </p>
                </div>
                <div className='bg-[#18181B] border rounded-lg p-5 flex flex-col gap-4'>
                    <p>Two Installment</p>
                    <h1 className="text-5xl">$1500</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua </p>
                </div>
                <div className='bg-[#18181B] border rounded-lg p-5 flex flex-col gap-4'>
                    <p>Three Installment</p>
                    <h1 className="text-5xl">$1000</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;