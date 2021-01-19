import React from 'react'
import ErrorIcon from '../assets/static/404.png';
import Typography from '@material-ui/core/Typography';
import '../assets/styles/Error.scss';
const Error = () => {
    return (
        <div className="error-container">
            <img src={ ErrorIcon } width="50%" alt="Error 404"/>
            <div className="error-description">
                <Typography variant="h2" component="h2">
                    404 Not found
                </Typography>
                <Typography variant="h4" component="h2">
                    Please try later
                </Typography>
            </div>
        </div>
    )
}

export default Error
