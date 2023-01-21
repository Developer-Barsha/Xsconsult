import React, { useState, useEffect } from "react";
import curriculamEllipse from "./../../../images/curriculam-ellipse.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./EnrollNow.css";

const EnrollNow = () => {
  const [value, setValue] = useState();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="lg:p-20 px-5 py-16 grid grid-cols-1 gap-10">
      <div className="relative">
        <img
          src={curriculamEllipse}
          className="absolute -top-28 left-0"
          width={"50%"}
          alt=""
        />
        <h1 className="text-3xl lg:text-5xl text-[#71B131] pb-5">
          Pricing for our DevOps Program
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>
      </div>
      <div className="bg-[#2A2145] border rounded-lg p-5 w-full md:w-2/3 lg:w-1/4">
        <p className="text-[#71B131] pb-5">One Time Fee</p>
        <h1 className="text-5xl">$2000</h1>
      </div>
      <div className="form w-full lg:w-2/3 mt-5 border p-10 rounded-2xl border-white">
        <h1 className="text-3xl mb-10">Fill in your details before payment</h1>
        <div className="w-full flex lg:flex-row flex-col gap-5 mb-5">
          <div className="w-full lg:w-1/2">
            <label htmlFor="First-Name">First Name</label>
            <input type="text" className="w-full" placeholder="First Name" />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="Last-Name">Last Name</label>
            <input type="text" className="w-full" placeholder="Last Name" />
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-5 mb-5">
          <div className="w-full lg:w-1/2">
            <label htmlFor="Phone-Number">Phone Number</label>
            {/* <input type="text" className="w-full" placeholder='Phone Number' /> */}
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="NG"
              value={value}
              className="input text-white"
              onChange={setValue}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="Email-Address">Email Address</label>
            <input
              type="email"
              className="w-full"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-5 mb-5">
          <div className="w-full flex flex-col lg:w-1/2 gap-2">
            <label htmlFor="Country">Country</label>
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full px-2 py-3 rounded-md outline-none border-none cursor-pointer bg-black"
              >
                <option value="Bangladesh">Bangladesh</option>
                {countries?.map((country) => {
                  return (
                    <option value={country?.name?.common}>
                      {" "}
                      {country?.name?.common}
                    </option>
                  );
                })}
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="France">France</option>
                <option value="Korea">Korea</option>
              </select>
              <div class="select-arrow"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="Whatsapp-Number">Whatsapp Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="NG"
              value={value}
              className="input text-white"
              onChange={setValue}
            />
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-5 mb-5">
          <div className="w-full lg:w-1/2">
            <label htmlFor="Educational Background">
              Educational Background
            </label>
            <input type="text" className="w-full" placeholder="Country" />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="Whatsapp-Number">Gender</label>
            <select
              name=""
              id=""
              className="w-full mt-2 px-2 py-3 rounded-md outline-none border-none cursor-pointer bg-black"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <button className="common-btn text-black mt-8 px-10 flex mx-auto">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default EnrollNow;
