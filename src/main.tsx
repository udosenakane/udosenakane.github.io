import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom';
import './index.css';

import './dev/fontawesome/css/all.css'
import './dev/fontawesome/js/all.js'

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);