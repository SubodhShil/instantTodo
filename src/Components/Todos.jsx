import React from 'react';
import Todo from './Todo';
import { RiEmotionSadLine } from 'react-icons/ri';


const Todos = ({ todos }) => {
    return (
        <section className='grid gap-6 justify-items-center mt-5 m-2 rounded-md p-1 pt-5 pb-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900'>
            {todos.length === 0 ? (
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='font-bold text-white text-2xl flex gap-2 items-center'> <RiEmotionSadLine className='text-4xl'></RiEmotionSadLine> OPPS, No todos found.</h1>
                </div>
            ) :
                todos.map(todo => <Todo key={todo.id} todo={todo.todo} />)
            }
        </section>
    );
};

export default Todos;