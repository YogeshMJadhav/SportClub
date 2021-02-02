import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function FootBallTeam() {

    const [ footballData, setFootballData ] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:4000/Football')
        .then((response) => {
            console.log('football data', response);
            setFootballData(response.data);
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
                </tr>
            </thead>
            <tbody>
                {footballData.map((item, index)=> {
                    return(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.Full_Name}</td>
                            <td>{item.Born}</td>
                            <td>{item.Playing_Role}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
    )
}