import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Header/Navbar'



export default function Layout() {
  return (
    <>
      <Navbar  />
        <main>
            <Outlet />
        </main>
    
    </>
  )
}
