import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function TennisTeam() {

    const [ tennisData, setTennisData ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/Tennis')
            .then((resoponse) => {
                console.log('Data', resoponse.data);
                setTennisData(resoponse.data)
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
                    <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {tennisData.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.Full_Name}</td>
                                <td>{item.Born}</td>
                                <td>{item.Plays}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}