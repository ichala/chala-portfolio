import React from 'react';
import { motion } from 'framer-motion';

const Framework = ({
  name, icon, level, index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + (index / 10) } }}
    exit={{ x: -100, opacity: 0, transition: { delay: 0.3 } }}
    className="flex justify-between items-center border-primary p-2 rounded-md bg-primary/30 border-[1px] lg:w-1/3 w-full"
  >
    <div className=" flex justify-start items-center gap-2 ">
      {icon}
      {name}
    </div>
    <div className="badge badge-primary  font-semibold">{level}</div>
  </motion.div>
);

export default Framework;
