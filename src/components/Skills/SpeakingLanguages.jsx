import React from 'react';
import { motion } from 'framer-motion';

const SpeakingLanguages = () => (
  <div className="max-w-sm  ">
    <motion.h3
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: -100, opacity: 0 }}
      className="text-lg text-center font-light mt-5 w-full my-4"
    >
      I Speak
    </motion.h3>
    <div className="flex flex-wrap  p-2 rounded-lg justify-center items-center gap-2">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center items-center gap-2"
      >
        <div
          className="radial-progress text-primary"
          style={{
            '--value': '100',
            '--size': '6rem',
            '--thickness': '7px',
          }}
        >
          100%
        </div>
        Arabic
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center items-center gap-2"
      >
        <div
          className="radial-progress text-primary"
          style={{
            '--value': '70',
            '--size': '6rem',
            '--thickness': '7px',
          }}
        >
          70%
        </div>
        English
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center items-center gap-2"
      >
        <div
          className="radial-progress text-primary"
          style={{
            '--value': '50',
            '--size': '6rem',
            '--thickness': '7px',
          }}
        >
          50%
        </div>
        French
      </motion.div>
    </div>
  </div>
);

export default SpeakingLanguages;
