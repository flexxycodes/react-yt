import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <FontAwesomeIcon icon={["fas", "bookmark"]}/>
        </div>
      </div>
    </div>
  )
}

export default App