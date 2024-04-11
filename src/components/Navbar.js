import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/ECO2info.png'

const Navbar = () => {
  const location = useLocation();

  return (
    <div className=' border-b-4 bg-[#202020] flex flex-row items-center justify-between text-white px-10 py-5'>
      <div>
        <img src={logo} alt="ECO2info" className='w-40 hidden md:block'/>
      </div>
      <ul className='flex flex-row gap-3 md:gap-10 text-md md:text-xl justify-center md:justify-end font-extralight'>
        <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
        <NavItem to="/know-more" currentPath={location.pathname}>Know more</NavItem>
        <NavItem to="/how-it-works" currentPath={location.pathname}>How It Works?</NavItem>
      </ul>
    </div>
  );
}

const NavItem = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;

  return (
    <li>
      <Link to={to} className={isActive ? 'font-bold' : ''}>{children}</Link>
    </li>
  );
}

export default Navbar;
