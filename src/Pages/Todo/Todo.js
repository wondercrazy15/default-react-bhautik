import { Box, Grid } from '@mui/material';
import './todo.css'
import React, { useState } from 'react'
import TodoAdd from './TodoAdd';
// import TodoList from './TodoList';

const Todo = () => {

    const [toDoList, setToDoList] = useState([
        {
            "id": 1,
            "task": "Give dog a bath",
            "complete": true
        }
    ]);

    const [editTodo, seteditTodo] = useState([])
 
    const addTask = values =>
        setToDoList([...toDoList, { id: +1, task: values.task, complete: false, }]);
    const toggleTask = index => {
        const newTasks = [...toDoList];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setToDoList(newTasks);
        console.log(newTasks)
    };


    const removeTask = index => {
        const newTasks = [...toDoList];
        newTasks.splice(index, 1);
        setToDoList(newTasks);
    };

    const editTask = index => {
        const newTasks = [...toDoList];
        newTasks.find((todo) => {
            seteditTodo(newTasks[index]);
        }); 
    };


    return (
        <Box sx={{ p: 5 }}>
            <h1>todo app </h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    {/* <TodoList toDoList={toDoList} /> */}
                    <div>
                        {toDoList.map((todo, index) => (
                            <div className="todo" key={index}>
                                <div onClick={() => toggleTask(index)} className={todo.isCompleted ? "strike" : ""}>
                                    {todo.task}
                                    {todo.id}
                                </div>
                                <button onClick={() => removeTask(index)}>delete</button>
                                <button onClick={() => editTask(index)}>edit</button>
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <TodoAdd addTask={addTask} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Todo;
