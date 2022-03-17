import { Box, Container, Grid, IconButton, List, ListItem, Typography } from '@mui/material';
import './todo.css'
import React, { useState, useEffect } from 'react'
import { TodoAddRedux } from '../../store/actions/todo';
import TodoAdd from './TodoAdd';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import nextId from "react-id-generator";
import { useDispatch } from 'react-redux';



const Todo = () => {
    const htmlId = nextId();
    const dispatch = useDispatch();

    const [toDoList, setToDoList] = useState([]);

    const [editTodo, setEditTodo] = useState([])

    const addTask = (values) => {
        setToDoList([...toDoList, { id: htmlId, task: values.task, complete: false, }]);
    }

    useEffect(() => {
        debugger
        if (toDoList.length > 0) {
            localStorage.setItem("todo", JSON.stringify(toDoList));
            dispatch(TodoAddRedux(toDoList));
        }
    }, [toDoList])

    useEffect(() => {
        let getLocalStorage = localStorage.getItem("todo");
        if (getLocalStorage === null) {

        } else {
            setToDoList(JSON.parse(getLocalStorage));
        }
    }, [])


    const toggleTask = index => {
        const newTasks = [...toDoList];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setToDoList(newTasks);
    };


    const removeTask = (index) => {
        const newTasks = [...toDoList];
        newTasks.splice(index, 1);
        setToDoList(newTasks);
        localStorage.setItem("todo", JSON.stringify(newTasks));
        // dispatch(TodoRemoveRedux(index))
    };

    const editTask = (todo) => {
        const newTasks = [...toDoList];
        const seteditTodo = newTasks.find(item => item.id === todo.id);
        setEditTodo(seteditTodo);
    };

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };


    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <Box sx={{ p: 5 }}>
                    <Typography variant="h2" gutterBottom component="div">
                        todo app
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TodoAdd addTask={addTask} editTodo={editTodo} />
                        </Grid>
                        <Grid item xs={6}>
                            <List sx={{ width: '100%', maxWidth: 360, margin: '0 auto', bgcolor: 'primary.light', padding: 0 }}>
                                {toDoList.map((todo, index) => (
                                    <ListItem
                                        key={index}
                                        secondaryAction={
                                            <>
                                                <IconButton edge="end" aria-label="comments" onClick={() => editTask(todo)} sx={{ mx: 1 }}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton edge="end" aria-label="comments" onClick={() => removeTask(index)} sx={{ mx: 1 }} >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </>
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': todo.task }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText id={todo.id} primary={`${todo.task}, ID ${todo.id}`} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Todo;
