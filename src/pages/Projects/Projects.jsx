import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillFilterCircleFill } from 'react-icons/bs';
import Card from '../../components/Projects/Card';
import IconGenerator from '../../config/IconGenerator';

const ProjectList = [
  {
    id: 1,
    title: 'Life hack',
    image: 'https://firebasestorage.googleapis.com/v0/b/chala-portfolio.appspot.com/o/media%2Fimage%2Finfluencers%2F1665261277269-eea856bf-f88a-4f7c-bd55-5f5c3057b8a3?alt=media&token=1363ea33-12ee-4fb1-8804-04f3d1f59299',
    frameworks: ['React', 'TailwindCSS', 'Bootstrap'],
  },
  {
    id: 2,
    title: 'Life hack 2',
    image: 'https://firebasestorage.googleapis.com/v0/b/chala-portfolio.appspot.com/o/media%2Fimage%2Finfluencers%2F1665261277269-eea856bf-f88a-4f7c-bd55-5f5c3057b8a3?alt=media&token=1363ea33-12ee-4fb1-8804-04f3d1f59299',
    frameworks: ['React', 'NextJs'],
  },
  {
    id: 3,
    title: 'WEBPHONE',
    image: 'https://firebasestorage.googleapis.com/v0/b/chala-portfolio.appspot.com/o/media%2Fimage%2F1669490133074-a03949cd-29e0-41a9-a7e4-c46b157cbf4e?alt=media&token=96a668dc-571a-4055-ab27-f8044f5cb08c',
    frameworks: ['React', 'TailwindCSS', 'Bootstrap'],
  },
];

const Projects = () => {
  const [FrameWorks, setFrameWorks] = useState([]);
  const getFrameworks = () => {
    const FrameWorkData = [];
    ProjectList.map((project) => (
      project.frameworks.map((data) => (
        !FrameWorkData.includes(data) && FrameWorkData.push(data)
      ))
    ));
    console.log(FrameWorkData);
    setFrameWorks(FrameWorkData);
  };

  useEffect(() => {
    getFrameworks();
  }, []);

  return (
    <>
      <motion.h3
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ x: -100, opacity: 0 }}
        className="text-3xl font-bold mt-5 w-full my-4"
      >
        My Projects
        <motion.hr
          initial={{ opacity: 0, scale: 0, x: 300 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          exit={{
            x: 300,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.5 },
          }}
          className="border-[1px] border-primary/60 border-dashed w-full mt-2"
        />
      </motion.h3>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="flex gap-2 flex-wrap justify-start ">
            {
          ProjectList.map((project) => (
            <Card
              key={project.id}
              data={project}
            />
          ))
        }

          </div>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-2">
            <div className="text-light flex gap-2 justify-start items-center">
              <BsFillFilterCircleFill />
              Filters
            </div>
            <input className="input input-primary input-md" type="text" name="s" id="s" placeholder="Search" />
            <select className="select select-primary w-full max-w-xs">
              <option disabled selected>Date</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <h2 className="text-light">Frameworks</h2>
            <div className="flex flex-warp gap-2">
              {
            FrameWorks.map((framework) => (
              <button key={framework} type="button" className="btn btn-primary btn-xs">{IconGenerator(framework, 20)}</button>
            ))
          }
            </div>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Projects;