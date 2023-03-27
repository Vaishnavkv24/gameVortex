import React from 'react'
import CustomGrid from './CustomGrid'
import Cover from './Cover'
import Navbar from './Navbar'
import { Grid } from '@material-ui/core'
import New from './Counters'
import Footer from './Footer'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Cover />
        <New />
\     {/* <CustomGrid /> */}
<Footer />
    </div>
  )
}

export default Homepage