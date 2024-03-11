import React from 'react'
import Hello from './Hello'
import CardContainer from './CardContainer'

const App = () => {
    return (
        <div className='w-[80%] mx-auto'> {/* fragment */}
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
            <h1 className='text-primary text-4xl mb-10 mt-5'>Emberek</h1>
            <Hello name="Gazsi" age={31} emoji="👨‍🚒"/>
            <Hello name="Jakab" age={16} emoji="🥔"/>
            <Hello name="Karesz" age={3} emoji="🔥"/>
            <CardContainer />
        </div>
    )
}

export default App
