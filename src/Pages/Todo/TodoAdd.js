import { Button, TextField } from '@mui/material';
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    task: yup
        .string('Enter your task')
        .required('task is required'),

});

const TodoAdd = ({ addTask, editTodo }) => {

    console.log(editTodo)
    const formik = useFormik({
        initialValues: {
            task: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            values && addTask(values);
            actions.resetForm({
                values: {
                    task: '',
                },
            }); 
        }

    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="task"
                    name="task"
                    label="task"
                    value={formik.values.task}
                    onChange={formik.handleChange}
                    error={formik.touched.task && Boolean(formik.errors.task)}
                    helperText={formik.touched.task && formik.errors.task}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default TodoAdd
