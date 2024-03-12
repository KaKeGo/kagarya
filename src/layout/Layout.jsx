import React from 'react'
import Navbar from '../content/Navbar/Navbar'
import Footer from '../content/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout