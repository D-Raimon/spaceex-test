import React, {useState, useEffect} from 'react'
import axios from 'axios'

function LaunchPageContainer ({match}) {
  const [launch, setLaunch] = useState ([])
  useEffect(async () => {
    async function fetchLaunch() {
      const result = await axios(`https://api.spacexdata.com/v3/launches/${match.params.id}`)
      console.log(result)
      setLaunch(result.data)
    }
    fetchLaunch()
  }, [])

  

  return (
    <div>{launch && launch.mission_name}</div>
  )
}

export default LaunchPageContainer