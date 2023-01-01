import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
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
        path: '*',
        element: <Home />,
      },
    ],
  },

];

export default routesConfig;
