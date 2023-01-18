import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import TimeLine from '../../../components/Skills/Experience/TimeLine';

const Career = [
  {
    current: true,
    name: 'Code Reviewer',
    company: 'Microverse',
    companyLink: 'https://www.microverse.org/',
    location: 'Remote',
    date: 'Aug 22 - Present',
    companyLogo: '/assets/company-logos/microverse.jpg',
    description: [
      'Reviewing code for students in the Microverse program',
      'Helping students through Zoom calls or Slack when they got stuck with code issues or technical blockers',
      'Providing feedback on their code and helping them improve their skills.',
      'Giving feedback on code quality and best practices',
    ],
    tools: [
      'Ruby',
      'Ruby on Rails',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Git',
      'Github',
      'Postgres',
    ],

  },
  {
    name: 'Volunteer Mentor',
    company: 'Microverse',
    companyLink: 'https://www.microverse.org/',
    companyLogo: '/assets/company-logos/microverse.jpg',
    location: 'Remote',
    date: 'Apr 22 - Aug 22',
    description: [
      'Assisted new junior developers to adapt to the technical curriculum',
      'Upgraded my network and learned new communication skills by working with developers from all over the world',
    ],
  },
  {
    name: 'Full Stack Developer',
    company: 'Arabia E-Advertising',
    companyLogo: '/assets/company-logos/ar-ad.jpg',
    companyLink: 'https://ar-ad.com/',
    location: 'Dubai',
    date: 'May 22 - Aug 22',
    description: [
      `Ar-Ad specializes in developing and executing bespoke influencer marketing
       plans based on particular goals. My mission
        was to build a website that represents the
         company. You can also control all of the 
         content from a dashboard where you can manage influencers, databases, and stats.`,
    ],
    tools: [
      'NextJs',
      'Postgres',
      'Firebase',
      'NodeJs',
      'React',
      'Redux',
      'JavaScript',
      'HTML',
      'CSS',
      'Figma',

    ],
    result: 'https://arabiatalents.com/',
  },

];
const Studies = [
  {
    name: 'Full Stack Web Developer',
    company: 'Microverse',
    companyLogo: '/assets/company-logos/Microverse.jpg',
    companyLink: 'https://www.microverse.org/',
    location: 'Remote',
    date: 'Feb 22 - Sep 22',
    description: [
      'Remote Work Best Practices',
      'Time Management',
      'Effective Networking',
      'Cross-cultural Communication',
      'Pair Programming',
      'Code Reviews',
    ],
    tools: [
      'Ruby',
      'Ruby on Rails',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Git',
      'Postgres',
    ],
  },
  {
    name: 'Master degree in Computer Science',
    company: 'Esprit',
    companyLogo: '/assets/company-logos/esprit.png',
    companyLink: 'https://www.esprit.tn/',
    location: 'On-Site',
    date: 'Graduated Jun 20',
    description: [
      '2 years of preparation for a master degree in computer science',
      '3 years of studies in computer science for a master degree',
    ],
    tools: [
      'C',
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'C++',
      'MySQL',
      'PHP',
      'Symfony',
    ],
  },
  {
    name: 'Bachelor in Computer Science',
    company: 'high school',
    companyLogo: '/assets/company-logos/Bac.png',
    companyLink: 'http://www.education.gov.tn/',
    location: 'On-Site',
    date: 'Graduated Jun 15',
    description: [
      '9 years of primary and secondary education',
      '2 years of studies in science and technology',
      '3 years of studies in computer science for a bachelor degree',
    ],
    tools: [
      'C',
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'Python',
      'C++',
      'MySQL',
    ],
  },
];
const Freelance = [
  {
    name: 'Freelance Web Developer',
    company: 'Upwork',
    companyLogo: '/assets/company-logos/upwork.ico',
    companyLink: 'https://www.upwork.com/ag/microverse/',
    location: 'Remote',
    date: 'Jan 19 - Present',
    description: [
      'I have been working as a freelancer on Upwork for both myself and Microverse agency',
    ],
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'NodeJs',
      'Ruby on Rails',
      'MongoDB',
      'Postgres',
    ],
  },
  {
    name: 'Freelance Developer',
    company: 'Fiverr',
    companyLogo: '/assets/company-logos/fiver.png',
    companyLink: 'https://www.fiverr.com/',
    location: 'Remote',
    date: 'Jan 19 - Present',
    description: [
      'I have been working as a freelancer on Fiverr.',
    ],
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'NodeJs',
      'Ruby on Rails',
      'MongoDB',
      'Postgres',
    ],
  },

  {
    name: 'Web Developer & Video Editor',
    company: 'Khamsat',
    companyLogo: '/assets/company-logos/khamsat.png',
    companyLink: 'https://khamsat.com/user/alijand',
    location: 'Remote',
    date: 'Jan 19 - Present',
    description: [
      'I have been working as a freelancer on Khamsat for web development projects & video editing projects',
    ],
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'NodeJs',
      'AdobePremiere',
      'AdobePhotoshop',

    ],

  },
];

const Experience = () => {
  const { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle('My Experience');
  }, [setTitle]);

  return (
    <div className="p-4 flex flex-col lg:flex-row items-start justify-start gap-4 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0 }}
        className="flex flex-col"
      >
        <h2 className="py-4 text-3xl">Work Experience</h2>
        <TimeLine career={Career} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        exit={{ opacity: 0 }}
        className="flex flex-col"
      >
        <h2 className="py-4 text-3xl">My Studies</h2>
        <TimeLine career={Studies} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        exit={{ opacity: 0 }}
        className="flex flex-col"
      >
        <h2 className="py-4 text-3xl">Freelancing</h2>
        <TimeLine career={Freelance} />
      </motion.div>

    </div>

  );
};

export default Experience;
