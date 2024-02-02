import React from 'react'
import img3 from "./Dashimg/Rectangle 10.png"
import "./nav.css"

function Nav() {
  return (
    <div className="nav">
      <div className="d-flex justify-content-between nav">
        <div className="p-2 col-6">
          <h4>GOOD MORNING! 🌞</h4>
        </div>
        <div className="p-2 col-6">
          <div className="card d-flex align-items-center justify-content-between">
            <div className="row">
              <div className="col-8">
                <div className="name">John Doe</div>
                <div className="email">john.doe@gmail.com</div>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <img src={img3} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Nav