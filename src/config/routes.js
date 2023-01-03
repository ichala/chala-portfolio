import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Layout from './Layout/Layout';

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
        path: '*',
        element: <Home />,
      },
    ],
  },

];

export default routesConfig;
