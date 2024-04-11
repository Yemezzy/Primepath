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

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="stt   py-20">
        <section className="flex justify-center text-center items-center">
          <div>
            <p className="text-5xl font-extrabold text-[#FF4800]">About Us</p>
          </div>
        </section>
      </div>

      <div className="md:mt-28 mt-20 mb-10 md:px-24 px-5 md:flex">
        <section className="md:w-[40%] md:ml-4">
          <img
            src="https://demo.htmlcodex.com/1309/logistics-company-website-template/img/about.jpg"
            alt=""
            className="w-[100%]"
          />
          <h3 className="bg-[#FF4800] py-3 w-[100%] text-center font-bold text-2xl">
            25+ Years Experience
          </h3>
        </section>

        <section className="md:px-10  md:w-[65%]">
          <p className="text-[#FF4800] mt-16 font-bold ">About Us</p>
          <p className="md:text-4xl text-2xl font-bold md:mt-3">
            Trusted & Faster Logistic Service Provider
          </p>
          <p className="md:mt-5 mt-2 text-gray-500">
            PrimePath Logistics is a registered and licensed contract logistics,
            freight forwarding, global sourcing, distribution, logistics and
            supply chain consulting company
          </p>
          <p className="mt-2  text-gray-500">
            We are in business to provide services such as Contract Logistics,
            Freight Forwarding, Warehousing and Distribution, Cross Docking,
            Reverse Logistics, Customs Brokerage, Consulting and Optimization
            and Last mile delivery
          </p>
        </section>
      </div>

      {/* <div className="bg-[#F2F2F4] mt-20 px-5 md:px-24 md:py-10 py-5 md:flex">
        <section className="md:w-[50%]">
          <p className="md:text-3xl text-2xl mt-5 font-bold">
            #1 Place To Manage All Of Your Shipments
          </p>
          <p className="md:mt-5 mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            perspiciatis veritatis officia odio dolore, saepe dolores sapiente
            blanditiis nostrum sint! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sed, ipsum?
          </p>

          <div className="mt-5 flex">
            <p className="p-3 bg-[#FF4800] text-white w-fit">
              <MdOutlineSupportAgent className="md:text-5xl text-3xl" />
            </p>
            <section className="md:mt-4 mt-1 ml-2">
              <p className="text-sm font-medium">Call for any query!</p>
              <p className="md:text-2xl text-xl text-[#FF4800] font-semibold">
                +012 345 6789
              </p>
            </section>
          </div>
        </section>
        <section className="md:p-20 md:mt-0 mt-10  md:py-5">
          <div>
            <section className="flex">
              <FaUsers className="md:text-7xl text-5xl" />
              <div className="ml-3 md:mt-3">
                <p className="md:text-lg font-bold">1234</p>
                <p className="text-sm font-medium text-[#FF4800]">
                  Happy Clients
                </p>
              </div>
            </section>
            <section className="mt-5 flex">
              <FaStar className="md:text-7xl text-5xl" />
              <div className="ml-3 md:mt-3">
                <p className="md:text-lg font-bold">1234</p>
                <p className="text-sm font-medium text-[#FF4800]">
                  Customer Reviews
                </p>
              </div>
            </section>
            <section className="mt-5 flex">
              <FaShip className="md:text-7xl text-5xl" />
              <div className="ml-3 md:mt-3">
                <p className="md:text-lg font-bold">1234</p>
                <p className="text-sm font-medium text-[#FF4800]">
                  Complete Shipments
                </p>
              </div>
            </section>
          </div>
        </section>
      </div> */}

      <div className="md:mt-20 mt-10">
        <div className="text-center">
          <p className="md:text-4xl text-2xl md:mt-3 font-extrabold">
            Expert Team Members
          </p>
        </div>
        <div className="md:mt-10 mt-5 grid gap-3 grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section className="p-3 shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/team-1.jpg"
              alt=""
            />
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Albeto Robort
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Operation Manager
              </p>
            </div>
          </section>
          <section className="p-3 shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/team-2.jpg"
              alt=""
            />
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                samuel bold
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Supply Chain Analyst
              </p>
            </div>
          </section>
          <section className="p-3 shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/1309/logistics-company-website-template/img/team-3.jpg"
              alt=""
            />
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                kelvin mommy
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Transportation Coordinator
              </p>
            </div>
          </section>
          <section className="p-3 shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/team-4.jpg"
              alt=""
            />
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Lora williams
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Custom Broker
              </p>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-[#1F1F2E] md:px-10 md:mt-20 mt-10 pb-10 pt-10 md:pt-20">
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

export default About