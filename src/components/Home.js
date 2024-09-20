import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='row'>
        <div className="col-12">
        <NavBar/>
        </div>
        <div className="col-12">
            <Outlet/>
        </div>
    </div>
  )
}

export default Home
