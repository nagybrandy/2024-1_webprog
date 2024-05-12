import React from 'react'

const AgeDisplayer = ({age, emoji}) => {
  let string = ""
  for (let i = 0; i < age; i++) {
    string += emoji
  }
  return (
    <div>
      {string}
    </div>
  )
}

export default AgeDisplayer
