//^ Library imports
import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { FcGoogle } from 'react-icons/fc';
import { HiCursorClick } from 'react-icons/hi';

//^ auth imports
import { useAuthStore } from '../stores/authStore';

//* Component imports
import SignUp from "./SignUp.jsx";


//~ Codebase begins
export default function Nav() {
    //* Auth state management
    const { user, isAuthenticated, login, logout, checkAuth } = useAuthStore();
    const [loginSuccess, setLoginSuccess] = useState(false);

    //* login name show in the nav
    const [userName, setUserName] = useState("");

    // Check auth on component mount
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Update local state when auth state changes
    useEffect(() => {
        setLoginSuccess(isAuthenticated);
        if (user) {
            setUserName(user.name);
        }
    }, [isAuthenticated, user]);

    const handleGoogleSignIn = async (event) => {
        event.preventDefault();

        // Fake Google login - just use a dummy email
        const dummyEmail = 'user@gmail.com';
        const dummyPassword = 'password';

        try {
            const result = await login(dummyEmail, dummyPassword);
            if (result.success) {
                console.log('Login successful:', result.user);
            } else {
                console.log('Login failed:', result.error);
            }
        } catch (error) {
            console.log('Login error:', error);
        }
    }

    //* SingUp component state management
    //^ setting up signup form show or hide state
    const [openSignUp, setOpenSignUp] = useState(true);

    //* navbar opening state management
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 text-white font-bold"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 text-white font-bold"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 text-white font-bold"
            >
                <a href="#" className="flex items-center">
                    Timer
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 text-white font-bold"
            >
                <a href="#" className="flex items-center">
                    Pomodoro
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mt-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
            <div className="container mx-auto flex items-center justify-between text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className="font-bold text-2xl">Instant Todo</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>

                <Menu>
                    <MenuHandler>
                        {(loginSuccess) ?
                            // <Button variant="gradient" size="sm" className="hidden lg:inline-block h-[50px] w-[50px] rounded-full">
                            //     <span><img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" /></span>
                            // </Button>
                            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                                <span className="font-bold text-[16px] font-['Space_Grotesk'] text-white text-transparent">{userName}</span>
                            </Button>
                            :
                            <div className="relative">
                                <Button variant="gradient" size="sm" className="hidden lg:inline-block relative">
                                    <span>Sign In</span>
                                </Button>
                                <span className="min-[450px]:invisible flex h-5 w-3 absolute top-[-10px] right-[-6px] mt-1 mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-400"></span>
                                </span>
                            </div>
                        }
                    </MenuHandler>

                    <MenuList className="flex flex-col gap-2 p-8 border border-blue-700">
                        <MenuItem onClick={handleGoogleSignIn} className="border font-bold flex justify-center items-center gap-4 border-blue-400"> <FcGoogle className="text-2xl"></FcGoogle>Google (Fake)</MenuItem>

                        <div className="flex justify-center">
                            <p className="font-bold text-blue-900">Or, <u>Create an account</u></p>
                        </div>

                        <MenuItem onClick={() => setOpenSignUp(!openSignUp)} className="border font-bold flex justify-center items-center gap-4 border-blue-400"> <HiCursorClick className="text-lg"></HiCursorClick> Sign Up</MenuItem>

                        //^ Sign up form
                        <SignUp open={openSignUp} setLogin={setLoginSuccess} setUserName={setUserName} />

                        {/* <MenuItem className=" border font-bold flex justify-center items-center gap-4">Menu Item 3</MenuItem> */}
                    </MenuList>
                </Menu>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Menu>
                        <MenuHandler>
                            <Button variant="gradient" size="sm" fullWidth className="mb-2">
                                <span>Sign In</span>
                            </Button>
                        </MenuHandler>

                        <MenuList>
                            <MenuItem className="bg-yellow-200"> <FcGoogle></FcGoogle> Google</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                            <MenuItem>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </MobileNav>
        </Navbar>
    );
}