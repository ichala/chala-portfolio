import React from 'react';
import { MdCake, MdAlternateEmail, MdLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { ImCloudDownload } from 'react-icons/im';
import { motion } from 'framer-motion';

const ProfileCard = () => (
  <motion.div
    initial={{ x: -300, opacity: 0, scale: 0 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    exit={{
      x: 300,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5 },
    }}
    className="w-full h-full md:max-w-xs"
  >
    <div className="rounded-lg h-full  w-full p-4 bg-base-100">
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
        <a
          className="flex btn btn-primary btn-sm gap-1 items-center uppercase font-medium "
          href="/assets/AliJendoubiResume.pdf"
          target="_blank"
          rel="noreferrer"
          download
          type="submit"
        >
          <ImCloudDownload className="w-6 h-5 " />
          Download CV
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProfileCard;
