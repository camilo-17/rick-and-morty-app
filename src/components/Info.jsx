import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '../components/List';
import '../assets/styles/Info.scss';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Info = (props) => {
    const { onClose, open, item } = props;

    const handleClose = () => {
      onClose(item);
    };
  
    return (
        <Dialog 
          onClose={handleClose} 
          aria-labelledby="simple-dialog-title" 
          open={open}
          TransitionComponent={Transition}
        >
            <DialogTitle id="simple-dialog-title">{item.name}</DialogTitle>
          <div className="info-container">
            <List item={item}/>
            <img src={item ? item.image : ''} alt=""/>
          </div>
        </Dialog>
    )
}

export default Info
