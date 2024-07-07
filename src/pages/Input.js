import React from "react";
import axios from "axios";
import img_1 from "../images/Environment-bro.svg";
import img_2 from "../images/Select-bro.svg";
import img_3 from "../images/Press pause-bro.svg";
import img_4 from "../images/Static website-bro.svg";
import img_5 from "../images/Server-bro.svg";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Input = ({ url, onURLChange, setResult, onURLSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal

  const content = [
    {
      text: 'Digital technologies contribute 4% to greenhouse gas emissions globally.',
      image: img_2,
    },
    {
      text: 'Streaming one hour of video on a smartphone emits 5-10 grams of CO2.',
      image: img_3,
    },
    {
      text: 'Electronic devices production emits 44.7 million metric tons of CO2 annually.',
      image: img_4,
    },
    {
      text: 'Internet traffic could contribute up to 14% of global emissions by 2040.',
      image: img_5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % content.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [content.length]);



  const handleSubmit = async () => {
    try {
      setShowModal(true); // Show the modal when the request is being processed
      const response = await axios.post(
        ` https://c0fa-182-69-181-35.ngrok-free.app/?input=${url}`
      );
      setResult(response.data);
      setSubmitted(true);
      onURLSubmit(); // Notify parent component that URL has been submitted
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setShowModal(false); // Hide the modal after the request is complete
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center  p-5 md:p-10 ">
      {/* Search bar */}
      <div className="flex-1 p-4 flex flex-col gap-10">
        <h1 className="text-2xl md:text-4xl text-center">
          Enter your website's URL
        </h1>
        <div className=" rounded-full bg-[#202020] flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder=""
            className="w-full bg-[#202020] rounded-full px-2 md:p-4 text-white focus:outline-none"
            value={url}
            onChange={(e) => onURLChange(e.target.value)} // Update the URL state via callback
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 m-4 font-bold cursor-pointer"
            onClick={handleSubmit}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="w-full flex flex-col justify-center gap-4 items-center text-md md:text-lg text-center">
       <p className="max-w-lg"> Enter the website URL in the following format: https://example.com/</p>
<p className="max-w-lg">Please note that the carbon calculation provided is an approximation. For detailed information on how this calculation is made, please visit the "How it works" page.</p>
<p className="max-w-lg">Some websites may not be compatible with our carbon calculator due to access restrictions or large amounts of data. By using this carbon calculator, you are consenting to the storage and access of the information you submit in our database.</p>
</div>
      </div>

      {/* Illustration */}
      <div className="flex-1">
        <img src={img_1} alt="Illustration" className="w-full h-auto" />
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 h-3/5  md:h-3/5 lg:h-4/5 gap-10 flex flex-col md:flex-row items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className="flex flex-col gap-10 items-center justify-center"
      >
        <h1 className="font-rough text-3xl md:text-5xl lg:text-7xl text-center">DID YOU KNOW</h1>
        <p className="text-lg md:text-xl lg:text-3xl text-center">{content[currentIndex].text}</p>
        <div className="loader"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className="w-2/5"
      >
        <img
          src={content[currentIndex].image}
          alt="Illustration"
          className="w-full h-auto hidden md:block"
        />
      </motion.div>
    </div>
            </div>
        
        </>
      )}
    </div>
  );
};

export default Input;
