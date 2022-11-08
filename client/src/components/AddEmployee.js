import React from 'react'
import { Form, Field } from 'easy-react-form'
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AddEmployee() {

    const saveEmployee = async (newEmployee) => {
        const URL = "http://localhost:4000/employees";
        const saveEmployee = await axios.post(URL, newEmployee);
        console.log({ saveEmployee });
    }

    return (
        <div>
            <Form onSubmit={values => saveEmployee(values)}>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Enter Name" />
                <Field
                    name="salary"
                    component="input"
                    type="number"
                    placeholder="Salary" />
                <Field
                    name="profilephoto"
                    component="input"
                    type="text"
                    placeholder="Profile Photo Link" />

                <button style={{ padding: "5px 8px", borderRadius: "5px", background: "#33FFDA" }}
                >Submit</button>
            </Form>
            <Link to="/"><button style={{ padding: "5px 8px", borderRadius: "5px", background: "#33FFDA" }}
            >Go Back</button></Link>
        </div>
    )
}

export default AddEmployee