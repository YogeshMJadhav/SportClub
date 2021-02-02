import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function SwimmingTeam() {

  const [swimmingData, setSwimmingData ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/Swimming')
      .then((response) => {
        console.log('Swimming Data', response.data);
        setSwimmingData(response.data)
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
              {swimmingData.map((item, index) => {
                  return(
                      <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.Full_Name}</td>
                          <td>{item.Born}</td>
                          <td>{item.Event}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
  </div>

    )
}