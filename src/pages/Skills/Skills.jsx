import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';

const Skills = () => {
  const [Title, setTitle] = useState('Frameworks');
  return (
    <div>
      <div className="flex justify-between items-center">
        <motion.h3
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ x: -100, opacity: 0 }}
          className="text-3xl font-bold mt-5  "
        >
          {Title}
        </motion.h3>

        <div className="tabs tabs-boxed hidden sm:block">
          <NavLink
            to="/skills/"
            exact="true"
            className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}
          >
            Frameworks
          </NavLink>
          <NavLink
            to="/skills/experience"
            className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}
          >
            Experience
          </NavLink>
          <NavLink
            to="/skills/soft"
            className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}
          >
            Soft Skills
          </NavLink>
        </div>
      </div>
      <motion.hr
        initial={{ opacity: 0, scale: 0, x: 300 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        exit={{
          x: 300,
          opacity: 0,
          scale: 0,
          transition: { duration: 0.5 },
        }}
        className="border-[1px] border-primary/60 border-dashed w-full my-2"
      />
      <div className="tabs tabs-boxed m-2 sm:hidden">
        <NavLink
          to="/skills/"
          exact="true"
          className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}
        >
          Frameworks
        </NavLink>
        <NavLink
          to="/skills/experience"
          className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}
        >
          Experience
        </NavLink>
        <NavLink
          to="/skills/soft"
          className={({ isActive }) => (isActive ? 'tab-active tab' : 'tab')}
        >
          Soft Skills
        </NavLink>
      </div>
      <Outlet context={{ setTitle }} />
    </div>
  );
};

export default Skills;
