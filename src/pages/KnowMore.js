import React from "react";
import Navbar from "../components/Navbar";
import img from "../images/Water drop-bro.svg";


const KnowMore = () => {
  return (
    <>
<Navbar/>
<div className="flex flex-col lg:flex-row w-full items-center justify-center p-10 gap-10">
<div className=" flex flex-col gap-10 w-full h-full ">
      <div>
        <a
          href="https://www.thegreenwebfoundation.org/"
          className="text-[#1ecb7b] text-md md:text-lg lg:text-3xl"
        >
          https://www.thegreenwebfoundation.org/
        </a>
        <p className="text-sm md:text-md lg:text-lg">
          The Green Web Foundation is an independent non-profit that tracks how
          much of the internet runs on green energy. Manage the environmental
          impact of your digital products. Apply best practices in digital
          sustainability. Advocate...
        </p>
      </div>

      <div>
        <a
          href="https://yoast.com/carbon-footprint-of-website//"
          className="text-[#1ecb7b] text-md md:text-lg lg:text-3xl"
        >
          https://yoast.com/carbon-footprint-of-website/
        </a>
        <p className="text-sm md:text-md lg:text-lg">
          Web sustainability is a huge topic and covers a lot of aspects, from
          technical details to design and the way you organize your content. Why
          is it such an important topic? Because climate change is a serious
          threat and can no longer be ignored. All of us need to work together
          to do everything we can to reduce our carbon footprint. And although
          it might not be the first thing that pops into your head, this also
          includes websites...
        </p>
      </div>

      <div>
        <a
          href="https://rootwebdesign.studio/low-carbon-web-design/"
          className="text-[#1ecb7b]  text-md md:text-lg lg:text-3xl"
        >
          https://rootwebdesign.studio/low-carbon-web-design/
        </a>
        <p className="text-sm md:text-md lg:text-lg">
          By being more thoughtful about web design – and grounding our work in
          principles of ethics, accessibility and sustainability – we’re
          building low-carbon websites that are better for businesses and better
          for the planet...
        </p>
      </div>

      <div>
        <a
          href="https://www.wired.com/story/internet-carbon-footprint/"
          className="text-[#1ecb7b]  text-md md:text-lg lg:text-3xl"
        >
          https://www.wired.com/story/internet-carbon-footprint/
        </a>
        <p className="text-sm md:text-md lg:text-lg">
          WEBSITES TODAY COME with a whole host of bells and whistles, from
          garish animations to autoplay video. If you hate those features,
          you’re right to: not only are they annoying – they are also bad for
          the planet...
        </p>
      </div>

      <div>
        <a
          href="https://www.goodenergy.co.uk/blog/website-carbon-footprints/"
          className="text-[#1ecb7b]  text-md md:text-lg lg:text-3xl"
        >
          https://www.goodenergy.co.uk/blog/website-carbon-footprints/
        </a>
        <p className="text-sm md:text-md lg:text-lg">
          Although it is hard to imagine, the internet has a vast carbon
          footprint – estimated to be nearly 4% of all global carbon emissions.
          And each and every website that you visit contributes in some way to
          that figure. In this article, we explain why the internet has a carbon
          footprint, what we’ve done to make our website green, and how it
          compares with other energy companies’....
        </p>
      </div>
      </div>

      <div className="w-3/5">
        <img src={img} alt="hero" className="w-full h-full"/>
      </div>

      </div>
    </>
  );
};

export default KnowMore;
