import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from '../components/Header'; 
import Search from '../components/Search';
import Main from '../components/Main';
import Item from '../components/Item';
import Error from '../components/Error';
import ArrowDownwardOutlinedIcon  from '@material-ui/icons//ArrowDownwardOutlined';
import Fab from '@material-ui/core/Fab';
import Snackbar from '@material-ui/core/Snackbar';

import '../assets/styles/App.scss';

const styles = {
    list_data: {
        display: 'flex' , 
        justifyContent: 'center', 
        flexDirection: 'column',
        alignItems: 'center'
    }
};

function App() {

  const initData = [...Array(10)].map((_,i) => ++i+"");
  const [open, setOpen]               = useState(false);
  const [ data, setData ]             = useState(initData);
  const [error , setError ]           = useState({status: false, limit: false, msg: ''});
  const [ counter, setCounter ]       = useState(1);
  const [numberPages, setNumberPages] = useState(2);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {    
    try {
        if( numberPages <= counter ) {
            setOpen(true);
            return;
        }
        
        fetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
        .then((response) => response.json())
        .then((dataResults) => {
            let dataPut = dataResults.results;
            setNumberPages(dataResults.pages);
            // setNumberPages(4);
            if(data.length !== 10) {
            dataPut = data.concat(dataPut);
            }
            setData(dataPut);
        })
        .catch((e) => {
            setError({status: true, limit: false, msg: 'Cannot get data'});
        })       
    } catch (error) {
      setError({status: true, limit: false, msg: 'Cannot get data'});
    }
  }, [counter]);
  

  return (
    <Container 
      maxWidth="md" 
      style={{ backgroundColor: 'white' , padding: '0px'}} 
      className="App"
    >
        <Router>
            <Header/>
            { error.status === false ? 
            <div>
                <Search/>
                <div style={styles.list_data} >
                    <Main>
                        {data.map((item, index) => (
                            <Item
                                key={ item.hasOwnProperty('id') ? item.id : index}
                                id={  item.hasOwnProperty('id') ? item.id : index }
                                img={ item.hasOwnProperty('image') ? item.image : null }
                                alt={ item.hasOwnProperty('name') ? item.name : null  }
                                author= {item.species || null}
                            />
                        )) 
                        }
                    </Main>
                    <Fab style = {{marginBottom: '5px'}} color="primary" aria-label="more" onClick= {() => setCounter(counter + 1)}>
                        <ArrowDownwardOutlinedIcon fontSize="large" />
                    </Fab>
                    <Snackbar 
                        open={open} 
                        autoHideDuration={6000} 
                        onClose={handleClose} 
                        message="No hay mas personajes!"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                    </Snackbar>
                </div>
            </div>
            : <Error/>}
        </Router>  
    </Container>
  );
}

export default App;
