import React from 'react'
import Hello from './Hello'
import CardContainer from './CardContainer'

const App = () => {
    return (
        <div className='w-[80%] mx-auto'> {/* fragment */}
            <h1 className='text-primary text-4xl mb-10 mt-5'>Emberek</h1>
            <Hello name="Gazsi" age={31} emoji="👨‍🚒"/>
            <Hello name="Jakab" age={16} emoji="🥔"/>
            <Hello name="Karesz" age={3} emoji="🔥"/>
            <CardContainer />
        </div>
    )
}

export default App

