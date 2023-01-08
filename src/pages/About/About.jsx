import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../../components/About/ProfileCard';
import Introduction from '../../components/About/Introduction';
import GithubStats from '../../components/About/GithubStats';

const About = () => (
  <>
    <motion.h3
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
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
          transition: { duration: 0.5 },
        }}
        className="border-[1px] border-primary/60 border-dashed w-full mt-2"
      />
    </motion.h3>
    <div className="flex  md:flex-row justify-center gap-2 items-center md:items-start flex-col h-full">
      <ProfileCard />
      <motion.div
        exit={{
          x: 300,
          opacity: 0,
          scale: 0,
          transition: { duration: 0.5 },
        }}
        className="p-4 h-full  bg-base-100 rounded-lg"
      >
        <Introduction />
        <GithubStats />
      </motion.div>
    </div>

  </>
);

export default About;
