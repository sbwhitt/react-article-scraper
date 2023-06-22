import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux/es/exports';
import reportWebVitals from './reportWebVitals'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals(console.log);
