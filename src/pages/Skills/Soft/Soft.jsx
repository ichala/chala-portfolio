import { AiOutlineFileSearch } from 'react-icons/ai';
import {
  FaConnectdevelop, FaHandsHelping, FaPaintBrush, FaPeopleCarry,
} from 'react-icons/fa';
import { MdAvTimer, MdEmojiPeople, MdOutlineSyncProblem } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { SiFuturelearn } from 'react-icons/si';
import { TbSortAscendingNumbers } from 'react-icons/tb';
import { GiStrong } from 'react-icons/gi';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SoftSkills = [
  {
    id: 1,
    title: 'Communication',
    description: 'I have strong communication skills and am able to clearly and effectively communicate with team members, stakeholders, and users.',
    icon: <MdEmojiPeople size={20} />,
  },
  {
    id: 2,
    title: 'Collaboration',
    description: 'I have excellent collaboration skills and am able to work well with others, contribute to group discussions, and communicate effectively.',
    icon: <FaPeopleCarry size={20} />,
  },
  {
    id: 3,
    title: 'Problem Solving',
    description: 'I have superior problem-solving skills and am able to find creative solutions to technical challenges.',
    icon: <MdOutlineSyncProblem size={20} />,
  },
  {
    id: 4,
    title: 'Time Management',
    description: 'I have excellent time management skills and am able to effectively manage my time and prioritize tasks.',
    icon: <MdAvTimer size={20} />,
  },
  {
    id: 5,
    title: 'Self Motivation',
    description: 'I have a good communication skills, I can work in a team and I can work alone.',
    icon: <RiEmotionHappyLine size={20} />,
  },
  {
    id: 6,
    title: 'Self Learning',
    description: 'I am a self-starter and am able to effectively learn new concepts and technologies on my own.',
    icon: <SiFuturelearn size={20} />,
  },
  {
    id: 7,
    icon: <FaConnectdevelop size={20} />,
    title: 'Adaptability',
    description: 'I am highly adaptable and am able to quickly learn and adapt to new tools, languages, and frameworks.',
  },
  {
    id: 8,
    title: 'Creativity',
    icon: <FaPaintBrush size={20} />,
    description: 'I am creative and am able to come up with innovative solutions to problems.',
  },
  {
    id: 9,
    title: 'Details',
    icon: <AiOutlineFileSearch size={20} />,
    description: 'I have a strong attention to detail and am able to thoroughly test my code to ensure it is free of errors.',
  },
  {
    id: 10,
    title: 'Leadership',
    icon: <FaHandsHelping size={20} />,
    description: 'I have strong leadership skills and am able to effectively lead a team.',
  },
  {
    id: 11,
    title: 'Organization',
    icon: <TbSortAscendingNumbers size={20} />,
    description: 'I have excellent organizational skills and am able to effectively manage my time and prioritize tasks.',
  },
  {
    id: 12,
    title: 'Persistence',
    icon: <GiStrong size={20} />,
    description: 'I am persistent and do not give up when faced with challenges in software development.',
  },

];

const Soft = () => {
  const { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle('Soft Skills');
  }, [setTitle]);
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SoftSkills.map((skill) => (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + (skill.id / 10) } }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          key={skill.id}
          className="p-4 w-full max-w-sm bg-base-200 rounded-lg"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="bg-primary rounded-full p-4 flex justify-center items-center text-base-200">
              {skill.icon}
            </div>
            <h2 className="text-lg">{skill.title}</h2>
            <p className="text-sm text-center">{skill.description}</p>
          </div>
        </motion.div>
      ))}

    </div>
  );
};

export default Soft;
