import React from 'react'

const Terminal = ({data}) => {
  return (
    <div><div className='terminal'>
    <span>{data.title}</span>
    <p>{data.amount}</p>
    <div>{data.icon && <img src={data.icon} alt=''/>}</div>
  </div>

    </div>
  )
}

export default Terminal