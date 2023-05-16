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

/* Composant fonctionnel définissant une mise en page commune pour les différentes pages, contenant une barre
   de navigation en haut, un "Main" pour afficher le contenu des différentes pages, et un Footer en bas. */
const HeaderFooterLayout = () => {
  return (
  <>
    <div style={{ maxWidth: 1440, margin: '0 auto' }}>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  </>
  )
}

/* Fonction qui creer les trois routes ainsi que l'element d'erreur qui sera affiché en cas d'erreur. 
   "props.children" importé depuis "Main".jsx */
function router() {
  const router = createBrowserRouter([
    {
      element: <HeaderFooterLayout />,
      errorElement: <ErrorPageNotFound />,
      children: [
        { path: "/", element: <HomePage />, errorElement: <ErrorPageNotFound /> },
        { path: "/flat/:id", element: <ApartmentPage />, errorElement: <ErrorPageNotFound /> },
        { path: "/about", element: <About />, errorElement: <ErrorPageNotFound /> },

      ]
    }
  ]);
  /* Methode qui créé la racine du rendu React dans le DOM et rend l'application. "RouterProvider"  encapsule
     l'application et gère les changements URL et la navigation entre les pages  */
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default router