import React from 'react'
import img1 from "./Dashimg/StatBoard.png"
import "./dashboard.css"
import img2 from "./Dashimg/Briefcase.png"
import { Link } from 'react-router-dom'
import dashu from "./Dashimg/Circled Menu.png"
import set from "./Dashimg/Support.png"
import puzzle from "./Dashimg/Puzzle.png"
import help from "./Dashimg/Help.png"


function DashBoard() {
  return (
    <div className='dash'>
     <div className='logo'>
     <img src={img2} /><br/>
        <img src={img1} /></div>
        <br></br>
        <div className='menu'>
            <Link  className='btnn' to="/"> <img src={dashu} alt=""/> Dashboard</Link>
            <Link  className='btnn' to="/support"><img src={set} alt=""/>Support</Link>
            <Link  className='btnn' to="/plugin"><img src={puzzle} alt=""/>Plugins</Link>
            <Link  className='btnn' to="/help"><img src={help} alt=""/>Help</Link>
        </div>
    </div>
  )
}

export default DashBoard