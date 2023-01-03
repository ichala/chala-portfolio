import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        {routes}
      </div>
    </AnimatePresence>

  );
}

export default App;
