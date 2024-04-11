import React from "react";
import girl from "../images/girl.png";
import boy from "../images/boy.jpg";
import Iva_Resume from "../images/Iva_Resume.pdf"
import Kartik_Resume from "../images/Kartik_Resume.pdf"

const Profile = () => {
  return (
    <>
      <div className="bg-[#202020] text-white p-5 md:p-10">
        <h1 className="font-outline text-5xl md:text-7xl lg:text-8xl text-center  py-20">
          Get To Know Us
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 py-20">
          <div className="border-2 w-full rounded-lg p-10  gap-5 text-center flex flex-col items-center h-full">
            <img
              src={girl}
              alt=""
              className="h-48 w-48 md:w-56 md:h-56 rounded-full"
            />
            <h1 className="text-3xl">Iva Agarwal</h1>
            <p className="max-w-lg">
              Hi! I'm a MERN stack developer on a journey to create clean and sustainable solutions. Currently learning web design. Find me lost in fictional worlds.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <a href="https://github.com/iva-agarwal" target="_blank" rel="noreferrer">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/iva-agarwal/"
                target="_blank"
                rel="noreferrer"
              >
              
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
                </svg>
              </a>
              <a href={Iva_Resume} download>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 00-8 8v48a8 8 0 008 8h384a8 8 0 008-8v-48a8 8 0 00-8-8H320zm0 136a8 8 0 00-8 8v48a8 8 0 008 8h184a8 8 0 008-8v-48a8 8 0 00-8-8H320z" />
              </svg>
</a>
              <a href="https://iva-agarwal.github.io/" target="_blank" rel="noreferrer">
                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
       
       
          <div className="border-2  w-full h-full rounded-lg p-10  gap-5 text-center flex flex-col items-center">
            <img
              src={boy}
              alt=""
              className="h-48 w-48 md:w-56 md:h-56 rounded-full"
            />
             <h1 className="text-3xl">Kartik Chhimpa</h1>
            <p className="max-w-lg">
              Let's make some websites green! I'm a data analyst who's still trying to figure out how css works. Hope to make the web greener with some optimised code.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <a href="https://www.linkedin.com/in/kartik13/" target="_blank" rel="noreferrer">
                <svg
                  viewBox="0 0 900 1000"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
                </svg>
              </a>

              <a href={Kartik_Resume} download>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 00-8 8v48a8 8 0 008 8h384a8 8 0 008-8v-48a8 8 0 00-8-8H320zm0 136a8 8 0 00-8 8v48a8 8 0 008 8h184a8 8 0 008-8v-48a8 8 0 00-8-8H320z" />
              </svg>
              </a>
              <a href="https://developeasusual.github.io/" target="_blank" rel="noreferrer">
                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
