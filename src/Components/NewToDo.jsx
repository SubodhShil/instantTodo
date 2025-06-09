import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';

const NewToDo = (props) => {
    const [todo, setTodo] = useState({
        title: "",
        desc: ""
    })

    const { title, desc } = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.title.trim() === '' || todo.desc.trim() === '') {
            toast.error("Please fill out both fields.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }
        props.AddTodo(todo);
        setTodo({ title: "", desc: "" });
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-3 mt-5 m-auto rounded-md p-1 pt-5 w-1/2 ">
            <Input size="md" label="Your Task" type='text' id='title' name='title' value={title} onChange={handleChange} />
            <Input size="lg" label="Description" type='text' id='desc' name='desc' value={desc} onChange={handleChange} />

            <button className='mt-5 transition duration-300 ease-in-out h-[50px] w-[50px] rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 flex justify-center items-center m-auto hover:shadow-lg hover:shadow-[orangered] outline-transparent'>
                <BsPlusLg className='text-white' />
            </button>
        </form>
    );
};

export default NewToDo;