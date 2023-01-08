import React from 'react';
import { motion } from 'framer-motion';

const PLanguage = ({
  icon, name, value, index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + (index / 10) } }}
    exit={{ x: -100, opacity: 0, transition: { delay: 0.3 } }}
    className="flex flex-col w-full justify-start items-start gap-1"
  >
    <span className="flex gap-2 items-center">
      {icon}
      {name}
    </span>
    <motion.progress
      animate={{ scaleX: [0, 1], transition: { delay: 0.5 + (index / 10) } }}
      exit={{ scaleX: 0, transition: { delay: 0.5 } }}
      className="progress progress-primary w-full"
      value={value}
      max="100"
    />
  </motion.div>
);

export default PLanguage;
