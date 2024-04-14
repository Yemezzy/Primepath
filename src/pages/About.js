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
import Footer from './Footer';

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
        <section data-aos="fade-right" className="md:w-[40%] md:ml-4">
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
          <p data-aos="fade-up" className="text-[#FF4800] mt-16 font-bold ">
            About Us
          </p>
          <p
            data-aos="fade-up"
            className="md:text-4xl text-2xl font-bold md:mt-3"
          >
            Trusted & Faster Logistic Service Provider
          </p>
          <p data-aos="fade-up" className="md:mt-5 mt-2 text-gray-500">
            PrimePath Logistics is a registered and licensed contract logistics,
            freight forwarding, global sourcing, distribution, logistics and
            supply chain consulting company
          </p>
          <p data-aos="fade-up" className="mt-2  text-gray-500">
            We are in business to provide services such as Contract Logistics,
            Freight Forwarding, Warehousing and Distribution, Cross Docking,
            Reverse Logistics, Customs Brokerage, Consulting and Optimization
            and Last mile delivery
          </p>
        </section>
      </div>

      <div className="md:mt-20 mt-10">
        <div className="text-center">
          <p
            data-aos="fade-right"
            className="md:text-3xl text-xl md:mt-3 font-extrabold"
          >
            Trusted Collaborations
          </p>
        </div>
        <div className="mt-5 grid md:gap-3 items-center grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://www.fastfutures.com/app/uploads/2022/04/HSBC-Symbol-png.webp"
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://tefco.com.au/wp-content/uploads/2023/03/tefco-logo-v9a-RGB-03.svg"
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Hapag_lloyd_logo.svg/2560px-Hapag_lloyd_logo.svg.png"
              alt=""
            />
          </section>

          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://vertoro.com/wp-content/uploads/2021/10/Maersk_Logo.png"
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://b2216782.smushcdn.com/2216782/wp-content/uploads/2019/10/SmartWay-transport-partnership.jpg?lossy=1&strip=1&webp=1"
              alt=""
            />
          </section>
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <div data-aos="zoom-in" className="text-center">
          <p className="md:text-4xl text-2xl md:mt-3 font-extrabold">
            Expert Team Members
          </p>
        </div>
        <div className="md:mt-10 mt-5 grid gap-3 grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex items-center justify-center ">
              <img
                src="https://media.discordapp.net/attachments/1228309868595642468/1228310649935757443/IMG_3240.jpg?ex=662b946f&is=66191f6f&hm=ed4518f13cb2b13bb44cf9602b76781b47ab2e3b7730f95dfca7662f706e5c7e&=&format=webp&width=335&height=417"
                alt=""
                className="rounded-full h-[250px] w-[250px] "
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Philippe Leclair
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Operation Manager
              </p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex  items-center justify-center ">
              <img
                src="https://media.discordapp.net/attachments/1228309868595642468/1228310121516503121/IMG_3236.jpg?ex=662b93f1&is=66191ef1&hm=68e89ac90f83b77c45bd7a5c76b3cc49132f6c4b725678d70d8b9a722f1bac4e&=&format=webp&width=278&height=417"
                alt=""
                className="rounded-full h-[250px] w-[250px]"
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Ethan Gadsdon
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Supply Chain Analyst
              </p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex items-center justify-center ">
              <img
                src="https://media.discordapp.net/attachments/1228309868595642468/1228310121805778975/IMG_3239.jpg?ex=662b93f1&is=66191ef1&hm=7a3eb76ebe15e843dd3d754cdd5bcf1cca09e85a83fc143b94c50aa4f4f06158&=&format=webp&width=417&height=417"
                alt=""
                className="rounded-full h-[250px] w-[250px] "
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Leo Tucker
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Transportation Coordinator
              </p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex items-center justify-center ">
              <img
                src="https://media.discordapp.net/attachments/1228309868595642468/1228310121180954714/IMG_3235.jpg?ex=662b93f1&is=66191ef1&hm=e12186192ba31b935dab4d692c5496b5c6d6873ba05e5f68b6da7f1c57af0adc&=&format=webp&width=278&height=417"
                alt=""
                className="rounded-full h-[250px] w-[250px] "
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Colleen G. Brown
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Custom Broker
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default About