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
      Languages
    </motion.h3>
    <div className="flex flex-wrap  p-2 rounded-lg justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className="radial-progress text-primary"
          style={{
            '--value': '100',
            '--size': '6rem',
            '--thickness': '10px',
          }}
        >
          100%
        </div>
        Arabic
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className="radial-progress text-primary"
          style={{
            '--value': '70',
            '--size': '6rem',
            '--thickness': '10px',
          }}
        >
          70%
        </div>
        English
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className="radial-progress text-primary"
          style={{
            '--value': '50',
            '--size': '6rem',
            '--thickness': '10px',
          }}
        >
          50%
        </div>
        French
      </div>
    </div>
  </div>
);

export default SpeakingLanguages;
