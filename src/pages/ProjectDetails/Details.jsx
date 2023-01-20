import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import IconGenerator from '../../tools/IconGenerator';
import { db } from '../../config/firebase';

const Details = () => {
  const [Project, setProject] = useState(null);
  const [LoadingData, setLoadingData] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getProject = async () => {
      const res = await getDoc(doc(db, 'Chala.dev', id));
      if (res.exists()) {
        setProject(res.data().project);
        setLoadingData(false);
      } else {
        navigate('/projects', { replace: true });
      }
    };
    getProject();
  }, [id]);

  if (LoadingData) {
    return (
      <div className="flex justify-center  items-center h-screen">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary/60" />
        </div>
      </div>
    );
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
        {Project?.details?.title}
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
      <div className="flex  md:flex-row justify-start gap-2  w-full md:items-start flex-col h-full">
        <motion.div
          initial={{ scale: 0, x: 100 }}
          animate={{ x: 0, scale: 1 }}
          exit={{
            x: 300,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.5 },
          }}
          className="flex flex-wrap gap-2 max-w-sm  justify-center items-center"
        >
          <figure
            className=" group-hover:bg-primary  cursor-pointer bg-contain bg-center  h-[200px] w-full"
            style={{
              backgroundImage: `url(${Project.logoImage})`,
              backgroundRepeat: 'no-repeat',
            }}
          />

          {Project?.details?.frameworks?.map((icon) => (
            <div
              key={`${icon.value}`}
              className="tooltip  tooltip-primary"
              data-tip={icon.value}
            >
              {IconGenerator(icon.value, 40)}
            </div>
          ))}
          <div className="flex flex-col gap-2 w-full justify-center items-center">
            {!Project.details.private && (
              <a
                href={Project.details.github}
                target="_blank"
                className="btn btn-primary btn-md gap-2"
                rel="noreferrer"
              >
                <SiGithub />
                View Code
              </a>
            )}
            <a
              href={Project.details.live}
              target="_blank"
              className="btn btn-primary btn-md gap-2 "
              rel="noreferrer"
            >
              <MdOutlineOpenInNew />
              View Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, x: 100 }}
          animate={{ x: 0, scale: 1 }}
          exit={{
            x: 300,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.5 },
          }}
          className="lg:p-4 h-full bg-base-100 rounded-lg md:w-2/3 ww-full flex flex-col gap-10"
        >
          <div>
            <p className="text-xl font-bold">Description:</p>
            <p className="text-lg font-light">
              {Project?.details?.description}
            </p>
          </div>

          <figure
            className=" group-hover:bg-primary rounded-lg  cursor-pointer bg-cover bg-center  h-[200px] w-full"
            style={{
              backgroundImage: `url(${Project.mainImage})`,
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div>
            <p className="text-xl font-bold mt-4">Gallery:</p>

            <Swiper
              navigation
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
              }}
              className="mySwiper w-full my-2"
            >
              {Project?.gallery?.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image} alt={`${image} Preview`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Details;
