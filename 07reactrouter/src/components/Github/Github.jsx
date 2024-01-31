import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/thakurbhanu')
        .then(res => res.json())
        .then(data =>{
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-700 text-white text-3xl p-5 '>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="git pic" width={300} />
    
    </div>
  )
}

export default Github