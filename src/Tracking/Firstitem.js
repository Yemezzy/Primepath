import React from 'react'
import Navbar from '../pages/Navbar';
import {
  FaAngleRight,
  FaCheck,
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

const Firstitem = () => {
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
          <section className="flex text-[#FF4800] text-2xl gap-2 font-extrabold text-center md:text-4xl">
            <FaTruck className="mt-1" />
            <p>PRIMEPATH</p>
          </section>

          <section className="rounded-md px-7 md:block hidden py-2 text-sm font-semibold text-white bg-green-700">
            Active Order
          </section>
        </div>
      </nav>

      <div className="md:px-10 px-3">
        {/* <div>
          <p className="text-xl font-medium text-[#FF4800]">
            Order for{" "}
            <span className="font-semibold text-black">
              "420925529214490344490908059615"
            </span>
          </p>
        </div> */}

        <div>
          <ul className="grid grid-cols-6 text-center">
            <li className="border-2 px-  bg-black text-xs md:text-base text-white border-black py-2 font-semibold">
              Order Status:
            </li>
            <li className="border-2 border-black border-l-0 text-xs md:text-base py-2 font-semibold">
              Pending
            </li>
            <li className="border-2 border-black border-l-0 text-xs md:text-base py-2 font-semibold bg-green-700 text-white">
              Processing
            </li>
            <li className="border-2 border-black border-l-0 text-xs md:text-base py-2 font-semibold">
              On Hold
            </li>
            <li className="border-2 border-black border-l-0 text-xs md:text-base py-2 font-semibold">
              Completed
            </li>
            <li className="border-2 border-black border-l-0 text-xs md:text-base py-2 font-semibold">
              Canceled
            </li>
          </ul>
        </div>

        <div className="md:mt-10 mt-5">
          <p className="font-medium">Tracking Number</p>
          <p className="font-bold underline">420925529214490344490908059615</p>
        </div>

        <div className="mt-10 md:grid gap-10 grid-cols-2">
          <section className="p-2 mb-10 h-[200px] border border-black">
            <p className="text-xl font-semibold">Delivery Details</p>
            <div className="grid grid-cols-2 ">
              <p className="text-lg mt-2 font-medium">
                Sender: <span>Joseph</span>
              </p>
              <p className="text-lg mt-2 font-medium">
                Reciver: <span>Felix</span>
              </p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="text-lg mt-2 font-medium">
                From: <span>Nigeria</span>
              </p>
              <p className="text-lg  mt-2 font-medium">
                To: <span>Lagos</span>
              </p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="text-lg mt-2 font-medium">
                DOD: <span>15 may 2024</span>
              </p>
              <p className="text-lg  mt-2 font-medium">
                DOA: <span>Null</span>
              </p>
            </div>
          </section>
          <section>
            <div className="text-2xl font-bold text-green-700">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Zuba Car Pack</p>
                <FaCheck className="ml-5" />
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto corporis aliquam veritatis eius pariatur voluptates eum,
                minus harum ut
              </p>
            </div>
            <div className="text-2xl font-bold">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Yahuza Suya spot</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto corporis aliquam veritatis eius pariatur voluptates eum,
                minus harum ut
              </p>
            </div>
            <div className="text-2xl font-bold">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>National Park and Zoo</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto corporis aliquam veritatis eius pariatur voluptates eum,
                minus harum ut
              </p>
            </div>
            <div className="text-2xl font-bold">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Food Republic</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto corporis aliquam veritatis eius pariatur voluptates eum,
                minus harum ut
              </p>
            </div>
            <div className="text-2xl font-bold">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Central Mosque</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto corporis aliquam veritatis eius pariatur voluptates eum,
                minus harum ut
              </p>
            </div>
            <div className="text-2xl font-bold ">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Shopping Complex</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                iusto corporis aliquam veritatis eius pariatur voluptates eum,
                minus harum ut
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Firstitem