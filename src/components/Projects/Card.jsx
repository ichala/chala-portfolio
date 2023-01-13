import React from 'react';
import { motion } from 'framer-motion';
import { AiFillLock } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import IconGenerator from '../../tools/IconGenerator';

const Card = ({ data }) => (

  <motion.div
    initial={{ opacity: -100 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    exit={{ opacity: 0 }}
    className="card w-96 bg-base-300 group hover:shadow-lg cursor-pointer"
  >
    <figure
      className=" group-hover:bg-primary  cursor-pointer bg-cover bg-center  h-[200px] w-full"
      style={{
        backgroundImage: `url(${data.placeholderImage})`, backgroundRepeat: 'no-repeat',
      }}
    />
    <div className="card-body ">
      <h2 className=" card-title text-base-content italic font-light">{data.details.title}</h2>
      <div className="flex gap-2 flex-wrap text-primary items-center justify-start">
        {
        data.details?.frameworks.map((framework) => (
          <div key={`${framework.value}`} className="tooltip  tooltip-primary" data-tip={framework.value}>
            {IconGenerator(framework.value, 20)}
          </div>
        ))
      }
      </div>
      <div className="card-actions justify-end">
        {
          data.details.private ? (
            <button type="button" className="btn btn-primary btn-xs gap-2">
              <AiFillLock />
              Private
            </button>
          ) : (
            <a href={data.details.github} target="_blank" className="btn btn-primary btn-xs gap-2" rel="noreferrer">
              <SiGithub />
              View Code

            </a>
          )
        }

        <a href={data.details.live} target="_blank" className="btn btn-primary btn-xs gap-2 " rel="noreferrer">
          <MdOutlineOpenInNew />
          View Demo

        </a>
      </div>
    </div>
  </motion.div>
);

export default Card;
