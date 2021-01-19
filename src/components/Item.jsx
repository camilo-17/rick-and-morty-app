import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Skeleton from '@material-ui/core/Skeleton';

const useStyles = makeStyles({
    root: {
      width: 500,
      height: 600,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
});

const Item = (props) => {
    const classes = useStyles();
    const { img, alt, author } = props;
    return (
        <React.Fragment>
            {
            img === null ?     
            <ImageListItem>
                <Skeleton variant="rectangular" width={210} height={300} />
            </ImageListItem>
            :
            <Grow 
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <ImageListItem>
                    <img
                        src={img}
                        name ="play"
                        alt={alt}
                    />
                    <ImageListItemBar
                        title={alt}
                        subtitle={author}
                        actionIcon={
                        <IconButton
                            aria-label={`info about ${alt}`}
                            className={classes.icon}
                        >
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                </ImageListItem>
            </Grow>
            }
        </React.Fragment>
    )
}

export default Item
