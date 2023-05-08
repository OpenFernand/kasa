import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ApartmentPage from '../pages/ApartmentPage';
import About from '../pages/About';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../components/Navbar';
import { ErrorPageNotFound } from '../pages/ErrorPageNotFound'; // Import de la fonction { ErrorPageNotFound }

/* Composant qui définit une mise en page de base pour l'application 
   incluant une barre de navigation en haut, une section centrale 
   pour afficher le contenu des différentes pages, et un Footer en bas. */

const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
    </>
}

/* Fonction qui configure les routages en définissant des routes */
function router () {
    const router = createBrowserRouter([
      { 
        element: <HeaderFooterLayout />,
        errorElement : <ErrorPageNotFound />,
        children: [
        { path: "/", element: <HomePage />, errorElement: <ErrorPageNotFound /> },
        { path: "/flat", element: <ApartmentPage />, errorElement: <ErrorPageNotFound /> },
        { path: "/about", element: <About />, errorElement: <ErrorPageNotFound /> },
        ]
      }
    ]);
    //ReactDOM.render(document.getElementById('root')).render(
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      )
}

export default router