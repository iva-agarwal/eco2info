import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#92e3a9d5] p-5  md:p-10 w-full flex justify-between items-end'>
      <div className='text-xs md:text-sm mb-2'>
        All illustrations by <a href="https://storyset.com/" target="_blank" rel='noreferrer'><span className='font-bold'>storyset.com</span></a>
      </div>
        <ul className='font-rough text-black text-2xl md:text-5xl flex flex-col justify-end text-right gap-2'>
            <a href="#home"><li>Home</li></a>
            <Link to="/know-more"><li>Know more</li></Link>
            <Link to="/how-it-works"><li>How it works?</li></Link>
        </ul>

    </div>
  )
}

export default Footer