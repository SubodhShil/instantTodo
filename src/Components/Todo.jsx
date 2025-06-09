import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { toast } from "react-toastify";

const Todo = (props) => {
    const { title, desc } = props.todo;
    const [open, setOpen] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editedTodo, setEditedTodo] = useState({ title, desc });

    const handleOpen = () => setOpen(!open);
    const handleEditModal = () => setEditModal(!editModal);

    const handleDelete = () => {
        props.onRemoveTodo(props.id);
        toast.error("Todo deleted", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        handleOpen();
    };

    const handleUpdate = () => {
        props.onUpdateTodo(props.id, editedTodo);
        handleEditModal();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedTodo((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <article className="w-80 md:w-3/4 xl:w-5/6 rounded-lg shadow-2xl shadow-blue-400 p-3 bg-[#242424] hover:bg-blue-gray-800 text-white font-bold flex flex-row justify-between items-center">
            <div className="border-[#242424]">
                <h1 className="text-2xl mb-3">{title}</h1>
                <p>{desc}</p>
            </div>

            <div className="flex gap-2">
                <Button onClick={handleEditModal} variant="gradient" color="yellow">
                    <FaPen className="text-white text-lg" />
                </Button>
                <Button onClick={handleOpen} variant="gradient" color="red">
                    <FaTrash className="text-white text-lg" />
                </Button>
            </div>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Confirm Deletion</DialogHeader>
                <DialogBody>Are you sure you want to delete this task?</DialogBody>
                <DialogFooter>
                    <Button variant="text" color="gray" onClick={handleOpen}>
                        Cancel
                    </Button>
                    <Button variant="gradient" color="red" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogFooter>
            </Dialog>

            <Dialog open={editModal} handler={handleEditModal}>
                <DialogHeader>Edit Task</DialogHeader>
                <DialogBody>
                    <div className="flex flex-col gap-4">
                        <Input
                            label="Title"
                            name="title"
                            value={editedTodo.title}
                            onChange={handleChange}
                        />
                        <Input
                            label="Description"
                            name="desc"
                            value={editedTodo.desc}
                            onChange={handleChange}
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="gray" onClick={handleEditModal}>
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </DialogFooter>
            </Dialog>
        </article>
    );
};

export default Todo;