import { IconButton, TextField } from '@material-ui/core';
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';
import useStyles from './style';
import coverImage from './coverimage.avif'

function Cover() {
  const classes = useStyles();

  return (
    <div className={classes.container} >
      <div className={classes.imgContainer}>

        <img className={classes.coverimg} src={coverImage}></img>
      </div>
      <div className={classes.centeredText}>
        <h1>Find Our Best Games & Become The Master of It!</h1>
        <p>Discover your passion for gaming with our extensive collection of games. From thrilling action-packed adventures to strategic mind-benders, we have something for everyone...</p>

      </div>
      <div className={classes.search}>    <TextField
        id="search-bar"
        className={classes.text}
        label="Search your games"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
        <Button variant="contained" style={{ backgroundColor: "rgb(255 14 138)" }}>Search</Button>
      </div>
    </div>
  )
}

export default Cover