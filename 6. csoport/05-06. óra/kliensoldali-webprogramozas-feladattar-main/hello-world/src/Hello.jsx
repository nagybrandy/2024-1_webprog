import React, { useState } from 'react'

const Hello = ({name, age : kor, hanyszor }) => {
  const [counter, useCounter] = useState(kor);

  name = !name ? "Anonim" : name;
  return (
    <>
    {Array.from({length: hanyszor}).map((_,i)=> 
        <h2 key={i} >Hello {name}! Te {counter} éves vagy.</h2>
    )}
    <button onClick={()=> useCounter(counter+1)}>{name} szülinapja!</button>
    </>
  )
}

export default Hello
