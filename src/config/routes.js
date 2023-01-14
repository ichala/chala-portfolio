import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Layout from './Layout/Layout';
import Skills from '../pages/Skills/Skills';
import Frameworks from '../pages/Skills/Frameworks/Frameworks';
import Experience from '../pages/Skills/Experience/Experience';
import Soft from '../pages/Skills/Soft/Soft';
import Projects from '../pages/Projects/Projects';
import Dashboard from '../pages/Admin/Dashboard';
import Login from '../pages/Admin/Login';
import Protected from '../tools/protected_routes';
import Details from '../pages/ProjectDetails/Details';

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        element: <Protected />,
        children: [
          {
            path: '/admin',
            element: <Dashboard />,
          }],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <Projects />,

      },
      {
        path: '/project/details/:id',
        element: <Details />,
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
