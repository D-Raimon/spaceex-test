import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function IndexPageContainer() {
  const [launches, setLaunches] = useState([])
  useEffect(async () => {
    const result = await axios('https://api.spacexdata.com/v3/launches')
    setLaunches(result.data)
  }, []);

  return (
    <div>
      <div>
      {launches.map(launch => 
        <li>
          <Link to={`/launches/${launch.flight_number}`}>{launch.mission_name}</Link>
        </li>)}
      </div>
    </div>
  )
}

export default IndexPageContainer
