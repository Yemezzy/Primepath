import React, { useState } from "react";
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
import Navbar from "./Navbar";
import Backdrop from "@mui/material/Backdrop";
import Button from '@mui/material/Button';
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { amber } from "@mui/material/colors";

const Firstpage = () => {

 const track = "23105548938495893";
 // const error = "";
 const [data, setData] = useState("");
 const [error, setError] = useState("");

 const submit = (event) => {
   if (data === track) {
       setTimeout(() => {
         setShow(false);
          
       }, 500);
     setInterval(() => {
      setOpen(true);
     }, 800);
     setTimeout(() => { 
       window.location.href = "/500";
     }, 5000);
   } else {
     setError("Unable to find details");
   }
   if (data === "") {
     setError("");
   }
 };



    const [open, setOpen] = React.useState(false);
 const color = amber[900];
    const handleOpen = () => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      setTimeout(() => {
        setShow(true);
      }, 3050);
  };
  

   const [show, setShow] = React.useState(false);

   const handleClose = () => {
     setShow(false);
     setOpen(false)
   };

  return (
    <div>
      <Navbar />
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div>
        <div className="stt  md:h-[455px] py-20 md:py-28">
          <section className="flex justify-center text-center items-center">
            <div>
              <p className="text-4xl font-extrabold text-[#FF4800]">
                Safe & Faster
              </p>
              <p className="md:text-7xl text-5xl font-extrabold text-white mt-5">
                Logistics Services
              </p>

              {/* <div className="mt-10 h-[50px] w-[100%] px-5 flex justify-center">
                <input
                  onChange={(event) => setData(event.target.value)}
                  value={data}
                  type="text"
                  placeholder="Tracking Id"
                  className="outline-none border-none h-full w-[60%] md:w-[70%] px-5"
                />
                <button
                  onClick={submit}
                  className="bg-[#FF4800] h-full text-sm px-5 w-[40%] md:w-[25%] font-semibold text-white"
                >
                  Track & Trace
                </button>
              </div>
              <p className="text-white mt-3 text-xl font-semibold">{error}</p> */}

              <p className="md:text-lg px-5 text-white md:px-28 mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem unde fugit, molestiae voluptatem repudiandae
                vitae quidem repellat dolorem quibusdam odio nisi temporibus
                quaerat nostrum provident? Pariatur explicabo maiores aliquam
                dignissimos!
              </p>

              <button
                onClick={handleOpen}
                className="px-5 py-3 text-xl font-bold text-white bg-[#FF4800] mt-5"
              >
                Track and Trace
              </button>
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
              PrimePath Logistics is a registered and licensed contract
              logistics, freight forwarding, global sourcing, distribution,
              logistics and supply chain consulting company
            </p>
            <p className="mt-2  text-gray-500">
              We are in business to provide services such as Contract Logistics,
              Freight Forwarding, Warehousing and Distribution, Cross Docking,
              Reverse Logistics, Customs Brokerage, Consulting and Optimization
              and Last mile delivery
            </p>
          </section>
        </div>
      </div>

      <div className="bg-[#F2F2F4] mt-20 px-5 md:px-24 md:py-10 py-5 md:flex">
        <section className="md:w-[50%]">
          <p className="md:text-3xl text-2xl mt-5 font-bold">
            #1 Place To Manage All Of Your Shipments
          </p>
          <p className="md:mt-5 mt-2 text-gray-500">
            Experience the difference with PrimePath. Let us handle your
            logistics, so you can focus on what you do best
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
      </div>

      <div className="md:mt-20 mt-20">
        <div className="text-center">
          <p className="font-bold text-[#FF4800]">OUR SERVICES</p>
          <p className="md:text-4xl text-2xl md:mt-3 font-extrabold">
            Best Logistic Services
          </p>
        </div>
        <div className="mt-10 grid gap-3 grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-1.jpg"
              alt=""
              className="w-full"
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[50%]">
                Air Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                Experience swift,reliable air freight with our customized
                solutions, extensive global network , advanced tracking
                technology , and unwavering commitment to compliance and
                security.
              </p>
            </div>
          </section>
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-2.jpg"
              alt=""
              className="w-full"
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[60%]">
                Ocean Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                Discover efficient ocean freight solution tailored to your needs
                , leveraging our extensive network of global ports and shipping
                lanes.
              </p>
            </div>
          </section>
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-3.jpg"
              alt=""
              className="w-full"
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[50%]">
                Road Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                We specialize in handling diverse cargo types , ensuring timely
                delivery and cost efficient solutions. We guaratee the secure
                transportation of your goods by road
              </p>
            </div>
          </section>
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-4.jpg"
              className="w-full"
              alt=""
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[50%]">
                Train Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                Benefit from reliable scheduling , cost effective transportation
                , and reduced environmental impact compared to traditional
                modes. Effective rail network for domestics and international
                shipment
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="md:mt-28 mt-20 px-5 md:px-20">
        <div className="md:flex">
          <section className="md:w-[50%]">
            <p className="text-[#FF4800] font-bold text-sm">OUR FEATURES</p>
            <p className="font-bold text-2xl md:text-4xl mt-3">
              We Are Trusted Logistics Company Since 1990
            </p>
            <div className="md:mt-10 mt-5">
              <section className="flex gap-5">
                <FaGlobe className="md:text-7xl text-8xl text-[#FF4800]" />
                <div>
                  <p className="text-lg mt-2 font-bold">Worldwide Service</p>
                  <p className="text-sm">
                    Worldwide shipping facilitates the transportation of goods
                    acreoss borders and oceans, offering business a global
                    reach. Involving various modes of transportation with each
                    mode chosen based on factor like distance and urgency.
                  </p>
                </div>
              </section>
              <section className="flex gap-5 mt-10">
                <TbTruckDelivery className="md:text-7xl text-8xl text-[#FF4800]" />
                <div>
                  <p className="text-lg mt-2 font-bold">On Time Delivery</p>
                  <p className="text-sm">
                    On-time delivery is crucial for customer satisfaction and
                    trust. Acheived through meticuous planning, real time
                    visibility, and reliable carrier partnership.
                  </p>
                </div>
              </section>
              <section className="flex gap-5 mt-10">
                <MdOutlineSupportAgent className="md:text-7xl text-8xl text-[#FF4800]" />
                <div>
                  <p className="text-lg mt-2 font-bold">
                    24/7 Telephone Support
                  </p>
                  <p className="text-sm">
                    Offering 24/7 telephone service that provides customers with
                    round-the-clock support and assistance, ensuring prompt
                    resolution of inquiries and issues
                  </p>
                </div>
              </section>
            </div>
          </section>
          <section className="md:w-[50%] py-10 md:px-5">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/feature.jpg"
              alt=""
            />
          </section>
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <div className="text-center">
          <p className="md:text-4xl text-2xl md:mt-3 font-extrabold">
            Expert Team Members
          </p>
        </div>
        <div className="md:mt-10 mt-5 grid gap-3 grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section className="p-3 shadow-md shadow-gray-500">
            <div className="flex items-center justify-center ">
              <img
                src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/team-1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
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
            <div className="flex items-center justify-center ">
              <img
                src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/team-2.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
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
            <div className="flex items-center justify-center ">
              <img
                src="https://demo.htmlcodex.com/1309/logistics-company-website-template/img/team-3.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
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
            <div className="flex items-center justify-center ">
              <img
                src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/team-4.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
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

      <div className="mt-20">
        <div className="px-20">
          <section></section>
          <section></section>
        </div>
      </div>

      <div>
        <React.Fragment>
          <Dialog
            open={show}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Enter Tracking Number"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div>
                  <input
                    type="text"
                    onChange={(event) => setData(event.target.value)}
                    className="w-[500px] mt-2 outline-none border-2 border-black px-3 py-2"
                  />
                  <p>{error}</p>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained">
                Disagree
              </Button>
              <Button
                autoFocus
                onClick={submit}
                variant="contained"
                color="success"
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>

      <footer className="bg-[#1F1F2E] md:px-10 pb-10 pt-10 md:pt-20">
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
};

export default Firstpage;
