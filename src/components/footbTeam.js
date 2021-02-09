import React, { useState, useEffect } from 'react';
import TableRecord from './Table';
import { fetchFootballPlayersData } from '../services/football';

export default function FootBallTeam() {

    const [ footballData, setFootballData ] = useState([]);

    useEffect(()=> {
        fetchFootballPlayersData()
        .then((response) => {
            console.log('football data', response);
            setFootballData(response.data);
        })
    }, [])

    return(
        <div>
            { 
               footballData.length &&
                <TableRecord dataSource = { footballData } />
            }
        </div>
    )
}