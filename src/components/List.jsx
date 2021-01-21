import React from 'react'
import {List as ListContainer} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import WcIcon from '@material-ui/icons/Wc';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const List = (props) => {
    const {item} = props;
    const classes = useStyles();
    return (
        <ListContainer className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ChromeReaderModeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="status" secondary={item.status} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WcIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="gender" secondary={item.gender} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="origin" secondary={item.origin.name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonPinCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="location" secondary={item.location.name} />
        </ListItem>
      </ListContainer>
    )
}

export default List
