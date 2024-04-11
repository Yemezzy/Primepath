import React from "react";
import Navbar from "./Navbar";
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
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="  pt-10">
          <section className="flex justify-center text-center items-center">
            <div>
              <p className="text-5xl font-extrabold text-[#FF4800]">
                Get A Quote
              </p>
            </div>
          </section>
        </div>

        <div className="md:px-7 px-3 mt-10">
          <form action="" className="p-5 border-4 border-[#FF4800] rounded-md">
            <p className="md:text-2xl text-xl font-bold">
              Request for Quote (RFQ)
            </p>
            <p className=" mt-2 font-medium text-sm md:text-base md:w-[70%]">
              Please complete the following information so we can calculate a
              quote/estimate. We will contact you as soon as possible to give
              you our best proposal. Thank you.
            </p>
            <div className="md:grid grid-cols-2 mt-5">
              <section>
                <label htmlFor="" className="text-lg font-semibold">
                  Full Name:
                </label>
                <br />
                <input
                  type="text"
                  className="mb-2 outline-none border-2 w-full border-black p-2 md:w-[80%]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Your Email:
                </label>
                <br />
                <input
                  type="text"
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Cargo Description:
                </label>
                <br />
                <textarea
                  type="text"
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%] h-[100px]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Cargo Weight:
                </label>
                <br />
                <input
                  type="text"
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
              </section>

              <section>
                <label htmlFor="" className="text-lg font-semibold">
                  Shipping Mode / Services:
                </label>
                <br />

                <select
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                >
                  <option value="">--- Select an Option ---</option>
                  <option value="">Land </option>
                  <option value=""> Air</option>
                  <option value=""> Sea</option>
                </select>
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  How is your Cargo Packed?
                </label>
                <br />

                <select
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                >
                  <option value="">--- Select an Option ---</option>
                  <option value="">Cardboard box</option>
                  <option value=""> Wooden box</option>
                  <option value="">European pallet</option>
                  <option value=""> America pallet</option>
                  <option value="">Cargo</option>
                  <option value="">Bidon</option>
                  <option value="">Others</option>
                </select>
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Origin - Country
                </label>
                <br />

                <input
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Destination - Country
                </label>
                <br />

                <input
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
                <br />

                <button className="mt-5 outline-none bg-[#FF4800] text-white font-bold p-2 w-full md:w-[80%]">
                  Submit
                </button>
              </section>
            </div>
          </form>
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
                  Be the first to know about new services, special promotions,
                  and exclusive offers tailored to your logistics need. Join our
                  mailing list and stay connected with the latest development in
                  the world of logistics!
                </p>
                <section className="mt-5 w-full h-[50px]">
                  <input
                    placeholder="Your Email Address"
                    type="email"
                    className="border-none text-black px-5 outline-none w-[80%] h-full"
                  />
                  <button className="w-[20%] h-full bg-[#FF4800]">
                    Submit
                  </button>
                </section>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Quote;
