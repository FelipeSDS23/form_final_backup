import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { PlanContextProvider } from './context/PlanContext.jsx';

import { createHashRouter, RouterProvider } from 'react-router-dom';

// pages
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Thanks from './pages/Thanks';

const router = createHashRouter([
  {
    path: '/',
    element: <Step1 />
  },
  {
    path: '/step2',
    element: <Step2 />
  },
  {
    path: '/step3',
    element: <Step3 />
  },
  {
    path: '/step4',
    element: <Step4 />
  },
  {
    path: '/thanks',
    element: <Thanks />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlanContextProvider>
      <RouterProvider router={router}/> 
        {/* <App />
      </RouterProvider> */}
    </PlanContextProvider>
  </React.StrictMode>,
)
