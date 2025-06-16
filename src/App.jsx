import { useState } from 'react';
import './App.css';
import './index.css';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PomodoroPage from './Pages/PomodoroPage/PomodoroPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App;