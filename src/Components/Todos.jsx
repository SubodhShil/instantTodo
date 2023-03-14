import React from 'react';
import Todo from './Todo';
import ML4 from '../ML4';
import ML5 from '../ML5';

const Todos = (props) => {
    const { todos } = props;
    return (
        //  <section className='grid gap-6 justify-items-center mt-5 m-2 rounded-md p-1 pt-5 pb-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900'>

        <section className='grid gap-6 justify-items-center mt-5 m-2 rounded-md p-1 pt-5 pb-5'>
            {todos.length === 0 ? (
                <div className='flex flex-row justify-center items-center'>
                    {/* <ML4 /> */}
                    <ML5 />
                </div>
            ) :
                todos.map(todo => <Todo key={todo.id} todo={todo.todo} onRemoveTodo={props.onRemoveTodo} />)
            }
        </section>
    );
};

export default Todos;