import React from 'react';
import { motion } from 'framer-motion';
import { SiAngellist, SiUpwork } from 'react-icons/si';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

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
        <a
          href="/assets/AliJendoubiResume.pdf"
          target="_blank"
          rel="noreferrer"
          download
          type="submit"
          className="btn btn-primary btn-md uppercase rounded-lg"
        >
          Get Resume
        </a>
        <div
          className="flex items-center justify-center gap-2 p-2 border-[1px] border-primary rounded-md"
        >
          <a
            href="https://github.com/ichala"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/alijendoubi/"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/_ichala"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <BsTwitter size={20} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~013ad41e1b64462fb6/"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <SiUpwork size={20} />
          </a>
          <a
            href="https://angel.co/u/ichala"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <SiAngellist size={20} />
          </a>
        </div>
      </motion.div>
    </div>

  </div>
);

export default Home;
