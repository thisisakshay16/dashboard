import React from 'react'
import img1 from "./Dashimg/StatBoard.png"
import "./dashboard.css"
import img2 from "./Dashimg/Briefcase.png"
import { Link } from 'react-router-dom'


function DashBoard() {
  return (
    <div className='dash'>
     <div className='logo'>
     <img src={img2} /><br/>
        <img src={img1} /></div>
        <br></br>

        <div className='menu'>
            <Link  className='btnn' to="/">dashboard</Link>
            <Link  className='btnn' to="/support">Support</Link>
            <Link  className='btnn' to="/plugin">Plugins</Link>
            <Link  className='btnn' to="/help">Help</Link>
        </div>
    </div>
  )
}

export default DashBoard