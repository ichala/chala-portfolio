import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => (
  <div className="drawer">
    <input id="navbar" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      <div className="w-full navbar bg-transparent">
        <div className="flex-none lg:hidden">
          <label htmlFor="navbar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
        </div>
        <div className="flex justify-around items-center w-full py-3">
          <h1 className="font-bold text-3xl ">
            Chala
            <span className="hightlight">.dev</span>
          </h1>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/skills/">Skills</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
    <div className="drawer-side">
      <label htmlFor="navbar" className="drawer-overlay" />
      <ul className="menu p-4 w-80 bg-base-100">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills/">Skills</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

      </ul>

    </div>
  </div>
);

export default Navbar;
