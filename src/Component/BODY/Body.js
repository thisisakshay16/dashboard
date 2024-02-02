import React from 'react'
import LineChart from '../Graph/LineGraph'
import Pie from '../Piechart/Pie'
import "./body.css"
import TableComponent from '../Table/TableComponent'
import Nav from './Nav'
import Profile from '../Profile/Profile'


function Body() {
  return (
    <div className='body'>
       
        <div className='nav'><Nav/></div>
        <div className='d-flex ps-4'>
          <div className='p-2'>
          <LineChart />
          </div>
          <div className='p-2'>
          <Pie/>
          </div>
        </div>

        <div className='d-flex ps-4'>
          <div className='p-2'>
          <TableComponent/>
          </div>
          <div className='p-2'>
          <Profile />
          </div>
        </div>
    </div>
  )
}

export default Body