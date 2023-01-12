import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="flex gap-2 flex-wrap text-primary">
        {
        data.details?.frameworks.map((framework) => (
          <div key={`${framework.value}`}>
            {IconGenerator(framework.value)}
          </div>
        ))
      }
      </div>
      <div className="card-actions justify-end">
        <button type="button" className="btn btn-primary btn-xs">Learn now!</button>
      </div>
    </div>
  </motion.div>
);

export default Card;
