import React from 'react'
import Hello from './Hello'
import Header from './Header'

const App = () => {
  return (
    <>
        <Header />
        <Hello name="Anya" age={49} hanyszor={1} />
        <Hello name="Gazsi" age={12} hanyszor={2}/>
        <Hello name="Jakab" age={17} hanyszor={1}/>
        <Hello name="Karesz" age={3} hanyszor={1}/>
        <Hello />
    </>
  )
}

export default App
