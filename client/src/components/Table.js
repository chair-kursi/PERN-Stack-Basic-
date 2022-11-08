import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function BasicTable() {
    
    const [data, setData] = useState([]);
    const getData = async () => {
        const URL = "http://localhost:4000/employees";
        const response = await axios.get(URL);
        setData(response.data);
        console.log(response.data);
    } 

    const handleDelete = async (id) => {
        const URL = "http://localhost:4000/employees/"+id;
        const response = await axios.delete(URL);
        console.log({response});
        window.location.reload(false);
    }

    useEffect(() => {
        getData();
    }, [])
    if (!data.length)
        return <h3>Please Wait</h3>
    return (
        <div style={{width: "1300px"}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>_id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Salary (in LPA)</TableCell>
                            <TableCell align="center">Profile Photo</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row._id}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align='center'>{row.salary}</TableCell>
                                <TableCell align="center"><img src={row.profilephoto} /></TableCell>
                                <TableCell align='center'>
                                    <Link to={`/employee/${row._id}`}><button>View</button></Link><br /><br />
                                    <Link to={`/updateemployee/${row._id}`} ><button>Edit</button></Link><br /><br />
                                    <button onClick={()=> handleDelete(row._id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to = "/addEmployee"><button style={{padding: "5px 8px", borderRadius:"5px", background:"#33FFDA"}}
            >Add Employee</button></Link>
        </div>
    );
}