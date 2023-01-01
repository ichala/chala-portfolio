import React from 'react';

import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <div>
    <h1 className="text-5xl font-bold uppercase">
      Ali
      <span className="hightlight"> Jendoubi</span>
    </h1>
    <p className="py-3 text-lg ">Hi, I&lsquo;m Ali Jendoubi (AKA : Chala), A Passionate Self-Taught Full-Stack Software Developer From Tunisia. My Passion For Software Lies With Dreaming Up Ideas And Making Them Come True With Elegant Interfaces. </p>
    <div className="pb-3 flex gap-1 italic justify-center items-center text-5xl">
      <a className="hover:opacity-70" href="https://www.linkedin.com/in/alijendoubi/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a className="hover:opacity-70" href="https://github.com/ichala/" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
      <a className="hover:opacity-70" href="https://twitter.com/_ichala" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
    </div>
    <button type="button" className="btn btn-sm bg-main rounded-full border-0 hover:border-0">Contact Me</button>
  </div>
);

export default Home;
