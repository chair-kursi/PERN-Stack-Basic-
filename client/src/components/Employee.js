import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom' 

export default function Employee() {
    
    const [data, setData] = useState([]);
    const params = useParams();
    const _id = params._id;
    const getData = async () => {
        const URL = "http://localhost:4000/employees/"+_id;
        const response = await axios.get(URL);
        setData(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (data.length ?
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>_id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Salary (in LPA)</TableCell>
                        <TableCell align="center">Profile Photo</TableCell>
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
                            <TableCell align='center'><Link to="/"><button>Go Back</button></Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer> : "Please Wait!!"
    );
}