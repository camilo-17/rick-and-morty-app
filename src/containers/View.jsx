import React from 'react';
import { useHistory  } from "react-router-dom";
import Search from '../components/Search';
import Main from '../components/Main';
import Item from '../components/Item';
import Fab from '@material-ui/core/Fab';
import Snackbar from '@material-ui/core/Snackbar';
import ArrowDownwardOutlinedIcon  from '@material-ui/icons//ArrowDownwardOutlined';
import Controller from '../hooks/Controller';
import '../assets/styles/View.scss';

const styles = {
    list_data: {
        display: 'flex' , 
        justifyContent: 'flex-start', 
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '70vh'
    }
};

const View = () => {

    const { open, setOpen, data, error , counter, setCounter, search, setSearch } = Controller();  

    const history = useHistory();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const goToErrorPage = () => {
        history.push('/error');
    } 

   return (
        <div className="images-container" >
            <Search setSearch = {setSearch} />
            { error.status !== true ? 
            <div style={styles.list_data} >
                <Main>
                    {data.length !== 0 && data.map((item, index) => (
                        <Item
                            key={ item.hasOwnProperty('id') ? item.id : index}
                            id={  item.hasOwnProperty('id') ? item.id : index }
                            img={ item.hasOwnProperty('image') ? item.image : null }
                            alt={ item.hasOwnProperty('name') ? item.name : null  }
                            author= {item.species || null}
                            data={ item !== undefined ? item : null }
                        />
                    )) 
                    }
                </Main>
                {   search === '' &&
                    <Fab style = {{marginBottom: '5px'}} color="primary" aria-label="more" onClick= {() => setCounter(counter + 1)}>
                        <ArrowDownwardOutlinedIcon fontSize="large" />
                    </Fab>
                }
                <Snackbar 
                    open={open.show} 
                    autoHideDuration={6000} 
                    onClose={handleClose} 
                    message= {open.msg}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                </Snackbar>
            </div>
            :  goToErrorPage()    
            }
        </div>
    )
}

export default View
