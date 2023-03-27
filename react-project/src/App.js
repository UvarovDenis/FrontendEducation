import React, { useState, useEffect } from 'react';
import axios from "axios";
//components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';

function App() {

  //#region Server
  const baseURL = "https://dummyjson.com/todos/";
  const userId = 5;

  const fetchList = () => {
    axios.get(baseURL)
      .then((response) => {
        setToDoList(response.data.todos);
      })
      .catch(error => {
        alert("Server error: " + error);
        setToDoList([])
      });
  }

  const completeTask = (id) => {
    const url = baseURL + id
    let status = todoList.find(task => { return task.id == id; }).completed
    axios.put(url, { completed: !status })
      .then((response) => {
        let updated = response.data
        alert("PUT: Item ID " + updated.id + " : Completed = " + updated.completed)
        fetchList()
      })
      .catch(error => {
        alert("Server error: " + error);
      });
  }

  const addNewTask = (name) => {
    const url = baseURL + "add"
    axios.post(url, { todo: name, completed: false, userId: userId })
      .then((response) => {
        let created = response.data
        alert("Added: Item ID " + created.id + " : " + created.todo)
        fetchList()
      })
      .catch(error => {
        alert("Server error: " + error);
      });
  }

  //#endregion

  const [todoList, setToDoList] = useState([]);

  useEffect(() => { fetchList() }, []);

  const handleToggle = (id) => {
    completeTask(id)
  }

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/task/" + id);
  }

  const addTask = (userInput) => {
    addNewTask(userInput)
  }

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
      <ul>
        {todoList.map(todo => {
          return (
            <Todo task={todo} handleToggle={handleToggle} handleEdit={handleEdit} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
