import React from 'react'
import Hello from './Hello'
const Card = ({obj}) => {
  return (
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{obj.name}</h2>
    <Hello name={obj.name} age={obj.age} emoji={obj.emoji} />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  )
}

export default Card
