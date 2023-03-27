import React from 'react'
import "../Stlyes/Grid.css"
import picone from "../Assets/pic1.png"
import pictwo from "../Assets/pic2.png"
import picthree from "../Assets/pic3.jpg"
import picfour from "../Assets/pic4.png"
import useStyles from '../Stlyes/style';
import { Button, TextField } from '@mui/material'


function New() {
  const classes = useStyles();

  return (
    <>
      <div className='grids'>
        <div className='gridsetone'>
          <div class="row" id='one'>
            <div class="column">
              <div class="card">
                <p>
                  <img className={classes.cardIcon} src={picone} />
                  {/* <i class="fa fa-user"></i> */}
                </p>
                <h3>13000+</h3>
                <p className={classes.cardTitle}>Games</p>
              </div>
            </div>

            <div class="column" id='two'>
              <div class="card">
                <img className={classes.cardIcon} src={pictwo} />
                <p><i class="fa fa-check"></i></p>
                <h3>1845+</h3>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className='gridsettwo'>
            <div class="column" id='three'>
              <div class="card">
                <img className={classes.cardIcon} src={picthree} />
                <p><i class="fa fa-smile-o"></i></p>
                <h3>Official Partner</h3>
                <p>E A Sports</p>
              </div>
            </div>
            <div class="column" id='four'>
              <div class="card">
                <img className={classes.cardIcon} src={picfour} />
                <p><i class="fa fa-coffee"></i></p>
                <h3>4K</h3>
                <p>HD Streaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className='about'>
          <div className={classes.head}>
            <h1>Are you looking for professional games support for your games...</h1>
          </div>
        </div>
        <div className={classes.search2}>
          <TextField
            id="search-bar"
            className={classes.text}
            label="Enter your Email here!"
            variant="outlined"
            placeholder="Subscribe..."
            size="small"
          />
          <Button variant="contained" style={{ backgroundColor: "rgb(255 14 138)" }}>Subscribe</Button>
        </div>
      </div>
    </>
  )
}

export default New