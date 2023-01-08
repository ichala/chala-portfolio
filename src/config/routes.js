import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Layout from './Layout/Layout';
import Skills from '../pages/Skills/Skills';
import Frameworks from '../pages/Skills/Frameworks/Frameworks';
import Experience from '../pages/Skills/Experience/Experience';
import Soft from '../pages/Skills/Soft/Soft';

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        element: <Skills />,
        children: [
          {
            path: '/skills',
            element: <Frameworks />,
          },
          {
            path: '/skills/experience',
            element: <Experience />,
          },
          {
            path: '/skills/soft',
            element: <Soft />,

          },
        ],
      },
      {
        path: '*',
        element: <Home />,
      },
    ],
  },

];

export default routesConfig;
