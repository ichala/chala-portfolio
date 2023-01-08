import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import IconGenerator from '../../../config/IconGenerator';

const TimeLine = ({ career }) => (
  <ol className="relative border-l border-primary/50 ">
    {career.map((item) => (
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
              <p className=" text-sm font-normal max-w-lg ">
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
          <a href={item.result} target="_blank" className="btn mt-2 items-center btn-sm btn-primary rounded-full gap-2 " rel="noreferrer">
            <MdOpenInNew />
            Check Result
          </a>
        )}
      </li>
    ))}

  </ol>

);

export default TimeLine;
