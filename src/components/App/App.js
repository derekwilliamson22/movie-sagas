import React, { Component } from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieForm from '../MovieForm/MovieForm';

// MATERIAL UI COMPONENTS
import Grid from '@material-ui/core/Container';



// primary page that "hosts" the components
class App extends Component {
  render() {
    return (
      <Router>
        <Grid 
          container
          spacing={4}
          >
            <Grid item className="Header" xs={12}>
              <h1>Movies!</h1>
              <h3>"I didn't go to film school, I went to films." - Quentin Tarantino</h3>
              <Link to="/">Movie Library</Link>
              <Link to="/form">Add a Movie</Link>
            </Grid>
          <Grid
            item
            xs={12}>
              
                <Route exact path="/">
                  <MovieList />
                </Route>
                <Route path="/details/:id">
                  <MovieDetails />
                </Route>
                <Route path="/form">
                  <MovieForm />
                </Route>               
            
          </Grid>
        </Grid>       
      </Router>
    );
  }
}


export default App;
