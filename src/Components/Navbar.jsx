import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../Stlyes/style';
import navLogo from '../Assets/navlogo.png';

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000', boxShadow: '28px 2px 4px -1px rgba(0,0,0,0.0)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <div style={{ height: '80px' }}>
            <img className={classes.img} src={navLogo} />
          </div>
          <div className={classes.navWrap}>
            <div className={classes.navElement}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "revert-layer" }}>
                HOME
              </Typography>
            </div>
            <div className={classes.navElement}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "revert-layer" }}>
                GAMES
              </Typography>
            </div>
            <div className={classes.navElement}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "revert-layer" }}>
                STATITICS
              </Typography>
            </div>
            <div className={classes.navElement}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "revert-layer" }}>
                LEADERBOARD
              </Typography>
            </div>
            <div className={classes.navElement}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "revert-layer" }}>
                CHAT
              </Typography>
            </div>
            <div className={classes.navElement}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "revert-layer" }}>
                BLOG
              </Typography>
            </div>

            <Button variant="contained" style={{ backgroundColor: "rgb(255 14 138)", marginLeft: '140px' }}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
