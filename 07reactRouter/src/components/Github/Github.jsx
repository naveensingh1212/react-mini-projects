import React, { useEffect } from 'react'
import { useState } from 'react'
function Github() {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/naveensingh1212')
        .then(Response=>Response.json())
        .then(data => {
            console.log(data);
            setData(data)           
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-900 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
