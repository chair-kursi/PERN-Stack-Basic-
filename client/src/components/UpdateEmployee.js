import React, { useEffect, useState } from 'react'
import { Form, Field } from 'easy-react-form'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom' 

function AddEmployee() { 
    
    const saveEmployee = async (newEmployee) => {
        const URL = "http://localhost:4000/employees/"+data._id;
        const saveEmployee = await axios.patch(URL, newEmployee);
        console.log({saveEmployee});
    }

    const [data, setData] = useState({});
    const params = useParams();
    const _id = params._id;
    const getData = async () => {
        const URL = "http://localhost:4000/employees/"+_id;
        const response = await axios.get(URL);
        setData(response.data[0]);
        console.log("Response: ", response.data);
    }

    useEffect(() => {
        getData();
    }, [])
    
    if (!Object.keys(data).length)
        return <h3>Please Wait</h3>

    return (
        <div>
            <Form onSubmit={values => saveEmployee(values)}>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    value={data.name}
                    placeholder="Enter Name" />
                <Field
                    name="salary"
                    component="input"
                    type="number"
                    value={data.salary}
                    placeholder="Salary" />
                <Field
                    name="profilephoto"
                    component="input"
                    type="text"
                    value={data.profilephoto}
                    placeholder="Profile Photo Link" />

                <button> Submit </button>
            </Form>
            <Link to = "/"><button style={{padding: "5px 8px", borderRadius:"5px", background:"#33FFDA"}}
            >Go Back</button></Link>
        </div>
    )
}

export default AddEmployee