import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch  } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from '../components/Header'; 
import Error from '../components/Error';
import Footer from '../components/Footer';
import Working from '../components/Working';
import View from './View';
import '../assets/styles/App.scss';
import 'fontsource-roboto';


function App() {

  return (
    <Container 
      id = "container"
      maxWidth="md" 
      style={{ backgroundColor: 'white' , padding: '0px'}} 
      className="App"
    >
        <Router>
            <Header/>
            <Switch>
                <Route path = "/rick-and-morty-app" component= { View }/>
                <Route path = "/error" component= { Error }/>            
                <Route path = "/lugares" component= { Working }/>            
                <Route path = "/episodios" component= { Working }/>            
                <Route path = "/login" component= { Working }/>            
                <Route exact path = "/" component= { View }/>            
                <Redirect to= "/error"/>            
            </Switch>
        </Router>
        <Footer/>
    </Container>
  );
}

export default App;
