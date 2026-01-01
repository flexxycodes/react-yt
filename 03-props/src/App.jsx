import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnYPXIDmRTKpj1drsmIRD_0NJJLVIVnMJNA&usqp=CAU"></img>
          <button>Save</button>
        </div>
        <div className="center">
          <h3>Amazon</h3> <span>5 days ago</span>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
              <h3>120$/hr</h3>
              <p>San-Fransisco</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App