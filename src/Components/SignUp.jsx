import React, { useState } from 'react';
import { basicSchema } from '../schemas';
// import NewWindow from 'react-new-window';

//^ sign up CSS
import Styles from './SignUp.module.css';

//* firebase imports
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';

const SignUp = ({ open, setLogin, setUserName }) => {

    const auth = getAuth(app);
    if (!open) return null;

    //^ states for authentication
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // todo: generate random user name if no name input
    const [name, setName] = useState("");

    //* form sign up registration handling
    const handleRegister = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setLogin(true);
                setUserName(name);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        // <NewWindow title='Instant ToDo Sign Up'>
        <div className={`p-3 rounded-xl mt-4 text-white border border-orange-200 ${Styles.boxShadow} bg-[#242424]`}>
            <h1 className='text-center font-extrabold text-2xl'>Create Account </h1>
            <h2 className='text-center font-bold text-white'>Get started now</h2>

            <form autoComplete='off' onSubmit={handleRegister} className='flex flex-col p-5 text-white'>
                {/* name field */}
                <label htmlFor="">Name</label>
                <input
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" className='border ml-2 rounded-md pl-2 text-black'
                    placeholder='Enter your name'
                    required
                />

                {/* email field */}
                <label htmlFor="" className='mt-2'>Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    type="email" className='border ml-2 rounded-md pl-2 text-black'
                    required
                />

                {/* password field */}
                <label htmlFor="" className='mt-2'>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password" placeholder='Enter password'
                    name='password'
                    type="password" className='border ml-2 rounded-md pl-2 text-black'
                    required
                />

                <button type='submit' className={`w-fit p-2 rounded-md m-auto mt-4 font-bold border border-orange-700 ${Styles.createAccountBtn}`}>Create Account</button>
            </form>
        </div >
        // </NewWindow >
    );
};

export default SignUp;