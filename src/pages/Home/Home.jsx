import React from 'react';
import { motion } from 'framer-motion';

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

      </motion.div>
    </div>

  </div>
);

export default Home;
