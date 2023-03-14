import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Popover,
    PopoverHandler,
    PopoverContent
} from "@material-tailwind/react";

import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = (props) => {
    const { title, desc } = props.todo;

    const handleClick = (id) => {
        props.onRemoveTodo(id);
    }

    const toastifyShow = (id) => {
        toast.error(`Todo deleted`, {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    }
    return (
        <article className="w-80 md:w-3/4 xl:w-5/6 rounded-lg shadow-2xl shadow-blue-400 p-3 bg-[#242424] hover:bg-blue-gray-800 text-white font-bold flex flex-row justify-between items-center">
            <div className=" border-[#242424]">
                <h1 className="text-2xl mb-3">{title}</h1>
                <p>{desc}</p>
            </div>

            <div className="">

                <Button onClick={() => {
                    toastifyShow();
                    handleClick();
                }} variant="gradient" color="red">
                    <FaTrash className='text-white text-lg' />
                </Button>

                <ToastContainer />
            </div>
        </article>
    );
};

export default Todo;