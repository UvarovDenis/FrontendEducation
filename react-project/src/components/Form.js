import React, { useState } from 'react';

const Form = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim() !== "") {
            addTask(userInput);
        }
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;