import React, { useState } from 'react'
import './index.css';

const Hello = ({ name, age: kor, emoji }) => {
    const [ageCount, setAgeCount] = useState(kor)
    /*     let string = ""
    for (let i = 0; i < kor; i++) {
        string += '🎂'
    } */
    return (
        <>
            <h1 className='text-3xl text-primary'>Hello {name}! Te {ageCount} éves vagy.</h1>
            {Array.from({length: ageCount}).map((_,i)=> <span key={i} >{emoji}</span>)}
            <br />
            <button className='btn btn-secondary btn-sm mx-2 my-2' onClick={() => setAgeCount(ageCount-1)}>Fiatalító szérum</button>
            <button className='btn btn-secondary btn-sm' onClick={() => setAgeCount(ageCount+1)}>{name} szülinapja!</button>
        </>
    )
}

export default Hello
