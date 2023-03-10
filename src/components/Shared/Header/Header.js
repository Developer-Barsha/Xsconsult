import React, { useState } from "react";
import "./Header.css";
import logo from "./../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <header className="lg:flex hidden max-w-[1280px] mx-auto justify-between items-center pt-[28px] pb-[50px] px-10">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <ul className="gap-10 lg:pt-[22px]">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/curriculam">Curriculam</Link>
          </li>
        </ul>
        <div className="button">
          <button>
            <Link to="/enroll-now">Eroll Now</Link>
          </button>
        </div>
      </header>

      <header className="lg:hidden flex px-6 py-5">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        {/* menu hide and show icon */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden text-2xl relative"
          style={{ zIndex: 1000 }}
        >
          {showMenu ? (
            <i class="fa-solid fa-xmark fixed top-10 left-10"></i>
          ) : (
            <i class="fa-solid fa-bars absolute top-1 right-[-120px] bg-[#71B131] hover:bg-lime-400 rounded-md p-3"></i>
          )}
        </button>

        {/* header nav */}
        {showMenu && (
          <div
            className="lg:w-0 transition-all flex flex-col items-center text-center justify-center gap-10 bg-[#141021] w-full h-screen fixed top-0 left-0"
            style={{ zIndex: 100 }}
          >
            <ul
              onClick={() => setShowMenu(false)}
              className="flex flex-col gap-10"
            >
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/curriculam">Curriculam</Link>
              </li>
            </ul>
            <div className="button" onClick={() => setShowMenu(false)}>
              <button>
                <Link to="/enroll-now">Eroll Now</Link>
              </button>
            </div>
          </div>
        )}
      </header>
    </section>
  );
};

export default Header;
