import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextAnalyse from './components/Compo';
import Header from './components/Header';


export default function App() {

  return (
    <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
    <Header/>
    <TextAnalyse/>
    </div>
  );
}



