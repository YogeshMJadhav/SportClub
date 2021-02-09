import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ActionBar from './ActionBar';

export default function TableRecord(props) {
    return(
        <Table striped bordered hover>
          <thead>
              <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Born</th>
              <th>Event / Playing Role</th>
              <th>Operations</th>
              </tr>
          </thead>
          <tbody>
              {console.log('props.datasource', props.datasource)}
              {props.dataSource.map((item, index) => {
                  return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.Full_Name}</td>
                        <td>{item.Born}</td>
                        { item.Playing_Role ? <td>{item.Playing_Role}</td>:<td>{item.Event}</td>}
                        <ActionBar  />
                    </tr>
                  )
              })}
          </tbody>
      </Table>
    )
}