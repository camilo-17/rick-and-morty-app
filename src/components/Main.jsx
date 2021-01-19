import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '80%',
      height: 'inherit',
    },
});

const Main = (props) => {
    const classes = useStyles();
    const { children } = props;
    return (
        <ImageList cols={3} rowHeight={300} className={classes.root} >
            { children }
        </ImageList>
    )
}

export default Main
