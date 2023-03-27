import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  navWrap: {
    display: 'flex',
    marginLeft: '300px'
  },
  navElement: {
    padding: '0px 20px',
    fontFamily: "monospace",
    '&:hover': {
      color: "#e31bdc",
      borderBottom: "3px solid #e31bdc"
    },
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  loginbtn: {
    background: "#e31bdc",
    color: '#fff',
    height: '30px',
    marginLeft1: '140px'
  },
  coverimg: {
    width: '75%',
    height: '100%',
    objectFit: 'cover',
    marginTop: '10px',
    borderRadius: '25px'
  },
  container: {
    position: 'relative'
  },
  centeredText: {
    position: 'absolute',
    top: '30%',
    left: '40%',
    color: '#fff',
    width: '20%',
    fontFamily: 'math'
  },
  searchContainer: {
    float: 'right',
    padding: '6px',
    marginTop: '8px',
    marginRight: '16px',
    background: '#ddd',
    fontSize: '17px',
    border: 'none',
    cursor: 'pointer',
  },
  imgContainer: {

  },
  search: {
    display: 'flex',
    position: 'absolute',
    top: '71%',
    left: '40%',
  },
  text: {
    backgroundColor: '#fff'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flex: 1,
    backgroundColor: 'red',
    width: "20%"
  },
  head: {
    width: '70%',
    marginTop:'77px'
  },
  head1: {
    width: '44%',
    color: '#6e5e5e'
  },
  cardTitle: {
    color: "#6e5e5e"
  },
  points: {
    display: 'flex'
  },
  icons: {
    height: '33px',
    width: '45px',
    marginTop: '5px'
  },
  pointsWrap: {
    marginTop: '25px'
  },
  cardIcon: {
    height: '85px'
  },
  
  search2: {
    display: 'flex',
    position: 'absolute',
    top: '35%',
    left: '60%',
  },

}))
