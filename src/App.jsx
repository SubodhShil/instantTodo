import { useState } from 'react';
import './App.css';
import './index.css';
import Home from './Components/Home';

//^ firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import app from './Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
function App() {
  const [count, setCount] = useState(0)
  const googleProvider = new GoogleAuthProvider();

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App;