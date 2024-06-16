import React from 'react'
import { UseSelector, useSelector } from 'react-redux'

import Navbar from '../content/Navbar/Navbar'
import Footer from '../content/Footer/Footer'
import RightMenu from '../components/RightMenu/RightMenu'
import TopMenu from '../components/TopMenu/TopMenu'

const Layout = ({ children }) => {
  const isAuthenticated = useSelector(state => state.userStatus.isAuthenticated)

  return (
    <div>
      <Navbar />
      <TopMenu />
      {isAuthenticated && <RightMenu />}
      {children}
      <Footer />
    </div>
  )
}

export default Layout