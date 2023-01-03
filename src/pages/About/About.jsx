import React from 'react';
import { motion } from 'framer-motion';
import { MdCake, MdAlternateEmail, MdLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { ImCloudDownload } from 'react-icons/im';
import GitHubCalendar from 'react-github-calendar';

const colorTheme = {
  level4: 'hsla(var(--p) / 1)',
  level3: 'hsla(var(--p) / 0.7)',
  level2: 'hsla(var(--p) / 0.5)',
  level1: 'hsla(var(--p) / 0.4)',
  level0: 'hsla(var(--p) / 0)',
};
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
    <div className="flex md:flex-row justify-center gap-2 items-center md:items-start flex-col">
      <div className="w-full md:max-w-xs">
        <div className="rounded-lg w-full p-4 bg-base-100">
          <div className="flex  flex-col items-center justify-center">
            <div className="avatar online">
              <div className="w-24 mask mask-squircle">
                <img alt="test" src="https://firebasestorage.googleapis.com/v0/b/chala-portfolio.appspot.com/o/media%2Fimage%2Finfluencers%2F1664919718801-8cb3a488-b4cc-431c-93e0-05dfc22549c7?alt=media&token=4cd036ac-5a6f-4e6f-ba59-f26276518dc5" />
              </div>
            </div>
            <h2 className="font-medium text-xl"> Ali Jendoubi</h2>
            <p className="font-light text-primary">Full Stack Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <ul className="menu items-start justify-center  p-2 rounded-box">
              <li className="hover:bg-none">
                <label>
                  <MdCake className="h-5 w-5" />
                  April 3rd 1996
                </label>
              </li>
              <li className="hover:bg-none">
                <label>
                  <MdAlternateEmail className="h-5 w-5" />
                  <a
                    href="tel:+216 58 225 897"
                    className="text-md font-light hover:opacity-70"
                  >
                    contact@chala.dev
                  </a>
                </label>
              </li>
              <li className="hover:bg-none">
                <label>
                  <MdLocationOn className="h-5 w-5" />
                  <label
                    className="text-md font-light hover:opacity-70"
                  >
                    Nabeul,Tunisia
                  </label>
                </label>
              </li>
              <li className="hover:bg-none">
                <label>
                  <FaPhone className="h-5 w-5" />
                  <a
                    href="tel:+216 58 225 897"
                    className="text-md font-light hover:opacity-70"
                  >
                    +216 58 225 897
                  </a>
                </label>
              </li>
            </ul>
            <button
              type="button"
              className="flex btn btn-primary btn-sm gap-1 items-center uppercase font-medium "
            >
              <ImCloudDownload className="w-6 h-5 " />
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-base-100 rounded-lg">
        <h2 className=" font-thick text-lg"> My Github Stats </h2>
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
          className="border-[0.5px] border-primary/40  w-full mb-2"
        />
        <div className="flex flex-col gap-3 ">
          <GitHubCalendar theme={colorTheme} hideTotalCount hideColorLegend username="ichala" color="var(--primary)" />
        </div>

      </div>
    </div>

  </>
);

export default About;
