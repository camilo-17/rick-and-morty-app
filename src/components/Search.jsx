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


const Search = (props) => {
    const { setSearch } = props;
    const classes = useStyles();

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" style={{textAlign: 'center'}} onSubmit={(e) => e.preventDefault()}>
            <TextField type="input" id="search" label="Search..." variant="outlined" style={Styles.text} onChange={onChange} />
        </form>
    )
}

export default Search;
