import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextAnalyse from './components/Compo';
import Header from './components/Header';
import Alert from './components/Alert/Alert';
import Navbar from './components/NavBar.jsx/Navbar';


export default function App() {

  const [text , setText] = useState('');      //initiating a state hook

  return (
    <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
    <Alert setText = {setText}/>
    <Navbar children={<Header/>}/>
    <main className='my-3'>
      <TextAnalyse text={text} setText = {setText}/>
    </main>
    </div>
  );
}


function Layout() {
  return(
    <>

    </>
  );
}
