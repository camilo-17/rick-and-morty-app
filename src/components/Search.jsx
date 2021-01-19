import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 200,
        textAlign: 'center'
      },
    }
}));

const Styles = {
    text: {
        width: '80%',
        borderRadius: '10px'
    }
}

const onChange = (e) => {
    console.log(e.target.value);
    if(e.target.value === 'juli1234') {
        alert(`Esto fue posible gracias a ti :D`);
    }
}

const Search = () => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" style={{textAlign: 'center'}}>
            <TextField id="outlined-basic" label="Search..." variant="outlined" style={Styles.text} onChange={onChange} />
        </form>
    )
}

export default Search;
