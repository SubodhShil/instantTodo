import React, { useState } from 'react';
import { basicSchema } from '../schemas';
// import NewWindow from 'react-new-window';

//^ sign up CSS
import Styles from './SignUp.module.css';

//* auth imports
import { useAuthStore } from '../stores/authStore';

const SignUp = ({ open, setLogin, setUserName }) => {
    const { signup, isLoading } = useAuthStore();
    
    if (!open) return null;

    //^ states for authentication
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // todo: generate random user name if no name input
    const [name, setName] = useState("");

    //* form sign up registration handling
    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const result = await signup(email, password, name);
            if (result.success) {
                setLogin(true);
                setUserName(result.user.name);
            } else {
                console.error('Signup failed:', result.error);
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
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