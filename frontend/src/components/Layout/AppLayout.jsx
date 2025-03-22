import React from 'react'
import { NavBar } from '../shared/NavBar.jsx'
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'

export const AppLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}
