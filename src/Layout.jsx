import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div className="">
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
