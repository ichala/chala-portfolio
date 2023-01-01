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
    ],
  },

];

export default routesConfig;
