import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { BsPlusLg } from 'react-icons/bs';

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
        props.AddTodo(todo);
        setTodo({ title: "", desc: "" });
    }


    return (
        <form onSubmit={handleSubmit} className="grid gap-3 mt-5 m-auto rounded-md p-1 pt-5 w-1/2 ">
            <Input size="md" label="Your Task" type='text' id='title' name='title' value={title} onChange={handleChange} />
            <Input size="lg" label="Description" type='text' id='desc' name='desc' value={desc} onChange={handleChange} />

            <button className='transition duration-300 ease-in-out h-[50px] w-[50px] rounded-full bg-light-green-700 flex justify-center items-center m-auto hover:shadow-lg hover:shadow-green-500 outline-transparent'>
                <BsPlusLg className='text-white' />
            </button>
        </form>
    );
};

export default NewToDo;