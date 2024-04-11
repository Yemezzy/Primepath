import React from 'react'
import {
  FaAngleRight,
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
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="stt   py-20">
        <section className="flex justify-center text-center items-center">
          <div>
            <p className="text-5xl font-extrabold text-[#FF4800]">Contact Us</p>
          </div>
        </section>
      </div>

      <div className="md:px-28 md:mt-20 mt-10 px-5">
        <div className=" md:flex">
          <section className=" bg-[#FF4800] md:w-[50%]">
            <form action="" className="p-3 w-full">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="h-[45px] outline-none border-none px-5 w-full"
              />
              <br />
              <input
                type="text"
                required
                placeholder="Your Email"
                className="h-[45px] outline-none border-none mt-2 px-5 w-full"
              />
              <br />
              <input
                type="text"
                required
                placeholder="Subject"
                className="h-[45px] outline-none border-none mt-2 px-5 w-full"
              />
              <br />

              <textarea
                placeholder="Message"
                className="h-[150px] outline-none border-none mt-2 p-5 w-full"
              />

              <button className="w-full stt border-white border h-[45px] mt-2 font-bold text-white ">
                Send Message
              </button>
            </form>
          </section>

          <section className="md:w-[50%] md:mt-0 mt-3">
            <img
              className="md:h-[420px]"
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/feature.jpg"
              alt=""
            />
          </section>
        </div>
      </div>

      <footer className="bg-[#1F1F2E] mt-10 md:mt-20 md:px-10 pb-10 pt-10 md:pt-20">
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 md:px-20 px-5">
          <section>
            <p className="text-3xl text-[#FF4800] font-bold">Quick Links</p>
            <ul className="mt-5 text-white font-semibold">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> 123 Street, New York, USA
              </li>
              <li className="flex items-center gap-2 mt-2">
                <FaPhoneAlt /> +012 345 67890
              </li>
              <li className="flex items-center gap-2 mt-2">
                <MdMail /> info@example.com
              </li>
            </ul>
          </section>
          <section>
            <p className="text-3xl text-[#FF4800] font-bold">Get In Touch</p>
            <ul className="mt-5 text-white font-semibold">
              <li className="flex items-center gap-2">
                <FaAngleRight />
                <span className="hover:underline">
                  <Link to="/">Home</Link>
                </span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <FaAngleRight />{" "}
                <span className="hover:underline">
                  <Link to="/About-us">About</Link>
                </span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <FaAngleRight />{" "}
                <span className="hover:underline">
                  <Link to="/Services">Services</Link>
                </span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <FaAngleRight />{" "}
                <span className="hover:underline">
                  <Link to="/Contact-us">Contact Us</Link>
                </span>
              </li>
            </ul>
          </section>
          <section>
            <p className="text-3xl text-[#FF4800] font-bold">Newsletter</p>
            <div className="mt-5 text-white font-semibold">
              <p>
                Be the first to know about new services, special promotions, and
                exclusive offers tailored to your logistics need. Join our
                mailing list and stay connected with the latest development in
                the world of logistics!
              </p>
              <section className="mt-5 w-full h-[50px]">
                <input
                  placeholder="Your Email Address"
                  type="email"
                  className="border-none text-black px-5 outline-none w-[80%] h-full"
                />
                <button className="w-[20%] h-full bg-[#FF4800]">Submit</button>
              </section>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Contact