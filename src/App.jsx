import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextAnalyse from './components/Compo';
import Header from './components/Header';
import Alert from './components/Alert/Alert';
import Navbar from './components/NavBar.jsx/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import About from './components/About/About';
import Join from './components/Join/Join';
import Contact from './components/contact/Contact';


export default function App() {

  
  //Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {path:"" , element: <TextAnalyse />},
        {path:"/about" , element: <About/>},
        {path:"/contact" , element: <Contact/>},
        {path:"/join" , element: <Join/>},
      ]
    }
  ]);

  function Layout() {
    return(
      <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
        <Alert/>
        <Navbar children={<Header/>}/>
        <main className='my-3'>
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <RouterProvider router={router}>
      
    <div >
      <Layout/>
    </div>

    </RouterProvider>
  );
}



