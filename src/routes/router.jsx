import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../components/Navbar';
import ApartmentPage from '../pages/ApartmentPage';
import About from '../pages/About';
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

export const router =createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement : <ErrorPageNotFound />,
    children: [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/flat",
            element: <ApartmentPage />
        },
        {
            path:"/about",
            element: <About />
        },
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
//ReactDOM.render(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
