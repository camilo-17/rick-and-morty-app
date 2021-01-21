import React, { useState } from 'react';
import { useHistory  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/static/logo.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 160,
    },
}));

const Header = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        history.push(`/${e.target.id}`);
    };

    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu" 
                onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem id="rick-and-morty-app" onClick={handleClose}>Personajes</MenuItem>
                <MenuItem id="lugares" onClick={handleClose}>Lugares</MenuItem>
                <MenuItem id="episodios" onClick={handleClose}>Episodios</MenuItem>
            </Menu>
            <div className={classes.title}>
                <img src={logo} alt="logo"  className={classes.logo}/>
            </div>
            <Button id="login" color="inherit" onClick={handleClose}> Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header;
