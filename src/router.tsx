import Root from './routes/root/root';
import One from './routes/one/one';
import Two from './routes/two/two';
import Three from './routes/three/three';
import Error from './routes/error/error';
import { createBrowserRouter } from 'react-router-dom';

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: "/one",
    element: <One />,
    errorElement: <Error />
  },
  {
    path: "/two",
    element: <Two />,
    errorElement: <Error />
  },
  {
    path: "/three",
    element: <Three />,
    errorElement: <Error />
  },
]);
