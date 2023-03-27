import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Editor = () => {
    const params = useParams()

    const baseURL = "https://dummyjson.com/todos/";

    const [todoItem, setItem] = useState();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    const fetchItem = () => {
        axios.get(baseURL + params.id)
            .then((response) => {
                setIsLoaded(true)
                setItem(response.data);
            })
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            });
    }

    const deleteItem = () => {
        axios.delete(baseURL + params.id)
            .then(() => {
                alert("Post deleted!");
                goBack();
            });
    }

    const updateItem = (todo, done) => {
        axios.put(baseURL + params.id, {
            todo: todo,
            completed: done,
        })
            .then(() => {
                alert("Post updated!");
                goBack();
            });
    }

    const navigate = useNavigate();
    const goBack = () => { navigate(-1) };

    useEffect(() => { fetchItem() })

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <input value={todoItem.todo} type="text" />
                <div>
                    <span onClick={() => goBack()}>Cancel</span>
                    <span onClick={() => updateItem()}>Update</span>
                    <span onClick={() => deleteItem()}>Delete</span>
                </div>
            </div>
        );
    }
};

export default Editor;