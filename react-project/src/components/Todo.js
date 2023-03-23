import React from 'react';
import "./Todo.css"

const ToDo = ({ task, handleToggle, handleEdit}) => {

    const handleRemoveClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const handleEditClick = (e) => {
        e.preventDefault()
        handleEdit(e.currentTarget.id)
    }

    return (
        <li className="todo-list-item" >
            <div id={task.id} className={task.completed ? "strike todo" : "todo"}>
                <label className="todo-label" htmlFor={task.id}>
                    {task.todo}
                </label>
                <span className="edit" id= {task.id} onClick={handleEditClick}>&#9998;</span>
                <span className="close" id= {task.id} onClick={handleRemoveClick}>{task.completed? '\u21BB' :'\xd7'}</span>
            </div>
        </li>
    );
};

export default ToDo;