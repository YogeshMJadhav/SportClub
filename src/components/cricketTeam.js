import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from "axios";

function Cricket(){

    const [cricketData, setCricketData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:4000/Cricket')
        .then((response) => {
            console.log('cricket data', response.data);
            setCricketData(response.data)
        })
    }, [])

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Born</th>
                    <th>Playing Role</th>
                    <th>Bating Style</th>
                    </tr>
                </thead>
                <tbody>
                    {cricketData.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.Full_Name}</td>
                                <td>{item.Born}</td>
                                <td>{item.Playing_Role}</td>
                                <td>{item.Playing_Style}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default Cricket;