import React, { useState } from 'react';
import Nav from './Nav';
import Todos from './Todos';
import NewToDo from './NewToDo';
import { v4 as uuidv4 } from "uuid";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }];
        })
    }

    const handleRemoveTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleUpdateTodo = (id, updatedTodo) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: updatedTodo } : todo
            )
        );
    };

    return (
        <div>
            <Nav />
            <NewToDo AddTodo={handleAddTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} onUpdateTodo={handleUpdateTodo} />
        </div>
    );
};

export default Home;