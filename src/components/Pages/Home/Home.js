import React, { useState } from "react";
import "./Home.css";
import banner from "./../../../images/banner.png";
import curriculam from "./../../../images/curriculam.png";
import projectBased from "./../../../images/project-based.png";
import video from "./../../../images/BG.png";
import map from "./../../../images/map.png";
import brand1 from "./../../../images/brand1.png";
import brand2 from "./../../../images/brand2.png";
import brand3 from "./../../../images/brand3.png";
import brand4 from "./../../../images/brand4.png";
import brand5 from "./../../../images/brand5.png";
import avatar1 from "./../../../images/Avatar.png";
import avatar2 from "./../../../images/Avatar-1.png";
import avatar3 from "./../../../images/Avatar-2.png";
import arrow from "./../../../images/arrow.png";
import play from "./../../../images/play.png";
import Faq from "../Faq/Faq";

const Home = () => {
  const steps = [
    {
      id: 6828,
      step: 1,
      des: "Understand how the internet works",
    },
    {
      id: 9712,
      step: 2,
      des: "Linux system adaminstration",
    },
    {
      id: 5105,
      step: 3,
      des: "Cloud Solution Architect",
    },
    {
      id: 2450,
      step: 4,
      des: "DevOps CI/CD Pipelines",
    },
    {
      id: 9879,
      step: 5,
      des: "Infra as code: Terraform",
    },
    {
      id: 7815,
      step: 6,
      des: "DevOps with Kubernetes",
    },
  ];

  return (
    <div className="">
      <div className="banner max-w-[1280px] mx-auto grid-sec grid lg:grid-cols-2 grid-cols-1 gap-10 items-start p-8 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-3xl lg:text-6xl">
            Take your <span>cloud DevOps</span> career to the next{" "}
            <span>level</span>
          </h1>
          <p className="leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p>
          <button className="common-btn w-[171px] h-[40px] text-white rounded-[60px] text-xs">
            Book a free demo
          </button>
        </div>
        <div className="grid-img lg:p-0 p-8 flex justify-end">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="bg-[#D9D9D9]">
        <div className="brands grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-5 max-w-[1280px] mx-auto items-center justify-center px-16 py-3 ">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
        </div>
      </div>

      <div className="curriculam grid-sec grid lg:grid-cols-2 grid-cols-1 items-center p-5 lg:px-16 lg:py-20">
        <div className="grid-img flex lg:p-0 p-8 justify-start">
          <img src={curriculam} alt="" />
          <div className="img-green-bg"></div>
        </div>
        <div className="flex flex-col items-end text-center lg:text-right gap-10 pt-10">
          <h1 className="text-3xl lg:text-5xl">
            Essential knowledge for <span>beginning a career in DevOps</span>
          </h1>
          <p className="leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p>
          <button className="btn rounded-full border-lime-500 hover:bg-lime-500 py-3 px-5 border flex items-center gap-3">
            See Curriculam <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="guide py-10 px-5 lg:px-12">
        <h1 className="text-3xl lg:text-5xl text-center">
          Guide to a career as <br /> a <span>DevOps engineer</span>
        </h1>

        <div className="grid lg:grid-cols-6 grid-cols-1 gap-3 pr-0 lg:pr-10 py-10">
          {steps.map((s) => {
            return (
              <div
                className={`${
                  steps.indexOf(s) % 2 === 0 && "mt-5 lg:mt-20"
                } flex flex-col lg:flex-row items-center gap-10 lg:gap-1 justify-end`}
              >
                {steps.indexOf(s) !== 0 && (
                  <img
                    src={arrow}
                    className={`${
                      steps.indexOf(s) % 2 === 0 && "rotate-45 mt-0"
                    } step-main flex gap-2 mt-5 lg:mt-20 arrow`}
                    alt=""
                  />
                )}
                <div className="step relative pt-12">
                  <h1 className="text-xl px-2 bg-gradient-to-t to-[#CCCCCC] from-[#009A49] rounded-lg absolute -top-5">
                    STEP {s?.step}
                  </h1>
                  <p className="px-4 text-center">{s?.des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="project-based grid-sec grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 items-start px-5 py-10 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:pt-10">
          <h1 className="text-2xl lg:text-5xl">
            Project-Based Learning: Obtaining Real-World Experience
          </h1>
          <p className="leading-6">
            With us, you will learn High-Value DevOps skills from industry
            professionals that are usually obtainable while on a paid job.
          </p>
          <button className="btn text-[#71B131] flex items-center gap-4">
            <p className="border-b border-lime-500 hover:border-none text-[#71B131]">
              Download Curriculam
            </p>{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="grid-img lg:p-0 p-8 flex project-base-img items-start justify-start">
          <img src={projectBased} className="-" alt="" />
          <div></div>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-center px-5 lg:px-16 py-5 bg-white">
        <h1 className="text-2xl text-green-600">Become an Alumni</h1>
        <p className="alumni-des leading-6">
          Gain experience by working on real-world projects: Contribute to open
          source projects, work on personal projects, or participate in
          hackathons to gain hands-on experience with cloud DevOps tools and
          techniques.
        </p>
      </div>

      <div className="py-5 text-center">
        <img src={map} alt="" />
        <div className="p-5">
          <h1 className="text-2xl lg:text-6xl mb-5">
            <span>Perks</span> of Signing Up{" "}
          </h1>
          <p className="w-full lg:w-3/5 flex mx-auto leading-6">
            Build your professional network. Connect with other devops
            professionals through professional associations, networking events,
            or online communities to learn from their experiences and stay
            up-to-date on the latest developments in the field.
          </p>
        </div>
      </div>

      <div className="lg:p-16 p-5 text-center video-sec bg-white">
        <div className="relative">
          <img src={video} alt="" />
          <div className="play-icon absolute">
            <img src={play} className="lg:pb-6 pb-4" alt="" />
          </div>
          <h3 className="text-white text-2xl">
            See how we helped Groover to grow 11x faster
          </h3>
        </div>
      </div>

      <Faq />

      <div className="relative flex flex-col justify-center items-center gap-5 px-5 py-12">
        <div className="relative avatars">
          <img
            src={avatar2}
            className="-right-12 w-20 top-2 bottom-0 absolute z-10"
            alt=""
          />
          <img src={avatar3} className="w-24 relative z-50" alt="" />
          <img
            src={avatar1}
            className="-left-12 w-20 top-2 bottom-0 absolute z-10"
            alt=""
          />
        </div>
        <h3 className="text-xl">Still have questions?</h3>
        <p className="text-white">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="btn bg-white text-green-600 border-0 px-4 py-2 rounded-lg font-bold hover:bg-[#71B131] hover:text-white">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Home;
