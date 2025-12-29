import React from 'react';

const Results = ({ result }) => {
  // Destructure values from the result object
  if (!result) {
    return null;
  }

  const {
    css_data_gb,
    font_data_gb,
    js_data_gb,
    media_data_gb,
    html_data_gb,
    total_data_gb,
    carbon_footprint,
    green_hosting
  } = result;

  // Define an array of headings
  const headings = ["CSS", "Font", "JS", "MEDIA", "HTML","Total"];

  const text = [
    'Optimize CSS by removing unused rules and avoiding duplicate files. Minifying CSS removes unnecessary characters, improving page download speeds and reducing data usage and emissions.',
    "Using third-party fonts increases carbon emissions. It's recommended to use built-in fonts. While we understand that some websites require third-party fonts for aesthetic reasons, it's advisable to use fonts that don't consume excessive storage.",
    "JavaScript can be optimized for faster code execution. It's advisable to implement only necessary animations and keep the site as static as possible. Using third-party APIs can significantly impact the carbon footprint. Hence, it's recommended to use APIs running on sustainable energy sources.",
    "Certain pages may have 0 MB of media due to differences between first-time and repeat users (e.g., YouTube, Facebook). Modern image formats like AVIF or WebP have smaller file sizes, enabling faster download and display for users. Using these formats enhances performance and reduces emissions. Image sizes can also be optimized to minimize total data transfer",
    "Always check for redundant information that can be removed from the code. ",
    "Implementing these recommendations can significantly reduce the total size of a website and its carbon footprint."
  ];

  const gbToMb = (gb) => (gb * 1024).toFixed(3);

  const css_data_mb = gbToMb(css_data_gb);
  const font_data_mb = gbToMb(font_data_gb);
  const js_data_mb = gbToMb(js_data_gb);
  const media_data_mb = gbToMb(media_data_gb);
  const html_data_mb = gbToMb(html_data_gb);
  const total_data_mb = gbToMb(total_data_gb);


  // Define an array of corresponding data_mb values
  const data_mb = [css_data_mb, font_data_mb, js_data_mb, media_data_mb, html_data_mb,total_data_mb];

  return (
    <>
 {green_hosting?<div className="text-3xl md:text-5xl text-[#1ecb7b] font-bold w-full flex flex-row items-center justify-start p-5 md:p-10">
        <span className="inline-block p-2 m-2">This website runs on green hosting</span>
        <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1.5em"
      width="1.5em"
    
    >
      <path d="M8 16A8 8 0 108 0a8 8 0 000 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
    </svg>
    </div>:<div className="text-3xl md:text-5xl text-red-400 font-bold w-full flex flex-row items-center justify-start p-5 md:p-10">
       
       <span className="inline-block p-2 m-2">This website does not use green hosting services</span>
       <svg
         viewBox="0 0 16 16"
         fill="currentColor"
         height="1em"
         width="1em"
       >
         <path
           fill="currentColor"
           d="M8 0a8 8 0 100 16A8 8 0 008 0zm3 4a1 1 0 110 2 1 1 0 010-2zM5 4a1 1 0 110 2 1 1 0 010-2zm6.002 8.199C10.39 11.181 9.275 10.5 8 10.5s-2.389.681-3.002 1.699l-1.286-.772C4.586 9.973 6.179 9 8 9s3.414.973 4.288 2.427l-1.286.772z"
         />
       </svg>
         </div>}
      
  
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5  md:p-10 gap-x-10 gap-y-10'>
      {headings.map((heading, index) => (
        <div key={index} className='flex flex-row items-center gap-4 p-2'>
        <div className='flex flex-col border-2 w-full h-full border-black rounded-lg p-5'>
            <h1 className='text-5xl md:text-7xl lg:text-9xl font-rough '>{heading}</h1>
            <p className='text-lg md:text-xl'>
            {heading} data is <span className='text-[#1ecb7b] font-bold'>  {data_mb[index]} MB</span> {/* Access the corresponding data_mb value */}
            </p>
            <p>{text[index]}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Results;
