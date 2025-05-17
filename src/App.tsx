import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import "./App.css";

import TopNavbar from './components/TopNavbar';


function App() {

  useEffect(() => {
    toast.success('Toaster Working fine')
  }, [])

  return (
    <>
    <TopNavbar />
    <h1 className="text-3xl text-yellow-950 dark:text-yellow-400 font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
