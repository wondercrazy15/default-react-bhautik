import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    task: Yup
        .string('Enter your task')
        .required('task is required'),

    // task: Yup.string().email('Invalid email').required('Required')

});

const TodoAdd = ({ addTask, editTodo }) => { 

    const formik = useFormik({
        initialValues: {
            task: editTodo.task,
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            setTimeout(() => {
                values && addTask(values);
                actions.setSubmitting(false);
                actions.resetForm({
                    values: {
                        task: '',
                    },
                }, 1000);
            });
        }

    });

    return (
        <Box sx={{ my: 5 }}>
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
                <Button color="primary" variant="contained" fullWidth type="submit" sx={{ my: 5 }}>
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default TodoAdd
