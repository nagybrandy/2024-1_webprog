import React, { useState } from 'react'
import AgeDisplayer from './AgeDisplayer'
import './index.css';
const Hello = ({name, age, emoji}) => {
  const [ageCounter, setAgeCounter] = useState(age);

  return (
    <>
        <h1 className='text-3xl text-primary'>Hello {name}! Ő {ageCounter} éves.</h1>
        <AgeDisplayer age={ageCounter} emoji={emoji}/>
        <button className="btn btn-sm btn-secondary" onClick={()=> setAgeCounter(ageCounter-1)}>Fiatalító elíxir</button>
        <button className="btn btn-sm btn-secondary"onClick={()=> setAgeCounter(ageCounter+1)}>{name} szülinapja!</button>
    </>
  )
}

export default Hello
