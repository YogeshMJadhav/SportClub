import React, { useState, useEffect } from 'react';
import TableRecord from './Table';
import { fetchSwimmingPlayersData } from '../services/swimming';

export default function SwimmingTeam() {

  const [swimmingData, setSwimmingData ] = useState([]);

  useEffect(() => {
    fetchSwimmingPlayersData()
      .then((response) => {
        console.log('Swimming Data', response.data);
        setSwimmingData(response.data)
      })
  }, [])
    return(
      <div>
        {
          swimmingData.length && 
          <TableRecord dataSource = {swimmingData} />
        }
      </div>
    )
}