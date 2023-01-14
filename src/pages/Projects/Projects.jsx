import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillFilterCircleFill } from 'react-icons/bs';
import { Link, useSearchParams } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { AiFillFire } from 'react-icons/ai';
import Card from '../../components/Projects/Card';
import Search from '../../components/Projects/Filters/Search';
import FrameworkFilter from '../../components/Projects/Filters/FrameworkFilter';
import { db } from '../../config/firebase';

const Projects = () => {
  const [filteredProjects, setfilteredProjects] = useState([]);
  const [LoadingData, setLoadingData] = useState(true);
  const [FrameWorks, setFrameWorks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const SelectedFrameworks = searchParams.get('framework')?.split(',') ?? [];
  const handleSearch = (event) => {
    searchParams.set('search', event.target.value);
    setSearchParams(searchParams, { replace: false });
  };
  const handleFramework = (framework) => {
    const index = SelectedFrameworks.indexOf(framework);
    if (index === -1) {
      SelectedFrameworks.push(framework);
    } else {
      SelectedFrameworks.splice(index, 1);
    }
    if (SelectedFrameworks.length === 0) {
      searchParams.delete('framework');
    } else {
      searchParams.set('framework', SelectedFrameworks);
    }

    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getFrameworks = (res) => {
      const FrameWorkData = [];
      res.map((project) => project.details?.frameworks.map(
        (data) => !FrameWorkData.includes(data.value) && FrameWorkData.push(data.value),
      ));
      setFrameWorks(FrameWorkData);
    };
    const getProjects = async () => {
      const res = [];
      const q = query(collection(db, 'Chala.dev'));
      const docSnap = await getDocs(q);
      docSnap.forEach((doc) => {
        res.push(doc.data().project);
      });
      getFrameworks(res);
      const frameworks = searchParams.get('framework')
        ? searchParams.get('framework').split(',')
        : [];
      const search = searchParams.get('search');
      const hot = searchParams.get('hot');
      setfilteredProjects(
        res.filter(
          (item) => (!search
            || item.details.title.toLowerCase().includes(search.toLowerCase()))
            && (!hot || item.details.hot)
          && (!frameworks.length
            || frameworks.every((framework) => item.details.frameworks
              .map((data) => data.value).includes(framework))),

        ),
      );
      setLoadingData(false);
    };
    getProjects();
  }, [searchParams]);
  if (LoadingData) {
    return <div>Loading...</div>;
  }
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
      <label htmlFor="my-drawer-2" className="  drawer-button lg:hidden">
        <div className="btm-nav z-20  ">
          <div>
            <BsFillFilterCircleFill className="text-primary" size={20} />
            <h2 className="text-primary font-normal">Filters</h2>
          </div>
        </div>
      </label>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="flex gap-2 flex-wrap justify-center ">
            {
              filteredProjects.length < 1
              && (
              <div className="text-center">
                <h2 className="text-light text-2xl">No Projects Found</h2>
                <p className="text-light italic text-light">
                  Try updating your filters
                  or
                  <button
                    type="button"
                    className="text-light italic text-light underline ml-1"
                    onClick={
                    () => {
                      searchParams.delete('search');
                      searchParams.delete('framework');
                      searchParams.delete('hot');
                      setSearchParams(searchParams);
                    }
                  }
                  >
                    reset them

                  </button>
                </p>
              </div>
              )
            }
            {filteredProjects.map((project) => (
              <Link to={`/project/details/${project.id}`} key={project.id}>
                <Card data={project} />
              </Link>
            ))}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="menu p-4 w-80 bg-base-200 text-base-content gap-2"
          >
            <div className="text-light flex gap-2 justify-start items-center">
              <BsFillFilterCircleFill />
              Filters
            </div>
            <Search handleSearch={handleSearch} searchParams={searchParams} />
            <h2 className="text-light">Frameworks</h2>
            <div className="flex flex-warp gap-2">
              <FrameworkFilter
                handleFramework={handleFramework}
                FrameWorks={FrameWorks}
                SelectedFrameworks={SelectedFrameworks}
              />
            </div>
            <div className="flex gap-3  justify-start items-center">
              <span className="label-text ">
                <div className="flex gap-1 my-6 justify-start items-center font-medium badge-md p-2 text-md">
                  <AiFillFire />
                  HOT Only?
                </div>

              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={searchParams.get('hot')}
                onChange={
                (e) => {
                  if (e.target.checked) {
                    searchParams.set('hot', true);
                  } else {
                    searchParams.delete('hot');
                  }
                  setSearchParams(searchParams);
                }
              }
              />

            </div>
          </motion.ul>

        </div>
      </div>
    </>
  );
};

export default Projects;
