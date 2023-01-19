import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact flex flex-col lg:flex-row gap-10 items-center lg:px-12 lg:py-32 px-5 py-24'>
            <div className="w-full lg:w-2/3 form">
                <h1 className="text-3xl text-[#71B131] mb-4">Need help? Reach out to us</h1>
                <p>Contact us for more  enquiries.</p>
                <div className="w-full flex gap-5 mb-5">
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="First-Name">First Name</label>
                        <input type="text" className="w-full" placeholder='First Name' />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="Last-Name">Last Name</label>
                        <input type="text" className="w-full" placeholder='Last Name' />
                    </div>
                </div>
                <div className="w-full flex gap-5 mb-5">
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="Email-Address">Email Address</label>
                        <input type="text" className="w-full" placeholder='Email Address' />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="Phone-Number">Phone Number</label>
                        <input type="text" className="w-full" placeholder='Phone Number' />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="Message">Message</label>
                    <textarea placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='common-btn text-black mt-8'>Send Message </button>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-10">
                <div>
                    <h1 className="text-2xl py-3">+234 546 6789</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <div>
                    <h1 className="text-2xl py-3">Contact@example.com</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;