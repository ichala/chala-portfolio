import React from 'react';
import { motion } from 'framer-motion';
// import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <div>
    <div className="flex flex-col w-full justify-center items-center lg:justify-between md:flex-row text-base-content">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <h1 className="text-5xl lg:text-7xl tracking-tighter flex flex-col items-start justify-start  font-extrabold uppercase">
          Ali
          <span>Jendoubi</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <h2 className="py-3 text-2xl lg:text-5xl font-light opacity-70">
            Full-Stack Web Devoloper
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.7 } }}
        className="max-w-xs self-center flex justify-center flex-col gap-1"
      >
        <p className="text-center text-lg font-light">
          Transforming data into the graphical interface & layouts schema for
          all types of applications
        </p>
        <button
          type="submit"
          className="btn btn-primary btn-md uppercase rounded-lg"
        >
          Get Resume
        </button>
        {/* <div className="pb-3 flex gap-1 italic justify-center items-center text-5xl">
        <a className="hover:opacity-70" href="https://www.linkedin.com/in/alijendoubi/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a className="hover:opacity-70" href="https://github.com/ichala/" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
        <a className="hover:opacity-70" href="https://twitter.com/_ichala" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
      </div> */}
      </motion.div>
    </div>
    <div className="p-4 md:p-0">
      <motion.h3
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
        className="text-3xl font-bold mt-5 w-full my-4"
      >
        About Me
        <motion.hr
          initial={{ opacity: 0, scale: 0, x: 300 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          exit={{
            x: 300,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.7 },
          }}
          className="border-[1px] border-primary/60 border-dashed w-full mt-2"
        />
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.7 } }}
        className=" tracking-normal font-light text-left text-lg"
      >
        Hi there! My name is Ali Jendoubi my friends call me Chala and I am a
        full-stack software developer. This means that I have expertise in both
        the front-end and back-end aspects of web development. I have a
        strong understanding of how all the pieces of a web application fit
        together. Whether it&apos;s designing user interfaces, implementing databases
        , or integrating applications with APIs, I have the skills and knowledge
        to take on any challenge. I am excited to continue learning and growing
        as a full-stack developer and make a positive impact through my work
      </motion.p>
    </div>

  </div>
);

export default Home;
