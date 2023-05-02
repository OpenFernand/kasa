import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ApartmentPage from '../pages/ApartmentPage';
import About from '../pages/About';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../components/Navbar';
import { ErrorPageNotFound } from '../pages/ErrorPageNotFound';

const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
    </>
}

function router () {
    const router = createBrowserRouter([
        { path: "*", element: <HeaderFooterLayout />, errorElement: <ErrorPageNotFound /> },
        { path: "/", element: <HomePage />, errorElement: <ErrorPageNotFound /> },
        { path: "/flat", element: <ApartmentPage />, errorElement: <ErrorPageNotFound /> },
        { path: "/about", element: <About />, errorElement: <ErrorPageNotFound /> },
    
      ]);

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      )
}

export default router