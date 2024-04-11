import React from "react";
import Navbar from "../components/Navbar";

const HowItWorks = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className=" flex flex-col gap-10 w-full h-full p-10">
        <div>
          <p className="text-[#1ecb7b] text-md md:text-lg lg:text-3xl">
            How is the calculation done?
          </p>
          <p className="text-sm md:text-md lg:text-lg">
            Every website when loaded or running behind servers uses energy. We
            try to calculate the carbon emission from this energy usage. Truth
            be told, getting to the exact carbon emission from each website load
            for every user at different locations is impossible. Thus, various
            assumptions have been made which are used across different methods
            for carbon calculation of a website.
          </p>
        </div>

        <div>
          <p className="text-[#1ecb7b] text-md md:text-lg lg:text-3xl">
            Methodology :
          </p>
          <div className="text-sm md:text-md lg:text-lg">
            We consider various metrics for the calculation of carbon emission.
            Here is a step by step overview of how it is done:
            <ol className="list-decimal">
             <li className="font-bold"> Calculating website data transfer:
              <p className="font-normal">
                For valid urls we scourge through HTML, CSS, JS, external fonts
                and media files to get the total size of a website. This size
                corresponds to the data transfer through wire to a user.
              </p>
              </li>
              <li className="font-bold">
              Calculating energy consumed:
              <p className="font-normal">
                We calculate the average energy required to transfer this data
                over the wire. Currently we are using the global yearly average
                to calculate the energy conversion ratio.
              </p>
              </li>
              <li className="font-bold">
              Calculating carbon emission:
              <p className="font-normal">
                From the energy consumed to load a website, we calculate the
                carbon emission by taking into account the international carbon
                dioxide output when generating this energy. For next steps, we
                are working on using the carbon intensity factor based on
                country rather than global average for better results.
              </p>
              </li>
              <li className="font-bold">
              Factoring repeating users:
              <p className="font-normal">
                Repeating users may have some caches/data saved from previous
                visits. Thus we also incorporate a repeating user factor in our
                calculations.
              </p>
              </li>
              <li className="font-bold">
              Checking Green Hosting:
              <p className="font-normal">
                We use the <a href="https://www.thegreenwebfoundation.org/" className="underline">https://www.thegreenwebfoundation.org/</a>  database for
                checking if a website is being hosted on green servers or not.
                Green servers are servers which are running on green energy.
              </p>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <p className="text-[#1ecb7b]  text-md md:text-lg lg:text-3xl">
            Valid URLs:
          </p>
          <p className="text-sm md:text-md lg:text-lg">
            To calculate the data transfer we are using various python libraries
            which work with certain formats of url. (https://www.example.com/).
            Some pages might not be accessible due to restrictions on pages
            while we also have a timeout for sites when carbon calculation takes
            too long. Some sites require login credentials. These sites would
            not be accessible by our servers which work with public sites.
          </p>
        </div>

        <div>
          <p className="text-[#1ecb7b]  text-md md:text-lg lg:text-3xl">
            Resources :
          </p>
          <p className="text-sm md:text-md lg:text-lg">
            This methodology and approach is based upon:{" "}
            <a
              href="https://sustainablewebdesign.org/calculating-digital-emissions/"
              className="underline"
            >
              https://sustainablewebdesign.org/calculating-digital-emissions/.
            </a>
            <br />
            Highly thanks to their work. Please check the above link for exact
            numbers used.
          </p>
        </div>
        <p>Please reach out to us if you have further questions.</p>
      </div>
    </div>
  );
};

export default HowItWorks;
