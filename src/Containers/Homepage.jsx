import React from 'react'
import Cover from '../Components/Cover'
import Navbar from '../Components/Navbar'
import { Grid } from '@material-ui/core'
import New from '../Components/Counters'
import Footer from '../Components/Footer'

function Homepage() {
  return (
    <div>
      <Navbar />
      <Cover />
      <New />
      <Footer />
    </div>
  )
}

export default Homepage