import React from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from '../components/Header'; 
import Error from '../components/Error';

import View from './View';
import '../assets/styles/App.scss';


function App() {

  return (
    <Container 
      maxWidth="md" 
      style={{ backgroundColor: 'white' , padding: '0px'}} 
      className="App"
    >
        <Router>
            <Header/>
            <Route path = "/rick-and-morty-app" component= { View }/>
            <Route path = "/error" component= { Error }/>            
        </Router>  
    </Container>
  );
}

export default App;
