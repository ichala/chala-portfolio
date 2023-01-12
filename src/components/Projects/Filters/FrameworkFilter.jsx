import React from 'react';
import { motion } from 'framer-motion';
import IconGenerator from '../../../tools/IconGenerator';

const FrameworkFilter = ({ FrameWorks, handleFramework, SelectedFrameworks }) => (
  <div className="flex flex-wrap gap-2">
    {FrameWorks.map((framework, index) => (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
        exit={{ opacity: 0 }}
        onClick={() => handleFramework(framework)}
        key={framework}
        type="button"
        className={`btn btn-sm ${SelectedFrameworks.includes(framework) ? 'btn-primary' : ' btn-active'}`}
      >
        {IconGenerator(framework, 20)}

      </motion.button>

    )) }
  </div>
);

export default FrameworkFilter;
