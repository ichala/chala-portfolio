import React, { useEffect } from 'react';
import {
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiRuby,
  SiStimulus,
  SiTailwindcss,
  SiYarn,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import PcSvg from '../../../components/Skills/PcSvg';
import ProgramingLanguages from '../../../components/Skills/Frameworks/ProgramingLanguages';
import Framework from '../../../components/Skills/Frameworks/Framework';
import SpeakingLanguages from '../../../components/Skills/SpeakingLanguages';

const FrameworkList = [
  {
    name: 'ReactJs',
    icon: <SiReact size={40} />,
    level: 'Mid-Level',
  },
  {
    name: 'Ruby On Rails',
    icon: <SiRuby size={40} />,

    level: 'Junior',
  },
  {
    name: 'NextJs',
    icon: <SiNextdotjs size={40} />,
    level: 'Junior',
  },
  {
    name: 'NodeJs',
    icon: <SiNodedotjs size={40} />,
    level: 'Junior',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={40} />,
    level: 'Junior',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={40} />,
    level: 'Mid-Level',
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap size={40} />,
    level: 'Senior',
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss size={40} />,
    level: 'Senior',
  },
  {
    name: 'Stimulus',
    icon: <SiStimulus size={40} />,
    level: 'Junior',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase size={40} />,
    level: 'Mid-Level',
  },
  {
    name: 'Jest',
    icon: <SiJest size={40} />,
    level: 'Mid-Level',
  },
  {
    name: 'Git',
    icon: <SiGit size={40} />,
    level: 'Mid-Level',
  },
  {
    name: 'NPM',
    icon: <SiNpm size={40} />,
    level: 'Senior',
  },
  {
    name: 'Yarn',
    icon: <SiYarn size={40} />,
    level: 'Senior',
  },
];

const Frameworks = () => {
  const { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle('Frameworks');
  }, [setTitle]);

  return (
    <div className="flex gap-2 flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start">
      <div className="left-content">
        <ProgramingLanguages />
        <SpeakingLanguages />
      </div>
      <div className="right-content w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          exit={{
            y: 50,
            scale: 0,
            opacity: 0,
            transition: { delay: 0.1 },
          }}
          className="p-4 group hover:bg-primary/10 border-[1px]  border-primary rounded-lg w-full"
        >
          <div className="flex flex-col lg:flex-row gap-2 justify-center items-center ">
            <PcSvg />
            <div className="flex-col">
              <h3 className="text-3xl font-medium text-start  mt-5  my-4">
                Frameworks , Libraries & Tools
              </h3>
              <span className="text-2xl font-light text-start  mt-5  my-4">
                Over 60+ Projects
              </span>
            </div>
          </div>
          <div className="flex  flex-wrap flex-col lg:flex-row w-full p-2 rounded-lg justify-center items-center  gap-2">
            {FrameworkList.map((framework, index) => (
              <Framework key={framework.name} {...framework} index={index} />
            ))}
          </div>
          <div className="text-center">
            <span className="text-primary">And more...</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Frameworks;
