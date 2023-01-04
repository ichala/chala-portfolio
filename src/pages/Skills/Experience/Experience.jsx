import React from 'react';
// import { motion } from 'framer-motion';
import IconGenerator from '../../../config/IconGenerator';

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

const Experience = () => (
  <div className="p-4">

    <ol className="relative border-l border-primary/50 ">
      {Career.map((item) => (
        <li key={item.name} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-2 ring-primary ">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full">
                <img alt="a" src={item.companyLogo} />
              </div>
            </div>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-primary ">
            <span>
              {item.name}
              {' '}
              at
              <a href={item.companyLink} target="_blank" className="text-primary/70 hover:underline ml-1" rel="noreferrer">
                {item.company}
              </a>
            </span>
            {item.current && (
            <span className="badge badge-primary ml-2">Current</span>
            )}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-primary/70 ">
            {item.date}
            {' '}
            (
            {item.location}
            )
          </time>
          <ul>
            {item.description.map((desc) => (
              <li key={desc}>
                <p className=" text-sm font-normal max-w-lg">
                  -
                  {desc}
                </p>
              </li>
            ))}
            <li className="flex gap-2 flex-wrap my-2 ">
              {item.tools?.map((tool) => (
                <span key={tool} className="rounded-full bg-primary  p-2 justify-center items-center text-primary-content tooltip tooltip-primary" data-tip={tool}>
                  {IconGenerator(tool, 20)}
                </span>
              ))}
            </li>

          </ul>

          {item.result && (
          <a href={item.result} className="btn mt-2 items-center btn-sm btn-primary rounded-full ">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" /></svg>
            Check Result
          </a>
          )}
        </li>
      ))}

    </ol>
  </div>

);

export default Experience;
