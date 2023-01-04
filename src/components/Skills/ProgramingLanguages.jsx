import React from 'react';
import { motion } from 'framer-motion';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiRubygems,
} from 'react-icons/si';
import PLanguage from './Frameworks/PLanguage';

const ProgramingLanguagesList = [
  {
    name: 'JavaScript',
    icon: <SiJavascript size={20} />,
    value: '90',
  },
  {
    name: 'Ruby',
    icon: <SiRubygems size={20} />,
    value: '70',
  },
  {
    name: 'CSS',
    icon: <SiCss3 size={20} />,
    value: '80',
  },
  {
    name: 'HTML',
    icon: <SiHtml5 size={20} />,

    value: '90',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={20} />,
    value: '80',
  },
];

const ProgramingLanguages = () => (
  <div className="max-w-sm  ">
    <motion.h3
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: -100, opacity: 0 }}
      className="text-lg text-center font-light mt-5 w-full my-4"
    >
      Programing Languages
    </motion.h3>
    <div className="flex flex-wrap w-full  p-2 rounded-lg justify-start items-start gap-2">
      {ProgramingLanguagesList.map((item, index) => (
        <PLanguage key={item.name} {...item} index={index} />
      ))}

    </div>
  </div>
);

export default ProgramingLanguages;
