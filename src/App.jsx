import { useState } from 'react';
import './App.css';
import './index.css';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App;