import React from 'react';
import { motion } from 'framer-motion';
import { SiAngellist, SiUpwork } from 'react-icons/si';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdFolderSpecial, MdWork } from 'react-icons/md';
import { IoIosGitNetwork } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

// import required modules
// import { Pagination } from 'swiper';

const QuickLinks = [
  {
    name: 'Projects',
    icon: <MdFolderSpecial size={30} className="mr-2" />,
    link: '/projects',
    desc: 'I have been working on many projects using diffrent tools and languages like React, Rails,Express, postgres, Next, Tailwind, Bootstrap, Material UI, etc.',
  },
  {
    name: 'Experience',
    icon: <IoIosGitNetwork size={30} className="mr-2" />,
    link: '/skills/experience',
    desc: "Currently, I'm working as Code Reviewer at Microverse and i have different experiences in different companies like Arabia talent, and many more",
  },
  {
    name: 'About Me',
    icon: <CgProfile size={30} className="mr-2" />,
    link: '/about',
    desc: 'As a full stack web developer, I bring a diverse set of skills and experience to the table, including proficiency in languages such as JavaScript, Ruby, etc.',
  },

];
const Testimonials = [
  {
    name: 'Manel Hammouche',
    position: 'Full Stack Developer',
    desc: '"Leader" is the word that comes to mind when I think about Ali. I’ve had the pleasure of knowing Ali for 4 months, during which we have collaborated on several projects. Above all, I was impressed with his ability to command a room and get people on board with ideas. And, of course, his communication skills and his passion for making good quality products. Ali would be a true asset for any software development position and comes with my heartfelt recommendation.',
    link: 'https://www.linkedin.com/in/manel-hammouche-5b1b3a1b1/',

  },
  {
    name: 'Victor ADERIBIGBE',
    position: 'Software Developer',
    desc: 'Ali is one of the most open-minded developers, that I have ever worked with. He exhibited a high level of professionalism and a good impression as a developer. He contributed with good point delivery during each of our standup encounters and I would definitely vouch for him as a good team player. Not to forget his impeccable algorithm and problem-solving skills. He believes what is worth solving should be done better and faster.',
    link: 'https://www.linkedin.com/in/victor-aderibigbe-9b8b3a1b1/',
  },
  {
    name: 'Brian Nyachae',
    position: 'Software Developer',
    desc: 'I have worked with many professionals throughout my journey, but Ali was a unique one to work with. I started my work journey with him, and he helped me understand the basics of debugging in my second module at microvese. His work ethic is pristine and easily adjustable to a given situation. His ability to go out of his way to help others has made him stand out. Thanks a lot, man! You made the transition smooth and more comfortable.',
    link: 'https://www.linkedin.com/in/brian-nyachae-9b8b3a1b1/',
  },

];

console.log(Testimonials);
const Home = () => (
  <div>
    <div className="flex flex-col w-full justify-center items-center lg:justify-between md:flex-row text-base-content">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <h1 className="text-5xl lg:text-7xl tracking-tighter flex flex-col items-start justify-start  font-extrabold uppercase">
          Ali
          <span>Jendoubi</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <h2 className="py-3 text-2xl lg:text-5xl font-light opacity-70">
            Full-Stack Web Devoloper
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.7 } }}
        className="max-w-xs self-center flex justify-center flex-col gap-1"
      >
        <p className="text-center text-lg font-light">
          Transforming data into the graphical interface & layouts schema for
          all types of applications
        </p>
        <a
          href="/assets/AliJendoubiResume.pdf"
          target="_blank"
          rel="noreferrer"
          download
          type="submit"
          className="btn btn-primary btn-md uppercase rounded-lg"
        >
          Get Resume
        </a>
        <div
          className="flex items-center justify-center gap-2 p-2 border-[1px] border-primary rounded-md"
        >
          <a
            href="https://github.com/ichala"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/alijendoubi/"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/_ichala"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <BsTwitter size={20} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~013ad41e1b64462fb6/"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <SiUpwork size={20} />
          </a>
          <a
            href="https://angel.co/u/ichala"
            target="_blank"
            className="bg-primary text-primary-content rounded-md p-2"
            rel="noreferrer"
          >
            <SiAngellist size={20} />
          </a>
        </div>
      </motion.div>
    </div>
    <div className="flex flex-col justify-start items-start w-full md:flex-row">
      {/* <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.7 } }}
        className="flex flex-col  p-4  rounded-lg gap-2 justify-center items-center w-full"
      >
        <h2 className="text-2xl uppercase flex justify-center items-center gap-2">
          <MdReviews />
          Reviews
        </h2>

        <Swiper
          modules={[Pagination]}
          className="max-w-lg"
          spaceBetween={10}
        >
          {
          Testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="flex  flex-col w-full p-3 h-full
               rounded-lg bg-base-300 items-center justify-center">
                <p className="text-md italic font-light ">
                  {
                    testimonial.desc
                  }
                </p>
                <div className="flex flex-col ">
                  <h3 className="text-xl font-bold">
                    {
                    testimonial.name
                  }
                  </h3>
                  <p className="text-sm text-primary  font-light">
                    {
                    testimonial.position
                  }
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))
        }

        </Swiper>
      </motion.div> */}
      <div className="flex w-full gap-3 p-4 rounded-lg flex-wrap justify-center items-center">
        {QuickLinks.map((link) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.7 } }}
            key={link.name}
          >
            <Link
              to={
              link.link
            }
              className="flex flex-col hover:bg-primary hover:text-primary-content cursor-pointer group glass p-4 max-w-xs rounded-md justify-start"
            >
              <div className="flex">
                {
                link.icon
              }
                <h3 className="text-2xl tracking-tighter flex flex-col items-start justify-start  font-extrabold uppercase">
                  {
                  link.name
                }
                </h3>
              </div>
              <p className="text-sm font-light">
                {
                link.desc
              }
              </p>
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ x: 100, opacity: 0, transition: { duration: 0.7 } }}
        >
          <Link
            to="/contact"
            className="flex flex-col group bg-primary text-primary-content glass hover:bg-primary hover:text-primary-content p-4 border-primary border-2 max-w-xs rounded-md justify-start"
          >
            <div className="flex">
              <MdWork size={30} className="mr-2" />
              <h3 className="text-2xl tracking-tighter flex flex-col items-start justify-start  font-extrabold uppercase">
                HIRE ME ?
              </h3>
            </div>
            <p className="text-sm font-medium">
              I am confident that my skills and experience make me
              a strong candidate for a web developer
              position and I would be excited to bring my expertise to your team.
            </p>
          </Link>
        </motion.div>

      </div>

    </div>
  </div>
);

export default Home;
