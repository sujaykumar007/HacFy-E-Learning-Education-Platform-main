import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Hero,
  Nav,
  FAQs,
  Footer,
  Number,
  Team,
  Project,
  Wedo,
  Services,
  ClientSlider,
  Path,
  LoginPage,
  RegistrationPage,
  PageNotFound,
  ResetPassword,
  InteractiveGradient,
  ContactMe
} from "./componets";



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
      <Nav />
          <Hero />
          <About />
          <Project />
          <Services />
          
          <FAQs />
          <Number />
          <ClientSlider/>
          <ContactMe/>
      <Footer />

        </>
      ),
      errorElement:<PageNotFound />,
    },
    {
      path:'/about',
      element:<><Nav/><About/><Footer/></>
    },
    {
      path:'/Contact',
      element:<><Nav/><ContactMe/><Footer/></>
    },
    {
      path:'/services',
      element:<><Nav/><Services/><Footer/></>
    },
    {
      path:'/project',
      element:<><Nav/><Project/><Footer/></>
    },
    
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path:"/signup",
      element:<RegistrationPage/>
    },
    {
      path:"/Rpass",
      element:<ResetPassword/>
    }
    
  ]);

  




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="relative z-0 bg-gradient-to-br from-gray-950 via-gray-950 to-black overflow-hidden text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
