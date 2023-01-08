import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { MdOpenInNew } from 'react-icons/md';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const colorTheme = {
  level4: 'hsla(var(--p) / 1)',
  level3: 'hsla(var(--p) / 0.7)',
  level2: 'hsla(var(--p) / 0.5)',
  level1: 'hsla(var(--p) / 0.4)',
  level0: 'hsla(var(--p) / 0)',
};
const GithubStats = () => (
  <>
    <motion.h3
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: -100, opacity: 0 }}
      className="text-3xl font-bold mt-5 w-full my-4"
    >
      Github Stats
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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.9 }}
      exit={{ y: 100, opacity: 0, transition: { duration: 0.7 } }}
      className="flex flex-col gap-3 justify-center items-center "
    >
      <GitHubCalendar theme={colorTheme} hideTotalCount hideColorLegend username="ichala" color="var(--primary)" />
      <a
        href="https://github.com/ichala"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary gap-2 hover:font-bold  group btn-md font-medium rounded-lg"
      >
        Check My Github Profile
        <MdOpenInNew className=" group-hover:hidden " />
        <BsBoxArrowInUpRight className=" group-hover:block hidden" />
      </a>
    </motion.div>
  </>
);

export default GithubStats;
