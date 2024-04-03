import React from 'react'
import Hello from './Hello'
import Card from './Card'
import './index.css'

const App = () => {
  const people = [
    {
        "name": "Gazsi",
        "age" : 18,
        "emoji": "👨‍🚒"
    },
    {
        "name": "Jakab",
        "age" : 18,
        "emoji": "🥔"
    },
    {
        "name": "Karesz",
        "age" : 3,
        "emoji": "🔥"
    },
    {
        "name": "Jakab",
        "age" : 18,
        "emoji": "🥔"
    },
    {
        "name": "Karesz",
        "age" : 3,
        "emoji": "🔥"
    },
    {
        "name": "Jakab",
        "age" : 18,
        "emoji": "🥔"
    },
    {
        "name": "Karesz",
        "age" : 3,
        "emoji": "🔥"
    }
  ]
  return (
    <div className='w-[80%] mx-auto'>
        <h1 className='text-3xl mt-10 mb-5'>Első oldalunk</h1>
        <div className='grid grid-cols-3 gap-10'>
            {people.map(e => <Card obj={e} />)}
        </div>
    </div>
  )
}

export default App
