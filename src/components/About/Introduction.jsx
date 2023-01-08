import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => (
  <div className="p-4 md:p-0">
    <motion.h3
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: -100, opacity: 0 }}
      className="text-3xl font-bold mt-5 w-full my-4"
    >
      Introduction
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
        className="border-[1px] border-primary/60  w-full mt-2"
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
);

export default Introduction;
