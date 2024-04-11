import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaAngleRight,
  FaBars,
  FaGlobe,
  FaMap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShip,
  FaStar,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMail, MdOutlineSupportAgent } from "react-icons/md";
import { TbMail, TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <section className="flex gap-2 px-16 py-3 bg-[#1F1F2E] text-white text-xs">
          <p className="flex gap-2 items-center">
            <FaPhoneAlt />
            +012 345 6789
          </p>
          |
          <p className="flex gap-1 items-center">
            <IoMdMail className="text-sm" /> info@example.com
          </p>
        </section>

        <div className="flex px-5 md:px-16 md:py-3 py-5 items-center justify-between">
          <section className="flex text-[#FF4800] text-2xl gap-2 font-extrabold text-center md:text-3xl">
            <FaTruck className=" text-4xl" />
            <p>PRIMEPATH</p>
          </section>

          <section>
            <ul className="md:flex hidden gap-10 font-bold">
              <Link to="/">
                <li className="">Home</li>
              </Link>
              <Link to="/about-us">
                <li className="">About</li>
              </Link>
              <Link to="/services">
                <li className="">Services</li>
              </Link>
              <Link to="/contact-us">
                <li className="">Contact Us</li>
              </Link>
            </ul>
          </section>

          <Link to="/get-a-quote">
            <button className="px-7 md:block hidden py-2 text-sm font-semibold text-white bg-[#FF4800]">
              Get A Quote
            </button>
          </Link>
          <Link  className="md:hidden block">
            <button className="px-7  text-2xl py-2 font-semibold text-[#FF4800]">
              <FaBars />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar