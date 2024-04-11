import React,{useEffect, useRef} from 'react';
import '../index.css';

const Grams = ({ result,url }) => {
  // Check if result exists and has Carbon_footprint property
  const carbonFootprint = result && result.Carbon_footprint;
  const greenHosting = result && result.Green_hosting;
  const fact1 = result && result.fact1;


  // Format carbon footprint to display up to 3 decimal places
  const formattedCarbonFootprint = carbonFootprint ? carbonFootprint.toFixed(3) : null;

  const gramsRef = useRef(null);

  useEffect(() => {
    if (result) {
      gramsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  // Render the component only when result is available
  if (!result) {
    return null;
  }

  return (
    <div className='flex flex-col bg-[#202020] text-white p-5 md:p-10 gap-10  overflow-hidden' ref={gramsRef}>
      <div className='flex flex-row items-center justify-between gap-20'>
        <div className='flex flex-col gap-20'>
          <p className='text-xs md:text-3xl'>RESULTS FOR<br/><a href={url}>{url}</a></p>
          {carbonFootprint && ( // Check if carbonFootprint exists
        
            <p className='text-xl md:text-5xl'>EACH VISIT TO THIS WEBSITE PRODUCES <span className="text-[#1ecb7b] ">{formattedCarbonFootprint}g</span> OF CO2</p>
           
          )}
        </div>
        <div className='flex items-center'>
          <span className='text-[8rem] lg:text-[18rem] font-outline hidden md:block'>{formattedCarbonFootprint}g</span>
        </div>
      </div>
      <div className='text-xl md:text-3xl lg:text-4xl pb-20'>{fact1}</div>
    </div>
  );
}

export default Grams;
