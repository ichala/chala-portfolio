import React from 'react';
import { motion } from 'framer-motion';
import { MdAlternateEmail, MdLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiUpwork, SiAngellist } from 'react-icons/si';
import ContactFrom from '../../components/ContactPage/ContactFrom';

function Contact() {
  return (
    <>
      <motion.h3
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
        className="text-3xl font-bold mt-5 w-full my-4"
      >
        Contact Me
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
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 ">
        <motion.ul
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2 w-full max-w-md"
        >
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            exit={{ x: -100, opacity: 0, transition: { delay: 0.1 } }}
            className="flex items-center gap-2 p-2 border-[1px] border-primary  rounded-md"
          >
            <div className="bg-primary text-primary-content rounded-md p-2">
              <MdAlternateEmail size={20} />
            </div>
            <a
              href="mailto:contact@chala.dev"
              className="text-lg font-light hover:opacity-70"
            >
              contact@chala.dev
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
            exit={{ x: 100, opacity: 0, transition: { delay: 0.2 } }}
            className="flex items-center gap-2 p-2 border-[1px] border-primary rounded-md"
          >
            <div className="bg-primary text-primary-content rounded-md p-2">
              <FaPhone size={20} />
            </div>
            <a
              href="tel:+216 58 225 897"
              className="text-lg font-light hover:opacity-70"
            >
              +216 58 225 897
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.7 } }}
            exit={{ x: -100, opacity: 0, transition: { delay: 0.3 } }}
            className="flex items-center gap-2 p-2 border-[1px] border-primary rounded-md"
          >
            <div className="bg-primary text-primary-content rounded-md p-2">
              <MdLocationOn size={20} />
            </div>
            <a
              href="https://goo.gl/maps/Yu9eBSLTavdMERnT6"
              className="text-lg font-light hover:opacity-70"
              target="_blank"
              rel="noreferrer"
            >
              Nabeul, Tunisia
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.9 } }}
            exit={{ x: 100, opacity: 0, transition: { delay: 0.4 } }}
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
          </motion.li>
        </motion.ul>
        <ContactFrom />
      </div>
    </>
  );
}

export default Contact;
