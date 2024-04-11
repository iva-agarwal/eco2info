import React,{useState} from "react";
import { motion } from "framer-motion";
import "../index.css";
import Navbar from "../components/Navbar";
import Results from "./Results";
import Grams from "./Grams";
import Profile from "./Profile";
import Footer from "../components/Footer";
import Input from "./Input";

const Home = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [isURLSubmitted, setIsURLSubmitted] = useState(false);

  const handleURLSubmit = () => {
    setIsURLSubmitted(true);
  };

  const resetURLSubmitted = () => {
    setIsURLSubmitted(false);
  };

  const handleURLChange = (newUrl) => {
    setUrl(newUrl);
  };
  
  return (
    <>
    <div className="text-white bg-[#202020] h-screen flex flex-col justify-between" id="home">
      <Navbar/>

<div className="">
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2,delay:0.5 }}
        className="hidden lg:block"
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 absolute top-[490px] right-[200px] rotate-[-20deg] opacity-50 "
        >
          <path
            fill="#1ecb7b"
            d="M246.625 18.375c-11.817-.153-23.918 8.608-29.375 22.438-6.716 17.02-.85 35.28 13.094 40.78 13.943 5.502 30.69-3.822 37.406-20.843 6.716-17.02.85-35.28-13.094-40.78-2.614-1.033-5.304-1.56-8.03-1.595zm74.75 15.938c-10.97.006-22.743 6.024-30.78 16.874-12.25 16.534-11.2 38.06 2.342 48.094 13.544 10.035 34.44 4.754 46.688-11.78 12.25-16.534 11.2-38.06-2.344-48.094-4.654-3.45-10.16-5.097-15.905-5.093zm67.25 37.53c-10.336-.127-21.542 4.263-30.47 12.907-15.87 15.368-18.525 38.344-5.936 51.344 12.587 13 35.66 11.086 51.53-4.28 15.87-15.37 18.526-38.345 5.938-51.345-5.508-5.69-13.024-8.527-21.063-8.626zm-156.438 32.063c-22.51-.28-44.378 6.893-63.5 24C107.65 182.513 48.192 261.012 28.28 386.97 5.023 534.1 186.257 507.523 168.313 428.936c-22.922-100.387 34.13-141.11 108-124.156 32.838 7.54 66.54-4.9 86-40.436 23.402-42.733-7.428-106.817-62.875-139.625-21.61-12.79-44.74-20.534-67.25-20.814zM449.438 134c-10.52.022-21.654 2.82-32.093 8.625-27.837 15.48-40.15 46.51-27.47 69.313 12.682 22.802 45.54 28.73 73.376 13.25 27.837-15.48 40.118-46.51 27.438-69.313-7.926-14.252-23.717-21.91-41.25-21.875z"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2}}
        className="hidden lg:block"
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 absolute bottom-[150px] right-[150px] transform scale-x-[-1] rotate-[40deg] opacity-50 "
        >
          <path
            fill="#1ecb7b"
            d="M246.625 18.375c-11.817-.153-23.918 8.608-29.375 22.438-6.716 17.02-.85 35.28 13.094 40.78 13.943 5.502 30.69-3.822 37.406-20.843 6.716-17.02.85-35.28-13.094-40.78-2.614-1.033-5.304-1.56-8.03-1.595zm74.75 15.938c-10.97.006-22.743 6.024-30.78 16.874-12.25 16.534-11.2 38.06 2.342 48.094 13.544 10.035 34.44 4.754 46.688-11.78 12.25-16.534 11.2-38.06-2.344-48.094-4.654-3.45-10.16-5.097-15.905-5.093zm67.25 37.53c-10.336-.127-21.542 4.263-30.47 12.907-15.87 15.368-18.525 38.344-5.936 51.344 12.587 13 35.66 11.086 51.53-4.28 15.87-15.37 18.526-38.345 5.938-51.345-5.508-5.69-13.024-8.527-21.063-8.626zm-156.438 32.063c-22.51-.28-44.378 6.893-63.5 24C107.65 182.513 48.192 261.012 28.28 386.97 5.023 534.1 186.257 507.523 168.313 428.936c-22.922-100.387 34.13-141.11 108-124.156 32.838 7.54 66.54-4.9 86-40.436 23.402-42.733-7.428-106.817-62.875-139.625-21.61-12.79-44.74-20.534-67.25-20.814zM449.438 134c-10.52.022-21.654 2.82-32.093 8.625-27.837 15.48-40.15 46.51-27.47 69.313 12.682 22.802 45.54 28.73 73.376 13.25 27.837-15.48 40.118-46.51 27.438-69.313-7.926-14.252-23.717-21.91-41.25-21.875z"
          />
        </svg>
      </motion.div>

      </div>
      <div className="flex flex-col lg:flex-row justify-end  gap-10 lg:gap-20 p-5  md:p-10">
        <div className=" lg:self-end">
          <p className=" text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-rough ">
            KNOW YOUR WEBSITE'S
          </p>
          <p className=" text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-rough">
            CARBON FOOTPRINT
          </p>
        </div>
        <div className=" lg:self-end">
          <p className="text-lg lg:text-3xl mb-4">
            Each visit to a webpage leads to carbon emissions. Find out how your website performs.
          </p>
        </div>
      </div>
    </div>

    <Input url={url} onURLChange={handleURLChange} setResult={setResult} onURLSubmit={handleURLSubmit} />
      <Grams result={result} url={url} />
      <Results result={result} />
      <Profile />
      <Footer />
    </>
  );
};

export default Home;
