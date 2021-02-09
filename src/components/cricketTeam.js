import React, { useState, useEffect } from 'react';
import TableRecord from './Table';
import { fetchCricketPlayersData } from '../services/cricket';

export default function Cricket(){

    const [cricketData, setCricketData] = useState([])

    useEffect(() => {
        fetchCricketPlayersData()
        .then((response) => {
            console.log('cricket data', response.data);
            setCricketData(response.data)
        })
    }, [])

    return cricketData.length && <TableRecord dataSource = { cricketData } />
}