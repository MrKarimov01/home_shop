import React from 'react'
import Homes from './Api'
import Element from './Element'
const Body = () => {
  return (
    <div className='body'>
        {
            Homes.map(r=>{
                return <Element  home={r.rasm}  egasi={r.egasi} narx={r.narx} />
            })
        }
    </div>
  )
}

export default Body