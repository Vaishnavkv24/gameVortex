import React from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from '../Containers/style';

function CustomGrid() {
    const classes = useStyles();

    return (
        <div>        <Grid item xs>
            <Paper className={classes.paper}>
                xs
                <br />
                xs
                <br />
                xs
                <br />
                <br />
                xs
            </Paper>
            <Paper className={classes.paper} >
                xs
                <br />
                xs
                <br />
                xs
                <br />
                <br />
                xs
            </Paper>
        </Grid></div>
    )
}

export default CustomGrid