import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router =createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement : <h1>404 not found</h1>
  },
  {
    path:"/flat",
    element: <h1>Nos appartements</h1>
  },
  {
    path:"/about",
    element: <h1>A propos</h1>
  },
    {
    path:"/404",
    element: <h1>404</h1>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

